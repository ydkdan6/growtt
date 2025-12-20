import React, { useState } from "react";
import HeaderNav from "../components/header";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
//   const [showModal, setShowModal] = useState(false);

  const handleUnsubscribe = (e) => {
    e.preventDefault();
    // Handle unsubscribe logic here
    // setSubmitted(true);
    // setTimeout(() => {
    //   setSubmitted(false);
    //   setEmail("");
    //   setShowModal(false);
    // }, 3000);
  };

//   const closeModal = () => {
//     setShowModal(false);
//     setSubmitted(false);
//     setEmail("");
//   };

  return (
    <div className="min-h-screen bg-white">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => {}}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-semibold mb-3">Unsubscribe from Marketing Communications</h3>
            <p className="text-gray-700 mb-4">
              If you no longer wish to receive promotional emails, newsletters, or marketing communications from Growtt, 
              please enter your email address below and click "Unsubscribe". You will still receive important account-related 
              and transactional emails as required for the operation of your account.
            </p>
            
            {submitted ? (
              <div className="p-4 bg-green-100 text-green-800 rounded">
                Thank you. Your unsubscribe request has been processed successfully.
              </div>
            ) : (
              <form onSubmit={handleUnsubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-[#008080] text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Unsubscribe 
                </button>
              </form>
            )}
          </div>
        </div>
    </div>
  );
};

export default Unsubscribe;