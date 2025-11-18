import React from "react";
import RestoreComport from "../../components/assets/Tooth/Restore Comfort.svg";

export default function Ready() {
  return (
    <div className="-mt-5 py-0 md:py-16 px-4 flex justify-center">
      <div className="w-full max-w-[1150px]">
        {/* Banner Section */}
        <div 
          className="relative overflow-hidden w-full h-[180px] md:h-[500px]"
          style={{
            backgroundImage: `url(${RestoreComport})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            borderRadius: '40px'
          }}
        >
          {/* Content Overlay */}
          <div className="flex items-center justify-between px-3 md:px-12 py-1 md:py-12 h-full">
            {/* Left Side - Text Content */}
            <div className="flex-1 ml-1 md:ml-8 -mt-1 md:-mt-3 pr-2 md:pr-0">
              <h2 className="text-white font-bold mb-1 md:mb-5 lg:mb-4 text-[11px] md:text-3xl lg:text-[36px] whitespace-nowrap" style={{letterSpacing: '0.3px'}}>
              Restore Comfort & Confidence
              </h2>
              <p className="text-white mb-1 md:mb-6 text-[6px] md:text-lg lg:text-[22px] w-[190px] lg:w-[630px]" style={{letterSpacing: '1.2px',lineHeight: '1.5'}}>
              Whether you're addressing an infection, reshaping bone, 
or preparing for future restorations, our 
<strong>Minor Surgical Procedures</strong>  are performed with <strong> precision, care, and 
patient comfort </strong> as top priorities.
              </p>
              <button 
                className="bg-white text-[#0267AC] font-bold rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg text-[6px] md:text-lg lg:text-[25px] px-2 py-1 md:px-6 md:py-3 lg:px-7 lg:py-[18px]"
                style={{letterSpacing: '1px'}}
              >
                Book Your Consultation
              </button>
            </div>

            {/* Right Side - Image (will be handled by SVG background) */}
            <div className="w-1/2 md:w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

