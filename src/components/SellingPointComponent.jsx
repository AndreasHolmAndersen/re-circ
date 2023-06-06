import React, { useState } from "react";
import { init, track } from "@amplitude/analytics-browser";
init("820b5535e82d5d39f5cba68f85f80052", undefined, {
  defaultTracking: {
    sessions: false,
    pageViews: true,
    formInteractions: false,
    fileDownloads: false,
  },
});

const SellingPointComponent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    try {
      // Simulating an API call
      track("Email sign-up", { email: email });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setShowConfirmation(true);
      setEmail("");
      setLoading(false);
    } catch (error) {
      setError("An error occurred. Please try again later.");
      setLoading(false);
    }
  };

  const handleClear = () => {
    if (showConfirmation) setShowConfirmation(false);
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
        <p className="text-sm md:text-md lg:text-lg xl:text-xl text-brown-100 mb-8">
          Har vi vakt din interesse? Så sign op med din e-mail nedenstående og
          få løbende opdateringer.
        </p>
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Indtast din e-mail"
            className="w-full bg-brown-100 text-brown-800 border border-brown-300 rounded py-3 px-4 focus:outline-none text-lg placeholder-brown-500"
            value={email}
            onFocus={handleClear}
            onChange={handleInputChange}
          />
          <button
            className={`bg-brown-200 text-brown-800 py-3 px-6 rounded font-semibold focus:outline-none hover:bg-brown-300 hover:text-brown-800 transition-colors duration-300 text-lg ${
              loading && "cursor-not-allowed opacity-50"
            }`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center">
                <span className="animate-spin mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 animate-spin"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
                Tilmelder...
              </span>
            ) : (
              "Tilmeld"
            )}
          </button>
        </form>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {showConfirmation && (
          <p className="text-brown-100 mt-2">Tak for tilmeldingen!</p>
        )}
      </div>
    </div>
  );
};

export default SellingPointComponent;
