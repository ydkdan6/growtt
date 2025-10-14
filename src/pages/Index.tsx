import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Linkedin, Youtube, Menu, X, TrendingUp, LineChart, Lock } from "lucide-react";
import { useState } from "react";
import { GrowttLogo } from '../components/logo';

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

  const learningModules = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5fcdd4c7b38e33772e45d0e21d0531f2071eaf48?width=634",
      title: "Study: Investment Basics",
      description: "Learn the fundamentals of investing"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/20c8da2c4f9e1a18775c7b57aa4185a77824391b?width=634",
      title: "Guide: First-Time Investor",
      description: "Your guide to smart investing"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d19682e4cbc06c749a4b885cd3ae9849cd0efe94?width=634",
      title: "Webinar: Mastering the Market",
      description: "Learn from top investors"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/44c5b6397f776ccbc607f1cdeb50cc3e000b6bcb?width=634",
      title: "Advanced Investment Strategies",
      description: "Strategies for experienced investors"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/566e0f3b8dea69365134c205f66df4b18bcb68cb?width=634",
      title: "Retirement Planning",
      description: "Plan for your financial future"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4660a904f1aefbc073cb3ced504bda46e764d293?width=634",
      title: "Tax Implications of Investments",
      description: "Understand tax rules for investments"
    }
  ];

  const visibleModules = learningModules.slice(currentLearningIndex, currentLearningIndex + 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-growtt-dark-teal/95 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-lg text-white/90">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <a href="#" className="hover:text-white transition-colors">Services</a>
              </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:justify-start items-center gap-8">
              {/* <div className="flex items-center gap-6 text-sm text-white/90">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <a href="#" className="hover:text-white transition-colors">Services</a>
              </div> */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-lg text-white border border-growtt-orange rounded-md hover:bg-white/10 transition-colors">
                  Sign In
                </button>
                <button className="px-4 py-2 text-lg bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-white/90 hover:text-white transition-colors py-2">Home</a>
                  <a href="#" className="text-white/90 hover:text-white transition-colors py-2">About Us</a>
                  <a href="#" className="text-white/90 hover:text-white transition-colors py-2">Services</a>
                  <button className="px-4 py-2 text-sm text-white border border-white/20 rounded-md hover:bg-white/10 transition-colors">
                    Sign In
                  </button>
                  <button className="px-4 py-2 text-sm bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors">
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative bg-growtt-dark-teal text-white pt-24 pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6 z-10">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight">
                <img 
                    src="/images/logo.png" 
                    alt="Investor" 
                    className="block w-[408px] h-[125px] object-cover md:scale-x-100"
                  />
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
                Invest with <span className="text-growtt-orange">Knowledge</span>
                <br />not Hype
              </h2>
              <p className="text-lg text-white/80 max-w-xl">
                Unlock smarter investment opportunities with data-driven insights. Explore alternative portfolios, Bitcoin, Ethereum and build a more informed strategy today.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-growtt-teal text-white rounded-md hover:bg-growtt-teal/90 transition-colors flex items-center gap-2">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-white/20 text-white rounded-md hover:bg-white/10 transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Coming Soon
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Gradient Background */}
              <div className="relative w-full aspect-square">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-growtt-orange via-yellow-400 to-growtt-orange rounded-full"></div> */}
                <div className="w-full h-[484px] absolute inset-8 overflow-hidden">
                  <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-full h-full"
          >
                  <img 
                    src="/images/hero-images.png" 
                    alt="Investor" 
                    className="w-full h-full object-cover pr-6"
                  />
                  </motion.div>
                </div>
                {/* Decorative circles */}
                {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-growtt-teal rounded-full opacity-30"></div> */}
                {/* <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-growtt-teal rounded-full opacity-40"></div> */}
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
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-4">How It Works</h3>
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
              Investing in Three Simple Steps
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
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
                image: "/images/i1.png"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8 flex flex-col justify-between min-h-[400px]`}
              >
                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className="w-64 h-64 bg-white/50 rounded-2xl flex items-center justify-center">
                    <img src={step.image} alt="" className="w-64 h-64 object-contain" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diverse Investment Opportunities */}
      <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-16 bg-gray-50">
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

      {/* 👇 Centered GrowttLogo */}
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

      {/* Seeds Your Currency Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
              Seeds Your Currency for Smarter{" "}
              <span className="text-growtt-orange">Growth</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              Introducing Seeds, a new way to invest in crypto-flexible asset with curated risk-return and platform fees. Ready to amplify your investment journey without compromise.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { image: "https://api.builder.io/api/v1/image/assets/TEMP/94e0dfbdae445615659f0dc47d0d532cdcb6618e?width=400", title: "Altcoin Discovery", desc: "Explore emerging cryptocurrencies" },
              { image: "https://api.builder.io/api/v1/image/assets/TEMP/94e0dfbdae445615659f0dc47d0d532cdcb6618e?width=400", title: "Bitcoin Funds", desc: "Invest in Bitcoin with confidence" },
              { image: "https://api.builder.io/api/v1/image/assets/TEMP/94e0dfbdae445615659f0dc47d0d532cdcb6618e?width=400", title: "Ethereum Staking", desc: "Earn rewards through staking" },
              { image: "https://api.builder.io/api/v1/image/assets/TEMP/94e0dfbdae445615659f0dc47d0d532cdcb6618e?width=400", title: "DeFi Opportunities", desc: "Access decentralized finance" }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img src={card.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              "This platform transformed my investment strategy. I found opportunities I never knew existed!"
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
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-900 hover:text-growtt-teal transition-colors">
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
    </div>
  );
}
