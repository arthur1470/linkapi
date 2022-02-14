import { Request, Response } from "express";
import { container } from "tsyringe";

import { IResponse } from "../../util/http/response";
import { GetAllDatabaseSalesUseCase } from "./GetAllDatabaseSalesUseCase";

export class GetAllDatabaseSalesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllDatabaseSalesUseCase = container.resolve(
            GetAllDatabaseSalesUseCase
        );

        try {
            const sales = await getAllDatabaseSalesUseCase.execute();

            const apiResponse: IResponse = {
                code: 200,
                type: "success",
                message: "The query executed successfully",
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
