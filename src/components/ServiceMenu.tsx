import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown, X, Menu } from 'lucide-react';
import HeaderNav from './header';

const ServicesMenu: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const Navigate = useNavigate();

  const menuItems = [
    { label: 'Investments', path: '/investments', action: null },
    { label: 'Broker Connect', path: '/broker-connect', action: () =>  { Navigate('/broker-connect')} },
    { label: 'Contact Us', path: null, action: () => setIsContactOpen(true) }
  ];

  const handleNavigation = (item: typeof menuItems[0]) => {
    if (item.action) {
      item.action();
    } else if (item.path) {
      console.log(`Navigating to: ${item.path}`);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <HeaderNav />

      {/* Content */}
      <div className="p-6">
        {/* Back Button and Title */}
        <div className="flex items-center mb-8">
          <button 
            className="mr-4 p-2 hover:bg-gray-200 rounded-full transition-colors"
            onClick={() => window.history.back()}
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Services</h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item)}
              className="w-full bg-white px-6 py-5 flex items-center justify-between hover:bg-gray-100 transition-colors border-b border-gray-100"
            >
              <span className="text-lg text-gray-900 font-normal">{item.label}</span>
              <ChevronRight size={24} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Contact Modal/Sheet */}
      {isContactOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsContactOpen(false)}
          />

          {/* Modal - Desktop (centered) / Mobile (bottom sheet) */}
          <div 
            className="fixed left-0 right-0 bottom-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:w-[400px] w-full bg-white md:rounded-2xl rounded-t-3xl shadow-xl z-50 overflow-hidden border-t md:border border-gray-200 max-h-[50vh] md:max-h-auto"
          >
            <div className="p-6">
              {/* Close button for mobile */}
              <button 
                onClick={() => setIsContactOpen(false)}
                className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What do you want?
              </h3>

              <div className="space-y-4">
                {/* Phone Call Option */}
                <a
                  href="tel:+2348070832810"
                  className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.7561 10.3905C16.4609 10.3905 16.2145 10.2912 16.0169 10.0927C15.8192 9.89425 15.7204 9.64825 15.7204 9.35475C15.7204 9.05775 15.8188 8.81083 16.0156 8.614C16.2124 8.41717 16.4583 8.31875 16.7531 8.31875C17.0464 8.31875 17.2919 8.41717 17.4896 8.614C17.6873 8.81083 17.7861 9.05675 17.7861 9.35175C17.7861 9.64658 17.6874 9.89342 17.4899 10.0922C17.2925 10.2911 17.0479 10.3905 16.7561 10.3905ZM19.8861 21.1487C17.9284 21.1487 15.9366 20.6781 13.9106 19.7367C11.8844 18.7954 10.006 17.4594 8.27536 15.7287C6.54486 13.9982 5.20794 12.1189 4.26461 10.0907C3.32128 8.06275 2.84961 6.07192 2.84961 4.11825C2.84961 3.75642 2.97103 3.45358 3.21386 3.20975C3.45653 2.96575 3.75794 2.84375 4.11811 2.84375L7.61811 2.84375C7.91928 2.84375 8.17211 2.94008 8.37661 3.13275C8.58111 3.32525 8.72269 3.57842 8.80136 3.89225L9.47461 6.9375C9.51711 7.22467 9.51153 7.481 9.45786 7.7065C9.40419 7.93217 9.29286 8.1255 9.12386 8.2865L6.60561 10.77C7.02294 11.4713 7.46536 12.1267 7.93286 12.7362C8.40019 13.3456 8.91953 13.9257 9.49086 14.4765C10.0917 15.0978 10.7188 15.66 11.3721 16.163C12.0256 16.6662 12.7074 17.1057 13.4176 17.4817L15.8224 15.014C16.017 14.8027 16.2399 14.6597 16.4909 14.585C16.742 14.5105 16.9954 14.4978 17.2509 14.547L20.1061 15.1792C20.4199 15.2657 20.6731 15.4253 20.8656 15.658C21.0583 15.8907 21.1546 16.1611 21.1546 16.4692V19.8802C21.1546 20.2426 21.0325 20.5446 20.7884 20.7862C20.5442 21.0279 20.2434 21.1487 19.8861 21.1487Z"
                        fill="#030712"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Make phone call
                    </p>
                    <p className="text-sm text-gray-600">
                      +234 807 083 2810
                    </p>
                  </div>
                </a>

                {/* WhatsApp Option */}
                <a
                  href="https://wa.me/2348070832810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5.84961 18.1487L3.30411 20.6943C3.03478 20.9636 2.72503 21.0257 2.37486 20.8805C2.02469 20.7355 1.84961 20.4765 1.84961 20.1035L1.84961 3.553C1.84961 3.09133 2.01853 2.69108 2.35636 2.35225C2.69403 2.01325 3.09286 1.84375 3.55286 1.84375L20.4454 1.84375C20.907 1.84375 21.3073 2.01325 21.6461 2.35225C21.9851 2.69108 22.1546 3.09133 22.1546 3.553L22.1546 16.4455C22.1546 16.9055 21.9851 17.3043 21.6461 17.642C21.3073 17.9798 20.907 18.1487 20.4454 18.1487L5.84961 18.1487Z"
                        fill="#030712"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Whatsapp message
                    </p>
                    <p className="text-sm text-gray-600">
                      +234 807 083 2810
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesMenu;