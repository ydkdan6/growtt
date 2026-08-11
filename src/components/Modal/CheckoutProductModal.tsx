import { X } from "lucide-react";
import { motion } from "framer-motion";

interface CheckoutProductModalProps {
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  product: {
    image: string;
    title: string;
    price: string;
  };
}

export function CheckoutProductModal({
  open,
  onClose,
  onNext,
  product,
}: CheckoutProductModalProps) {
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
        className="bg-[#DAD9D8] rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#002626] text-white p-4 md:p-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-8">
            <button className="font-bold">Home</button>
            <button className="text-white/60">About Us</button>
            <button className="flex items-center gap-2 text-white/60">
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
            <button className="px-5 py-2 border-2 border-[#FF9800]/60 rounded-lg">
              Subscribe
            </button>
            <button className="px-5 py-2 bg-[#008080] rounded-lg">
              Join waitlist
            </button>
          </div>
        </div>

        <div className="p-8 md:p-16">
          {/* Product Table */}
          <div className="mb-8">
            <div className="grid grid-cols-4 gap-4 pb-4 border-b-2 border-gray-400/40 text-gray-600">
              <div className="text-center font-['Gill_Sans_MT',sans-serif] text-xl">
                PRODUCT
              </div>
              <div className="text-center font-['Gill_Sans_MT',sans-serif] text-xl">
                PRICE
              </div>
              <div className="text-center font-['Gill_Sans_MT',sans-serif] text-xl">
                QUANTITY
              </div>
              <div className="text-center font-['Gill_Sans_MT',sans-serif] text-xl">
                TOTAL
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 py-8 items-center">
              <div className="flex items-center gap-4">
                <div className="w-32 h-32 rounded-xl bg-[#F5F5F5] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-['Gill_Sans_MT',sans-serif]">
                    {product.title}
                  </p>
                  <button className="text-red-500/65 text-sm font-['Gill_Sans_MT',sans-serif]">
                    Cancel
                  </button>
                </div>
              </div>
              <div className="text-center text-xl font-medium">{product.price}</div>
              <div className="text-center text-xl font-medium">1</div>
              <div className="text-center text-xl font-medium">{product.price}</div>
            </div>
          </div>

          {/* Payment Method Button */}
          <div className="flex justify-center">
            <button
              onClick={onNext}
              className="w-full max-w-xl px-6 py-3 bg-[#008080] text-white rounded-lg font-['Gill_Sans_MT',sans-serif] hover:bg-[#008080]/90 transition"
            >
              Payment Method
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white p-8 md:p-16">
          <div className="flex justify-between items-start mb-8">
            <div>
              <svg
                width="116"
                height="36"
                viewBox="0 0 116 36"
                fill="none"
              >
                <path
                  d="M26.7203 4.05699V8.55771L26.9305 8.21858C28.788 5.18936 30.6455 3.67188 32.4973 3.67188C33.9458 3.67188 35.4568 4.41337 37.0303 5.89062L35.008 9.30496C33.6731 8.02314 32.4348 7.38511 31.293 7.38511C30.0547 7.38511 28.9811 7.98291 28.0779 9.1785C27.169 10.3741 26.7203 11.7881 26.7203 13.4263V23.6923H22.8633V4.05699H26.7203Z"
                  fill="#008080"
                />
              </svg>
            </div>
            <div className="flex gap-8 text-sm text-gray-900">
              <a href="#">About Us</a>
              <a href="#">Our Services</a>
              <a href="#">Contact Us</a>
              <a href="#">Blog Posts</a>
              <a href="#">Help Center</a>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex gap-6 text-sm text-gray-600">
            <p>© 2025 Growtt. All rights reserved.</p>
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">Terms of Service</a>
            <a href="#" className="underline">Cookies Settings</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
