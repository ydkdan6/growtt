import { useState } from "react";
import { Link } from "react-router-dom";
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
import HeaderNav from "../components/header";

export default function LearnMore() {

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
<HeaderNav />
      {/* <nav className="bg-[#002626] px-4 md:px-10 lg:px-20 py-4 md:py-6 sticky top-0 z-40">
              <div className="flex items-center justify-between gap-2">
                {/* Desktop Navigation 
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
                      {/* <ChevronDown className="w-4 h-4 md:w-5 md:h-5" /> 
                    </button>
                    {/* <ServicesDropdown 
                      isOpen={showServicesModal} 
                      onClose={() => setShowServicesModal(false)}
                      onContactClick={handleContactClick}
                    /> 
                  </div>
                </div>
      
                {/* Mobile Navigation Links
                <div className="flex md:hidden items-center gap-3">
                  <Link to="/" className="text-white/60 text-sm hover:text-white transition-colors">
                    Home
                  </Link>
                  <span className="text-white text-sm font-bold whitespace-nowrap">About Us</span>
                </div>
      
                {/* Right Side Buttons 
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="px-3 md:px-5 py-1.5 md:py-2 border border-white/20 rounded-lg text-white text-sm md:text-base hover:bg-white/10 transition-colors whitespace-nowrap">
                    <Link to='/login'>Login</Link>
                  </button>
                  <button className="px-3 md:px-5 py-1.5 md:py-2 bg-teal-600 border border-teal-600 rounded-lg text-white text-sm md:text-base hover:bg-teal-700 transition-colors whitespace-nowrap">
                    <Link to='/signup'>Get Started</Link>
                  </button>
                  
                  {/* Mobile Menu Button 
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
      
              {/* Mobile Menu Dropdown 
              <AnimatePresence>
                {mobileMenuOpen && (
                  <>
                    {/* Overlay 
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
                      onClick={() => setMobileMenuOpen(false)}
                    />
      
                    {/* Menu 
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="fixed top-0 right-0 h-screen w-screen bg-gradient-to-b from-[#003B36] to-[#022C22] md:hidden z-[60] flex flex-col justify-center items-center text-center"
                    >
                      {/* Close Button 
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-5 right-6 text-white/80 hover:text-white transition"
                      >
                        ✕
                      </button>
      
                      {/* Navigation Links
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
                          {/* <ChevronDown className="w-4 h-4" /> 
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
            </nav> */}

      {/* Back Button */}
      <div className="px-5 md:px-20 py-8 mt-12">
        <Link 
          to="/broker-connect"
          className="md:mt-[40px] inline-flex items-center justify-center w-11 h-11 border-2 border-brand-dark/20 rounded-2xl hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-brand-dark/20" />
        </Link>
      </div>

      {/* 4 Steps Section */}
      <section className="px-5 md:px-20 pb-8">
        <h2 className="text-2xl font-bold text-[#121717] mb-8">
          <span className="font-sans">4</span> Steps to Smarter Investing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div 
            className="relative rounded-xl overflow-hidden h-[301px]"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/f050cfe431fc1b095466c5c13e894096166ab43c?width=602')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-[#002626]/60 px-4 py-2">
              <h3 className="text-base text-brand-light text-center mb-1">
                Sign up and create profile
              </h3>
              <p className="text-sm text-brand-light/60 text-center leading-tight">
                Create your profile, tell us your goals, and set your learning and investment preferences
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div 
            className="relative rounded-xl overflow-hidden h-[301px]"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/ad7d2740a7b96365a6ab980bd0ef6dd6499231e0?width=602')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-[#002626]/60 px-4 py-2">
              <h3 className="text-base text-brand-light text-center mb-1">
                Learn and Grow with Seeds
              </h3>
              <p className="text-sm text-brand-light/60 text-center leading-tight">
                Seeds your credits that unlock deeper learning and platform opportunities.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            className="relative rounded-xl overflow-hidden h-[301px]"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/e648401d1b4dba09fa93d9e1278b9043bb2bde52?width=602')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-[#002626]/60 px-4 py-2">
              <h3 className="text-base text-brand-light text-center mb-1">
                Unlock Real Opportunities
              </h3>
              <p className="text-sm text-brand-light/60 text-center leading-tight">
                Put your knowledge to work. Explore curated investment opportunities
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div 
            className="relative rounded-xl overflow-hidden h-[301px]"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/0ceada6303d3874be09c0fae56347ffdd93cee47?width=612')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-[#002626]/60 px-4 py-2">
              <h3 className="text-base text-brand-light text-center mb-1">
                Track, Grow, and Stay Informed
              </h3>
              <p className="text-sm text-brand-light/60 text-center leading-tight">
                Monitor your progress through personalized insights and updates
              </p>
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

      {/* CTA Section */}
      <section className="px-5 md:px-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl font-normal text-[#121717] leading-tight tracking-tight">
            Ready to Get Started?
          </h2>
          <Link
            to="/"
            className="px-6 py-2.5 bg-brand-teal border border-brand-teal rounded-lg text-brand-light text-base shadow-lg hover:bg-brand-teal/90 transition-colors inline-block"
          >
            Join Us
          </Link>
        </div>
      </section>
    </div>
  );
}
