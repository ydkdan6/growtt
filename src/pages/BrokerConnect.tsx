import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogClose } from "./../components/ui/dialog";
import { 
  Calendar,
  ChevronLeft,
  Rocket,
  Package,
  Users,
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
import { ChevronDown, Play } from "lucide-react";

export default function BrokerConnect() {

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-[#002626] px-4 md:px-10 lg:px-20 py-4 md:py-6 sticky top-0 z-40">
              <div className="flex items-center justify-between gap-2">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-3 md:gap-8">
                  <Link to="/" className="text-white/60 text-sm md:text-base hover:text-white transition-colors">
                    Home
                  </Link>
                  <span className="text-white/60 text-sm md:text-base font-bold whitespace-nowrap">About Us</span>
                  <div className="relative">
                    <button 
                      // onClick={() => setShowServicesModal(!showServicesModal)}
                      className="flex items-center gap-2 text-white text-sm md:text-base hover:text-white transition-colors">
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
      
                {/* Mobile Navigation Links */}
                <div className="flex md:hidden items-center gap-3">
                  <Link to="/" className="text-white/60 text-sm hover:text-white transition-colors">
                    Home
                  </Link>
                  <span className="text-white text-sm font-bold whitespace-nowrap">About Us</span>
                </div>
      
                {/* Right Side Buttons */}
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="px-3 md:px-5 py-1.5 md:py-2 border border-white/20 rounded-lg text-white text-sm md:text-base hover:bg-white/10 transition-colors whitespace-nowrap">
                    <Link to='/login'>Login</Link>
                  </button>
                  <button className="px-3 md:px-5 py-1.5 md:py-2 bg-teal-600 border border-teal-600 rounded-lg text-white text-sm md:text-base hover:bg-teal-700 transition-colors whitespace-nowrap">
                    <Link to='/signup'>Get Started</Link>
                  </button>
                  
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-white p-2"
                  >
                    {mobileMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
      
              {/* Mobile Menu Dropdown */}
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
      
                    {/* Menu */}
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
                      <div className="flex flex-col gap-8 text-white/90 text-2xl font-medium">
                        <Link to="/" className="hover:text-white transition-colors">
                          Home
                        </Link>
                        <span className="text-white font-bold">About Us</span>
                        <button 
                          // onClick={() => {
                          //   setShowServicesModal(true);
                          //   setMobileMenuOpen(false);
                          // }}
                          className="flex items-center gap-2 hover:text-white transition-colors">
                      <Link to='/services'>Services</Link>
                          {/* <ChevronDown className="w-4 h-4" /> */}
                        </button>
                        <Link to="/login" className="hover:text-white transition-colors">
                          Login
                        </Link>
                        <Link to="/signup" className="hover:text-white transition-colors">
                          Get Started
                        </Link>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </nav>

      {/* Hero Section */}
      <section className="px-5 md:px-20 py-16 md:py-24">
        <div 
          className="relative rounded-xl overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/379ac8378cc46d9bfd6b7b3471164dd9bcf5d8eb?width=2560')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "480px"
          }}
        >
          <div className="flex flex-col items-center justify-center text-center px-8 py-32 md:py-40">
            <div className="max-w-2xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold italic text-brand-light leading-tight tracking-tight">
                  Connect with Expert Brokers
                </h1>
                <p className="text-base text-brand-light">
                  Get personalized investment insights and real-time market data tailored to your goals.
                </p>
              </div>
              <Link
                to="/learn-more"
                className="px-6 py-2.5 bg-brand-teal border border-brand-teal rounded-lg text-brand-light text-base shadow-lg hover:bg-brand-teal/90 transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Call Section */}
      <section className="px-5 md:px-20 pb-16">
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Content */}
            <div className="flex-1 space-y-4 px-2">
              <h2 className="text-base font-bold text-brand-dark">Schedule a Call</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-brand-dark font-normal">Investment Advisory</p>
                  <p className="text-sm text-brand-dark/60">
                    Get expert guidance on building and growing your portfolio with market insights and tailored investment recommendations.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-brand-dark font-normal">Business Structuring Advisory</p>
                  <p className="text-sm text-brand-dark/60">
                    Access professional advice on setting up, scaling, and funding your business for long-term success
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 pt-2">
                <Link
                  to="/services/investment-advisory"
                  className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                >
                  Investment Advisory
                </Link>
                <button className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                  Business Structuring Advisory
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 lg:min-w-[50%]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/98242a61471772d9a04b59edd04ff359d4266849?width=1374"
                alt="Business professionals"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-5 md:px-20 pb-16">
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-2 bg-white rounded-xl overflow-hidden">
            {/* Video Thumbnail */}
            <div 
              className="flex-1 relative rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/a3e0e6ca413a58125fdaf5c794b6d743d737220a?width=1240')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "256px"
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-15 h-15 rounded-full bg-transparent hover:scale-110 transition-transform">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.3351 39.2181L38.6463 31.35C39.1642 31.0137 39.4232 30.5619 39.4232 29.9944C39.4232 29.4273 39.1642 28.9779 38.6463 28.6462L26.3351 20.7781C25.8167 20.4148 25.2728 20.3877 24.7032 20.6969C24.1336 21.0065 23.8488 21.4842 23.8488 22.13V37.8512C23.8488 38.5117 24.1336 38.9954 24.7032 39.3025C25.2728 39.6096 25.8167 39.5815 26.3351 39.2181ZM30.0026 55.3719C26.5251 55.3719 23.243 54.7077 20.1563 53.3794C17.0701 52.051 14.3745 50.2344 12.0695 47.9294C9.76445 45.6244 7.94779 42.9294 6.61945 39.8444C5.29112 36.7594 4.62695 33.4779 4.62695 30C4.62695 26.4808 5.29112 23.1779 6.61945 20.0912C7.94779 17.005 9.76362 14.3196 12.067 12.035C14.3703 9.75 17.0649 7.94125 20.1507 6.60875C23.2365 5.27583 26.5188 4.60938 29.9976 4.60938C33.5176 4.60938 36.8215 5.27541 39.9095 6.6075C42.997 7.93958 45.6826 9.74729 47.9663 12.0306C50.2505 14.314 52.0586 16.999 53.3907 20.0856C54.7232 23.1723 55.3895 26.4765 55.3895 29.9981C55.3895 33.4773 54.723 36.76 53.3901 39.8462C52.0576 42.9325 50.2488 45.6275 47.9638 47.9312C45.6792 50.235 42.9945 52.051 39.9095 53.3794C36.8245 54.7077 33.5222 55.3719 30.0026 55.3719ZM30.0007 51.1137C35.8774 51.1137 40.8659 49.0565 44.9663 44.9419C49.0663 40.8269 51.1163 35.8456 51.1163 29.9981C51.1163 24.1215 49.0663 19.1329 44.9663 15.0325C40.8659 10.9325 35.8749 8.8825 29.9932 8.8825C24.1532 8.8825 19.1751 10.9325 15.0588 15.0325C10.943 19.1329 8.88508 24.124 8.88508 30.0056C8.88508 35.8456 10.9424 40.8237 15.057 44.94C19.172 49.0558 24.1532 51.1137 30.0007 51.1137Z" fill="#F5F5F5"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Info */}
            <div className="flex-1 p-4 space-y-4">
              <h3 className="text-lg font-bold text-brand-dark leading-tight">
                Master wealth management for success
              </h3>
              
              <p className="text-base text-brand-dark/60">
                Key trends and predictions for the upcoming quarter.
              </p>

              <button className="flex items-center gap-2 px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                <span>Watch Now</span>
                <Play className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-20 py-10 space-y-6">
        <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-6">
          <a href="#" className="text-base text-brand-dark/60 hover:text-brand-dark transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-base text-brand-dark/60 hover:text-brand-dark transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-base text-brand-dark/60 hover:text-brand-dark transition-colors">
            Contact Us
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-base text-brand-dark/60">2025 @GrowttCo. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
