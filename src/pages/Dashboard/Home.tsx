import { useEffect, useRef, useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import Header from '../../components/Dashboard/Header';
import { InfoModal } from '../../components/Dashboard/Modal';
import { ChevronRight } from 'lucide-react';

// Simple Line Chart Component
function SimpleLineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Data points for all 12 months
    const data = [145, 180, 160, 190, 170, 205, 175, 195, 185, 210, 200, 220];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    // Calculate points
    const points = data.map((value, index) => ({
      x: padding + (chartWidth / (data.length - 1)) * index,
      y: padding + chartHeight - ((value - min) / range) * chartHeight,
    }));

    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, 'rgba(0, 128, 128, 0.3)');
    gradient.addColorStop(1, 'rgba(240, 245, 245, 0.1)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    points.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.closePath();
    ctx.fill();

    // Draw line with smooth curves
    ctx.strokeStyle = '#008080';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length - 1; i++) {
      const xMid = (points[i].x + points[i + 1].x) / 2;
      const yMid = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xMid, yMid);
    }
    ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    ctx.stroke();

    // Draw labels
    ctx.fillStyle = '#638785';
    ctx.font = 'bold 13px Manrope, sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
      ctx.fillText(label, points[index].x, height - 10);
    });
  }, []);

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <canvas
        ref={canvasRef}
        width={1400}
        height={200}
        className="h-full"
      />
    </div>
  );
}

