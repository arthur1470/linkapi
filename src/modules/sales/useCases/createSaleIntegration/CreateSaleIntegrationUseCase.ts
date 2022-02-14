import axios from "axios";
import { inject, injectable } from "tsyringe";

import { Deal } from "../../entities/Deal";
import { Sale } from "../../entities/Sale";
import { ISalesRepository } from "../../repositories/ISalesRepository";
import convertDealToXmlContent from "../../util/bling/convertDealToXmlContent";

@injectable()
export class CreateSaleIntegrationUseCase {
    constructor(
        @inject("SalesRepository") private salesRepository: ISalesRepository
    ) {}

    async execute(): Promise<Sale[]> {
        const deals = await this.getDealsFromPipeDriveApi();

        await this.sendDealsAsOrdersToBlingApi(deals);

        const sales = this.getSalesGroupedByDate(deals);

        await this.salesRepository.saveMany(sales);

        return sales;
    }

    async getDealsFromPipeDriveApi(): Promise<Deal[]> {
        const pipedriveUrlWithKey = `${process.env.PIPEDRIVE_DEALS_API_URL}&${process.env.PIPEDRIVE_API_KEY}`;
        const { data } = await axios.get(pipedriveUrlWithKey);

        const deals: Deal[] = data.data.map((deal) => {
            return {
                dealId: deal.id,
                title: deal.title,
                client: deal.person_name,
                seller: deal.owner_name,
                companyName: deal.org_name,

                wonDate: new Date(deal.first_won_time).toLocaleDateString(
                    "pt-BR",
                    {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    }
                ),

                value: deal.value,

                clientNumber: deal.person_id.phone.find(
                    (phone) => phone.primary
                ).value,

                clientEmail: deal.person_id.email.find((email) => email.primary)
                    .value,
            };
        });

        return deals;
    }

    async sendDealsAsOrdersToBlingApi(deals: Deal[]): Promise<void> {
        const blingUrlWithKey = `${process.env.BLING_API_URL}?${process.env.BLING_API_KEY}`;

        // BLING TÊM UM LIMITE DE 3 TRANSAÇÕES POR SEGUNDO
        const BLING_REQUEST_TIMEOUT_MS = 400;

        deals.forEach((deal, index) => {
            setTimeout(async () => {
                const dealXml = convertDealToXmlContent(deal);
                await axios.post(`${blingUrlWithKey}&xml=${dealXml}`);
            }, BLING_REQUEST_TIMEOUT_MS * index);
        });
    }

    getSalesGroupedByDate(deals: Deal[]): Sale[] {
        const sales: Sale[] = [];

        deals.forEach((deal) => {
            const saleExists = sales.find((sale) => sale.date === deal.wonDate);
            if (saleExists) {
                saleExists.deals.push(deal);
                saleExists.totalValue = saleExists.deals.reduce((acc, deal) => {
                    return acc + deal.value;
                }, 0);
            } else {
                const sale: Sale = {
                    date: deal.wonDate,
                    deals: [deal],
                    totalValue: deal.value,
                };
                sales.push(sale);
            }
        });

        return sales;
    }
}
