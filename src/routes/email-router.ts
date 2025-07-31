import { Request, Response, Router } from 'express';

export const emailRouter = Router({});

emailRouter.post('/send', async (req: Request, res: Response) => {
    res.send({ message: 'message was sent' });
});
