import nodemailer from "nodemailer";
import {emailAdapter} from "../adapter/email-adapter";

export const businessService = {
    async doOperaton( ) {
        // save to repo
        // get user from repo
        await emailAdapter.sendEmail("user.email", "password recovery", "<div>message</div>")

        //subject, message, email


    }
};
