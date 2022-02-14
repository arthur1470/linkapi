import { injectable } from "tsyringe";
import { getMongoRepository, MongoRepository } from "typeorm";

import { Sale } from "../../entities/Sale";
import { ISalesRepository } from "../ISalesRepository";

@injectable()
export class SalesRepository implements ISalesRepository {
    private repository: MongoRepository<Sale>;

    constructor() {
        this.repository = getMongoRepository(Sale);
    }

    async saveMany(sales: Sale[]): Promise<void> {
        sales.forEach((sale) => {
            this.repository.findOneAndUpdate(
                { date: sale.date },
                { $set: sale },
                {
                    upsert: true,
                }
            );
        });
    }

    async list(): Promise<Sale[]> {
        const sales = await this.repository.find({ order: { date: "DESC" } });
        return sales;
    }
}
