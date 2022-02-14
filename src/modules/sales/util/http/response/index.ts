import { Sale } from "../../../entities/Sale";

export interface IResponse {
    code: number;
    type: string;
    message: string;
    error_message?: string;
    data: Sale[];
}
