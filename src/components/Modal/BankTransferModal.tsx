import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BankTransferModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onFailed: () => void;
}

export function BankTransferModal({
  open,
  onClose,
  onSuccess,
  onFailed,
}: BankTransferModalProps) {
  const [minutes, setMinutes] = useState(29);
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    if (!open) return;

    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [open, minutes, seconds]);

  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText("1234567890");
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
        className="bg-[#DAD9D8] rounded-lg shadow-xl max-w-6xl w-full my-8"
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
          {/* Bank Details Card */}
          <div className="relative h-64 rounded-lg overflow-hidden mb-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7d25285711c8c42d63b0df73137c48e8a18f284c"
              alt="Bank Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 font-['Gill_Sans_MT',sans-serif]">
                Bank Name: XYZ Bank
              </h3>
              <p className="text-lg mb-4 font-['Gill_Sans_MT',sans-serif]">
                Account number: 1234567890
              </p>
              <button
                onClick={handleCopy}
                className="px-6 py-2 bg-[#008080] text-white rounded-xl font-['Gill_Sans_MT',sans-serif] hover:bg-[#008080]/90 transition"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Instructions */}
            <div>
              <h4 className="text-2xl font-bold mb-6 font-['Gill_Sans_MT',sans-serif]">
                How to complete your payment
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-4 p-4 bg-white/60 rounded-t-xl">
                  <div className="w-12 h-12 rounded-lg bg-[#F2F5F0] flex items-center justify-center">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium font-['Gill_Sans_MT',sans-serif]">Step 1</p>
                    <p className="text-sm text-gray-600 font-['Gill_Sans_MT',sans-serif]">
                      Log into your bank app
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/60">
                  <div className="w-12 h-12 rounded-lg bg-[#F2F5F0] flex items-center justify-center">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium font-['Gill_Sans_MT',sans-serif]">Step 2</p>
                    <p className="text-sm text-gray-600 font-['Gill_Sans_MT',sans-serif]">
                      Transfer the exact amount
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/60 rounded-b-xl">
                  <div className="w-12 h-12 rounded-lg bg-[#F2F5F0] flex items-center justify-center">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium font-['Gill_Sans_MT',sans-serif]">Step 3</p>
                    <p className="text-sm text-gray-600 font-['Gill_Sans_MT',sans-serif]">
                      Your payment will be verified automatically
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timer and Actions */}
            <div className="space-y-6">
              <div className="flex gap-4 justify-center">
                <div className="text-center">
                  <div className="w-36 h-14 bg-[#F2F5F0] rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold font-['Inter',sans-serif]">
                      {minutes}
                    </span>
                  </div>
                  <p className="text-sm font-['Gill_Sans_MT',sans-serif]">Minutes</p>
                </div>
                <div className="text-center">
                  <div className="w-36 h-14 bg-[#F2F5F0] rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold font-['Inter',sans-serif]">
                      {seconds}
                    </span>
                  </div>
                  <p className="text-sm font-['Gill_Sans_MT',sans-serif]">Seconds</p>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600 font-['Gill_Sans_MT',sans-serif]">
                Time left to complete your payment
              </p>

              <p className="text-center text-sm text-gray-600 font-['Gill_Sans_MT',sans-serif]">
                Need help? Contact support
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={onSuccess}
                  className="px-6 py-3 bg-[#008080] text-white rounded-xl font-['Gill_Sans_MT',sans-serif] hover:bg-[#008080]/90 transition"
                >
                  I've Made the Transfer
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#E8F2F2] text-gray-900 rounded-xl font-['Gill_Sans_MT',sans-serif] hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 font-['Gill_Sans_MT',sans-serif]">
                Secure payment powered by PaySafe. Refunds are processed within 3-5
                business days.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
