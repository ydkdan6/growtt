import { useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Header from '../../components/Dashboard/Header';
import {
  Dialog,
  DialogContent,
} from '../../components/ui/dialog';
import { Mic, ArrowRight } from 'lucide-react';

interface AIInsight {
  id: string;
  title: string;
  time: string;
}

interface OpportunityItem {
  title: string;
  description: string;
  thumbnail: string;
}

const aiInsights: AIInsight[] = [
  { id: '1', title: 'I analyzed your Real...', time: '2 days ago' },
  { id: '2', title: 'I analyzed your Real...', time: '2 days ago' },
  { id: '3', title: 'I analyzed your Real...', time: '2 days ago' },
];

const aiInsightsOfDay = [
  { title: 'Market Insights', description: 'The Real Estate market grew by +3.2% last quarter...' },
  { title: 'Wisdom Nuggets', description: "Investing ₦10,000 monthly can grow faster than waiting for the 'perfect'..." },
  { title: 'Personalized Portfolio', description: "You've allocated 80% of your funds to short-term assets..." },
  { title: 'Risk Management Tips', description: 'Keep 20–30% of your investments in low-risk assets like Treasury Bills...' },
];

const opportunities: OpportunityItem[] = [
  {
    title: 'Investment Basics',
    description: 'Learn the fundamentals of investing',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292',
  },
  {
    title: 'Investment Video Hub',
    description: 'Stay informed with our latest investment insights.',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/d3fee261d14aec36ff563cf2589332af573f74f4?width=292',
  },
  {
    title: 'Investments Under $10',
    description: 'Explore investment options that fit your budget.',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/e44e8bd907cb8579a42ff77fc03bd276d3011f28?width=292',
  },
  {
    title: 'Your first savings goal',
    description: 'Track your progress towards your first savings goal.',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/c1e642c02254f5f0fdeed4d68b50c93f7719f015?width=292',
  },
];

export default function GrowttAI() {
  const [queryInput, setQueryInput] = useState("what's on your mind?");
  const [showAIModal, setShowAIModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardClick = (cardName: string) => {
    setSelectedCard(cardName);
    setShowAIModal(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Sidebar />
      <Header />

      <main className="lg:ml-20 pt-20 px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Section */}
              {/* <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/161acb8169891fc529f6f46f62ef13634bdaa360?width=256"
                    alt="User profile"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-[22px] leading-[28px] mb-1">
                      Sophia Carter
                    </h2>
                    <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base leading-6 mb-1">
                      Professional
                    </p>
                    <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base leading-6 mb-2">
                      Wallet Balance: ₦12,500.00 / $150.00
                    </p>
                    <div className="flex items-center gap-2 px-2 py-2 bg-[#EFEEED] rounded-2xl w-fit">
                      <div className="w-6 h-6 bg-[#F0F5F2] rounded-lg flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V10.7606C3 19.1616 10.1081 21.9487 11.5312 22.4222C11.8352 22.5256 12.1648 22.5256 12.4688 22.4222C13.8938 21.9487 21 19.1616 21 10.7606V5.25C21 4.42157 20.3284 3.75 19.5 3.75ZM19.5 10.7616C19.5 18.1134 13.2797 20.5697 12 20.9972C10.7316 20.5744 4.5 18.12 4.5 10.7616V5.25H19.5V10.7616ZM7.71938 13.2806C7.42632 12.9876 7.42632 12.5124 7.71938 12.2194C8.01243 11.9263 8.48757 11.9263 8.78063 12.2194L10.5 13.9388L15.2194 9.21937C15.5124 8.92632 15.9876 8.92632 16.2806 9.21937C16.5737 9.51243 16.5737 9.98757 16.2806 10.2806L11.0306 15.5306C10.8899 15.6715 10.6991 15.7506 10.5 15.7506C10.3009 15.7506 10.1101 15.6715 9.96937 15.5306L7.71938 13.2806Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <span className="text-[#030712] font-['Gill_Sans_MT',sans-serif] font-bold text-sm leading-6">
                        Total Assets
                      </span>
                    </div>
                  </div>
                  {/* Asset Allocation
                  <div className="bg-[#F5F5F5] rounded-2xl p-4 min-w-[220px]">
                    <h3 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base mb-2">
                      Asset Allocation (Demo)
                    </h3>
                    <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-2xl font-bold mb-4">
                      $22,500
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm flex-1">
                          Bonds (0%)
                        </span>
                        <div className="h-1 w-12 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm flex-1">
                          Stocks (0%)
                        </span>
                        <div className="h-1 w-12 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm flex-1">
                          Real Estate (0%)
                        </span>
                        <div className="h-1 w-12 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm flex-1">
                          Digital Art (0%)
                        </span>
                        <div className="h-1 w-12 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="h-px bg-[rgba(221,221,221,0.87)]"></div> */}

              {/* AI Greeting and Action Cards */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                {/* AI Greeting */}
                <div className="flex items-start gap-2 mb-6">
                  <div className="mt-6 mr-4 w-8 h-8 rounded-lg bg-gradient-to-br from-[#008080] to-[#FF9800] flex items-center justify-center flex-shrink-0">
                    <svg width="26" height="40" viewBox="0 0 26 40" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.664 0.267244V5.5688C14.8353 5.26544 13.934 5.10654 12.9964 5.10654C8.65697 5.10654 5.13167 8.60238 5.13167 12.9144C5.13167 13.875 5.30612 14.7996 5.62594 15.6446C4.09226 16.6053 2.76209 17.862 1.7154 19.3427C0.625105 17.4503 0 15.2546 0 12.9144C0 5.78548 5.8222 0 12.9964 0C13.9122 0 14.799 0.0938967 15.664 0.267244Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="relative flex-1">
                    <div className="bg-[#F5F5F5] rounded-r-lg rounded-bl-lg p-5 shadow-[0_2px_12px_0_rgba(0,0,0,0.28)] w-[540px]">
                      <p className="text-[rgba(16,23,32,0.8)] font-['Gill_Sans_MT',sans-serif] text-base leading-[20.8px] tracking-[-0.32px]">
                        Hey there 👋🏽 I'm Growtt AI, your personal investment assistant. Let's find the smartest way to grow your wealth.
                      </p>
                    </div>
                    <svg className="absolute -left-[18px] top-[31px]" width="18" height="19" viewBox="0 0 18 19" fill="none">
                      <path d="M0 9.5L18 19L18 0L0 9.5Z" fill="#F5F5F5" />
                    </svg>
                  </div>
                </div>

                {/* Action Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => handleCardClick('Portfolio Advice')}
                    className="p-6 bg-white border-4 border-[rgba(222,227,227,0.2)] rounded-xl shadow-[0_18px_40px_0_rgba(214,196,168,0.2)] hover:shadow-lg transition-shadow"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-2">
                      <path
                        d="M17.3696 20.1487C17.1253 20.1487 16.9213 20.0669 16.7576 19.9032C16.5939 19.7396 16.5121 19.5375 16.5121 19.297V13.791C16.5121 13.5507 16.5939 13.3477 16.7576 13.182C16.9213 13.0163 17.1253 12.9335 17.3696 12.9335H19.2978C19.5383 12.9335 19.7414 13.0163 19.9071 13.182C20.0728 13.3477 20.1556 13.5507 20.1556 13.791V19.297C20.1556 19.5375 20.0728 19.7396 19.9071 19.9032C19.7414 20.0669 19.5383 20.1487 19.2978 20.1487H17.3696ZM11.0358 20.1487C10.7955 20.1487 10.5935 20.0669 10.4298 19.9032C10.2662 19.7396 10.1843 19.5375 10.1843 19.297V4.7015C10.1843 4.461 10.2662 4.25792 10.4298 4.09225C10.5935 3.92658 10.7955 3.84375 11.0358 3.84375H12.9643C13.2047 3.84375 13.4067 3.92658 13.5703 4.09225C13.734 4.25792 13.8158 4.461 13.8158 4.7015V19.297C13.8158 19.5375 13.734 19.7396 13.5703 19.9032C13.4067 20.0669 13.2047 20.1487 12.9643 20.1487H11.0358ZM4.70234 20.1487C4.46184 20.1487 4.25975 20.0669 4.09609 19.9032C3.93242 19.7396 3.85059 19.5375 3.85059 19.297V9.7015C3.85059 9.461 3.93242 9.25792 4.09609 9.09225C4.25975 8.92658 4.46184 8.84375 4.70234 8.84375H6.63659C6.87692 8.84375 7.07892 8.92658 7.24259 9.09225C7.40625 9.25792 7.48809 9.461 7.48809 9.7015V19.297C7.48809 19.5375 7.40625 19.7396 7.24259 19.9032C7.07892 20.0669 6.87692 20.1487 6.63659 20.1487H4.70234Z"
                        fill="#030712"
                      />
                    </svg>
                    <p className="text-[#121717] font-['Manrope',sans-serif] text-base font-medium leading-6">
                      Portfolio Advice
                    </p>
                  </button>

                  <button
                    onClick={() => handleCardClick('Customizable portfolio')}
                    className="p-6 bg-white border-4 border-[rgba(222,227,227,0.2)] rounded-xl shadow-[0_18px_40px_0_rgba(214,196,168,0.2)] hover:shadow-lg transition-shadow"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-2">
                      <path
                        d="M17.1361 14.864H27.1968C26.947 12.2273 25.8724 9.93721 23.9731 7.99365C22.074 6.04987 19.795 4.98643 17.1361 4.80332V14.864ZM14.8648 27.196V4.80332C12.007 5.07421 9.60489 6.28532 7.65844 8.43665C5.712 10.5878 4.73877 13.1088 4.73877 15.9997C4.73877 18.8905 5.712 21.4115 7.65844 23.5627C9.60489 25.714 12.007 26.9251 14.8648 27.196ZM17.1361 27.196C19.795 27.0075 22.0728 25.9429 23.9694 24.002C25.8659 22.0609 26.9417 19.772 27.1968 17.1353H17.1361V27.196ZM16.0014 29.5323C14.1303 29.5323 12.3716 29.1783 10.7251 28.4703C9.07866 27.7623 7.64489 26.7977 6.42377 25.5763C5.20244 24.3552 4.23777 22.9217 3.52977 21.2757C2.82177 19.6299 2.46777 17.8713 2.46777 16C2.46777 14.1287 2.82177 12.37 3.52977 10.724C4.23777 9.07776 5.20211 7.64387 6.42277 6.42232C7.64322 5.20076 9.07677 4.23487 10.7234 3.52465C12.3699 2.81421 14.1291 2.45898 16.0011 2.45898C17.8769 2.45898 19.6361 2.81421 21.2787 3.52465C22.9212 4.23487 24.353 5.20076 25.574 6.42232C26.7951 7.64387 27.7615 9.07776 28.4734 10.724C29.1852 12.37 29.5411 14.1287 29.5411 16C29.5411 17.8713 29.1852 19.6299 28.4734 21.2757C27.7615 22.9217 26.7951 24.3552 25.574 25.5763C24.353 26.7977 22.9212 27.7623 21.2787 28.4703C19.6361 29.1783 17.8769 29.5323 16.0014 29.5323Z"
                        fill="#030712"
                      />
                    </svg>
                    <p className="text-[#121717] font-['Manrope',sans-serif] text-base font-medium leading-6">
                      Customizable portfolio
                    </p>
                  </button>

                  <button
                    onClick={() => handleCardClick('Asset allocation advice')}
                    className="p-6 bg-white border-4 border-[rgba(222,227,227,0.2)] rounded-xl shadow-[0_18px_40px_0_rgba(214,196,168,0.2)] hover:shadow-lg transition-shadow"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-2">
                      <path
                        d="M17.3696 20.1487C17.1253 20.1487 16.9213 20.0669 16.7576 19.9032C16.5939 19.7396 16.5121 19.5375 16.5121 19.297V13.791C16.5121 13.5507 16.5939 13.3477 16.7576 13.182C16.9213 13.0163 17.1253 12.9335 17.3696 12.9335H19.2978C19.5383 12.9335 19.7414 13.0163 19.9071 13.182C20.0728 13.3477 20.1556 13.5507 20.1556 13.791V19.297C20.1556 19.5375 20.0728 19.7396 19.9071 19.9032C19.7414 20.0669 19.5383 20.1487 19.2978 20.1487H17.3696Z"
                        fill="#030712"
                      />
                    </svg>
                    <p className="text-[#121717] font-['Manrope',sans-serif] text-base font-medium leading-6">
                      Asset allocation advice
                    </p>
                  </button>

                  <button
                    onClick={() => handleCardClick('Investment opportunities')}
                    className="p-6 bg-white border-4 border-[rgba(222,227,227,0.2)] rounded-xl shadow-[0_18px_40px_0_rgba(214,196,168,0.2)] hover:shadow-lg transition-shadow"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-2">
                      <path
                        d="M11.0358 20.1487C10.7955 20.1487 10.5935 20.0669 10.4298 19.9032C10.2662 19.7396 10.1843 19.5375 10.1843 19.297V4.7015C10.1843 4.461 10.2662 4.25792 10.4298 4.09225C10.5935 3.92658 10.7955 3.84375 11.0358 3.84375H12.9643C13.2047 3.84375 13.4067 3.92658 13.5703 4.09225C13.734 4.25792 13.8158 4.461 13.8158 4.7015V19.297C13.8158 19.5375 13.734 19.7396 13.5703 19.9032C13.4067 20.0669 13.2047 20.1487 12.9643 20.1487H11.0358Z"
                        fill="#030712"
                      />
                    </svg>
                    <p className="text-[#121717] font-['Manrope',sans-serif] text-base font-medium leading-6">
                      Investment opportunities
                    </p>
                  </button>

                  <button
                    onClick={() => handleCardClick('Budget advice')}
                    className="p-6 bg-white border-4 border-[rgba(222,227,227,0.2)] rounded-xl shadow-[0_18px_40px_0_rgba(214,196,168,0.2)] hover:shadow-lg transition-shadow"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-2">
                      <path
                        d="M4.70234 20.1487C4.46184 20.1487 4.25975 20.0669 4.09609 19.9032C3.93242 19.7396 3.85059 19.5375 3.85059 19.297V9.7015C3.85059 9.461 3.93242 9.25792 4.09609 9.09225C4.25975 8.92658 4.46184 8.84375 4.70234 8.84375H6.63659C6.87692 8.84375 7.07892 8.92658 7.24259 9.09225C7.40625 9.25792 7.48809 9.461 7.48809 9.7015V19.297C7.48809 19.5375 7.40625 19.7396 7.24259 19.9032C7.07892 20.0669 6.87692 20.1487 6.63659 20.1487H4.70234Z"
                        fill="#030712"
                      />
                    </svg>
                    <p className="text-[#121717] font-['Manrope',sans-serif] text-base font-medium leading-6">
                      Budget advice
                    </p>
                  </button>
                </div>

                {/* AI Input */}
                <div className="relative">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#008080] to-[#FF9800]">
                    <div className="text-white font-['Gill_Sans_MT',sans-serif] text-sm mb-2">
                      Ask Growtt AI anything about your investments
                    </div>
                    <div className="h-[90px] bg-white rounded-lg px-4 py-2">
                        <span className='mb-8'>Let's talk money moves</span>
                        <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3">
                      <input
                        type="text"
                        value=""
                        onChange={(e) => setQueryInput(e.target.value)}
                        placeholder="what's on your mind?"
                        className="flex-1 outline-none text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base"
                      />
                      <button className="flex-shrink-0">
                        <Mic className="w-5 h-5 text-[#030712]" />
                      </button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opportunities Section */}
              {/* <div>
                <h2 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-[22px] leading-[28px] mb-4">
                  Opportunities
                </h2>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-3 max-h-[392px] overflow-y-auto">
                    {opportunities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl"
                      >
                        <div className="w-[76px] h-[59px] bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base font-bold leading-5">
                            {item.title}
                          </p>
                          <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[rgba(3,7,18,0.6)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Column - AI Insights */}
            <div className="space-y-6">
              {/* AI History */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col gap-3 max-h-[392px] overflow-y-auto">
                  {aiInsights.map((insight) => (
                    <div
                      key={insight.id}
                      className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="w-12 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                        <svg width="26" height="40" viewBox="0 0 26 40" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.664 0.267244V5.5688C14.8353 5.26544 13.934 5.10654 12.9964 5.10654C8.65697 5.10654 5.13167 8.60238 5.13167 12.9144C5.13167 13.875 5.30612 14.7996 5.62594 15.6446C4.09226 16.6053 2.76209 17.862 1.7154 19.3427C0.625105 17.4503 0 15.2546 0 12.9144C0 5.78548 5.8222 0 12.9964 0C13.9122 0 14.799 0.0938967 15.664 0.267244Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base font-bold leading-5">
                          {insight.title}
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          {insight.time}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[rgba(3,7,18,0.6)]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insight of the Day */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-[rgba(16,23,32,0.8)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[18.2px] tracking-[-0.28px] mb-3">
                  AI Insight of the Day
                </h3>
                <div className="flex flex-col gap-3 max-h-[314px] overflow-y-auto">
                  {aiInsightsOfDay.map((insight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="w-12 h-10 rounded-lg bg-gradient-to-br from-[#008080] to-[#FF9800] flex items-center justify-center flex-shrink-0">
                        <svg width="26" height="40" viewBox="0 0 26 40" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.664 0.267244V5.5688C14.8353 5.26544 13.934 5.10654 12.9964 5.10654C8.65697 5.10654 5.13167 8.60238 5.13167 12.9144C5.13167 13.875 5.30612 14.7996 5.62594 15.6446C4.09226 16.6053 2.76209 17.862 1.7154 19.3427C0.625105 17.4503 0 15.2546 0 12.9144C0 5.78548 5.8222 0 12.9964 0C13.9122 0 14.799 0.0938967 15.664 0.267244Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base font-bold leading-5">
                          {insight.title}
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          {insight.description}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[rgba(3,7,18,0.6)]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Interaction Modal */}
      <Dialog open={showAIModal} onOpenChange={setShowAIModal}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] bg-white p-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-[22px] font-bold">
              {selectedCard}
            </h2>
            <div className="flex-1 overflow-y-auto space-y-4 min-h-[300px]">
              {/* AI Response Area - Placeholder */}
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#008080] to-[#FF9800] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="30" viewBox="0 0 26 40" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.664 0.267244V5.5688C14.8353 5.26544 13.934 5.10654 12.9964 5.10654C8.65697 5.10654 5.13167 8.60238 5.13167 12.9144C5.13167 13.875 5.30612 14.7996 5.62594 15.6446C4.09226 16.6053 2.76209 17.862 1.7154 19.3427C0.625105 17.4503 0 15.2546 0 12.9144C0 5.78548 5.8222 0 12.9964 0C13.9122 0 14.799 0.0938967 15.664 0.267244Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="bg-[#F5F5F5] rounded-r-lg rounded-bl-lg p-4 flex-1">
                  <p className="text-[rgba(16,23,32,0.8)] font-['Gill_Sans_MT',sans-serif] text-base">
                    How can I help you with your {selectedCard.toLowerCase()}?
                  </p>
                </div>
              </div>
            </div>
            {/* Input at bottom */}
            <div className="border-t pt-4">
              <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-lg px-4 py-3">
                <input
                  type="text"
                  placeholder="Type your question here..."
                  className="flex-1 outline-none bg-transparent text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base"
                />
                <button className="flex-shrink-0">
                  <Mic className="w-5 h-5 text-[#030712]" />
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
