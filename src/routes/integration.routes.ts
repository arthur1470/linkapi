import dotenv from "dotenv";
import { Router } from "express";

import { CreateSaleIntegrationController } from "../modules/sales/useCases/createSaleIntegration/CreateSaleIntegrationController";
import { GetAllDatabaseSalesController } from "../modules/sales/useCases/getAllSalesFromDatabase/GetAllDatabaseSalesController";

dotenv.config();

const integrationRoutes = Router();

const createSaleIntegrationController = new CreateSaleIntegrationController();
const getAllDatabaseSalesController = new GetAllDatabaseSalesController();

integrationRoutes.get("/", getAllDatabaseSalesController.handle);
integrationRoutes.post("/", createSaleIntegrationController.handle);

export { integrationRoutes };
