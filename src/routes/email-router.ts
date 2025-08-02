import { Request, Response, Router } from "express";
import { businessService } from "../domain/business-service";

export const emailRouter = Router();

emailRouter.post("/send", async (req: Request, res: Response) => {
    await businessService.sendCustomEmail(req.body);
    res.sendStatus(200);
});

emailRouter.post("/recover", async (req: Request, res: Response) => {
    const result =
        await businessService.sendPasswordRecoveryEmail(req.body);
    console.log("RESPONSE:", result);
    res.status(200).json(result);
});