export default function Home() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Show demo modal on page load
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenDemoModal');
    if (!hasSeenModal) {
      setShowDemoModal(true);
      sessionStorage.setItem('hasSeenDemoModal', 'true');
    }
  }, []);

  const learningResources = [
    {
      title: 'Investment Basics',
      description: 'Learn the fundamentals of investing',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292',
    },
    {
      title: 'First-Time Investor',
      description: 'Learn the fundamentals of investing',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292',
    },
    {
      title: 'Mastering the Market',
      description: 'Learn the fundamentals of investing',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/4410fee094856e96994db5441b4cf8099cd8694b?width=292',
    },
    {
      title: 'Investment Strategies',
      description: 'Learn the fundamentals of investing',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/095be818ef2d5359dee7c83c2e68ff4845499bff?width=292',
    },
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      <Sidebar />
      <Header />

      {/* Desktop Layout */}
       <main className="hidden lg:block lg:ml-20 pt-20 px-6 pb-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Portfolio Chart */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl mt-6 p-6 shadow-lg">
                <div className="bg-gray-200/20 rounded-xl p-6 border-2 border-gray-200/20">
                  {/* Portfolio Header */}
                  <div className="mb-2">
                    <p className="text-base text-text-primary">Portfolio Value</p>
                    <p className="text-base text-text-primary">Demo</p>
                  </div>

                  {/* Portfolio Value */}
                  <h1 className="text-[32px] font-bold font-inter text-text-primary mb-2">
                    ₦50,000,000
                  </h1>

                  {/* Time Period and Return */}
                  <div className="flex items-center gap-1 mb-4">
                    <p className="text-base text-text-primary">Last 12 Months</p>
                    <p className="text-base font-medium text-green-positive">+15%</p>
                  </div>

                  {/* Chart */}
                  <div className="h-[148px] mb-8">
                    <SimpleLineChart />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3.5 mt-4">
                  <div className="bg-white rounded-xl p-6 border-4 border-gray-200/20 shadow-sm">
                    <p className="text-base font-medium font-manrope text-text-primary mb-2">
                      Total Value
                    </p>
                    <p className="text-2xl font-bold font-manrope text-text-primary">$22,500</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-4 border-gray-200/20 shadow-sm">
                    <p className="text-base font-medium font-manrope text-text-primary mb-2">
                      Overall Return
                    </p>
                    <p className="text-2xl font-bold font-manrope text-text-primary">+15%</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-4 border-gray-200/20 shadow-sm">
                    <p className="text-base font-medium font-manrope text-text-primary mb-2">
                      Volatility
                    </p>
                    <p className="text-2xl font-bold font-manrope text-text-primary">8%</p>
                  </div>
                </div>
              </div>
              
              {/* Beginner's Guide Banner */}
              <div className="mt-6 bg-[#003333] rounded-2xl p-4 shadow-lg flex items-center justify-between overflow-hidden">
                <div className="flex-1">
                  <p className="text-white text-base mb-1">Beginner's Guide</p>
                  <p className="text-white text-sm font-bold mb-1">
                    Lesson 1: Understanding Investments
                  </p>
                  <p className="text-white/60 text-sm mb-4">
                    Learn the basics of investing and how to get started.
                  </p>
                  <button className="bg-growtt-teal text-white px-4 py-2 rounded-lg text-sm">
                    Learn now
                  </button>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/53ea9cd7a7bd35a953f1cd5fdbefbfcc3e4ea804?width=508"
                  alt="Guide illustration"
                  className="h-[134px] object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Asset Allocation */}
              <div className="bg-white rounded-2xl mt-6 p-6 border-4 border-gray-200/20 shadow-xl">
                <div className="bg-gray-200/20 rounded-xl p-6">
                  <p className="text-base font-medium font-manrope text-text-primary mb-2">
                    Asset Allocation (Demo)
                  </p>
                  <h2 className="text-2xl font-bold font-manrope text-text-primary mb-3">
                    ₦50,000,000
                  </h2>

                  {/* Asset Bars */}
                  <div className="space-y-6 py-3">
                    {['Bonds (0%)', 'Stocks (0%)', 'Real Estate (0%)', 'Digital Art (0%)'].map(
                      (asset, index) => (
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
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Learning Resources */}
              <div className="bg-white rounded-2xl p-6 shadow-sm max-h-[392px]">
                <div className="space-y-3 overflow-y-auto max-h-[344px] pr-2">
                  {learningResources.map((resource) => (
                    <div
                      key={resource.title}
                      className="bg-gray-200/20 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-[76px] h-[59px] rounded overflow-hidden flex-shrink-0">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-bold text-text-secondary mb-1">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-text-secondary">{resource.description}</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-text-secondary flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Layout */}
      <main className="lg:hidden pt-16 px-5 pb-6 space-y-6">
        {/* Wallet Balance Card */}
        <div className="bg-teal/40 rounded-[20px] p-3 shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <p className="text-sm text-text-primary">Wallet balance</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                    fill="#030712"
                  />
                </svg>
              </div>
              <p className="text-2xl font-medium font-grotesk text-text-primary">₦123,122.90</p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <p className="text-sm text-text-primary">Transaction History</p>
              <button className="bg-[#1A8273] text-white px-4 py-1.5 rounded-xl text-base">
                Add Funds
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-6">
            <div className="w-[35px] h-1 bg-dark-teal rounded-lg" />
            <div className="w-[17px] h-0.5 bg-dark-teal/60 rounded-lg" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card-bg rounded-lg p-3">
          <div className="grid grid-cols-4 gap-14">
            {[
              { name: 'Portfolio', icon: 'bar_chart' },
              { name: 'Assets', icon: 'dataset' },
              { name: 'Books', icon: 'book' },
              { name: 'Learning Path', icon: 'menu_book' },
            ].map((action) => (
              <div key={action.name} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-[#F8F9FA] rounded-full shadow-md flex items-center justify-center">
                  <div className="w-6 h-6 bg-text-primary rounded" />
                </div>
                <p className="text-sm text-text-primary text-center">{action.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-b from-white to-dark-teal rounded-2xl border border-gray-200 p-4 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-base text-text-primary mb-1">
              Get 20% Off on your 1st Investment
            </p>
            <p className="text-xs text-text-secondary mb-8">Enjoy your Investment journey</p>
            <div className="flex items-center gap-0.5">
              <div className="w-[37px] h-0.5 rounded-lg bg-text-primary" />
              <div className="w-[37px] h-0.5 rounded-lg border border-gray-400" />
              <div className="w-[37px] h-0.5 rounded-lg border border-gray-400" />
            </div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e6793645d2af4f0e6cca47440d09db523ecb06cb?width=326"
            alt="Gift"
            className="absolute right-0 top-[-14px] w-[163px] h-[131px] transform rotate-[-31deg]"
          />
        </div>

        {/* User Type Selector */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-text-primary">Beginner</span>
          <div className="w-px h-6 bg-text-primary/20" />
          <span className="text-base text-text-secondary opacity-80">Professional</span>
        </div>
      </main>

      {/* Demo Account Modal - Shows on page load */}
      <InfoModal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
        message="This is a demo account with virtual funds, a safe space to learn and practice investing."
      />

    </div>
  );
}