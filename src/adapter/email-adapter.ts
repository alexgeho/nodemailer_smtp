import nodemailer from "nodemailer";

export const emailAdapter = {
    async sendEmail(subject: string, message: string, email: string) {
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "66c2097e93aa55",
                pass: "15b615951a856c",
            },
        });

      let info = await transporter.sendMail({
                from: '"Alexander Gerhard" <alex@itgeho.com>',
                to: email,
                subject: subject,
                html: message,
            });

          return info;

    }
};
