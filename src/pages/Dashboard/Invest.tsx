import { useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Header from '../../components/Dashboard/Header';
import {
  Dialog,
  DialogContent,
} from '../../components/ui/dialog';

export default function Invest() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'allocation' | 'performance'>('portfolio');
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('below-10000');

  const filterTabs = [
    { label: 'Type', active: false },
    { label: 'Popular', active: false },
    { label: 'Recommended', active: false },
    { label: 'All', active: false },
  ];

  const handlePurchaseClick = () => {
    setShowConfirmModal(false);
    setShowPurchaseModal(false);
    // Handle purchase logic here
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Sidebar />
      <Header />

      <main className="lg:ml-20 pt-20 px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 mt-6 space-y-6">
              {/* Filter Tabs */}
              <div className="bg-gradient-to-r from-[#066] via-[#099] to-[#066] rounded-2xl p-4">
                <div className="flex items-center gap-3 flex-wrap">
                  {filterTabs.map((tab) => (
                    <button
                      key={tab.label}
                      className="bg-[#F5F5F5] text-[#030712] px-4 py-2 rounded-2xl text-sm font-['Gill_Sans_MT',sans-serif] hover:bg-white transition-colors"
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`flex items-center gap-2 font-['Gill_Sans_MT',sans-serif] text-base leading-6 ${
                    activeTab === 'portfolio' ? 'text-[#030712] font-bold' : 'text-[rgba(3,7,18,0.6)]'
                  }`}
                >
                  Portfolio Value
                </button>
                <div className="w-px h-6 bg-[rgba(3,7,18,0.2)]"></div>
                <button
                  onClick={() => setActiveTab('allocation')}
                  className={`flex items-center gap-2 font-['Gill_Sans_MT',sans-serif] text-base leading-6 ${
                    activeTab === 'allocation' ? 'text-[#030712] font-bold' : 'text-[rgba(3,7,18,0.6)]'
                  }`}
                >
                  Asset Allocation
                </button>
                <div className="w-px h-6 bg-[rgba(3,7,18,0.2)]"></div>
                <button
                  onClick={() => setActiveTab('performance')}
                  className={`flex items-center gap-2 font-['Gill_Sans_MT',sans-serif] text-base leading-6 ${
                    activeTab === 'performance' ? 'text-[#030712] font-bold' : 'text-[rgba(3,7,18,0.6)]'
                  }`}
                >
                  Portfolio Performance
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                {activeTab === 'portfolio' && (
                  <div className="bg-[#F5F5F5] rounded-xl p-6 border-2 border-[rgba(219,229,227,0.2)]">
                    <div className="space-y-2 mb-4">
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base">
                        Portfolio Value
                      </p>
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base">
                        Demo
                      </p>
                    </div>

                    <h2 className="text-[32px] font-bold font-inter text-[#121717] mb-2">
                      ₦50,000,000
                    </h2>

                    <div className="flex items-center gap-1 mb-6">
                      <p className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-base">
                        Last <span className="font-inter">12</span> Months
                      </p>
                      <p className="text-[#088730] font-medium font-inter text-base">+15%</p>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="h-[216px] relative">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 794 148"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="148">
                            <stop offset="0" stopColor="#F0F5F5" />
                            <stop offset="0.5" stopColor="#F0F5F5" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M7 145.027C36.4999 145.027 36.4999 28.4865 66 28.4865C95.4999 28.4865 95.4999 54.973 125 54.973C154.5 54.973 154.5 123.838 184 123.838C213.5 123.838 213.5 44.3784 243 44.3784C272.501 44.3784 272.501 134.432 301.999 134.432C331.499 134.432 331.499 81.4595 361 81.4595C390.5 81.4595 390.5 60.2703 420 60.2703C449.5 60.2703 449.5 160.919 479.001 160.919C508.499 160.919 508.499 198 538 198C567.5 198 567.5 2 597 2C626.5 2 626.5 107.946 656.001 107.946C685.499 107.946 685.499 171.514 714.999 171.514C744.5 171.514 744.5 33.7838 774 33.7838"
                          stroke="#008080"
                          strokeWidth="3"
                          fill="none"
                        />
                        <path
                          d="M6.85983 200.213C48.3705 200.213 48.3705 38.5732 89.8814 38.5732C131.392 38.5732 131.392 75.3096 172.903 75.3096C214.414 75.3096 214.414 170.824 255.924 170.824C297.435 170.824 297.435 60.6151 338.947 60.6151C380.458 60.6151 380.458 185.519 421.967 185.519C463.478 185.519 463.478 112.046 504.989 112.046C546.5 112.046 546.5 82.6569 588.011 82.6569C629.522 82.6569 629.522 222.255 671.033 222.255C712.542 222.255 712.542 273.686 754.053 273.686L754.053 273.686L6.85983 273.686L6.85983 200.213Z"
                          fill="url(#chartGradient)"
                        />
                      </svg>
                      
                      {/* Month Labels */}
                      <div className="flex justify-between mt-4">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month) => (
                          <p
                            key={month}
                            className="text-[#638785] font-bold font-manrope text-[13px]"
                          >
                            {month}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'allocation' && (
                  <div className="bg-white rounded-xl p-6 border-2 border-[#F5F5F5] shadow-lg">
                    <p className="text-[#121717] font-medium font-manrope text-base mb-6">
                      Asset Allocation
                    </p>

                    <div className="space-y-6 py-3">
                      {[
                        { label: 'Bonds (25%)', width: 55, color: '#F2F5F2' },
                        { label: 'Stocks (40%)', width: 137, color: '#F2F5F2' },
                        { label: 'Real Estate (20%)', width: 82, color: '#F2F5F2' },
                        { label: 'Digital Art (15%)', width: 55, color: '#F2F5F2' },
                      ].map((asset) => (
                        <div key={asset.label} className="flex items-center gap-4">
                          <p className="text-[13px] font-bold font-manrope text-[#6B827D] w-[117px]">
                            {asset.label}
                          </p>
                          <div className="flex-1 h-full">
                            <div
                              className="h-5 border-r-2 border-[#757575]"
                              style={{
                                width: `${asset.width}px`,
                                backgroundColor: asset.color,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="flex justify-center items-center gap-3.5">
                    <div className="bg-white rounded-xl p-6 border-4 border-[rgba(222,227,227,0.2)] shadow-sm flex-1">
                      <p className="text-base font-medium font-manrope text-[#121717] mb-2">
                        Yearly Return
                      </p>
                      <p className="text-2xl font-bold font-manrope text-[#121717]">+15%</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-4 border-[rgba(222,227,227,0.2)] shadow-sm flex-1">
                      <p className="text-base font-medium font-manrope text-[#121717] mb-2">
                        Monthly Return
                      </p>
                      <p className="text-2xl font-bold font-manrope text-[#121717]">12%</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-4 border-[rgba(222,227,227,0.2)] shadow-sm flex-1">
                      <p className="text-base font-medium font-manrope text-[#121717] mb-2">
                        Volatility
                      </p>
                      <p className="text-2xl font-bold font-manrope text-[#121717]">8%</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Beginner's Guide Banner */}
              <div className="bg-[#003333] rounded-2xl p-4 shadow-lg flex items-center justify-between overflow-hidden">
                <div className="flex-1 space-y-1">
                  <p className="text-[#F5F5F5] font-['Gill_Sans_MT',sans-serif] text-base leading-5">
                    Beginner's Guide
                  </p>
                  <p className="text-[#F5F5F5] font-bold font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                    Lesson 1: Understanding Investments
                  </p>
                  <p className="text-[rgba(245,245,245,0.6)] font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
                    Learn the basics of investing and how to get started.
                  </p>
                  <button className="bg-[#008080] text-[#F5F5F5] px-4 py-2 rounded-lg text-sm font-['Gill_Sans_MT',sans-serif] mt-4">
                    Learn now
                  </button>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/53ea9cd7a7bd35a953f1cd5fdbefbfcc3e4ea804?width=508"
                  alt="Guide illustration"
                  className="h-[134px] object-cover ml-4"
                />
              </div>
            </div>

            {/* Right Column - Account Info */}
            <div className="space-y-5 mt-6">
              {/* Account Balance Card */}
              <div className="bg-white rounded-2xl p-6 border-4 border-[rgba(222,227,227,0.2)] shadow-xl">
                <div className="bg-[#F5F5F5] rounded-xl p-6">
                  <p className="text-[#121717] font-medium font-manrope text-base mb-2">
                    Account Balance (Demo)
                  </p>
                  <h2 className="text-2xl font-bold font-manrope text-[#121717] mb-4">
                    ₦100,000
                  </h2>
                  <button 
                    onClick={() => setShowPurchaseModal(true)}
                    className="bg-white text-[#030712] px-4 py-2 rounded-2xl text-sm font-['Gill_Sans_MT',sans-serif] text-center w-full hover:bg-gray-50 transition-colors"
                  >
                    Buy Demo Funds with Seeds
                  </button>
                </div>
              </div>

              {/* Asset Allocation Summary */}
              <div className="bg-white rounded-2xl p-6 border-4 border-[rgba(222,227,227,0.2)] shadow-xl">
                <div className="bg-[#F5F5F5] rounded-xl p-6">
                  <p className="text-[#121717] font-medium font-manrope text-base mb-2">
                    Asset Allocation (Demo)
                  </p>
                  <h2 className="text-2xl font-bold font-manrope text-[#121717] mb-4">
                    ₦50,000,000
                  </h2>

                  <div className="space-y-6 py-3">
                    {['Bonds (0%)', 'Stocks (0%)', 'Real Estate (0%)', 'Digital Art (0%)'].map(
                      (asset, index) => (
                        <div key={asset} className="flex items-center gap-4">
                          <p className="text-[13px] font-bold font-manrope text-[rgba(3,7,18,0.6)] w-[117px]">
                            {asset}
                          </p>
                          <div className="flex-1">
                            <div
                              className="border-r-2 border-[#757575] bg-white"
                              style={{ width: `${[11, 8, 9, 2][index]}px`, height: '20px' }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Purchase Funds Modal */}
      <Dialog open={showPurchaseModal} onOpenChange={setShowPurchaseModal}>
        <DialogContent className="sm:max-w-[600px] bg-white rounded-2xl p-6 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#030712] font-['Gill_Sans_MT',sans-serif] text-[22px] leading-10">
                Buy Demo Funds
              </h2>
              <p className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base leading-[21px]">
                Select your preferred demo funds amount.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { id: 'below-10000', label: 'Below', amount: '₦10,000' },
                { id: '50-seeds', label: '50 Seeds', separator: '-', amount: '₦10,000' },
                { id: '100-seeds', label: '100 Seeds', separator: '-', amount: '₦1,000,000' },
                { id: '500-seeds', label: '500 Seeds', separator: '-', amount: '₦5,000,000' },
                { id: '1000-seeds', label: '1000 Seeds', separator: '-', amount: '₦10,000,000' },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className="flex items-center gap-4 px-4 py-1.5 rounded-lg border border-[#DBE6E3] bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base">
                      {option.label}
                    </span>
                    {option.separator && (
                      <span className="text-black font-['Gill_Sans_MT',sans-serif] text-base">
                        {option.separator}
                      </span>
                    )}
                    <span className="text-[rgba(3,7,18,0.6)] font-['Gill_Sans_MT',sans-serif] text-base">
                      {option.amount}
                    </span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedOption === option.id ? 'border-[#4FDAC3]' : 'border-[#DDDDDD]'
                  }`}>
                    {selectedOption === option.id && (
                      <div className="w-2 h-2 rounded-full bg-[#4FDAC3]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-8">
              <button
                onClick={() => {
                  setShowPurchaseModal(false);
                  setShowConfirmModal(true);
                }}
                className="px-4 h-10 bg-[#008080] text-[#F5F5F5] rounded-xl font-['Gill_Sans_MT',sans-serif] text-sm hover:bg-[#006666] transition-colors"
              >
                Purchase Funds
              </button>
              <button
                onClick={() => setShowPurchaseModal(false)}
                className="px-4 h-10 bg-[#E8F2F2] text-[#030712] rounded-xl font-['Gill_Sans_MT',sans-serif] text-sm hover:bg-[#D1E8E8] transition-colors"
              >
                Cancel
              </button>
            </div>
            <p className="text-[rgba(3,7,18,0.6)] text-center font-['Gill_Sans_MT',sans-serif] text-sm leading-[21px]">
              By confirming, you agree to our terms and conditions.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="sm:max-w-[600px] bg-white rounded-2xl p-6 gap-8">
          <div className="flex flex-col items-center gap-16">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f46bb3d8b6cf7199b953176335f87a0d53e60f9d?width=506" 
              alt="Buy confirmation" 
              className="w-[253px] h-[253px]"
            />
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-[#0D141C] text-center font-['Gill_Sans_MT',sans-serif] text-lg font-bold leading-[23px]">
                Are you sure?
              </h2>
              <p className="text-[rgba(3,7,18,0.6)] text-center font-['Gill_Sans_MT',sans-serif] text-base leading-[21px]">
                50 seeds will be deducted from your seeds balance.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handlePurchaseClick}
              className="px-4 h-10 bg-[#008080] text-[#F5F5F5] rounded-xl font-['Gill_Sans_MT',sans-serif] text-sm hover:bg-[#006666] transition-colors"
            >
              Continue
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
