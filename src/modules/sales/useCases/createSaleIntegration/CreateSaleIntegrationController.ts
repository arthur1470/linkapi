import { Request, Response } from "express";
import { container } from "tsyringe";

import { IResponse } from "../../util/http/response";
import { CreateSaleIntegrationUseCase } from "./CreateSaleIntegrationUseCase";

export class CreateSaleIntegrationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createSaleIntegrationUseCase = container.resolve(
            CreateSaleIntegrationUseCase
        );

        try {
            const sales = await createSaleIntegrationUseCase.execute();

            const apiResponse: IResponse = {
                code: 200,
                type: "success",
                message: "Integration executed successfully",
                data: sales,
            };
            return response.status(200).json(apiResponse);
        } catch (error) {
            const apiResponse: IResponse = {
                code: 500,
                type: "error",
                message: "An error has occurred",
                error_message: error.message,
                data: [],
            };
            return response.status(500).json(apiResponse);
        }
    }
}
