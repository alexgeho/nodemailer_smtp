import { Request, Response, Router } from "express";
import {emailAdapter} from "../adapter/email-adapter";

export const emailRouter = Router();

emailRouter

    .post("/send",

        async (req: Request, res: Response) => {

        await emailAdapter.sendEmail(req.body.subject, req.body.message, req.body.email )


});
