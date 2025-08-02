import { emailAdapter } from "../adapter/email-adapter";

export const emailManager = {

    async sendPasswordRecoveryMessage(email: string) {
        const recoveryCode
            = Math.random().toString(36).substring(2, 8).toUpperCase();
        const subject = "Password Recovery";
        const message = `<div>Your recovery code: <strong>${recoveryCode}</strong></div>`;
        await emailAdapter.sendEmail(email, subject, message);
        // TODO: Save recoveryCode to DB or memory associated with email
    },

    async sendGeneralEmail(user: { email: string, subject: string, message: string }) {
        await emailAdapter.sendEmail(user.email, user.subject, user.message);
    }
};