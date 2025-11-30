import { motion, AnimatePresence } from "framer-motion";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export function ServicesDropdown({ isOpen, onClose, onContactClick }: ServicesDropdownProps) {
  return (
    <>
      {/* Blurry Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-[#002626] rounded-lg border-2 border-white/20 shadow-xl z-50 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <a
                href="#"
                className="block text-white font-['Inter',sans-serif] hover:text-[#FF9800] transition-colors"
              >
                Investments
              </a>
              <a
                href="#"
                className="block text-white font-['Inter',sans-serif] hover:text-[#FF9800] transition-colors"
              >
                Broker Connect
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onContactClick();
                }}
                className="block w-full text-left text-white font-['Inter',sans-serif] hover:text-[#FF9800] transition-colors"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}