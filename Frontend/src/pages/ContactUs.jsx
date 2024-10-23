import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
   
          toast.success('Message sent successfully!')
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message, please try again later.');
      
        }
      );
  };

  return (
    <div className="grid md:grid-cols-3 items-start gap-4 max-md:gap-12 max-w-6xl mx-auto py-6 bg-white font-sans">
      {/* Contact Information Section */}
      <div className="px-4">
        <h2 className="text-gray-800 text-2xl font-semibold">Contact Information</h2>
        <div className="space-y-8 mt-8">
          {/* Chat to Us */}
          <div className="flex">
            <div className="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 32 32">
                <path d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z" />
                <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-gray-800 text-base font-semibold">Chat to us</h4>
              <p className="text-xs mt-1">Chat with our team to help.</p>
              <p className="text-sm mt-4">sparepartshub2@gmail.com</p>
            </div>
          </div>
          {/* Visit Us */}
          <div className="flex">
            <div className="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 512 512">
                <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715z" />
                <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-gray-800 text-base font-semibold">Visit us</h4>
              <p className="text-xs mt-1">Visit our office HQ.</p>
              <p className="text-sm mt-4">123 Street 256 House</p>
            </div>
          </div>
          {/* Call Us */}
          <div className="flex">
            <div className="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 473.806 473.806">
                <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zM217.2 96.3c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6z" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-gray-800 text-base font-semibold">Call us</h4>
              <p className="text-xs mt-1">Monday to Friday.</p>
              <p className="text-sm mt-4">+237 671393870</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="px-4 md:col-span-2 mt-12 md:mt-0 space-y-4">
        <div>
          <label htmlFor="name" className="text-sm text-gray-500">Name</label>
          <input type="text" name="user_name" id="name" className="mt-2 w-full px-4 py-3 rounded text-sm bg-gray-100 border-gray-200" placeholder="John Doe" required />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-gray-500">Email</label>
          <input type="email" name="user_email" id="email" className="mt-2 w-full px-4 py-3 rounded text-sm bg-gray-100 border-gray-200" placeholder="example@email.com" required />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-gray-500">Message</label>
          <textarea name="message" id="message" className="mt-2 w-full px-4 py-3 rounded text-sm bg-gray-100 border-gray-200" placeholder="Write your message here..." rows="6" required></textarea>
        </div>
        <button type="submit" className="w-full px-6 py-3 mt-4 rounded bg-gray-800 text-white text-sm hover:bg-gray-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
