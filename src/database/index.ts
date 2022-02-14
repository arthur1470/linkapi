import dotenv from "dotenv";
import { createConnection } from "typeorm";

import { Deal } from "../modules/sales/entities/Deal";
import { Sale } from "../modules/sales/entities/Sale";

dotenv.config();

createConnection({
    type: "mongodb",
    url: process.env.DATABASE_URL,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: true,
    entities: [Sale, Deal],
});
