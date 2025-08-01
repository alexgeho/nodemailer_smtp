import {Request, Response, Router} from "express";
import {emailAdapter} from "../adapter/email-adapter";
import {businessService} from "../domain/business-service";

export const emailRouter = Router();

emailRouter

    .post("/send", async (req: Request, res: Response) => {

             await businessService.doOperaton()

            res.send(200);


        });
