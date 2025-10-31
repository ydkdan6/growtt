import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogClose } from "./../components/ui/dialog";
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Lightbulb, 
  EyeIcon, 
  TrendingUp,
  Calendar,
  Rocket,
  Package,
  Users,
  ChevronDown,
  X
} from "lucide-react";

interface ModalContent {
  icon: string;
  title: string;
  content: string[];
}

const modalContents: Record<string, ModalContent> = {
  mission: {
    icon: "🎯",
    title: "Our Mission",
    content: [
      "At InvestSmart, our mission is to democratize investing by providing accessible, sophisticated investment tools and insights to everyone. We believe that financial growth should not be limited to a select few, but should be an opportunity available to all.",
      "We are committed to simplifying complex financial decisions and empowering our users to take control of their financial future with confidence. Through innovative technology and user-centric design, we make investing approachable and understandable.",
      "Our platform is built on the foundation of education, transparency, and support, ensuring that every user has the resources they need to make informed investment decisions and achieve their financial goals."
    ]
  },
  vision: {
    icon: "🌍",
    title: "Our Vision",
    content: [
      "At Growtt, we envision a future where investing is no longer reserved for a select few, but an accessible and empowering journey for everyone — from students taking their first financial steps to professionals expanding their wealth portfolios. Our goal is to redefine what it means to build wealth in Africa by creating a platform that simplifies complex investment opportunities and makes financial growth feel natural and attainable.",
      "We believe in merging technology with human understanding. Through our AI-driven insights, Growtt helps users make smarter financial decisions, identify real opportunities, and manage risk effectively. We see this as the future of investing, a space where data and human intuition coexist to guide every user toward smarter outcomes.",
      "Ultimately, Growtt's vision is to become Africa's most trusted digital partner for wealth creation — a platform where users learn, invest, and grow seamlessly. We want to build a generation of confident investors who not only understand money but also use it purposefully to shape their lives and their communities"
    ]
  },
  trust: {
    icon: "🛡️",
    title: "Trust",
    content: [
      "Trust is the cornerstone of everything we do at InvestSmart. We understand that when you invest with us, you're placing your financial future in our hands, and we take that responsibility seriously.",
      "We maintain the highest standards of security, transparency, and regulatory compliance to ensure your investments and personal information are always protected. Our platform uses bank-level encryption and follows industry best practices.",
      "We believe in building long-term relationships with our users based on honesty, reliability, and consistent performance. Your trust drives us to continuously improve and deliver on our promises."
    ]
  },
  innovation: {
    icon: "💡",
    title: "Innovation",
    content: [
      "Innovation is at the heart of InvestSmart. We constantly push the boundaries of what's possible in financial technology to provide you with cutting-edge tools and insights that give you a competitive advantage.",
      "Our team leverages artificial intelligence, machine learning, and advanced analytics to deliver personalized investment recommendations and market insights that were once only available to institutional investors.",
      "We're committed to staying ahead of market trends and technological advancements, ensuring that our platform evolves with your needs and the changing financial landscape."
    ]
  },
  transparency: {
    icon: "👁️",
    title: "Transparency",
    content: [
      "Transparency is fundamental to building trust and empowering our users. At InvestSmart, we believe you have the right to understand exactly how your money is being invested and what fees you're paying.",
      "We provide clear, detailed information about all investment products, their associated risks, and potential returns. No hidden fees, no fine print - just honest, straightforward communication.",
      "Our commitment to transparency extends to our business practices, our decision-making processes, and our communication with you. We're always here to answer your questions and explain our reasoning."
    ]
  },
  growth: {
    icon: "📈",
    title: "Growth",
    content: [
      "Growth is our shared objective - both yours and ours. We're dedicated to helping you grow your wealth through smart, strategic investments while we grow as a company and a community.",
      "We focus on sustainable, long-term growth strategies rather than quick wins. Our investment philosophy emphasizes steady, consistent returns that compound over time to build lasting wealth.",
      "We invest in your growth through education, resources, and support. As you grow as an investor, we grow as a platform, continuously improving our services based on your feedback and needs."
    ]
  }
};

