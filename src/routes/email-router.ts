import { Request, Response, Router } from "express";
import nodemailer from "nodemailer";

export const emailRouter = Router();

emailRouter

    .post("/send",

        async (req: Request, res: Response) => {

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "66c2097e93aa55", // username из Mailtrap
            pass: "15b615951a856c", // пароль из Mailtrap
        },
    });

    try {
        const info = await transporter.sendMail({
            from: '"Test App" <test@app.com>',
            to: req.body.email, // кому отправить
            subject: req.body.subject,
            text: req.body.message,
        });

        res.json({ message: "Email sent", info });
    } catch (err) {
        res.status(500).json({ error: "Failed to send email", details: err });
    }
});
