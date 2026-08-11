import { motion } from "framer-motion";

interface PaymentFailedModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    image: string;
    title: string;
  };
}

export function PaymentFailedModal({
  open,
  onClose,
  product,
}: PaymentFailedModalProps) {
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-[#031317] font-['Gill_Sans_MT',sans-serif]">
            Ooops!!
          </h2>

          <div className="flex justify-center items-start gap-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-normal text-[#031317] font-['Gill_Sans_MT',sans-serif]">
                Failed Purchase
              </h3>

              <div className="flex items-center gap-4">
                <div className="w-32 h-32 rounded-xl bg-[#F5F5F5] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="text-left">
                  <p className="text-gray-900/90 font-['Gill_Sans_MT',sans-serif]">
                    {product.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xl text-[#031317] font-['Gill_Sans_MT',sans-serif]">
              Sorry your purchase failed. Check network connection
            </p>
            <p className="text-xl text-[#828282] font-['Inter',sans-serif] font-medium">
              Your order is being processed and an email will be sent to you shortly.
            </p>
          </div>

          <button
            onClick={onClose}
            className="px-8 py-3 bg-[#008080] text-white rounded-lg font-['Gill_Sans_MT',sans-serif] hover:bg-[#008080]/90 transition"
          >
            Return
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
