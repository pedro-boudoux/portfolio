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
        <div className="glass p-4 rounded-xl w-full max-w-5xl min-w-[300px] shadow-lg font-mono text-white text-xl min-h-[90vh]  md:min-h-[85vh] md:min-w-[80vw] sm:min-h-[80vh]">

            <div className="w-full">
                <TerminalPrompt path="~/Contact-Me/" size="4xl" />
            </div>

            <p className="text-white">
                <span className="text-green-500">❯ </span> portfolio --get contact-form
            </p>

            <form onSubmit={send} className="flex flex-col gap-4 mt-4 text-xl">

                <label>
                    --name: "
                    <input className="border-b-2 focus:border-white focus:border-t-2 focus:border-l-2 focus:border-r-2" type="text" name="name" />
                    "
                </label>

                <label>
                    --email: "
                    <input className="border-b-2" type="text" name="email" />
                    "
                </label>

                <label>
                    --subject: "
                    <input className="border-b-2" type="text" name="subject" />
                    "
                </label>

                <label className="flex">
                    --message: "

                    <div>
                        <textarea
                            className="border-b-2 resize-none overflow-hidden font-sm"
                            name="message"
                            rows={1}
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }}
                        />
                    </div>


                    "
                </label>

                <div>
                <button className="bg-white text-black px-2 py-1 rounded-sm border " type='submit'>Send</button>

                </div>
            </form>

        </div>
    )
}