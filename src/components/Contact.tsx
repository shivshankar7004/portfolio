import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mj7mol4",
        "template_znimdxp",
        form.current!,
        "D0kJS0J7sijaoYi9O"
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          toggleModal();
        },
        // (error) => {
        //   console.log("FAILED...", error.text);
        // }
      );
  };

  return (
    <section id="contact" className="p-8 bg-gray-100 dark:bg-gray-700 dark:text-white">
      <div className="grid place-items-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="m-4 text-center">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div className="grid place-items-center p-7 w-auto text-black">
        <form
          className="space-y-4 p-3 ms-10 w-96"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-2 border rounded"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 border rounded"
            name="user_email"
            required
          />
          <textarea
            placeholder="Enter Your Message"
            className="w-full p-2 border rounded dark:text-black"
            name="message"
            required
          ></textarea>
          {modal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-green-500">
                  Your mail has been submitted!
                </h2>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
