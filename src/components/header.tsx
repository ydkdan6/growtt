import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogClose } from "./../components/ui/dialog";
import { 
  Calendar,
  ChevronLeft,
  Rocket,
  Package,
  Users,
  ChevronDown,
  X,
  Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
  Menu
} from "lucide-react";
import { GrowttLogo } from "../components/logo";
import { motion, AnimatePresence } from "framer-motion";
import { FAQModal } from "./Modal/FAQModal";

interface ModalContent {
  icon: string;
  title: string;
  content: string[];
}

export default function HeaderNav() {
  const [openModal, setOpenModal] = useState<string | null>(null);

    const [showNewsletterModal, setShowNewsletterModal] = useState(true);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (     
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-growtt-dark-teal/95 backdrop-blur-sm"
      >
        <div className="w-full px-4 sm:px-6 lg:px-16 py-4">
          <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <img
              src="/images/logo.png"
              alt="Investor"
              loading="lazy"
              className="md:hidden block w-[140px] h-[40px] object-cover md:scale-x-40"
            />
      
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:justify-between items-center flex-1">
              <div className="flex items-center gap-6 text-sm text-white/90">
                <Link to='/' className="hover:text-white transition-colors">
                  Home
                </Link>
                <Link to='/about' className="hover:text-white transition-colors">
                  About Us
                </Link>
                <div className="relative">
                  <button 
                    // onClick={() => setShowServicesModal(!showServicesModal)}
                    className="flex items-center gap-2 text-white/90 text-sm md:text-base hover:text-white transition-colors">
                      <Link to='/services'>Services</Link>
                    {/* <ChevronDown className="w-4 h-4 md:w-5 md:h-5" /> */}
                  </button>
                  {/* <ServicesDropdown 
                    isOpen={showServicesModal} 
                    onClose={() => setShowServicesModal(false)}
                    onContactClick={handleContactClick}
                  /> */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowWaitlistModal(true)}
                  className="px-4 py-1 text-[15px] text-white border border-growtt-orange rounded-md hover:bg-white/10 transition-colors"
                >
                  Join Waitlist
                </button>
                <button
                onClick={() => setShowNewsletterModal(true)}
                  className="px-4 py-1 text-[15px] bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors"
                >
                    Subscribe
                </button>
              </div>
            </div>
      
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 z-[60]"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 mr-4" />
              ) : (
                <Menu className="w-6 h-6 mr-[4px]" />
              )}
            </button>
          </div>
      
          {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
      
            {/* Sidebar / Full-screen Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 h-screen w-screen bg-gradient-to-b from-[#003B36] to-[#022C22] md:hidden z-[60] flex flex-col justify-center items-center text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-5 right-6 text-white/80 hover:text-white transition"
              >
                ✕
              </button>
      
              {/* Navigation Links */}
              <div className="flex flex-col gap-8 text-white/90 text-2xl font-medium items-center">
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
                <Link to='/about' className="hover:text-white transition-colors">
                  About Us
                </Link>
                <div className="relative flex flex-col items-center">
                  <button 
                    // onClick={() => setShowServicesModal(!showServicesModal)}
                    className="flex items-center justify-center gap-2 text-white/90 text-2xl md:text-base hover:text-white transition-colors">
                      <Link to='services'>Services</Link>
                    {/* <ChevronDown className="w-4 h-4 md:w-5 md:h-5" /> */}
                  </button>
                  {/* <ServicesDropdown 
                    isOpen={showServicesModal} 
                    onClose={() => setShowServicesModal(false)}
                    onContactClick={handleContactClick}
                  /> */}
                </div>
                <button
                  onClick={() => {
                    setShowFAQModal(true)
                    setMobileMenuOpen(false);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Faq
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
        </div>
              <FAQModal open={showFAQModal} onOpenChange={setShowFAQModal} />
      </motion.nav>
)
};