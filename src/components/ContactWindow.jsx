"use client"

import TerminalPrompt from './TerminalPrompt';
import { sendEmail } from "@/lib/resend";
import { FormEvent } from "react";

export default function ContactWindow() {

    async function send(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        const status = await sendEmail(data);

        if (status === 1) {
            alert("Email sent successfully!");
        } else {
            alert("Failed to send email. Please try again later.");
        }

    }

    return (
        <div className="glass p-4 rounded-xl w-full max-w-5xl min-w-[300px] shadow-lg font-mono text-white min-h-[90vh]  md:min-h-[85vh] md:min-w-[80vw] sm:min-h-[80vh]">

            <div className="w-full">
                <TerminalPrompt path="~/Contact-Me/" size="4xl" />
            </div>

            <p className="text-white text-md lg:text-xl p-4">
                <span className="text-green-500">❯ </span> portfolio --get contact-form
            </p>

            <form onSubmit={send} className="flex flex-col gap-4 text-md md:text-xl lg:text-xl min-w-full max-w-3xs px-4">

                <label className="flex items-center md:justify-start md:gap-5 justify-between">
                    <span className="text-nowrap">--name: </span>
                    <div className="text-nowrap">
                        "
                        <input className="border-b-2 w-[7em] md:w-[30em] lg:w-[30vw]" type="text" name="name" />
                        "
                    </div>
                </label>

                <label className="flex items-center md:justify-start md:gap-5 justify-between">
                    <span className="text-nowrap">--email: </span>
                    <div className="text-nowrap">
                        "
                        <input className="border-b-2 w-[7em] md:w-[30em] lg:w-[30vw]" type="text" name="email" />
                        "
                    </div>
                </label>

                <label className="flex items-center md:justify-start md:gap-5 justify-between">
                    <span className="text-nowrap">--subject: </span>
                    <div className="text-nowrap">
                        "
                        <input className="border-b-2 w-[7em] md:w-[30em] lg:w-[30vw]" type="text" name="subject" />
                        "
                    </div>
                </label>

                <label className="flex items-start md:justify-start justify-between md:gap-5">
                    <span className="text-nowrap">--message: </span>

                    <div className="text-nowrap flex items-start">
                        "
                        <textarea
                            className="border-b-2 resize-none overflow-hidden w-[7em] md:w-[30em] lg:w-[30vw]"
                            name="message"
                            rows={1}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }}
                        />
                        "
                    </div>


                    
                </label>

                <div>
                <button className="bg-white text-black px-2 py-1 rounded-sm border " type='submit'>Send</button>

                </div>
            </form>

        </div>
    )
}