import { container } from "tsyringe";

import { SalesRepository } from "../../modules/sales/repositories/implementation/SalesRepository";
import { ISalesRepository } from "../../modules/sales/repositories/ISalesRepository";

container.registerSingleton<ISalesRepository>(
    "SalesRepository",
    SalesRepository
);
