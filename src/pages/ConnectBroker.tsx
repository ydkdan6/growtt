import { useState, useEffect } from "react";
import { 
  ArrowLeft,
  Lock,
  ChevronDown
} from "lucide-react";
import HeaderNav from "../components/header";

export default function ConnectBroker() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    contactMethod: ''
  });

  // Background transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const backgrounds = [
    {
      type: 'image',
      url: "url('https://api.builder.io/api/v1/image/assets/TEMP/a6e7409c017645b1085c0d7cd866f693c11d9bc5?width=1248')"
    },
    {
      type: 'svg',
      content: (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 624 890"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0)">
            <path d="M0 0H624V890H0V0Z" fill="#FF9800" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M141.058 30.4496V118.72C127.354 113.67 112.447 111.024 96.9399 111.024C25.173 111.024 -33.13 169.23 -33.13 241.025C-33.13 257.019 -30.2449 272.413 -24.9556 286.483C-50.3204 302.478 -72.3193 323.403 -89.6299 348.056C-107.662 316.548 -118 279.989 -118 241.025C-118 122.328 -21.7098 26 96.9399 26C112.087 26 126.753 27.5634 141.058 30.4496Z"
              fill="#008080"
              fillOpacity="0.9"
            />
            <path
              d="M206.934 292.014C193.35 320.516 169.187 342.764 139.254 353.828C126.031 349.378 111.726 346.853 96.9394 346.853C82.1533 346.853 68.0884 349.258 54.7448 353.948C50.297 355.391 46.2098 357.195 42.0023 359.119C14.5939 371.867 -7.64542 393.995 -20.6284 421.294C-45.3921 405.059 -66.6698 383.773 -82.8984 359.119C-66.6698 334.225 -45.3921 313.06 -20.6284 296.945C-18.1039 295.382 -15.4592 293.698 -12.9348 292.134C19.2822 273.013 56.6682 261.949 96.8192 261.949C136.97 261.949 174.476 273.013 206.693 292.134"
              fill="white"
              fillOpacity="0.9"
            />
            <path
              d="M312 476.854C312 595.671 215.83 691.879 97.0601 691.879C-21.7098 691.879 -118 595.671 -118 476.854C-118 465.67 -117.038 454.485 -115.476 443.662C-91.0724 469.277 -62.1012 490.443 -29.764 505.957C-16.5407 563.802 35.1507 606.855 96.9399 606.855C168.827 606.855 227.01 548.649 227.01 476.733C227.01 460.979 224.245 445.947 219.076 431.876C244.441 415.521 266.319 393.995 283.149 368.98C301.421 400.729 311.88 437.529 311.88 476.733"
              fill="white"
              fillOpacity="0.9"
            />
            <path
              d="M309.356 88.7762V274.458C305.149 301.636 295.772 327.132 282.428 349.981C280.625 352.987 278.822 355.994 276.899 359C260.67 383.774 239.392 404.94 214.629 421.175C212.224 422.738 209.7 424.422 207.175 425.865C174.958 444.986 137.332 456.05 97.0608 456.05C56.7896 456.05 19.2833 444.986 -12.9336 425.865C0.289778 397.363 24.5727 374.875 54.145 363.811C67.6088 368.621 82.0343 371.147 97.0608 371.147C112.087 371.147 126.513 368.621 139.977 363.811C144.064 362.368 148.151 360.804 151.998 359C179.406 346.133 201.525 324.125 214.629 296.826C216.071 293.94 217.273 290.933 218.355 287.807C220.759 281.553 222.803 275.059 224.246 268.445V86.371L238.31 67.0091L265.959 28.8867L309.356 88.7762Z"
              fill="#008080"
              fillOpacity="0.9"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path d="M0 0H624V890H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Placeholder */}
      <HeaderNav />

      {/* Back Button */}
      <div className="px-5 md:px-6 py-8 mt-12">
        <button 
          onClick={() => console.log('Back')}
          className="md:mt-[40px] md:ml-[39px] inline-flex items-center justify-center w-11 h-11 border-2 border-gray-900/20 rounded-2xl hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-900/20" />
        </button>
      </div>

      {/* Main Content - Split Layout */}
      <section className="px-5 md:px-20 pb-16">
        <div className="flex flex-col lg:flex-row border border-white/20 rounded-none overflow-hidden max-w-full">
          {/* Left Side - Hero with Transitioning Background */}
          <div className="lg:w-[624px] relative md:min-h-[890px] min-h-[300px] overflow-hidden">
            {/* Background layers with transition */}
            {backgrounds.map((bg, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentBg === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={
                  bg.type === 'image'
                    ? {
                        backgroundImage: bg.url,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }
                    : undefined
                }
              >
                {bg.type === 'svg' && bg.content}
              </div>
            ))}

            {/* Content overlay */}
            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
              {/* Top Content */}
              <div className="space-y-6 max-w-lg">
                <h1 className="text-4xl md:text-[56px] font-bold text-white leading-tight tracking-tight">
                  {currentBg === 0 ? 'Connect With a Broker' : 'Your Growth, Our Priority.'}
                </h1>
                <p className="text-base md:text-lg text-white leading-relaxed">
                  Securely manage your journey to success. Join thousands growing with Growtt.
                </p>
              </div>

              {/* Bottom Security Badge */}
              <div className="flex items-center gap-2 text-white">
                <Lock className="w-6 h-6" />
                <span className="text-base">Your data is always secure with us.</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-[656px] bg-white p-10 relative min-h-[890px] flex flex-col">
            {/* Header */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-normal text-gray-900 leading-tight tracking-tight">
                Connect With a Broker
              </h2>
              <p className="text-base text-gray-900/80">
                Secure expert advisory for your company or personal investments.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-8 flex-1 flex flex-col">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-lg text-gray-900 block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="OJI"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-white text-gray-900/60 text-base focus:outline-none focus:border-teal-600"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-lg text-gray-900 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="bizzoji@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-white text-gray-900/60 text-base focus:outline-none focus:border-teal-600"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-lg text-gray-900 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="08137802389"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-white text-gray-900/60 text-base focus:outline-none focus:border-teal-600"
                />
              </div>

              {/* Budget Range - Select Dropdown */}
              <div className="space-y-2">
                <label htmlFor="budget" className="text-lg text-gray-900 block">
                  Budget Range
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-white text-gray-900/60 text-base focus:outline-none focus:border-teal-600 appearance-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="500-1000">₦500 - ₦1,000</option>
                    <option value="1000+">₦1,000 and above</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-900/20 pointer-events-none" />
                </div>
              </div>

              {/* Preferred Contact Method - Select Dropdown */}
              <div className="space-y-2">
                <label htmlFor="contactMethod" className="text-lg text-gray-900 block">
                  Preferred Contact Method
                </label>
                <div className="relative">
                  <select
                    id="contactMethod"
                    value={formData.contactMethod}
                    onChange={(e) => handleChange('contactMethod', e.target.value)}
                    className="w-full px-3 py-2 border-2 border-[rgba(13,3,0,0.15)] rounded bg-white text-gray-900/60 text-base focus:outline-none focus:border-teal-600 appearance-none"
                  >
                    <option value="">Select contact method</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="sms">SMS</option>
                    <option value="call">Call</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-900/20 pointer-events-none" />
                </div>
              </div>

              {/* Spacer to push button to bottom */}
              <div className="flex-1"></div>

              {/* Submit Button */}
              <div className="space-y-3 mt-auto">
                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-2.5 bg-teal-600 border border-white/20 rounded-lg text-white text-base hover:bg-teal-600/90 transition-colors"
                >
                  Connect Now
                </button>
                <p className="text-sm text-[rgba(13,3,0,0.6)] text-center">
                  Our brokers will reach out to you shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}