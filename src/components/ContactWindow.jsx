"use client";
import TerminalPrompt from './TerminalPrompt';
import { sendEmail } from "@/lib/resend";
import { FormEvent, useState } from "react";

export default function ContactWindow() {
  const [status, setStatus] = useState(null); // null, 'success', 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.subject.trim() && formData.message.trim();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (status) setStatus(null);
  };

  async function send(event) {
    event.preventDefault();
    
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    setStatus(null);
    
    const formDataObj = new FormData(event.target);
    const data = {
      name: formDataObj.get('name'),
      email: formDataObj.get('email'),
      subject: formDataObj.get('subject'),
      message: formDataObj.get('message'),
    };

    const result = await sendEmail(data);
    
    if (result === 1) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      event.target.reset();
    } else {
      setStatus('error');
    }
    
    setIsSubmitting(false);
  }

  return (
    <div id="contact-me" className="glass p-4 rounded-xl w-full max-w-5xl min-w-[300px] shadow-lg font-mono text-white min-h-[90vh] md:min-h-[85vh] md:min-w-[80vw] sm:min-h-[80vh]">
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
            <input 
              className="border-b-2 w-[7em] md:w-[30em] lg:w-[30vw]" 
              type="text" 
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            "
          </div>
        </label>
        <label className="flex items-center md:justify-start md:gap-5 justify-between">
          <span className="text-nowrap">--email: </span>
          <div className="text-nowrap">
            "
            <input 
              className="border-b-2 w-[7em] md:w-[30em] lg:w-[30vw]" 
              type="email" 
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            "
          </div>
        </label>
        <label className="flex items-center md:justify-start md:gap-5 justify-between">
          <span className="text-nowrap">--subject: </span>
          <div className="text-nowrap">
            "
            <input 
              className="border-b-2 w-[7em] md:w-[30em] lg:w-[30vw]" 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
            />
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
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
            "
          </div>
        </label>
        <div>
          <button 
            className={`bg-white text-black px-2 py-1 rounded-sm border mt-2 ${
              !isFormValid || isSubmitting
                ? 'opacity-50 cursor-not-allowed' 
                : ''
            }`}
            type="submit"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          
          {/* Status Message */}
          {status === 'success' && (
            <p className="text-green-500 mt-5">
              Successfully sent!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 mt-5">
              Failed to send! Sorry :(
            </p>
          )}
        </div>
      </form>
    </div>
  );
}