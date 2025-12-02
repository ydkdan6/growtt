import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GrowttLogo } from './logo';
import { TrendingUp, LineChart, Lock } from 'lucide-react';

// Card data for each category
const cardData = {
  public: [
    { title: 'Treasury Bills', subtitle: 'Short-Term Government Bills', image: '/images/a.png' },
    { title: 'FGN Bonds', subtitle: 'Backed by the Federal Government', image: '/images/b.png' },
    { title: 'Savings Bonds', subtitle: 'Secure Investment for Individuals', image: '/images/c.png' },
    { title: 'Corporate Bonds', subtitle: 'Issued by Reputable Companies', image: '/images/d.png' },
    { title: 'Treasury Bills', subtitle: 'Short-Term Government Bills', image: '/images/a.png' },
    { title: 'FGN Bonds', subtitle: 'Backed by the Federal Government', image: '/images/b.png' },
    { title: 'Savings Bonds', subtitle: 'Secure Investment for Individuals', image: '/images/c.png' },
    { title: 'Corporate Bonds', subtitle: 'Issued by Reputable Companies', image: '/images/d.png' },
  ],
  alternative: [
    { title: 'Commercial Papers', subtitle: 'Short-term debt instruments', image: '/images/e.png' },
    { title: 'Private Notes', subtitle: 'Custom debt offerings', image: '/images/f.png' },
    { title: 'REITs', subtitle: 'Real Estate Investment Trusts', image: '/images/g.png' },
    { title: 'Venture Deals', subtitle: 'High-potential Ventures', image: '/images/h.png' },
    { title: 'PE Deals', subtitle: 'Private Equity Opportunities', image: '/images/i.png' },
    { title: 'Green Bonds', subtitle: 'Bonds dedicated to climate projects', image: '/images/k.png' },
    { title: 'Infrastructure Notes', subtitle: 'Long-term Infrastructure Bonds', image: '/images/l.png' },
    // { title: 'Revenue-Based Financing', subtitle: 'Flexible repayment options', image: '/images/revenue-financing.jpg' },
  ],
  private: [
    { title: 'Real Estate Investments', subtitle: 'Invest in properties and developments', image: '/images/m.png' },
    { title: 'Agro-Investments', subtitle: 'Fund agriculture projects and agribusiness ventures', image: '/images/n.png' },
    { title: 'Digital Art', subtitle: 'Own unique digital artworks and NFT-based assets', image: '/images/o.png' },
    { title: 'Club deals', subtitle: 'Join group investments with pooled capital', image: '/images/p.png' },
    { title: 'Female-led startups', subtitle: 'Support innovative businesses founded by women', image: '/images/q.png' },
    // { title: 'Real Estate Investments', subtitle: 'Invest in properties and developments', image: '/images/real-estate.jpg' },
    // { title: 'Agro-Investments', subtitle: 'Fund agriculture projects and agribusiness ventures', image: '/images/agro-investments.jpg' },
    // { title: 'Digital Art', subtitle: 'Own unique digital artworks and NFT-based assets', image: '/images/digital-art.jpg' },
  ],
};

const InfiniteScrollCards = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const duplicatedCards = [...cards, ...cards, ...cards];
  const totalWidth = duplicatedCards.length * 296; // 280px width + 16px gap
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden py-8"
    >
      {/* Desktop: Infinite Scroll */}
      <div className="relative hidden md:block">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -totalWidth / 3],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] h-[200px] rounded-lg overflow-hidden shadow-lg relative group"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Single Card Carousel */}
      <div className="md:hidden relative">
        <div className="flex justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-[280px] h-[200px] rounded-lg overflow-hidden shadow-lg relative"
          >
            <img
              src={cards[currentIndex].image}
              alt={cards[currentIndex].title}
              className="w-full h-full object-cover"
              loading='lazy'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">{cards[currentIndex].title}</h3>
              <p className="text-white/90 text-sm">{cards[currentIndex].subtitle}</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-growtt-teal w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Auto-advance for mobile */}
        <div className="hidden">
          {setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
          }, 3000)}
        </div>
      </div>
    </motion.div>
  );
};

const ExploreSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      icon: TrendingUp,
      text: "Public Market Instruments",
      color: "text-growtt-teal",
      key: "public",
    },
    {
      icon: LineChart,
      text: "Alternative Deals / Special Purpose Funds",
      color: "text-growtt-teal",
      key: "alternative",
    },
    {
      icon: Lock,
      text: "Private Market Instruments",
      color: "text-growtt-teal",
      key: "private",
    },
  ];

  const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};


  return (
    <section
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
          {categories.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="shadow-xl flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg hover:bg-growtt-teal hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setActiveCategory(activeCategory === item.key ? null : item.key)}
                className="flex items-center gap-6 btn w-full cursor-pointer hover:bg-growtt-teal transition-colors p-1 rounded-lg"
              >
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <p className="text-gray-900 font-medium">{item.text}</p>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Scrolling Cards */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <InfiniteScrollCards cards={cardData[activeCategory]} />
          )}
        </AnimatePresence>

        <div className="absolute top-[600px] right-0 w-16 h-16 hidden md:block">
          <img src="/images/Vector.png" alt="vector" loading="lazy" />
        </div>
        <div className="absolute top-[1210px] left-14 w-16 h-16 hidden md:block">
          <img src="/images/Vector.png" alt="vector" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
