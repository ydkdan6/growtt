import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface PaymentMethodModalProps {
  open: boolean;
  onClose: () => void;
  onBankTransfer: () => void;
  onCardPayment: () => void;
}

export function PaymentMethodModal({
  open,
  onClose,
  onBankTransfer,
  onCardPayment,
}: PaymentMethodModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<"bank" | "card">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("United States");
  const [zipCode, setZipCode] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (selectedMethod === "bank") {
      onBankTransfer();
    } else {
      onCardPayment();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#DAD9D8] rounded-lg shadow-xl max-w-2xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#002626] text-white p-4 md:p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <button className="font-bold">Home</button>
              <button className="text-white/60 text-sm">About Us</button>
              <button className="flex items-center gap-2 text-white/60 text-sm">
                Services
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12.3982 15.6634C12.1785 15.8831 11.8224 15.8831 11.6027 15.6634L5.86788 9.92853C5.64821 9.70886 5.64821 9.35276 5.86788 9.13308L6.13305 8.86788C6.35271 8.64821 6.70887 8.64821 6.92854 8.86788L12.0005 13.9398L17.0724 8.86788C17.2921 8.64821 17.6482 8.64821 17.8679 8.86788L18.1331 9.13308C18.3527 9.35276 18.3527 9.70886 18.1331 9.92853L12.3982 15.6634Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2 border-2 border-[#FF9800]/60 rounded-lg text-sm">
                Subscribe
              </button>
              <button className="px-5 py-2 bg-[#008080] rounded-lg text-sm">
                Join waitlist
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-['Gill_Sans_MT',sans-serif]">
            Payment Method
          </h3>

          {/* Payment Method Selection */}
          <div className="space-y-4 mb-6">
            <button
              onClick={() => setSelectedMethod("bank")}
              className="w-full flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl hover:bg-gray-200 transition"
            >
              <div className={`w-3 h-3 rounded-full ${selectedMethod === "bank" ? "bg-white" : "bg-white"} border-2 border-gray-400`} />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.309 12.7951L4.05678 19.6271C3.77095 19.7431 3.50053 19.7203 3.24553 19.5586C2.9907 19.397 2.86328 19.1649 2.86328 18.8624L2.86328 5.13638C2.86328 4.83388 2.9907 4.6018 3.24553 4.44013C3.50053 4.27846 3.77095 4.25363 4.05678 4.36563L20.309 11.2036C20.6529 11.353 20.8248 11.6182 20.8248 11.9994C20.8248 12.3805 20.6529 12.6458 20.309 12.7951Z" fill="#030712"/>
              </svg>
              <span className="text-lg font-['Gill_Sans_MT',sans-serif]">Bank Transfer</span>
            </button>

            <button
              onClick={() => setSelectedMethod("card")}
              className="w-full flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl hover:bg-gray-200 transition"
            >
              <div className={`w-3 h-3 rounded-full ${selectedMethod === "card" ? "bg-[#006DBD]" : "bg-white"} border-2 border-gray-400`} />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.55286 20.1487C3.09286 20.1487 2.69403 19.9798 2.35636 19.642C2.01853 19.3043 1.84961 18.9055 1.84961 18.4455L1.84961 5.553C1.84961 5.09133 2.01853 4.69108 2.35636 4.35225C2.69403 4.01325 3.09286 3.84375 3.55286 3.84375L20.4454 3.84375C20.907 3.84375 21.3073 4.01325 21.6461 4.35225C21.9851 4.69108 22.1546 5.09133 22.1546 5.553V10.6047H3.55286L3.55286 18.4455H12.6106C12.8509 18.4455 13.0529 18.5277 13.2166 18.6922C13.3803 18.8567 13.4621 19.0598 13.4621 19.3015C13.4621 19.5432 13.3803 19.7448 13.2166 19.9062C13.0529 20.0679 12.8509 20.1487 12.6106 20.1487H3.55286Z" fill="#030712"/>
              </svg>
              <span className="text-lg font-['Gill_Sans_MT',sans-serif]">Credit or debit card</span>
            </button>
          </div>

          {/* Card Form */}
          {selectedMethod === "card" && (
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-lg mb-2 font-['Gill_Sans_MT',sans-serif]">
                  Card number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full h-12 px-4 pl-12 rounded-lg border border-gray-900 font-['Gill_Sans_MT',sans-serif] placeholder:text-gray-600"
                  />
                  <svg
                    className="absolute left-4 top-3.5 w-8 h-8"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M11 20H19M3 13H29M23 20H25M5 7C4 7 3 8 3 9V23C3 24 4 25 5 25H27C28 25 29 24 29 23V9C29 8 28 7 27 7H5Z"
                      stroke="#030712"
                      strokeOpacity="0.6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg mb-2 font-['Gill_Sans_MT',sans-serif]">
                    Expiry date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full h-12 px-4 pl-12 rounded-lg border border-black font-['Gill_Sans_MT',sans-serif] placeholder:text-gray-600"
                    />
                    <svg
                      className="absolute left-4 top-3.5 w-8 h-8"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path d="M25.9993 5.33464H21.9993V3.33464C21.9993 3.15782 21.9291 2.98826 21.8041 2.86323C21.6791 2.73821 21.5095 2.66797 21.3327 2.66797C21.1559 2.66797 20.9863 2.73821 20.8613 2.86323C20.7363 2.98826 20.666 3.15782 20.666 3.33464V5.33464H11.3327V3.33464C11.3327 3.15782 11.2624 2.98826 11.1374 2.86323C11.0124 2.73821 10.8428 2.66797 10.666 2.66797C10.4892 2.66797 10.3196 2.73821 10.1946 2.86323C10.0696 2.98826 9.99935 3.15782 9.99935 3.33464V5.33464H5.99935C5.11562 5.33569 4.26839 5.68722 3.6435 6.31212C3.0186 6.93701 2.66707 7.78424 2.66602 8.66797V26.0013C2.66707 26.885 3.0186 27.7323 3.6435 28.3572C4.26839 28.982 5.11562 29.3336 5.99935 29.3346H25.9993C26.8832 29.3339 27.7306 28.9825 28.3556 28.3575C28.9806 27.7326 29.332 26.8851 29.3327 26.0013V8.66797C29.332 7.78413 28.9806 6.93669 28.3556 6.31173C27.7306 5.68676 26.8832 5.33534 25.9993 5.33464Z" fill="black"/>
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-lg mb-2 font-['Gill_Sans_MT',sans-serif]">
                    Security code
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="CVC"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="w-full h-12 px-4 pl-12 rounded-lg border border-black font-['Gill_Sans_MT',sans-serif] placeholder:text-gray-600"
                    />
                    <svg
                      className="absolute left-4 top-3.5 w-8 h-8"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M11 20H19M3 13H29M23 20H25M5 7C4 7 3 8 3 9V23C3 24 4 25 5 25H27C28 25 29 24 29 23V9C29 8 28 7 27 7H5Z"
                        stroke="black"
                        strokeOpacity="0.8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="United States"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full h-12 px-4 pl-12 rounded-lg border border-black font-['Gill_Sans_MT',sans-serif] placeholder:text-gray-600"
                />
                <svg
                  className="absolute left-4 top-3.5 w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path d="M2.66602 16.0013C2.66602 23.3653 8.63535 29.3346 15.9993 29.3346C23.3633 29.3346 29.3327 23.3653 29.3327 16.0013C29.3327 8.6373 23.3633 2.66797 15.9993 2.66797C8.63535 2.66797 2.66602 8.6373 2.66602 16.0013Z" stroke="black" strokeWidth="1.5"/>
                </svg>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full h-12 px-4 pl-12 rounded-lg border border-black font-['Gill_Sans_MT',sans-serif] placeholder:text-gray-600"
                />
                <svg
                  className="absolute left-4 top-3.5 w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path d="M24.0007 8H8.00065C6.52789 8 5.33398 9.19391 5.33398 10.6667V21.3333C5.33398 22.8061 6.52789 24 8.00065 24H24.0007C25.4734 24 26.6673 22.8061 26.6673 21.3333V10.6667C26.6673 9.19391 25.4734 8 24.0007 8Z" stroke="black" strokeOpacity="0.8" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-[#008080] text-white rounded-lg font-['Gill_Sans_MT',sans-serif] hover:bg-[#008080]/90 transition"
          >
            Make Payment
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
