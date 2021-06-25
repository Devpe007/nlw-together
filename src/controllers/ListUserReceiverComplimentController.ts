import { Request, Response } from "express";

import { ListUserReceiveComplimentService } from "../services/ListUserReceiveComplimentService";


class ListUserReceiverComplimentController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserReceiveComplimentService = new ListUserReceiveComplimentService

        const compliments = await listUserReceiveComplimentService.execute(user_id);

        return compliments;
    };
};

export { ListUserReceiverComplimentController };