export default function About() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const ModalButton = ({ 
    icon: Icon, 
    label, 
    modalKey 
  }: { 
    icon: React.ElementType; 
    label: string; 
    modalKey: string;
  }) => (
    <button
      onClick={() => setOpenModal(modalKey)}
      className="flex items-center gap-3 px-4 py-4 border border-gray-300/20 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-pointer w-full"
    >
      <Icon className="w-6 h-6 text-gray-900 flex-shrink-0" />
      <span className="text-gray-900 text-base font-normal">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#002626] px-4 md:px-10 lg:px-20 py-4 md:py-6 sticky top-0 z-40">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 md:gap-8">
            <Link to="/" className="text-white/60 text-sm md:text-base hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white text-sm md:text-base font-bold whitespace-nowrap">About Us</span>
            <button className="hidden sm:flex items-center gap-2 text-white/60 text-sm md:text-base hover:text-white transition-colors">
              Services
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="px-3 md:px-5 py-1.5 md:py-2 border border-white/20 rounded-lg text-white text-sm md:text-base hover:bg-white/10 transition-colors whitespace-nowrap">
              Login
            </button>
            <button className="px-3 md:px-5 py-1.5 md:py-2 bg-teal-600 border border-teal-600 rounded-lg text-white text-sm md:text-base hover:bg-teal-700 transition-colors whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="mx-4 md:mx-10 lg:mx-20 mt-8 md:mt-20 rounded-xl bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/0cbf38d16c3bcfeadc4f241ba87bb73edac19c9b?width=2560')`,
          minHeight: '400px'
        }}
      >
        <div className="flex flex-col items-center justify-center text-center px-4 md:px-8 py-20 md:py-32 lg:py-40">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight tracking-tight max-w-2xl mb-4" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif', letterSpacing: '-2px' }}>
            Empowering Smarter Investments for Everyone
          </h1>
          <p className="text-white text-sm md:text-base leading-relaxed max-w-2xl" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
            At InvestSmart, we believe that everyone deserves access to sophisticated investment tools and insights. Our platform is designed to simplify complex financial decisions, making it easier for you to achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="px-4 md:px-10 lg:px-20 mt-12 md:mt-16 scrollbar-hide">
        <h2 className="text-gray-900 text-2xl font-bold mb-8" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
          <ModalButton icon={Target} label="Our Mission" modalKey="mission" />
          <ModalButton icon={Eye} label="Our Vision" modalKey="vision" />
        </div>
      </section>

      {/* Our Values */}
      <section className="px-4 md:px-10 lg:px-20 mt-12 md:mt-16">
        <h2 className="text-gray-900 text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          <ModalButton icon={ShieldCheck} label="Trust" modalKey="trust" />
          <ModalButton icon={Lightbulb} label="Innovation" modalKey="innovation" />
          <ModalButton icon={EyeIcon} label="Transparency" modalKey="transparency" />
          <ModalButton icon={TrendingUp} label="Growth" modalKey="growth" />
        </div>
      </section>

      {/* Our Journey */}
      <section className="px-4 md:px-10 lg:px-20 mt-12 md:mt-16">
        <h2 className="text-gray-900 text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
          Our Journey
        </h2>
        <div className="space-y-2">
          <JourneyItem
            icon={Calendar}
            title="Founded InvestSmart"
            year="2018"
          />
          <JourneyItem
            icon={Rocket}
            title="Launched Core Investment Platform"
            year="2019"
          />
          <JourneyItem
            icon={Package}
            title="Expanded Product Suite"
            year="2021"
          />
          <JourneyItem
            icon={Users}
            title="Reached 1 Million Users"
            year="2023"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 md:px-10 lg:px-20 mt-12 md:mt-16">
        <h2 className="text-gray-900 text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
          Who We Are
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          <TeamMember
            image="https://api.builder.io/api/v1/image/assets/TEMP/2d5d3c7cf81fbaa3e1ca9b1d80737a365229bbd9?width=538"
            name="Ukut Ifiok"
            role="CEO"
          />
          <TeamMember
            image="https://api.builder.io/api/v1/image/assets/TEMP/202353faf5e94ae67105ef25a099f90e34ca069f?width=538"
            name="JP"
            role="CTO"
          />
          <TeamMember
            image="https://api.builder.io/api/v1/image/assets/TEMP/cdad65e997a6117f5fc30c4630c66804250ce75f?width=538"
            name="Emily Rodriguez"
            role="Head of Product"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-10 lg:px-20 mt-16 md:mt-24 mb-12 md:mb-16 flex flex-col items-center text-center">
        <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mb-8 md:mb-10 max-w-2xl px-4" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif', letterSpacing: '-1px' }}>
          Ready to Start Your Investment Journey?
        </h2>
        <button className="px-6 py-3 bg-teal-600 border border-teal-600 rounded-lg text-white text-base shadow-lg hover:bg-teal-700 transition-colors" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
          Join Us
        </button>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-10 lg:px-20 py-8 md:py-10 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <Link to="/privacy" className="text-gray-600 text-base text-center hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-gray-600 text-base text-center hover:text-gray-900 transition-colors" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Terms of Service
          </Link>
          <Link to="/contact" className="text-gray-600 text-base text-center hover:text-gray-900 transition-colors">
            Contact Us
          </Link>
        </div>
        <p className="text-gray-600 text-base text-center">
          @2025 Broker Connect. All rights reserved.
        </p>
      </footer>

      {/* Modals */}
      <Dialog open={openModal !== null} onOpenChange={(open) => !open && setOpenModal(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-0">
          <div className="relative p-10 md:p-20">
            <DialogClose className="absolute top-10 left-10 rounded-2xl border-2 border-gray-300/20 p-3 hover:bg-gray-100 transition-colors">
              <X className="w-6 h-6 text-gray-300" />
            </DialogClose>
            
            {openModal && modalContents[openModal] && (
              <div className="text-center">
                <h2 className="text-gray-900 text-4xl font-normal mb-8 leading-tight" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif', letterSpacing: '-0.4px' }}>
                  {modalContents[openModal].icon} {modalContents[openModal].title}
                </h2>
                <div className="space-y-6 text-gray-800/80 text-base leading-relaxed" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  {modalContents[openModal].content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function JourneyItem({ 
  icon: Icon, 
  title, 
  year 
}: { 
  icon: React.ElementType; 
  title: string; 
  year: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex flex-col items-center gap-1 pt-3">
        <Icon className="w-6 h-6 text-gray-900 flex-shrink-0" />
        <div className="w-0.5 h-8 bg-gray-300/20"></div>
      </div>
      <div className="flex-1 pt-3">
        <p className="text-gray-900 text-base leading-relaxed" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
          {title}
        </p>
        <p className="text-gray-600 text-base leading-relaxed">
          {year}
        </p>
      </div>
    </div>
  );
}

function TeamMember({ 
  image, 
  name, 
  role 
}: { 
  image: string; 
  name: string; 
  role: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 max-w-xs">
      <div className="px-4">
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-square object-cover rounded-full"
        />
      </div>
      <div className="text-center">
        <p className="text-gray-900 text-base leading-relaxed" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
          {name}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Gill Sans MT, -apple-system, Roboto, Helvetica, sans-serif' }}>
          {role}
        </p>
      </div>
    </div>
  );
}
