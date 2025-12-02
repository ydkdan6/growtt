import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Menu,
  X,
  TrendingUp,
  LineChart,
  Lock,
  ChevronDown,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ExploreSection from "../components/ExploreSection";
import { SeedsSection } from "../components/SeedSection";
import { Link, useNavigate } from "react-router-dom";
import { GrowttLogo } from "../components/logo";
import { FAQModal } from "../components/Modal/FAQModal";
import { NewsletterModal } from "../components/Modal/Newsletter";
import { WaitlistModal } from "../components/Modal/WaitListModal";
import { ServicesDropdown } from "../components/Modal/ServicesDropdown";
import { ContactDropdown } from "../components/Modal/ContactUsDropdown";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentLearningIndex, setCurrentLearningIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showNewsletterModal, setShowNewsletterModal] = useState(true);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [showEbookModal, setShowEbookModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
const [selectedEbook, setSelectedEbook] = useState<number | null>(null);
  const navigate = useNavigate();

  //Dummy for now
  const handleLogin = () => {
    navigate('/login');
  }

  const handleContactClick = () => {
  setShowServicesModal(false);
  setShowContactModal(true);
};

  const ScrollButtons = () => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
      const container = document.querySelector(".card") as HTMLElement;

       const updateButtonStates = () => {
        if (container) {
          setCanScrollLeft(container.scrollLeft > 1);
          setCanScrollRight(
            container.scrollLeft <
              container.scrollWidth - container.clientWidth - 1,
          );
        }
      };

      if (container) {
        container.addEventListener("scroll", updateButtonStates);
        updateButtonStates(); // Initial check
      }

      return () => {
        if (container) {
          container.removeEventListener("scroll", updateButtonStates);
        }
      };
    }, []);

    const scrollLeft = () => {
      const container = document.querySelector(".card") as HTMLElement;
      if (container) {
        container.scrollBy({ left: -450, behavior: "smooth" });
      }
    };

    const scrollRight = () => {
      const container = document.querySelector(".card") as HTMLElement;
      if (container) {
        container.scrollBy({ left: 450, behavior: "smooth" });
      }
    };

    return (
      <div className="md:gap-8 md:mb-8 md:flex hidden">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="w-10 h-10 rounded bg-growtt-dark-teal border-2 border-gray-400 hover:bg-white/30 flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-growtt-dark-teal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left-icon lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="w-10 h-10 rounded bg-growtt-dark-teal border-2 border-gray-200 hover:bg-white/30 flex items-center justify-center text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-growtt-dark-teal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right-icon lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
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
    price: "₦2,000",
    url: "https://selar.com/666dh55544",
    fullTitle: "Investing Made Simple: How to Start from ₦10,000 and Build Wealth",
    fullDescription: "A beginner's roadmap to making your money work for you — the Growtt way",
    details: `This guide demystifies the world of investing in Nigeria. It teaches you the fundamentals of wealth-building, showing how to start small, manage risks, and grow your money over time — even on a student or entry-level budget. Readers will learn about different investment options (from treasury bills to mutual funds, stocks, and real estate), how to build their first investment portfolio, and the power of compounding that turns small monthly deposits into big results.`,
    idealFor: "Beginners who want to escape the just saving trap and start building long-term wealth with confidence and strategy."
  },
  {
    image: "/images/Hard Cover Book (2).png",
    title: "5 Skills to learn and earn as a student",
    description: "Learn Skill earn income",
    price: "₦2,000",
    url: "https://selar.com/5u5334k24e",
    fullTitle: "5 In-Demand Skills You Can Learn and Monetize as a Student",
    fullDescription: "Your practical guide to earning income while studying",
    details: `This ebook reveals five high-demand, beginner-friendly skills that students can learn and start earning from within months. From freelance writing and graphic design to social media management, video editing, and web development basics — each skill is broken down with learning resources, real income potential, and tips on getting your first clients. Perfect for students looking to build financial independence without waiting for graduation.`,
    idealFor: "Students and young professionals who want to develop marketable skills and start earning income on their own terms."
  },
  {
    image: "/images/Hard Cover Book.png",
    title: "Webinar: Mastering the New Tax Rules",
    description: "Tips for 2026",
    price: "₦2,000",
    url: "https://selar.com/554843d751",
    fullTitle: "What the New Tax Policy Means for You and I",
    fullDescription: "Understand how Nigeria's 2025 tax reforms affect your money, business, and future.",
    details: `This e-book simplifies Nigeria's new tax regime into plain, practical language for both individuals and businesses. You'll discover how taxes are now calculated, what has changed under the new Tax Administration Act (NTAA 2025), and how to legally reduce your tax burden through smart planning. It breaks down real examples — from employee salaries to SME revenues — helping readers understand their obligations and opportunities under the new policy. By the end, you'll know how to stay compliant, save money, and make smarter financial decisions in 2025 and beyond.`,
    idealFor: "Entrepreneur, salary earners, freelancers, and business owners who want clarity on Nigeria's evolving tax landscape."
  },
];

  const visibleModules = learningModules.slice(
    currentLearningIndex,
    currentLearningIndex + 4,
  );

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
      <img
        src="/images/logo.png"
        alt="Investor"
        loading="lazy"
        className="md:hidden block w-[140px] h-[40px] object-cover md:scale-x-40"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:justify-between items-center flex-1">
        <div className="flex items-center gap-6 text-sm text-white/90">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
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
              setShowWaitlistModal(true)
              setMobileMenuOpen(false);
            }}
            className="hover:text-white transition-colors"
          >
            Join Waitlist
          </button>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

  </div>
