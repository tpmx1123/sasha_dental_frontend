import React from 'react';
import StainlessIcon from '../../../assets/Stainless.png';
import TickIcon from '../../../assets/TICK.png';

const CrownOptions = () => {
  const crownOptions = [
    {
      id: 1,
      title: "Stainless Steel Crown",
      icon: "stainless-steel-crown-icon",
      description: "Durable Protection for Young Smiles. Often used in pediatric dentistry, stainless steel crowns are cost-effective, pre-fabricated solutions ideal for restoring baby teeth.",
      features: [
        "Budget-friendly",
        "Quick placement", 
        "Primarily for temporary use in children"
      ]
    },
    {
      id: 2,
      title: "DMLS (Metal-Ceramic) Crown - 10-Year Warranty",
      icon: "dmls-crown-icon",
      description: "Strength Meets Aesthetics. This crown combines a strong metal base with a ceramic exterior for a natural appearance and lasting durability.",
      features: [
        "Strong and reliable",
        "Ideal for molars and back teeth",
        "Backed by a 10-year warranty"
      ]
    },
    {
      id: 3,
      title: "Zirconium Crowns 5, 10, & 15-Year Warranty",
      icon: "zirconium-crown-icon",
      description: "Our Most Popular Premium Option. Zirconia crowns offer exceptional strength and longevity with a natural appearance that blends seamlessly with your smile.",
      features: [
        "Metal-free and biocompatible",
        "Superior aesthetics",
        "Multiple warranty options available"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-10 px-5 mt-2">
      <div className="w-full max-w-[1105px] mx-auto">
        <h1 className="text-[50px] font-bold text-[#0267AC] text-center mb-16 relative" style={{fontFamily: 'Montserrat, sans-serif',}}>
          Our Crown Options
         
        </h1>
        
        <div className="flex flex-col gap-8">
          {/* Stainless Steel Crown */}
          <div className="p-10 mb-0 shadow-lg relative" style={{backgroundColor: '#F1F9FD', borderRadius: '25.2px'}}>
            <div className="mb-5 flex items-center gap-4">
              <img 
                src={StainlessIcon} 
                alt="stainless-steel-crown-icon"
                className="w-12 h-12"
              />
              <h2 className="text-3xl font-bold text-blue-800 leading-tight text-[#392D44]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Stainless Steel Crown
              </h2>
            </div>
            
            <div className="flex gap-8">
              {/* Left side - Content/Description */}
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed font-bold text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Durable Protection for Young Smiles.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Often used in pediatric dentistry, stainless steel crowns are cost-effective, pre-fabricated solutions ideal for restoring baby teeth.
                  </p>
                </div>
              
              {/* Right side - Points/Features */}
              <div className="flex-1">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center mb-3 text-base text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Budget-friendly
                  </li>
                  <li className="flex items-center mb-3 text-base text-gray-700 text-[#0267AC]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Quick placement
                  </li>
                  <li className="flex items-center mb-3 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Primarily for temporary use in children
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DMLS Crown */}
          <div className="p-10 mb-0 shadow-lg relative" style={{backgroundColor: '#F1F9FD', borderRadius: '25.2px'}}>
            <div className="mb-5 flex items-center gap-4">
              <img 
                src={TickIcon} 
                alt="dmls-crown-icon"
                className="w-12 h-12"
              />
              <h2 className="text-3xl font-bold text-blue-800 leading-tight text-[#392D44]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                DMLS (Metal-Ceramic) Crown - 10-Year Warranty
              </h2>
            </div>
            
            <div className="flex gap-8">
              {/* Left side - Content/Description */}
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Strength Meets Aesthetics.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    This crown combines a strong metal base with a ceramic exterior for a natural appearance and lasting durability.
                  </p>
                </div>
              
              {/* Right side - Points/Features */}
              <div className="flex-1">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center mb-3 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Strong and reliable
                  </li>
                  <li className="flex items-center mb-3 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Ideal for molars and back teeth
                  </li>
                  <li className="flex items-center mb-3 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Backed by a 10-year warranty
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zirconium Crown */}
          <div className="p-10 mb-0 shadow-lg relative" style={{backgroundColor: '#F1F9FD', borderRadius: '25.2px'}}>
            <div className="mb-5 flex items-center gap-4">
              <img 
                src={TickIcon} 
                alt="zirconium-crown-icon"
                className="w-12 h-12"
              />
              <h2 className="text-3xl font-bold text-blue-800 leading-tight text-[#392D44]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Zirconium Crowns 5, 10, & 15-Year Warranty
              </h2>
            </div>
            
            <div className="flex gap-8">
              {/* Left side - Content/Description */}
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Our Most Popular Premium Option.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Zirconia crowns offer exceptional strength and longevity with a natural appearance that blends seamlessly with your smile.
                  </p>
                </div>
              
              {/* Right side - Points/Features */}
              <div className="flex-1">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center mb-3 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Metal-free and biocompatible
                  </li>
                  <li className="flex items-center mb-3 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Superior aesthetics
                  </li>
                  <li className="flex items-center mb-3 text-base text-gray-700" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm mr-4 flex-shrink-0">
                      <img src={TickIcon} alt="tick" className="w-3 h-3" />
                    </span>
                    Multiple warranty options available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrownOptions;
