import { useState } from 'react';
import { Menu, Bell } from 'lucide-react';

const Header = () => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'wallet' | 'seeds'>('portfolio');
  const [userType, setUserType] = useState<'beginner' | 'professional'>('beginner');

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-0 left-20 right-0 h-20 bg-[#003333] z-40 items-center justify-between px-5">
        {/* User Type Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setUserType('beginner')}
            className={`text-base leading-6 ${
              userType === 'beginner' ? 'text-white font-bold' : 'text-white/60 font-normal'
            }`}
          >
            Beginner
          </button>
          <div className="w-px h-6 bg-white/20" />
          <button
            onClick={() => setUserType('professional')}
            className={`text-base leading-6 ${
              userType === 'professional' ? 'text-white font-bold' : 'text-white/60 font-normal'
            }`}
          >
            Professional
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-14">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 px-4 py-4 rounded-[20px] border border-white/100 bg-[#333]">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`text-base leading-6 ${
                activeTab === 'portfolio' ? 'text-white font-bold' : 'text-white/60 font-normal'
              }`}
            >
              Portfolio
            </button>
            <div className="w-px h-6 bg-white/20" />
            <button
              onClick={() => setActiveTab('wallet')}
              className={`text-base leading-6 ${
                activeTab === 'wallet' ? 'text-white font-bold' : 'text-white/60 font-normal'
              }`}
            >
              Wallet
            </button>
            <div className="w-px h-6 bg-white/20" />
            <button
              onClick={() => setActiveTab('seeds')}
              className={`text-base leading-6 ${
                activeTab === 'seeds' ? 'text-white font-bold' : 'text-white/60 font-normal'
              }`}
            >
              Seeds
            </button>
          </div>

          {/* Notification and Profile */}
          <div className="flex items-center gap-8">
            <button className="w-10 h-10 rounded-full bg-[#F0F5F5] flex items-center justify-center">
              <Bell className="w-6 h-6 text-[#030712]" />
            </button>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8dccb6497d1faca6aa2fc5b006908338c39bcbb1?width=80"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-dark-teal z-40 flex items-center justify-center px-5 gap-4">
        <div className="flex-1">
          <svg width="80" height="25" viewBox="0 0 80 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6738_10940)">
              <path d="M18.4286 2.81822V5.94372L18.5735 5.70821C19.8545 3.60459 21.1356 2.55078 22.4127 2.55078C23.4117 2.55078 24.4537 3.06571 25.5389 4.09158L24.1442 6.46264C23.2236 5.5725 22.3696 5.12942 21.5822 5.12942C20.7282 5.12942 19.9877 5.54455 19.3649 6.37483C18.738 7.2051 18.4286 8.18706 18.4286 9.32469V16.4539H15.7686V2.81822H18.4286Z" fill="white"/>
              <path d="M31.6144 2.78516C33.6515 2.78516 35.3439 3.45576 36.6915 4.79298C38.0392 6.1302 38.713 7.81469 38.713 9.83849C38.713 11.8623 38.0274 13.439 36.6602 14.7363C35.293 16.0336 33.5732 16.6842 31.4969 16.6842C29.4206 16.6842 27.8105 16.0256 26.4629 14.7044C25.1152 13.3871 24.4414 11.7385 24.4414 9.76264C24.4414 7.78675 25.1231 6.10226 26.4864 4.77701C27.8497 3.44778 29.5577 2.78516 31.6144 2.78516ZM31.4695 5.2161C30.2002 5.2161 29.1581 5.63922 28.3433 6.48945C27.5284 7.33968 27.121 8.42143 27.121 9.7347C27.121 11.048 27.5363 12.1058 28.3707 12.9281C29.2051 13.7543 30.2746 14.1655 31.587 14.1655C32.8994 14.1655 33.9493 13.7464 34.7798 12.9121C35.6103 12.0778 36.0216 11.0081 36.0216 9.70277C36.0216 8.39748 35.5907 7.33569 34.7289 6.48546C33.867 5.63523 32.7779 5.21211 31.4695 5.21211V5.2161Z" fill="white"/>
              <path d="M56.6551 2.81641H59.4954L53.5838 16.6876H52.7376L48.7809 7.18731L44.8712 16.6876H44.0133L38.0547 2.81641H40.8988L44.405 11.0872L47.8211 2.81641H49.7838L53.1607 11.0872L56.6551 2.81641Z" fill="white"/>
              <path d="M59.832 4.98164L64.8073 0V2.81814H69.0422V5.24908H64.8073V11.9232C64.8073 13.48 65.4419 14.2623 66.7112 14.2623C67.6632 14.2623 68.6661 13.943 69.7238 13.3003V15.8191C68.7053 16.4019 67.5966 16.6933 66.3939 16.6933C65.1912 16.6933 64.1727 16.334 63.3696 15.6115C63.1188 15.396 62.9073 15.1485 62.7428 14.8771C62.5782 14.6056 62.4411 14.2504 62.3275 13.8113C62.2139 13.3722 62.159 12.5339 62.159 11.3005V5.25307H59.832V4.98563V4.98164Z" fill="white"/>
              <path d="M70.1084 4.98164L75.0837 0V2.81814H79.3185V5.24908H75.0837V11.9232C75.0837 13.48 75.7183 14.2623 76.9876 14.2623C77.9396 14.2623 78.9424 13.943 80.0002 13.3003V15.8191C78.9816 16.4019 77.873 16.6933 76.6703 16.6933C75.4676 16.6933 74.449 16.334 73.6459 15.6115C73.3952 15.396 73.1837 15.1485 73.0191 14.8771C72.8546 14.6056 72.7175 14.2504 72.6039 13.8113C72.4903 13.3722 72.4354 12.5339 72.4354 11.3005V5.25307H70.1084V4.98563V4.98164Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M8.44229 3.04613V5.97604C7.99569 5.80838 7.50992 5.72057 7.00455 5.72057C4.66578 5.72057 2.76578 7.65255 2.76578 10.0356C2.76578 10.5665 2.8598 11.0774 3.03217 11.5445C2.20557 12.0753 1.48866 12.7699 0.924538 13.5882C0.336908 12.5384 0 11.3289 0 10.0356C0 6.09579 3.13795 2.89844 7.00455 2.89844C7.49816 2.89844 7.9761 2.95033 8.44229 3.04613Z" fill="white"/>
              <path d="M10.5887 11.7284C10.1461 12.6744 9.35863 13.4129 8.38316 13.7801C7.95223 13.6324 7.48604 13.5486 7.00419 13.5486C6.52233 13.5486 6.06398 13.6284 5.62913 13.7841C5.48418 13.832 5.35099 13.8919 5.21387 13.9558C4.32068 14.3789 3.59593 15.1134 3.17284 16.0195C2.36583 15.4806 1.67242 14.7741 1.14355 13.9558C1.67242 13.1295 2.36583 12.4269 3.17284 11.8921C3.25511 11.8402 3.34129 11.7843 3.42356 11.7324C4.47346 11.0977 5.69181 10.7305 7.00027 10.7305C8.30873 10.7305 9.531 11.0977 10.5809 11.7324" fill="#FF9800"/>
              <path d="M14.013 17.8618C14.013 21.8056 10.879 24.999 7.00847 24.999C3.13795 24.999 0 21.8056 0 17.8618C0 17.4906 0.0313403 17.1193 0.0822682 16.7601C0.877528 17.6103 1.82165 18.3129 2.87547 18.8278C3.3064 20.7478 4.99094 22.1768 7.00455 22.1768C9.34724 22.1768 11.2433 20.2448 11.2433 17.8578C11.2433 17.3349 11.1532 16.8359 10.9848 16.3689C11.8114 15.826 12.5244 15.1115 13.0728 14.2812C13.6683 15.3351 14.0091 16.5565 14.0091 17.8578" fill="#FF9800"/>
              <path d="M13.9267 4.97615V11.1393C13.7896 12.0415 13.4841 12.8877 13.0492 13.6461C12.9905 13.7459 12.9317 13.8457 12.869 13.9455C12.3401 14.7678 11.6467 15.4703 10.8397 16.0092C10.7614 16.0611 10.6791 16.117 10.5968 16.1649C9.54694 16.7996 8.32075 17.1668 7.00837 17.1668C5.696 17.1668 4.47373 16.7996 3.42383 16.1649C3.85476 15.2188 4.6461 14.4724 5.60981 14.1052C6.04858 14.2648 6.51868 14.3487 7.00837 14.3487C7.49806 14.3487 7.96817 14.2648 8.40693 14.1052C8.54013 14.0573 8.67333 14.0054 8.79869 13.9455C9.69188 13.5184 10.4127 12.7879 10.8397 11.8818C10.8867 11.786 10.9259 11.6862 10.9612 11.5824C11.0395 11.3748 11.1061 11.1593 11.1531 10.9397V4.89631L11.6115 4.25365L12.5164 2.98828L13.9307 4.97615H13.9267Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_6738_10940">
                <rect width="80" height="25" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <Bell className="w-6 h-6 text-white" />
        <Menu className="w-6 h-6 text-white" />
      </header>
    </>
  );
};

export default Header;
