import nodemailer from "nodemailer";
import {emailAdapter} from "../adapter/email-adapter";

export const emailManager = {

    async senEmailRecoveryMessage (user: any, ) {
        // save to repo
        // get user from repo
        await emailAdapter.sendEmail("user.email", "password recovery", "<div>`${user.recoveryCode} message`</div>")

        //subject, message, email


    }
};
