import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Linkedin, Youtube, Menu, X, TrendingUp, LineChart, Lock } from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import { GrowttLogo } from '../components/logo';
import { FAQModal } from "../components/Modal/FAQModal";
import { NewsletterModal } from "../components/Modal/Newsletter";
import { WaitlistModal } from "../components/Modal/WaitListModal";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentLearningIndex, setCurrentLearningIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);

  const ScrollButtons = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const container = document.querySelector('.card') as HTMLElement;
    
    const updateButtonStates = () => {
      if (container) {
        setCanScrollLeft(container.scrollLeft > 1);
        setCanScrollRight(
          container.scrollLeft < container.scrollWidth - container.clientWidth - 1
        );
      }
    };

    if (container) {
      container.addEventListener('scroll', updateButtonStates);
      updateButtonStates(); // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateButtonStates);
      }
    };
  }, []);

  const scrollLeft = () => {
    const container = document.querySelector('.card') as HTMLElement;
    if (container) {
      container.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.querySelector('.card') as HTMLElement;
    if (container) {
      container.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <div className="md:gap-8 md:mb-8 md:flex hidden">
      <button
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        className="w-10 h-10 rounded bg-growtt-dark-teal border-2 border-gray-400 hover:bg-white/30 flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-growtt-dark-teal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      </button>
      <button
        onClick={scrollRight}
        disabled={!canScrollRight}
        className="w-10 h-10 rounded bg-growtt-dark-teal border-2 border-gray-200 hover:bg-white/30 flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-growtt-dark-teal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
    </div>
  );
};

  const handleNewsletterSubscribe = () => {
  setShowNewsletterModal(false);
  setShowWaitlistModal(true);
};

const handleWaitlistSubscribe = () => {
  setShowWaitlistModal(false);
  setShowFAQModal(true);
};

  const learningModules = [
    {
      image: "/images/Hard Cover Book (1).png",
      title: "Investment Made Simple",
      description: "Start from 10k naira and build wealth",
      price: "₦4,000"
    },
    {
      image: "/images/Hard Cover Book (2).png",
      title: "5 Skills to learn and earn as a student",
      description: "Learn Skill earn income",
      price: "₦4,000"
    },
    {
      image: "/images/Hard Cover Book.png",
      title: "Webinar: Mastering the New Tax Rules",
      description: "Tips for 2026",
      price: "₦4,000"
    }, {
      image: "/images/Hard Cover Book (2).png",
      title: "5 Skills to learn and earn as a student",
      description: "Learn Skill earn income",
      price: "₦4,000"
    },

    {
      image: "/images/Hard Cover Book (1).png",
      title: "Investment Made Simple",
      description: "Start from 10k naira and build wealth",
      price: "₦4,000"
    },
    {
      image: "/images/Hard Cover Book.png",
      title: "Webinar: Mastering the New Tax Rules",
      description: "Tips for 2026",
      price: "₦4,000"
    }
  ];

  const visibleModules = learningModules.slice(currentLearningIndex, currentLearningIndex + 4);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-growtt-dark-teal/95 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <GrowttLogo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:justify-start items-center gap-8">
              <div className="flex items-center gap-6 text-sm text-white/90">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <button onClick={() => setShowServicesModal(true)} className="hover:text-white transition-colors">Services</button>
              </div>
              <div className="flex items-center gap-3">
                <button 
                onClick={() => setShowFAQModal(true)} 
                className="px-4 py-1 text-[15px] text-white border border-growtt-orange rounded-md hover:bg-white/10 transition-colors">
                  FAQs
                </button>
                <button 
                // id="explore"
                className="px-4 py-1 text-[15px] bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors">
                  <a href="#explore" className="decoration-none"> Explore </a>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 z-[60] "
            >
              {mobileMenuOpen ? <X className="w-6 h-6 mr-4" /> : <Menu className="w-6 h-6 mr-4" />}
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
              className="fixed inset-0 bg-black/50 z-[55] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-growtt-dark-teal md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6 pt-20 bg-growtt-dark-teal">
                <div className="flex flex-col gap-6 bg-growtt-dark-teal w-full p-8 justify-center">
                  <a href="#" className="text-white/90 hover:text-white transition-colors py-2 text-lg">Home</a>
                  <a href="#" className="text-white/90 hover:text-white transition-colors py-2 text-lg">About Us</a>
                  <button onClick={() => { setShowServicesModal(true); setMobileMenuOpen(false); }} className="text-white/90 hover:text-white transition-colors py-2 text-lg text-left">Services</button>
                  <button onClick={() => { setShowFAQModal(true); setMobileMenuOpen(false); }} className="text-white/90 hover:text-white transition-colors py-2 text-lg text-left">FAQ</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative bg-growtt-dark-teal text-white pt-[46px] pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6 z-10 mt-12 md:mt-0">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight">
                <img 
                    src="/images/logo.png" 
                    alt="Investor" 
                    className="block w-[408px] h-[125px] object-cover md:scale-x-100 md:block hidden"
                  />
              </h1>
              <h1 className="text-[41px] sm:text-4xl lg:text-5xl font-light">
                Invest with <span className="text-growtt-orange">Knowledge</span>
                <br/>not Hype
              </h1>
              <p className="text-lg text-white/80 max-w-xl text-center md:text-left">
Stay ahead of the curve with the insights from Growtt. Subscribe to our newsletter for investment tips, product updates and exclusive pre-launch opportunities.           </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setShowNewsletterModal(true)}
                  className="px-6 py-3 bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors flex items-center gap-2">
                  Subscribe Now
                </button>
                <button 
                onClick={() => setShowWaitlistModal(true)}
                className="px-6 py-3 border border-growtt-orange text-white rounded-md hover:bg-white/10 transition-colors flex items-center gap-2">
                  Join Waitlist
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-[500px] mx-auto">
                <div className="w-full aspect-square overflow-hidden flex justify-center items-center">
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-full"
                  >
                    <img 
                      src="/images/hero-images.png" 
                      alt="Investment illustration" 
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 border-2 border-growtt-teal rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-growtt-teal rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-growtt-dark-teal">
        <div className="max-w-7xl mx-auto md:flex">
          <div className="mt-[120px]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[400px] mb-12"
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">How It Works</h3>
              <h2 className="text-4xl sm:text-5xl font-light text-white ">
                Investing in Three Simple Steps
              </h2>
            </motion.div>

            <ScrollButtons />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-1 md:w-full card md:overflow-x-auto md:overflow-y-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:gap-4">
              {[
                {
                  title: "Explore Opportunities",
                  description: "Discover a wide range of investment options tailored to your goals",
                  gradient: "from-orange-200 to-yellow-200",
                  image: "/images/i1.png"
                },
                {
                  title: "Build Your Portfolio",
                  description: "Customize your portfolio with our intuitive platform",
                  gradient: "from-yellow-200 to-orange-200",
                  image: "/images/i2.png"
                },
                {
                  title: "Watch Your Investment Grow",
                  description: "Monitor performance and grow your wealth",
                  gradient: "from-orange-200 to-yellow-100",
                  image: "/images/i4.png"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8 flex flex-col justify-between min-h-[500px] md:flex-shrink-0 md:w-[290px]`}
                >
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <img src={step.image} alt="" className="w-64 h-64 object-contain md:block hidden" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-xl font-semibold text-gray-900 mb-10 md:mb-2">{step.title}</h4>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diverse Investment Opportunities */}
      <section id="explore" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-growtt-teal font-bold text-sm uppercase tracking-wide mb-4">
              Invest in Variety
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
              Explore Diverse Investment Opportunities
            </h2>

            <div className="flex justify-center mb-12">
              <GrowttLogo /> 
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 text-center"
          >
            {[
              {
                icon: TrendingUp,
                text: "Public Market Investments",
                color: "text-growtt-teal",
              },
              {
                icon: LineChart,
                text: "Alternative Bonds / Special Purpose Funds",
                color: "text-growtt-teal",
              },
              {
                icon: Lock,
                text: "Private Market Investments",
                color: "text-growtt-teal",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="shadow-xl flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-6">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <p className="text-gray-900 font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className='absolute top-[600px] right-0 w-16 h-16 hidden md:block'>
            <img src='/images/Vector.png' alt='vector' />
          </div>
          <div className='absolute top-[1210px] left-14 w-16 h-16 hidden md:block'>
            <img src='/images/Vector.png' alt='vector' />
          </div>
        </div>
      </section>

      {/* Investment Discovery Platform */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
                Unlock Your Financial Future with Our Investment Discovery Platform
              </h2>
              <p className="text-gray-600 text-lg">
                Discover tailored investment opportunities with our advanced platform that analyzes your financial goals and risk tolerance to recommend the perfect portfolio mix.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personalized Insights</h4>
                  <p className="text-gray-600 text-sm">Get recommendations based on your unique financial situation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-Time Data</h4>
                  <p className="text-gray-600 text-sm">Access up-to-date market information and trends</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/unlock-image.png" 
                alt="Investment Platform" 
                className="w-[408px] h-auto rounded-2xl shadow-2xl md:ml-12"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Learning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-growtt-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-900 font-bold text-sm uppercase tracking-wide mb-4">
              Premium Learning
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 max-w-4xl mx-auto">
              Take your investment knowledge to the next level with our premium learning modules.
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {visibleModules.map((module, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="space-y-4"
                >
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-normal text-gray-900 mb-2">{module.title}</h4>
                    <p className="text-gray-600 text-sm">{module.description}</p>
                    <h4 className="text-[18px] font-normal text-gray-900 mb-2">{module.price}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={() => setCurrentLearningIndex(Math.max(0, currentLearningIndex - 1))}
                disabled={currentLearningIndex === 0}
                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentLearningIndex(Math.min(learningModules.length - 4, currentLearningIndex + 1))}
                disabled={currentLearningIndex >= learningModules.length - 4}
                className="p-3 bg-growtt-dark-teal border border-gray-300 rounded-lg hover:bg-growtt-dark-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" viewBox="0 0 24 24" fill="#030712">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-2xl text-gray-900 italic">
              "These Growtt emails are gems! Simple tips that actually make sense!"
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
              <div className="text-left">
                <p className="font-bold text-gray-900">John Doe</p>
                <p className="text-gray-600">Investor, TechCorp</p>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <GrowttLogo />
            </div>
            <div className="flex justify-center gap-2 mt-8">
              <button className="w-2 h-2 rounded-full bg-gray-900"></button>
              <button className="w-2 h-2 rounded-full bg-gray-300"></button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://api.builder.io/api/v1/image/assets/TEMP/d0eaa866fd23a920969295acde017b69ecbc8397?width=2000')"
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-white space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-light">
            Start Your Investment Journey Today
          </h2>
          <p className="text-xl text-white/90">
            Join us now to unlock personalized investment opportunities tailored just for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white/20 text-white rounded-md hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <GrowttLogo />
            </div>
            <div className="flex flex-wrap gap-8 md:col-span-2 justify-center">
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors text-sm">About Us</a>
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors text-sm">Our Services</a>
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors text-sm">Contact Us</a>
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors text-sm">Blog Posts</a>
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors text-sm">Help Center</a>
            </div>
            <div className="flex gap-3 justify-end">
              <a href="#" target="_blank" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/growttco/?hl=am-et" target="_blank" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/growttco/" target="_blank" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@GrowttCo" target="_blank" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
              <p>© 2025 Growtt. All rights reserved.</p>
              <a href="#" className="underline hover:text-growtt-teal transition-colors">Privacy Policy</a>
              <a href="#" className="underline hover:text-growtt-teal transition-colors">Terms of Service</a>
              <a href="#" className="underline hover:text-growtt-teal transition-colors">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <NewsletterModal 
        open={showNewsletterModal} 
        onOpenChange={setShowNewsletterModal}
      />
      <WaitlistModal 
        open={showWaitlistModal} 
        onOpenChange={setShowWaitlistModal}
        onSubscribe={handleWaitlistSubscribe}
      />
      <FAQModal 
        open={showFAQModal} 
        onOpenChange={setShowFAQModal}
      />
      
      {/* Services Coming Soon Modal */}
      <AnimatePresence>
        {showServicesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/50"
            onClick={() => setShowServicesModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-8 shadow-xl max-w-sm mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">Coming Soon</h3>
              <p className="text-gray-600 text-center">Our services page will be available soon. Stay tuned!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}