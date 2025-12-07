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
  Menu,
} from "lucide-react";
import { GrowttLogo } from "../components/logo";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import HeaderNav from "../components/header";

export default function Budget() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const Navigate = useNavigate();

  const handleSession = () => {
    Navigate("/services/budget-broker");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <HeaderNav />

      {/* Back Button */}
      <div className="px-5 md:px-20 py-8 md:mt-12 mt-12">
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
            Business Structuring Advisory
          </h1>
          <p className="text-sm text-brand-dark/60 leading-relaxed">
            Get expert insights to structure your business, attract investors,
            and scale sustainably..
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 md:px-20 pb-16 space-y-16">
        {/* Investor Readiness Service */}
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Content */}
            <div className="flex-1 space-y-4 px-2">
              <h2 className="text-base font-bold text-brand-dark">
                Investor Readiness Service
              </h2>

              <p className="text-sm text-brand-dark/60 leading-relaxed">
                We help business prepare for unding by building clarity,
                credibility, and confidence in their investment story. Our team
                supports you with financial modeling, valuation, pitch deck
                development, and restructing Advisory - ensuring your business
                is positioned to attract and engagethe right investors.
              </p>

              <button
                onClick={() => {
                  handleSession();
                }}
                className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors"
              >
                Book Session
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 lg:min-w-[50%]">
              <img
                src="/images/biz (4).png"
                alt="Portfolio review consultation"
                loading="lazy"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Capital Structuring */}
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Content */}
            <div className="flex-1 space-y-4 px-2">
              <h2 className="text-base font-bold text-brand-dark">
                Capital Structuring
              </h2>

              <p className="text-sm text-brand-dark/60 leading-relaxed">
                Get expert guidance on choosing the right balance between equity
                and debt, and structuring partnerships that strengthen your
                growth path. From joint ventures and mergers & acquisitions to
                capital mix optimization, we help you design structures that
                align with your long-term financial and strategic goals.{" "}
              </p>

              <button
                onClick={() => {
                  handleSession();
                }}
                className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors"
              >
                Book Session
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 lg:min-w-[50%]">
              <img
                src="/images/biz (1).png"
                alt="Diversification strategy planning"
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Market and Strategy report  */}
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Content */}
            <div className="flex-1 space-y-4 px-2">
              <h2 className="text-base font-bold text-brand-dark">
                Market and Strategy report
              </h2>

              <p className="text-sm text-brand-dark/60 leading-relaxed">
                Make informed decisions backed by insight. We conduct tailored
                market research and strategy assessments that reveal
                opportunities, challenges, and positioning advantages. Each
                report is crafted to guide your strategic direction and support
                investor confidence with data-driven clarity.{" "}
              </p>

              <button
                onClick={() => {
                  handleSession();
                }}
                className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors"
              >
                Book Session
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 lg:min-w-[50%]">
              <img
                src="/images/biz (2).png"
                alt="Risk analysis and insights"
                loading="lazy"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Governance Structuring  */}
        <div className="border-[10px] border-brand-light rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Content */}
            <div className="flex-1 space-y-4 px-2">
              <h2 className="text-base font-bold text-brand-dark">
                Governance Structuring{" "}
              </h2>

              <p className="text-sm text-brand-dark/60 leading-relaxed">
                Establish systems that inspire trust and accountability. We help
                you design and implement governance frameworks, compliance
                policies, and operational controls that promote transparency,
                efficiency, and sustainable growth — ensuring your business
                meets global best practices.{" "}
              </p>

              <button
                onClick={() => {
                  handleSession();
                }}
                className="px-4 py-1.5 text-sm text-brand-dark border border-brand-dark/20 rounded-lg bg-white hover:bg-gray-50 transition-colors"
              >
                Book Session
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 lg:min-w-[50%]">
              <img
                src="/images/biz.png"
                alt="Risk analysis and insights"
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
