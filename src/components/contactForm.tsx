"use client";
import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const sendMessage = (event) => {
    event.preventDefault(); // Prevent the default form submission
    setIsSent(true); // Set the isSent state to true
    setTimeout(() => {
      setIsSent(false); // Set the isSent state to false after 3 seconds
      event.target.reset(); // Reset the form
      setEmail(""); // Reset the email state
      setName(""); // Reset the name state
      setPhone(""); // Reset the phone state
      setMessage(""); // Reset the message state
    }, 3000);

    // Save the form data in a JSON object
    const formData = JSON.stringify({
      name: name.toString(),
      phone: phone.toString(),
      mail: email.toString(),
      message: message.toString(),
    });
    console.log(formData);

    axios
      .post(
        "https://eol3ha9egi44c6b.m.pipedream.net",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json", // Make sure the content type is set to JSON
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setIsSent(true); // Set the isSent state to true after successful submission
        setTimeout(() => {
          setIsSent(false); // Set the isSent state to false after 3 seconds
          event.target.reset(); // Reset the form
          setEmail(""); // Reset the email state
          setName(""); // Reset the name state
          setPhone(""); // Reset the phone state
          setMessage(""); // Reset the message state
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });

    // Access the input values from the variables
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <>
      {/* Form section */}
      <form
        onSubmit={sendMessage}
        className="h-full flex flex-col justify-center items-start"
      >
        <h1 className="w-full font-bold text-4xl text-center mb-14">
          Envoyer nous un Message
        </h1>
        <input
          type="text"
          placeholder="Votre Nom"
          className="border border-gray-300 rounded-md px-4 py-3 mb-4 w-full"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Votre Téléphone"
          className="border border-gray-300 rounded-md px-4 py-3 mb-4 w-full"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Votre Email"
          className="border border-gray-300 rounded-md px-4 py-3 mb-4 w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Votre Message"
          className="border border-gray-300 rounded-md px-4 py-3 mb-4 w-full"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {!isSent && (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md w-full"
          >
            Envoyer
          </button>
        )}
        {isSent && (
          <p className="bg-green-500 text-center text-white font-bold py-3 px-4 rounded-md w-full">
            Message envoyé avec succès
          </p>
        )}
      </form>
    </>
  );
};

export default ContactForm;
