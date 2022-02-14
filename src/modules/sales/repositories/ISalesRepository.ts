import { Sale } from "../entities/Sale";

interface ISalesRepository {
    saveMany(sales: Sale[]): Promise<void>;
    list(): Promise<Sale[]>;
}

export { ISalesRepository };
