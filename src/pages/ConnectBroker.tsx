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
  Lock,
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

export default function ConnectBroker() {

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <HeaderNav />

      {/* Back Button */}
      <div className="absolute top-[50px] left-[50px] px-5 md:px-6 py-8">
        <Link 
          to="/services/investment-advisory"
          className="inline-flex items-center justify-center w-11 h-11 border-2 border-brand-dark/20 rounded-2xl hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-brand-dark/20" />
        </Link>
      </div>

      {/* Main Content - Split Layout */}
      <section className="px-5 md:px-20 pb-16 md:mt-16">
        <div className="flex flex-col lg:flex-row border border-white/20 rounded-none overflow-hidden max-w-full">
          {/* Left Side - Hero with Image */}
          <div 
            className="lg:w-[624px] relative p-10 flex flex-col justify-between min-h-[890px]"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/a6e7409c017645b1085c0d7cd866f693c11d9bc5?width=1248')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Top Content */}
            <div className="space-y-6 max-w-lg">
              <h1 className="text-5xl md:text-[56px] font-bold text-brand-light leading-tight tracking-tight">
                Connect With a Broker
              </h1>
              <p className="text-lg text-brand-light leading-relaxed">
                Securely manage your journey to success. Join thousands growing with Growtt.
              </p>
            </div>

            {/* Bottom Security Badge */}
            <div className="flex items-center gap-2 text-brand-light">
              <Lock className="w-6 h-6" />
              <span className="text-base">Your data is always secure with us.</span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-[656px] bg-brand-light p-10 relative min-h-[890px] flex flex-col">
            {/* Header */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-normal text-brand-dark leading-tight tracking-tight">
                Connect With a Broker
              </h2>
              <p className="text-base text-brand-dark/80">
                Secure expert advisory for your company or personal investments.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-8 flex-1 flex flex-col">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-lg text-brand-dark block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="OJI"
                  className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-brand-light text-brand-dark/60 text-base focus:outline-none focus:border-brand-teal"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-lg text-brand-dark block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="bizzoji@gmail.com"
                  className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-brand-light text-brand-dark/60 text-base focus:outline-none focus:border-brand-teal"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-lg text-brand-dark block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="08137802389"
                  className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-brand-light text-brand-dark/60 text-base focus:outline-none focus:border-brand-teal"
                />
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <label htmlFor="budget" className="text-lg text-brand-dark block">
                  Budget Range
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="budget"
                    placeholder="₦10,000 - ₦100,000"
                    className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-brand-light text-brand-dark/60 text-base focus:outline-none focus:border-brand-teal"
                  />
                  <svg 
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.0002 19.6618L16.2845 15.3836C16.4505 15.2136 16.6567 15.1286 16.9032 15.1286C17.1497 15.1286 17.358 15.2136 17.528 15.3836C17.694 15.5496 17.777 15.7548 17.777 15.9993C17.777 16.2438 17.694 16.4511 17.528 16.6211L13.1937 20.9493C12.8666 21.2765 12.4687 21.4401 12.0002 21.4401C11.5317 21.4401 11.1339 21.2765 10.8067 20.9493L6.47849 16.6211C6.30849 16.4511 6.22349 16.2438 6.22349 15.9993C6.22349 15.7548 6.30649 15.5496 6.47249 15.3836C6.64249 15.2136 6.84974 15.1286 7.09424 15.1286C7.33874 15.1286 7.54599 15.2136 7.71599 15.3836L12.0002 19.6618ZM12.0002 4.33684L7.71599 8.62109C7.54599 8.79109 7.33774 8.87609 7.09124 8.87609C6.84474 8.87609 6.63849 8.79109 6.47249 8.62109C6.30265 8.45109 6.21874 8.24384 6.22074 7.99934C6.22257 7.75484 6.30649 7.54959 6.47249 7.38359L10.8067 3.04934C11.1339 2.72218 11.5317 2.55859 12.0002 2.55859C12.4687 2.55859 12.8666 2.72218 13.1937 3.04934L17.528 7.38359C17.694 7.54959 17.7779 7.75484 17.7797 7.99934C17.7817 8.24384 17.6998 8.45109 17.534 8.62109C17.364 8.79109 17.1557 8.87609 16.9092 8.87609C16.6627 8.87609 16.4565 8.79109 16.2905 8.62109L12.0002 4.33684Z" fill="#030712" fillOpacity="0.2"/>
                  </svg>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <label htmlFor="contactMethod" className="text-lg text-brand-dark block">
                  Preferred Contact Method
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="contactMethod"
                    placeholder="Phone Call"
                    className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-brand-light text-brand-dark/60 text-base focus:outline-none focus:border-brand-teal"
                  />
                  <svg 
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.0002 19.6618L16.2845 15.3836C16.4505 15.2136 16.6567 15.1286 16.9032 15.1286C17.1497 15.1286 17.358 15.2136 17.528 15.3836C17.694 15.5496 17.777 15.7548 17.777 15.9993C17.777 16.2438 17.694 16.4511 17.528 16.6211L13.1937 20.9493C12.8666 21.2765 12.4687 21.4401 12.0002 21.4401C11.5317 21.4401 11.1339 21.2765 10.8067 20.9493L6.47849 16.6211C6.30849 16.4511 6.22349 16.2438 6.22349 15.9993C6.22349 15.7548 6.30649 15.5496 6.47249 15.3836C6.64249 15.2136 6.84974 15.1286 7.09424 15.1286C7.33874 15.1286 7.54599 15.2136 7.71599 15.3836L12.0002 19.6618ZM12.0002 4.33684L7.71599 8.62109C7.54599 8.79109 7.33774 8.87609 7.09124 8.87609C6.84474 8.87609 6.63849 8.79109 6.47249 8.62109C6.30265 8.45109 6.21874 8.24384 6.22074 7.99934C6.22257 7.75484 6.30649 7.54959 6.47249 7.38359L10.8067 3.04934C11.1339 2.72218 11.5317 2.55859 12.0002 2.55859C12.4687 2.55859 12.8666 2.72218 13.1937 3.04934L17.528 7.38359C17.694 7.54959 17.7779 7.75484 17.7797 7.99934C17.7817 8.24384 17.6998 8.45109 17.534 8.62109C17.364 8.79109 17.1557 8.87609 16.9092 8.87609C16.6627 8.87609 16.4565 8.79109 16.2905 8.62109L12.0002 4.33684Z" fill="#030712" fillOpacity="0.2"/>
                  </svg>
                </div>
              </div>

              {/* Spacer to push button to bottom */}
              <div className="flex-1"></div>

              {/* Submit Button */}
              <div className="space-y-3 mt-auto">
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-brand-teal border border-white/20 rounded-lg text-brand-light text-base hover:bg-brand-teal/90 transition-colors"
                >
                  Connect Now
                </button>
                <p className="text-sm text-[rgba(13,3,0,0.6)] text-center">
                  Our brokers will reach out to you shortly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
