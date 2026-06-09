import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";
import { ArrowRight } from "lucide-react";

interface OpportunityItem {
  title: string;
  description: string;
  thumbnail: string;
  hasPlayButton?: boolean;
}

const videoHub = [
  {
    title: 'Investment Video Hub',
    description: 'Stay informed with our latest...',
    views: '20,000 views',
    time: '2 days ago',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292',
  },
  {
    title: 'Investment Video Hub',
    description: 'Stay informed with our latest...',
    views: '20,000 views',
    time: '2 days ago',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/d3fee261d14aec36ff563cf2589332af573f74f4?width=292',
  },
  {
    title: 'Investment Video Hub',
    description: 'Stay informed with our latest...',
    views: '20,000 views',
    time: '2 days ago',
    thumbnail: 'https://api.builder.io/api/v1/image/assets/TEMP/d3fee261d14aec36ff563cf2589332af573f74f4?width=292',
  },
];


const opportunities: OpportunityItem[] = [
  {
    title: "Investment Basics",
    description: "Learn the fundamentals of investing",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292",
  },
  {
    title: "Investment Basics",
    description: "Learn the fundamentals of investing",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292",
  },
  {
    title: "Investment Basics",
    description: "Learn the fundamentals of investing",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292",
  },
  {
    title: "Investment Video Hub",
    description: "Stay informed with our latest investment insights.",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/d3fee261d14aec36ff563cf2589332af573f74f4?width=292",
    hasPlayButton: true,
  },
  {
    title: "Investments Under $10",
    description: "Explore investment options that fit your budget.",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/e44e8bd907cb8579a42ff77fc03bd276d3011f28?width=292",
  },
  {
    title: "Your first savings goal",
    description: "Track your progress towards your first savings goal.",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/c1e642c02254f5f0fdeed4d68b50c93f7719f015?width=292",
  },
  {
    title: "Your first savings goal",
    description: "Track your progress towards your first savings goal.",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/d06b3039378812f6dc2ff404fb4030f333571a79?width=292",
  },
];

