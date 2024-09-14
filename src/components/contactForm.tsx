"use client";
import { useState } from "react";
import Loader from "@/components/loaderSmall";
import emailjs from "@emailjs/browser";

interface ContactProps {
  title: string;
  placeholder1: string;
  placeholder2: string;
  placeholder3: string;
  placeholder4: string;
  button: string;
  button2: string;
  locale: string;
}

const ContactForm = (props: ContactProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    setIsSending(true);

    const templateParams = {
      name,
      phone,
      mail: email,
      message,
    };

    emailjs
      .send("service_xq5rcjn", "template_tkpnmfk", templateParams, {
        publicKey: "ijsqzAvFSaLr5K0FH",
      })
      .then(
        (response) => {
          setIsSent(true);
          setIsSending(false);
          setTimeout(() => {
            setIsSent(false); // Set the isSent state to false after 3 seconds
            const form = event.target as HTMLFormElement;
            form.reset(); // Reset the form
            setName(""); // Reset the name state
            setPhone(""); // Reset the phone state
            setEmail(""); // Reset the email state
            setMessage(""); // Reset the message state
          }, 3000);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <>
      {/* Form section */}
      <form
        onSubmit={sendMessage}
        className="h-full flex flex-col justify-center items-start"
      >
        <h1 className="w-full font-bold text-4xl text-center mb-14">
          {props.title}
        </h1>
        <input
          type="text"
          placeholder={props.placeholder1}
          className="border border-gray-300 drop-shadow-md md:drop-shadow-none rounded-md px-4 py-3 mb-4 w-full"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder={props.placeholder2}
          className={` ${
            props.locale === "ar" ? "text-right" : ""
          } border border-gray-300 drop-shadow-md md:drop-shadow-none rounded-md px-4 py-3 mb-4 w-full`}
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder={props.placeholder3}
          className="border border-gray-300 drop-shadow-md md:drop-shadow-none rounded-md px-4 py-3 mb-4 w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder={props.placeholder4}
          className="border border-gray-300 drop-shadow-md md:drop-shadow-none rounded-md px-4 py-3 mb-4 w-full"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {!isSent && (
          <button
            type="submit"
            className="border border-gray-300 drop-shadow-sm bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-md w-full min-h-12 flex justify-center items-center"
          >
            {isSending ? <Loader /> : props.button}
          </button>
        )}
        {isSent && (
          <p className="bg-green-500 text-center text-white font-bold py-3 px-4 rounded-md w-full">
            {props.button2}
          </p>
        )}
      </form>
    </>
  );
};

export default ContactForm;
