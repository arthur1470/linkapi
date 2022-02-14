import { inject, injectable } from "tsyringe";

import { Sale } from "../../entities/Sale";
import { ISalesRepository } from "../../repositories/ISalesRepository";

@injectable()
export class GetAllDatabaseSalesUseCase {
    constructor(
        @inject("SalesRepository") private salesRepository: ISalesRepository
    ) {}

    async execute(): Promise<Sale[]> {
        const sales = await this.salesRepository.list();
        return sales;
    }
}
