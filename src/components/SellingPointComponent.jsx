import React, { useState } from "react";

import { init, track } from "@amplitude/analytics-node";

init("bc49f751bb2f8e4f75d2e399401242fa");

const SellingPointComponent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }

    // Call the Mailchimp API to subscribe the email
    addEmailToAudience(email);
  };

  const addEmailToAudience = async (email) => {
    track("Email sign-up", email);
  };

  return (
    <div className="py-10 px-6 sm:py-12 sm:px-8 lg:py-16 lg:px-12 xl:flex xl:items-center">
      <div className="xl:w-2/3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
          RE-CIRC er en ny måde at tænke gensalg på.
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-brown-100 mb-8">
          Med vores nye NFC teknologi ændrer vi måden du sælger tøj på. Vi gør
          den tidskrævende proces ved at måle, finde kvalitet og stylenavn
          simpel, ved kun et simpelt scan og alle informationer er overført til
          appen på et splitsekund.
        </p>
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Indtast din e-mail"
            className="w-full bg-brown-100 text-brown-800 border border-brown-300 rounded py-3 px-4 focus:outline-none text-lg placeholder-brown-500"
            value={email}
            onChange={handleInputChange}
          />
          <button className="bg-brown-200 text-brown-800 py-3 px-6 rounded font-semibold focus:outline-none hover:bg-brown-300 hover:text-brown-800 transition-colors duration-300 text-lg">
            Tilmeld
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default SellingPointComponent;
