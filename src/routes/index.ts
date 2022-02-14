import { Router } from "express";

import { integrationRoutes } from "./integration.routes";

const router = Router();

router.use("/integration", integrationRoutes);

export { router };