</motion.nav>

      {/* Hero Section */}
      <section className="relative bg-growtt-dark-teal text-white pt-[46px] pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 w-[480px] h-[480px]"
          style={{
            backgroundImage: 'url(/images/chechpattern.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Top Left Shadow Effect */}
        {/* <div 
          className="absolute top-0 left-0 w-[90px] h-[90px] border-none"
          style={{
            border: 'transparent',
            background: 'radial-gradient(circle at top left, rgba(165, 161, 161, 0.3) 0%, transparent 70%)',
            boxShadow: '-20px -20px 60px rgba(109, 109, 109, 0.2) inset'
          }}
        /> */}
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6 z-10 mt-12 md:mt-0">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight">
                <img
                  src="/images/logo.png"
                  alt="Investor"
                  loading="lazy"
                  className="block w-[408px] h-[125px] object-cover md:scale-x-100 md:block hidden"
                />
              </h1>
              <h1 className="text-[41px] sm:text-4xl lg:text-5xl font-light">
                Invest with{" "}
                <span className="text-growtt-orange">Knowledge</span>
                <br />
                not Hype
              </h1>
              <p className="text-lg text-white/80 max-w-xl text-center md:text-left">
                Stay ahead of the curve with the insights from Growtt. Subscribe
                to our newsletter for investment tips, product updates and
                exclusive pre-launch opportunities.{" "}
              </p>
              
              {/* Desktop CTAs */}
              <div className="hidden md:flex flex-wrap gap-4">
                <button
                  onClick={() => setShowNewsletterModal(true)}
                  className="px-6 py-3 bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors flex items-center gap-2"
                >
                  Explore
                </button>
                <button
                  onClick={() => setShowWaitlistModal(true)}
                  className="px-6 py-3 border border-growtt-orange text-white rounded-md hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <div className="flex justify-center gap-2 items-center">
                  <img
                  src="/images/Vector (4).png"
                  alt="Investor"
                  loading="lazy"
                  className="block w-[15px] h-[15px] object-cover"
                /> <span>|</span>
                <img
                  src="/images/playstore logo.png"
                  alt="Investor"
                  loading="lazy"
                  className="block w-[15px] h-[15px] object-cover"
                />
                <span>Coming Soon</span>
                  </div>
                  
                </button>
              </div>

              {/* Mobile CTAs */}
              <div className="flex md:hidden justify-center flex-wrap gap-4">
                <button
                  onClick={() => setShowNewsletterModal(true)}
                  className="px-6 py-3 bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors flex items-center gap-2"
                >
                  Subscribe Now
                </button>
                <button
                  onClick={() => setShowWaitlistModal(true)}
                  className="px-6 py-3 border border-growtt-orange text-white rounded-md hover:bg-white/10 transition-colors flex items-center gap-2"
                >
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
              <div className="relative w-full max-w-[500px] mx-auto mt-6">
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
              <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
                How It Works
              </h3>
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
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:gap-4">
              {[
                {
                  title: "Learn",
                  description:
                    "Starts by building knowledge through expert-led content, courses, and insights designed to help you think like an investor..",
                  gradient: "from-orange-200 to-yellow-200",
                  image: "/images/cuate.png",
                },
                {
                  title: "Plant Your Seeds",
                  description:
                    "As you learn and explore, you'll earn and use seeds your learning credits that unlock more access across the platform. The more you engage, the more your growth compounds.",
                  gradient: "from-yellow-200 to-orange-200",
                  image: "/images/cuate02.png",
                },
                {
                  title: "Watch Your Investment Grow",
                  description: "Monitor performance and grow your wealth",
                  gradient: "from-orange-200 to-yellow-100",
                  image: "/images/rafiki.png",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`bg-gradient-to-br ${step.gradient} md:text-center rounded-2xl p-14 flex flex-col justify-between min-h-[500px] md:flex-shrink-0 md:w-[290px]`}
                >
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <img
                      src={step.image}
                      loading="lazy"
                      alt=""
                      className="w-64 h-64 object-contain md:block hidden"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-xl md:text-center font-semibold text-gray-900 mb-10 md:mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diverse Investment Opportunities */}
      {/* <section
        id="explore"
        className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-16 bg-gray-50"
      >
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
                text: "Public Market Instruments",
                color: "text-growtt-teal",
              },
              {
                icon: LineChart,
                text: "Alternative Deals / Special Purpose Funds",
                color: "text-growtt-teal",
              },
              {
                icon: Lock,
                text: "Private Market Instruments",
                color: "text-growtt-teal",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="shadow-xl flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-6 btn">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <p className="text-gray-900 font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute top-[600px] right-0 w-16 h-16 hidden md:block">
            <img src="/images/Vector.png" alt="vector" loading="lazy" />
          </div>
          <div className="absolute top-[1210px] left-14 w-16 h-16 hidden md:block">
            <img src="/images/Vector.png" alt="vector" loading="lazy" />
          </div>
        </div>
      </section> */}
      <ExploreSection />

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
                Unlock Your Financial Future with Our Investment Discovery
                Platform
              </h2>
              <p className="text-gray-600 text-lg">
                Discover tailored investment opportunities with our advanced
                platform that analyzes your financial goals and risk tolerance
                to recommend the perfect portfolio mix.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Personalized Insights
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Get recommendations based on your unique financial situation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Real-Time Data
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Access up-to-date market information and trends
                  </p>
                </div>
              </div>
              <button onClick={handleLogin} className="px-6 py-3 bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors">
                Connect
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
                loading="lazy"
                className="w-[408px] h-auto rounded-2xl shadow-2xl md:ml-12"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seed Section */}
      <SeedsSection />

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
              Take your investment knowledge to the next level with our premium
              learning modules.
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 flex justify-center items-center md:ml-[260px]"
            >
              {visibleModules.map((module, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="space-y-4 "
                >
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={module.image}
                      alt={module.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
  <h4 className="text-xl font-normal text-gray-900 mb-2">
    {module.title}
  </h4>
  <p className="text-gray-600 text-sm">
    {module.description}
  </p>
  <h4 className="text-[18px] font-normal text-gray-900 mb-2">
    {module.price}
  </h4>
  <button
    onClick={() => {
      setSelectedEbook(index + currentLearningIndex);
      setShowEbookModal(true);
    }}
    className="mt-4 px-6 py-2 bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors"
  >
    Preview Now
  </button>
</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={() =>
                  setCurrentLearningIndex(Math.max(0, currentLearningIndex - 1))
                }
                disabled={currentLearningIndex === 0}
                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentLearningIndex(
                    Math.min(
                      learningModules.length - 4,
                      currentLearningIndex + 1,
                    ),
                  )
                }
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
                <svg
                  key={i}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="#030712"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl text-gray-900 italic">
              Never thought i'd ever get to experience straightto the point access on new investment opportunities. Growtt solved that.
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Joy</p>
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
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://api.builder.io/api/v1/image/assets/TEMP/d0eaa866fd23a920969295acde017b69ecbc8397?width=2000')",
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
            Join us now to unlock personalized investment opportunities tailored
            just for you.
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
              <a
                href="#"
                className="text-gray-900 hover:text-growtt-teal transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-growtt-teal transition-colors text-sm"
              >
                Our Services
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-growtt-teal transition-colors text-sm"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-growtt-teal transition-colors text-sm"
              >
                Blog Posts
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-growtt-teal transition-colors text-sm"
              >
                Help Center
              </a>
            </div>
            <div className="flex gap-3 justify-end">
              <a
                href="#"
                target="_blank"
                className="text-gray-900 hover:text-growtt-teal transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/growttco/?hl=am-et"
                target="_blank"
                className="text-gray-900 hover:text-growtt-teal transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-900 hover:text-growtt-teal transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/growttco/"
                target="_blank"
                className="text-gray-900 hover:text-growtt-teal transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@GrowttCo"
                target="_blank"
                className="text-gray-900 hover:text-growtt-teal transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
              <p>&copy; 2025 Growtt.All Right Reserved</p>
              <a
                href="#"
                className="underline hover:text-growtt-teal transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="underline hover:text-growtt-teal transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="underline hover:text-growtt-teal transition-colors"
              >
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
<ContactDropdown 
  isOpen={showContactModal} 
  onClose={() => setShowContactModal(false)} 
/>

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
      <FAQModal open={showFAQModal} onOpenChange={setShowFAQModal} />

      {/* Services Coming Soon Modal */}
      {/* <AnimatePresence>
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
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                Coming Soon
              </h3>
              <p className="text-gray-600 text-center">
                Our services page will be available soon. Stay tuned!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Ebook Preview Modal */}
<AnimatePresence>
  {showEbookModal && selectedEbook !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/50 p-4"
      onClick={() => {
        setShowEbookModal(false);
        setSelectedEbook(null);
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">Preview</h3>
          <button
            onClick={() => {
              setShowEbookModal(false);
              setSelectedEbook(null);
            }}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8">
          <h4 className="text-3xl font-semibold text-gray-900 mb-4">
            Description
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {learningModules[selectedEbook].fullTitle}
          </h2>
          
          <p className="text-lg font-semibold text-gray-800 mb-4">
            {learningModules[selectedEbook].fullDescription}
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {learningModules[selectedEbook].details}
          </p>
          
          <p className="text-gray-700 italic mb-8">
            <span className="font-semibold">Ideal for: </span>
            {learningModules[selectedEbook].idealFor}
          </p>
          
          <a 
  href={learningModules[selectedEbook].url}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    setShowEbookModal(false);
    setSelectedEbook(null);
  }}
  className="block w-full px-6 py-3 bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors font-medium text-center no-underline"
>
  Get eBook
</a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
