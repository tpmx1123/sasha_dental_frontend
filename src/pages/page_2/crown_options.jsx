import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import StainlessSteelCrownIcon from '../../components/assets/Page2/Stainless.svg';
import TickIcon from '../../components/assets/Page2/TICK.svg';
import DMLSIcon from '../../components/assets/Page2/DMLS.svg';
import ZirconiumIcon from '../../components/assets/Page2/Zirconium.svg';
import EmaxCrownsIcon from '../../components/assets/Page2/Emax Crowns.svg';
import PostCoreIcon from '../../components/assets/Page2/POST AND CORE.svg';
import CheckmarkIcon from '../../components/assets/Page2/checkmark (1) 1.svg';

const CrownOptions = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: shouldReduceMotion ? 0 : 0.2
      }
    },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.1,
      rotate: shouldReduceMotion ? 0 : 5,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3
      }
    },
    hover: {
      x: shouldReduceMotion ? 0 : 5,
      transition: { duration: 0.2 }
    }
  };

  const crownCards = [
    {
      id: 1,
      title: "Stainless Steel Crown",
      icon: StainlessSteelCrownIcon,
      subtitle: "Durable Protection for Young Smiles.",
      description: "Often used in pediatric dentistry, stainless steel crowns are cost-effective, pre-fabricated solutions ideal for restoring baby teeth.",
      features: [
        "Budget-friendly",
        "Quick placement", 
        "Primarily for temporary use in children"
      ]
    },
    {
      id: 2,
      title: "DMLS (Metal-Ceramic) Crown - 10-Year Warranty",
      icon: DMLSIcon,
      subtitle: "Strength Meets Aesthetics.",
      description: "This crown combines a strong metal base with a ceramic exterior for a natural appearance and lasting durability.",
      features: [
        "Strong and reliable",
        "Ideal for molars and back teeth",
        "Backed by a 10-year warranty"
      ]
    },
    {
      id: 3,
      title: "Zirconium Crowns 5, 10, & 15-Year Warranty",
      icon: ZirconiumIcon,
      subtitle: "Our Most Popular Premium Option.",
      description: "Zirconia crowns offer exceptional strength and longevity with a natural appearance that blends seamlessly with your smile.",
      features: [
        "Metal-free and biocompatible",
        "Superior aesthetics",
        "Multiple warranty options available"
      ],
      warrantyOptions: [
        { period: "5-Year Zirconia", desc: "Durable and aesthetic for mid-term use" },
        { period: "10-Year Zirconia", desc: "Enhanced longevity with natural appearance" },
        { period: "15-Year Zirconia", desc: "Elite-grade, ultra-durable, and highly aesthetic" }
      ]
    },
    {
      id: 4,
      title: "Emax Crowns",
      icon: EmaxCrownsIcon,
      subtitle: "The Crown of Choice for Smile Makeovers.",
      description: "Made from lithium disilicate ceramic, Emax crowns offer unmatched translucency perfect for visible teeth.",
      features: [
        "Ultra-natural appearance",
        "Strong and metal-free",
        "Ideal for cosmetic upgrades"
      ]
    },
    {
      id: 5,
      title: "Post and Core (Per Tooth)",
      icon: PostCoreIcon,
      subtitle: "Structural Reinforcement for Damaged Teeth.",
      description: "For severely damaged or root canal-treated teeth, a post and core provides internal support before crown placement.",
      features: [
        "Rebuilds and reinforces tooth structure",
        "Provides strong base for crown",
        "Custom-fitted for maximum stability"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-8 sm:py-10 px-4 sm:px-5 lg:px-8 overflow-x-hidden">
      <div className="w-full max-w-[1150px] mx-auto">
        {/* Main Heading */}
        <motion.h1 
          className="text-xl sm:text-4xl md:text-[42px] font-bold text-[#0267AC] text-center mb-6 sm:mb-8 md:mb-10 relative"
          style={{fontFamily: 'Montserrat, sans-serif'}}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Our Crown Options
        </motion.h1>
        
        {/* Cards Container */}
        <motion.div 
          className="flex flex-col gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {crownCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="p-6 sm:p-10 md:p-16 mb-0 relative overflow-hidden"
              style={{
                backgroundColor: '#F1F9FD',
                borderRadius: '25.2px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : {
                y: -5,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Header Section */}
              <motion.div 
                className="mb-5 md:mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                variants={itemVariants}
              >
                <motion.img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                  variants={iconVariants}
                  whileHover="hover"
                />
                <h2 
                  className="font-bold text-black leading-tight text-[#392D44] text-base sm:text-2xl md:text-[29px]"
                  style={{fontFamily: 'Montserrat, sans-serif'}}
                >
                  {card.title}
              </h2>
              </motion.div>
              
              {/* Content Grid */}
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
              {/* Left side - Content/Description */}
                <motion.div 
                  className="flex-1"
                  variants={itemVariants}
                >
                  <p 
                    className="text-gray-700 leading-relaxed font-bold text-[#0267AC] mb-2 text-sm sm:text-xl md:text-[22px]"
                    style={{fontFamily: 'Montserrat, sans-serif'}}
                  >
                    {card.subtitle}
                  </p>
                  <p 
                    className="text-gray-700 leading-relaxed text-[#0267AC] text-xs md:text-[20px]"
                    style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.6px'}}
                  >
                    {card.description}
                  </p>
                </motion.div>
              
              {/* Right side - Points/Features */}
                <motion.div 
                  className="flex-1 lg:-mt-2 lg:-mr-6"
                  variants={itemVariants}
                >
                <ul className="list-none p-0 m-0">
                    {card.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center mb-4 sm:mb-6 text-sm sm:text-base font-bold text-gray-700 text-[#0267AC]"
                        style={{
                          fontFamily: 'Montserrat, sans-serif'
                        }}
                        variants={itemVariants}
                        whileHover="hover"
                      >
                        <motion.span
                          className="text-white rounded-full w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
                          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <img 
                            src={TickIcon} 
                            alt="tick" 
                            className="w-full h-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </motion.span>
                        <span className="flex-1 text-xs sm:text-[14px] md:text-[20px]">{feature}</span>
                      </motion.li>
                    ))}
                </ul>
                </motion.div>
          </div>

              {/* Warranty Options Section (only for Zirconium Crown) */}
              {card.warrantyOptions && (
                <motion.div 
                  className="mt-6 sm:mt-8 ml-0 sm:ml-4 md:ml-8"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ul className="list-none p-0 m-0">
                    {card.warrantyOptions.map((option, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start mb-3 sm:mb-4 text-sm sm:text-lg md:text-[22px] text-gray-700"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          letterSpacing: '0.6px'
                        }}
                        variants={itemVariants}
                        whileHover="hover"
                      >
                        <motion.span
                          className="flex items-start justify-start mr-3 flex-shrink-0"
                          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <img 
                            src={CheckmarkIcon} 
                            alt="checkmark" 
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                            loading="lazy"
                            decoding="async"
                          />
                        </motion.span>
                        <span>
                          <strong>{option.period}:</strong> {option.desc}
                        </span>
                      </motion.li>
                    ))}
                    </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CrownOptions;
