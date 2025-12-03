import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogClose } from "./../components/ui/dialog";
import { 
  Calendar,
  ChevronLeft,
  ArrowLeft,
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

export default function InvestmentAdvisory() {

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const Navigate = useNavigate();

      const handleSession = () => {
        Navigate('/connect-broker');
      }
    
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

      {/* Back Button */}
      <div className="px-5 md:px-20 py-8">
        <Link 
          to="/broker-connect"
          className="inline-flex items-center justify-center w-11 h-11 border-2 border-brand-dark/20 rounded-2xl hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-brand-dark/20" />
        </Link>
      </div>

      {/* Header */}
      <section className="px-5 md:px-20 pb-12">
        <div className="max-w-lg space-y-4">
          <h1 className="text-3xl font-bold text-brand-dark leading-tight">
            Expert Investment Advisory
          </h1>
          <p className="text-sm text-brand-dark/60 leading-relaxed">
            Work with licensed brokers to receive tailored guidance on managing your portfolio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 md:px-20 pb-16 space-y-16">
        {/* Portfolio Review */}
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Content */}
            <div className="flex-1 space-y-4 px-2">
              <h2 className="text-base font-bold text-brand-dark">Portfolio Review</h2>
              
              <p className="text-sm text-brand-dark/60 leading-relaxed">
                Get a comprehensive analysis of your current investments and identify areas for improvement.
              </p>

              <button onClick={() => {handleSession()}} className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                Book Session
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 lg:min-w-[50%]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/aeb77d14f284aebbe98b4349c077166ee8d17920?width=1374"
                alt="Portfolio review consultation"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Diversification Strategies */}
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Content */}
            <div className="flex-1 space-y-4 px-2">
              <h2 className="text-base font-bold text-brand-dark">Diversification Strategies</h2>
              
              <p className="text-sm text-brand-dark/60 leading-relaxed">
                Explore strategies to diversify your portfolio across different asset classes for optimal risk-adjusted returns.
              </p>

              <button className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                Book Session
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 lg:min-w-[50%]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a9eb64ae67ae7c0bdc65696aef832dc5a8997f5c?width=1374"
                alt="Diversification strategy planning"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Risk Insights */}
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Content */}
            <div className="flex-1 space-y-4 px-2">
              <h2 className="text-base font-bold text-brand-dark">Risk Insights</h2>
              
              <p className="text-sm text-brand-dark/60 leading-relaxed">
                Understand your risk tolerance and how it aligns with your investment goals.
              </p>

              <button className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                Book Session
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 lg:min-w-[50%]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b63880c69d959cc213b906a1f7c7ba105212a833?width=1374"
                alt="Risk analysis and insights"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
