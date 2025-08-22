"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL;

export const sendEmail = async (data) => {
  try {
    await resend.emails.send({
      to: myEmail,
      from: `${data.email} <onboarding@resend.dev>`,
      subject: data.subject,
      html: `Message from ${data.name}:<br /><br />${data.message.replace(
        /\n/g,
        "<br />"
      )}`,
    });

    return 1;
  } catch (error) {
    console.error("ERROR SENDING EMAIL:", error);
    return 0;
  }
};