export default function Profile() {
  const [theme, setTheme] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Sidebar />
      <Header />

      <main className="lg:ml-20 pt-20 px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column - Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Header */}
              <div className="border-0 p-6">
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
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
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
                  {/* Asset Allocation */}
                  {/* <div className="bg-white rounded-2xl p-6 shadow-lg p-4 min-w-[220px]">
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
                  </div> */}
                </div>
              </div>

              <div className="h-px bg-[rgba(221,221,221,0.87)]"></div>

              {/* Account Settings */}
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="p-4 border-b">
                  <h2 className="text-[#121417] font-['Gill_Sans_MT',sans-serif] text-[22px] leading-[28px]">
                    Account Settings
                  </h2>
                </div>

                <div className="divide-y">
                  <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.6488 19.875C20.2209 17.4066 18.0206 15.6366 15.4528 14.7975C18.0635 13.2433 19.3141 10.1364 18.5082 7.2069C17.7022 4.27741 15.0383 2.24745 12 2.24745C8.96167 2.24745 6.29779 4.27741 5.49182 7.2069C4.68585 10.1364 5.93645 13.2433 8.54719 14.7975C5.97938 15.6356 3.77906 17.4056 2.35125 19.875C2.2087 20.1074 2.20353 20.3989 2.33773 20.6363C2.47194 20.8736 2.72438 21.0194 2.99702 21.0171C3.26967 21.0147 3.51958 20.8646 3.64969 20.625C5.41594 17.5725 8.53781 15.75 12 15.75C15.4622 15.75 18.5841 17.5725 20.3503 20.625C20.4804 20.8646 20.7303 21.0147 21.003 21.0171C21.2756 21.0194 21.5281 20.8736 21.6623 20.6363C21.7965 20.3989 21.7913 20.1074 21.6488 19.875ZM6.75 9C6.75 6.1005 9.1005 3.75 12 3.75C14.8995 3.75 17.25 6.1005 17.25 9C17.25 11.8995 14.8995 14.25 12 14.25C9.10179 14.2469 6.7531 11.8982 6.75 9Z"
                          fill="#121417"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                        Edit Profile
                      </p>
                      <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                        Manage your personal information
                      </p>
                    </div>
                  </button>

                  <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.5 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V10.7606C3 19.1616 10.1081 21.9487 11.5312 22.4222C11.8352 22.5256 12.1648 22.5256 12.4688 22.4222C13.8938 21.9487 21 19.1616 21 10.7606V5.25C21 4.42157 20.3284 3.75 19.5 3.75ZM19.5 10.7616C19.5 18.1134 13.2797 20.5697 12 20.9972C10.7316 20.5744 4.5 18.12 4.5 10.7616V5.25H19.5V10.7616ZM7.71938 13.2806C7.42632 12.9876 7.42632 12.5124 7.71938 12.2194C8.01243 11.9263 8.48757 11.9263 8.78063 12.2194L10.5 13.9388L15.2194 9.21937C15.5124 8.92632 15.9876 8.92632 16.2806 9.21937C16.5737 9.51243 16.5737 9.98757 16.2806 10.2806L11.0306 15.5306C10.8899 15.6715 10.6991 15.7506 10.5 15.7506C10.3009 15.7506 10.1101 15.6715 9.96937 15.5306L7.71938 13.2806Z"
                          fill="#030712"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                        Security
                      </p>
                      <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                        Secure your account with password and 2FA
                      </p>
                    </div>
                  </button>

                  <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.75 10.5C18.75 10.9142 18.4142 11.25 18 11.25H14.25C13.8358 11.25 13.5 10.9142 13.5 10.5C13.5 10.0858 13.8358 9.75 14.25 9.75H18C18.4142 9.75 18.75 10.0858 18.75 10.5ZM18 12.75H14.25C13.8358 12.75 13.5 13.0858 13.5 13.5C13.5 13.9142 13.8358 14.25 14.25 14.25H18C18.4142 14.25 18.75 13.9142 18.75 13.5C18.75 13.0858 18.4142 12.75 18 12.75ZM21.75 5.25V18.75C21.75 19.5784 21.0784 20.25 20.25 20.25H3.75C2.92157 20.25 2.25 19.5784 2.25 18.75V5.25C2.25 4.42157 2.92157 3.75 3.75 3.75H20.25C21.0784 3.75 21.75 4.42157 21.75 5.25ZM20.25 18.75V5.25H3.75V18.75H20.25ZM12.7256 15.5625C12.8292 15.9638 12.5878 16.373 12.1866 16.4766C11.7853 16.5801 11.3761 16.3388 11.2725 15.9375C11.0259 14.9756 10.0481 14.25 8.99906 14.25C7.95 14.25 6.97312 14.9756 6.72563 15.9375C6.62207 16.3388 6.21283 16.5801 5.81156 16.4766C5.41029 16.373 5.16895 15.9638 5.2725 15.5625C5.51588 14.6566 6.09118 13.8755 6.88406 13.3744C6.02237 12.5178 5.76242 11.226 6.22572 10.1028C6.68901 8.97961 7.78405 8.24675 8.99906 8.24675C10.2141 8.24675 11.3091 8.97961 11.7724 10.1028C12.2357 11.226 11.9758 12.5178 11.1141 13.3744C11.9078 13.8748 12.4836 14.6562 12.7266 15.5625H12.7256ZM9 12.75C9.82843 12.75 10.5 12.0784 10.5 11.25C10.5 10.4216 9.82843 9.75 9 9.75C8.17157 9.75 7.5 10.4216 7.5 11.25C7.5 12.0784 8.17157 12.75 9 12.75Z"
                          fill="#030712"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                        KYC Status
                      </p>
                      <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                        Verify your identity for full access
                      </p>
                    </div>
                  </button>

                  <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.6488 19.875C20.2209 17.4066 18.0206 15.6366 15.4528 14.7975C18.0635 13.2433 19.3141 10.1364 18.5082 7.2069C17.7022 4.27741 15.0383 2.24745 12 2.24745C8.96167 2.24745 6.29779 4.27741 5.49182 7.2069C4.68585 10.1364 5.93645 13.2433 8.54719 14.7975C5.97938 15.6356 3.77906 17.4056 2.35125 19.875C2.2087 20.1074 2.20353 20.3989 2.33773 20.6363C2.47194 20.8736 2.72438 21.0194 2.99702 21.0171C3.26967 21.0147 3.51958 20.8646 3.64969 20.625C5.41594 17.5725 8.53781 15.75 12 15.75C15.4622 15.75 18.5841 17.5725 20.3503 20.625C20.4804 20.8646 20.7303 21.0147 21.003 21.0171C21.2756 21.0194 21.5281 20.8736 21.6623 20.6363C21.7965 20.3989 21.7913 20.1074 21.6488 19.875ZM6.75 9C6.75 6.1005 9.1005 3.75 12 3.75C14.8995 3.75 17.25 6.1005 17.25 9C17.25 11.8995 14.8995 14.25 12 14.25C9.10179 14.2469 6.7531 11.8982 6.75 9Z"
                          fill="#121417"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                        Account tier
                      </p>
                      <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                        Beginner / Professional
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* App Preferences */}
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="p-4 border-b">
                  <h2 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-[22px] leading-[28px]">
                    App Preferences
                  </h2>
                </div>

                <div className="divide-y">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.25 3.75V1.5C11.25 1.08579 11.5858 0.75 12 0.75C12.4142 0.75 12.75 1.08579 12.75 1.5V3.75C12.75 4.16421 12.4142 4.5 12 4.5C11.5858 4.5 11.25 4.16421 11.25 3.75ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3122 6.00362 17.9964 8.68779 18 12ZM16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4842 16.4974 16.4974 14.4842 16.5 12Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                          Theme
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          Switch between light and dark modes
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setTheme(!theme)}
                      className={`relative w-[51px] h-[31px] rounded-[15.5px] transition-colors ${
                        theme ? "bg-[#83C1FE]" : "bg-[#6F7071]"
                      }`}
                    >
                      <div
                        className={`absolute top-[2px] w-[27px] h-[27px] bg-white rounded-[13.5px] shadow-[0_3px_8px_0_rgba(0,0,0,0.15)] transition-all ${
                          theme ? "right-[2px]" : "left-[2px]"
                        }`}
                      ></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.7443 6.61758 17.3824 2.25568 12 2.25Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                          Language
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          Choose your preferred language
                        </p>
                      </div>
                    </div>
                    <p className="text-[#030712] font-['Manrope',sans-serif] text-base leading-6">
                      English
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.7938 16.4944C20.2734 15.5981 19.5 13.0622 19.5 9.75C19.5 5.60786 16.1421 2.25 12 2.25C7.85786 2.25 4.5 5.60786 4.5 9.75C4.5 13.0631 3.72563 15.5981 3.20531 16.4944C2.93487 16.9581 2.9329 17.5311 3.20016 17.9967C3.46741 18.4623 3.96313 18.7496 4.5 18.75H8.32594C8.68267 20.4956 10.2184 21.7492 12 21.7492C13.7816 21.7492 15.3173 20.4956 15.6741 18.75H19.5C20.0367 18.7493 20.5321 18.4619 20.7991 17.9963C21.0662 17.5308 21.0641 16.958 20.7938 16.4944Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                          Notifications
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          Manage in-app notifications
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setNotifications(!notifications)}
                      className={`relative w-[51px] h-[31px] rounded-[15.5px] transition-colors ${
                        notifications ? "bg-[#83C1FE]" : "bg-[#6F7071]"
                      }`}
                    >
                      <div
                        className={`absolute top-[2px] w-[27px] h-[27px] bg-white rounded-[13.5px] shadow-[0_3px_8px_0_rgba(0,0,0,0.15)] transition-all ${
                          notifications ? "right-[2px]" : "left-[2px]"
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment & Transactions */}
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="p-4 border-b">
                  <h2 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-[22px] leading-[28px]">
                    Payment & Transactions
                  </h2>
                </div>

                <div className="divide-y">
                  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.25 9.75H4.5V15.75H3C2.58579 15.75 2.25 16.0858 2.25 16.5C2.25 16.9142 2.58579 17.25 3 17.25H21C21.4142 17.25 21.75 16.9142 21.75 16.5C21.75 16.0858 21.4142 15.75 21 15.75H19.5V9.75H21.75C22.0853 9.74966 22.3796 9.52681 22.4709 9.20417C22.5622 8.88154 22.4282 8.53751 22.1428 8.36156L12.3928 2.36156C12.1519 2.21343 11.8481 2.21343 11.6072 2.36156L1.85719 8.36156C1.57176 8.53751 1.4378 8.88154 1.52908 9.20417C1.62036 9.52681 1.9147 9.74966 2.25 9.75Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                          Linked Accounts
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          Manage your linked accounts and cards
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#030712]" />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.75 7.5V11.5753L16.1362 13.6069C16.4914 13.8202 16.6064 14.2811 16.3931 14.6362C16.1798 14.9914 15.7189 15.1064 15.3638 14.8931L11.6138 12.6431C11.388 12.5075 11.2499 12.2634 11.25 12V7.5C11.25 7.08579 11.5858 6.75 12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                          Transaction History
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          View your transaction history
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#030712]" />
                  </button>
                </div>
              </div>

              {/* Seeds & Subscriptions */}
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="p-4 border-b">
                  <h2 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-[22px] leading-[28px]">
                    Seeds & Subscriptions
                  </h2>
                </div>

                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.2153 3.73969C23.1931 3.35989 22.8901 3.05687 22.5103 3.03469C17.6578 2.75344 13.7616 4.22906 12.0872 6.99281C10.9809 8.82 10.9828 11.0391 12.0722 13.1559C11.4521 13.8941 10.999 14.7576 10.7437 15.6872L9.21844 14.1562C9.95156 12.6253 9.92344 11.0297 9.12469 9.70406C7.88719 7.66125 5.03062 6.56625 1.48406 6.77437C1.10427 6.79655 0.801242 7.09958 0.779063 7.47937C0.57 11.0259 1.66594 13.8825 3.70875 15.12C4.38287 15.5319 5.15752 15.7499 5.9475 15.75C6.71428 15.7406 7.46913 15.5589 8.15625 15.2184L10.5 17.5622V20.25C10.5 20.6642 10.8358 21 11.25 21C11.6642 21 12 20.6642 12 20.25V17.4853C11.9967 16.2922 12.4027 15.134 13.1503 14.2041Z"
                          fill="#030712"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                        Total Seeds: 500
                      </p>
                      <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                        Your Seeds unlock AI insights, Learning Path, and Custom
                        Portfolios.
                      </p>
                    </div>
                  </div>
                  <button className="px-4 h-8 bg-[#F0F2F5] text-[#030712] rounded-lg font-['Manrope',sans-serif] text-sm font-medium hover:bg-gray-200 transition-colors">
                    Buy More Seeds
                  </button>
                </div>
              </div>

              {/* Support & Help */}
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="p-4 border-b">
                  <h2 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-[22px] leading-[28px]">
                    Support & Help
                  </h2>
                </div>

                <div className="divide-y">
                  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.125 16.875C13.125 17.4963 12.6213 18 12 18C11.3787 18 10.875 17.4963 10.875 16.875C10.875 16.2537 11.3787 15.75 12 15.75C12.6213 15.75 13.125 16.2537 13.125 16.875ZM12 6.75C9.93188 6.75 8.25 8.26406 8.25 10.125V10.5C8.25 10.9142 8.58579 11.25 9 11.25C9.41421 11.25 9.75 10.9142 9.75 10.5V10.125C9.75 9.09375 10.7597 8.25 12 8.25C13.2403 8.25 14.25 9.09375 14.25 10.125C14.25 11.1562 13.2403 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75V13.5C11.25 13.9142 11.5858 14.25 12 14.25C12.4142 14.25 12.75 13.9142 12.75 13.5V13.4325C14.46 13.1184 15.75 11.7544 15.75 10.125C15.75 8.26406 14.0681 6.75 12 6.75Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                          FAQs
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          Find answers to common questions
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#030712]" />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 4.5H3C2.58579 4.5 2.25 4.83579 2.25 5.25V18C2.25 18.8284 2.92157 19.5 3.75 19.5H20.25C21.0784 19.5 21.75 18.8284 21.75 18V5.25C21.75 4.83579 21.4142 4.5 21 4.5Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                          Contact Us
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          Get in touch with our support team
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#030712]" />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.0306 7.71938L14.7806 2.46937C14.6399 2.32876 14.449 2.24984 14.25 2.25H5.25C4.42157 2.25 3.75 2.92157 3.75 3.75V20.25C3.75 21.0784 4.42157 21.75 5.25 21.75H18.75C19.5784 21.75 20.25 21.0784 20.25 20.25V8.25C20.2502 8.05103 20.1712 7.86015 20.0306 7.71938Z"
                            fill="#030712"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base leading-6">
                          Terms & Privacy
                        </p>
                        <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                          View our terms and privacy policy
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#030712]" />
                  </button>
                </div>

                <div className="p-3">
                  <button className="w-fit px-4 h-10 bg-[#F0F2F5] text-[#030712] rounded-lg font-['Gill_Sans_MT',sans-serif] text-sm hover:bg-gray-200 transition-colors">
                    Refer a Friend
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Opportunities */}
            <div className="space-y-6">
              {/* Asset Allocation */}
              <div className="bg-white rounded-2xl p-6 border-4 border-gray-200/20 shadow-xl">
                <div className="bg-gray-200/20 rounded-xl p-6">
                  <p className="text-base font-medium font-manrope text-text-primary mb-2">
                    Asset Allocation (Demo)
                  </p>
                  <h2 className="text-2xl font-bold font-manrope text-text-primary mb-3">
                    ₦50,000,000
                  </h2>

                  {/* Asset Bars */}
                  <div className="space-y-6 py-3">
                    {[
                      "Bonds (0%)",
                      "Stocks (0%)",
                      "Real Estate (0%)",
                      "Digital Art (0%)",
                    ].map((asset, index) => (
                      <div key={asset} className="flex items-center gap-4">
                        <p className="text-[13px] font-bold font-manrope text-text-secondary w-[117px]">
                          {asset}
                        </p>
                        <div className="flex-1 h-full">
                          <div
                            className="h-full border-r-2 border-gray-500 bg-white"
                            style={{ width: `${[11, 8, 9, 2][index]}px` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Learning Resources */}
              <div className="bg-white rounded-2xl p-6 shadow-sm max-h-[392px]">
                <div className="space-y-3 overflow-y-auto max-h-[344px] pr-2">
                  {opportunities.map((resource) => (
                    <div
                      key={resource.title}
                      className="bg-gray-200/20 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-[76px] h-[59px] rounded overflow-hidden flex-shrink-0">
                        <img
                          src={resource.thumbnail}
                          alt={resource.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-bold text-text-secondary mb-1">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {resource.description}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-text-secondary flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                              <div className="flex flex-col gap-3 max-h-[392px] overflow-y-auto">
                                {videoHub.map((video, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl"
                                  >
                                    <div className="w-[76px] h-[59px] bg-gray-200 rounded flex-shrink-0 overflow-hidden relative">
                                      <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                          <path
                                            d="M10.5338 15.6872L15.4583 12.54C15.6655 12.4055 15.7691 12.2247 15.7691 11.9977C15.7691 11.7709 15.6655 11.5912 15.4583 11.4585L10.5338 8.31125C10.3265 8.16592 10.1089 8.15508 9.88109 8.27875C9.65325 8.40258 9.53934 8.59367 9.53934 8.852V15.1405C9.53934 15.4047 9.65325 15.5982 9.88109 15.721C10.1089 15.8438 10.3265 15.8326 10.5338 15.6872ZM12.0008 22.1487C10.6098 22.1487 9.297 21.8831 8.06234 21.3517C6.82784 20.8204 5.74959 20.0938 4.82759 19.1718C3.90559 18.2498 3.17892 17.1718 2.64759 15.9378C2.11625 14.7038 1.85059 13.3912 1.85059 12C1.85059 10.5923 2.11625 9.27117 2.64759 8.0365C3.17892 6.802 3.90525 5.72783 4.82659 4.814C5.74792 3.9 6.82575 3.1765 8.06009 2.6435C9.29442 2.11033 10.6073 1.84375 11.9988 1.84375C13.4068 1.84375 14.7284 2.11017 15.9636 2.643C17.1986 3.17583 18.2728 3.89892 19.1863 4.81225C20.1 5.72558 20.8233 6.79958 21.3561 8.03425C21.8891 9.26892 22.1556 10.5906 22.1556 11.9992C22.1556 13.3909 21.889 14.704 21.3558 15.9385C20.8228 17.173 20.0993 18.251 19.1853 19.1725C18.2715 20.094 17.1976 20.8204 15.9636 21.3517C14.7296 21.8831 13.4087 22.1487 12.0008 22.1487ZM12.0001 20.4455C14.3508 20.4455 16.3462 19.6226 17.9863 17.9767C19.6263 16.3307 20.4463 14.3382 20.4463 11.9992C20.4463 9.64858 19.6263 7.65317 17.9863 6.013C16.3462 4.373 14.3498 3.553 11.9971 3.553C9.66109 3.553 7.66984 4.373 6.02334 6.013C4.377 7.65317 3.55384 9.64958 3.55384 12.0022C3.55384 14.3382 4.37675 16.3295 6.02259 17.976C7.66859 19.6223 9.66109 20.4455 12.0001 20.4455Z"
                                            fill="#F5F5F5"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base font-bold leading-5">
                                        {video.title}
                                      </p>
                                      <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                                        {video.description}
                                        <br />
                                        {video.views} - {video.time}
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
    </div>
  );
}
