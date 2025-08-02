import { emailManager } from "../managers/email-manager";

export const businessService = {

    async sendPasswordRecoveryEmail(user: { email: string }) {
        const recoveryCode
            = await emailManager.sendPasswordRecoveryMessage(user.email);
        const recoveryLink = `https://your-app.com/reset-password?code=${recoveryCode}`;
        return {
            message: "Recovery email sent",
            recoveryLink,
            email: user.email
        };
    },

    async sendCustomEmail(user: { email: string; subject: string; message: string }) {
        await emailManager.sendGeneralEmail(user);
    }
};