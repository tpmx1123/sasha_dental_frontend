import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import zoomImage from '../../components/assets/TeethWhitening/Zoom Teeth Whitening.svg';
import laserImage from '../../components/assets/TeethWhitening/Laser Teeth Whitening.svg';
import arrowIcon from '../../components/assets/TeethWhitening/ARROW.svg';

const ImageContentSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="bg-white py-8 md:py-12 lg:py-16 -mt-14 lg:-mt-20"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-5 md:px-8">
        
        {/* Main Heading - Our Whitening Treatments */}
        <motion.h2 
          className="text-center mb-8 md:mb-12 lg:mb-16 text-[23px] lg:text-[46px]"
          style={{ 
            color: '#0267AC',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            // fontSize: '36px',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
          variants={headingVariants}
        >
          Our Whitening Treatments
        </motion.h2>
        
        {/* Zoom Teeth Whitening Section */}
        <motion.div 
          className="mb-16 md:mb-20 lg:mb-24"
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-start align-top">
            
            {/* Left Column - Image - Order 1 on desktop, hidden on mobile (shown inline) */}
            <motion.div 
              className="hidden md:block flex-shrink-0 md:order-1 w-full md:w-[400px] h-[280px] md:h-[400px]"
              variants={imageVariants}
              style={{ alignSelf: 'flex-start' }}
            >
              <img 
                src={zoomImage} 
                alt="Zoom Teeth Whitening procedure"
                className="w-full h-full object-cover"
                style={{ borderRadius: '20px' }}
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Right Column - Text Content - Order 2 on desktop */}
            <motion.div 
              className="flex-1 flex flex-col md:order-2"
              variants={textVariants}
              style={{ alignSelf: 'flex-start' }}
            >
              {/* Sub-heading */}
              <motion.h3 
                className="mb-4 md:mb-2 text-left mt-0 text-[21px] lg:text-[28px]"
                style={{ 
                  color: '#0267AC',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  // fontSize: '28px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
                variants={itemVariants}
              >
                Zoom Teeth Whitening
              </motion.h3>

              {/* Paragraph - Exact text from Figma */}
              <motion.p 
                className="mb-6 md:mb-8 text-left text-[14px] lg:text-[19px]"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  // fontSize: '18.35px',
                  lineHeight: '34.87px',
                  letterSpacing: '0%',
                  color: '#392D44'
                }}
                variants={itemVariants}
              >
                Zoom is one of the most trusted whitening systems in the world, and at Sasha Luxe, we tailor it to your exact needs. A special <strong 
                className="text-[14px] lg:text-[19px]"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  // fontSize: '18.35px',
                  lineHeight: '34.87px',
                  letterSpacing: '0%',
                  color: '#392D44'
                }}>hydrogen peroxide gel</strong> is applied to your teeth and activated with the <strong
                className="text-[14px] lg:text-[19px]"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  // fontSize: '18.35px',
                  lineHeight: '34.87px',
                  letterSpacing: '0%',
                  color: '#392D44'
                }}>Zoom LED light</strong>, breaking down even deep-set stains from coffee, tea, wine, and smoking.
              </motion.p>

              {/* Image - Mobile only, appears above "Why Clients Love It" */}
              <motion.div 
                className="block md:hidden mb-6 w-full max-w-[300px] h-[280px] mx-auto"
                variants={imageVariants}
              >
                <img 
                  src={zoomImage} 
                  alt="Zoom Teeth Whitening procedure"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '20px' }}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Why Clients Love It Heading */}
              <motion.h4 
                className="mb-4 md:mb-6 text-left text-[21px] lg:text-[24px]"
                style={{ 
                  color: '#0267AC',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  // fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
                variants={itemVariants}
              >
                Why Clients Love It:
              </motion.h4>

              {/* Bullet Points */}
              <motion.ul 
                className="space-y-0"
                variants={containerVariants}
              >
                {[
                  "Immediate, dramatic results",
                  "Painless, with little to no sensitivity",
                  "Includes take-home kit for long-lasting brightness",
                  "Perfect before weddings, photoshoots, or big events"
                ].map((point, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start text-left"
                    variants={itemVariants}
                  >
                    <img 
                      src={arrowIcon} 
                      alt="arrow" 
                      className="w-5 h-5 mr-3 flex-shrink-0 mt-2"
                      style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(93%) saturate(1352%) hue-rotate(175deg) brightness(95%) contrast(91%)' }}
                      loading="lazy"
                      decoding="async"
                    />
                    <span
                    className="text-[14px] lg:text-[19px]"
                     style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 400,
                      // fontSize: '18.35px',
                      lineHeight: '34.87px',
                      letterSpacing: '0%',
                      color: '#392D44'
                    }}>
                      {point}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Laser Teeth Whitening Section */}
        <motion.div 
          className="mt-12 md:mt-16 lg:mt-20"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-start align-top">
            
            {/* Left Column - Text Content */}
            <motion.div 
              className="flex-1 flex flex-col order-2 md:order-1"
              variants={textVariants}
              style={{ alignSelf: 'flex-start' }}
            >
              {/* Sub-heading */}
              <motion.h3 
                className="mb-4 md:mb-6 text-left mt-0 text-[21px] lg:text-[28px]"
                style={{ 
                  color: '#0267AC',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  // fontSize: '28px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
                variants={itemVariants}
              >
                Laser Teeth Whitening
              </motion.h3>

              {/* Paragraph - Exact text from Figma */}
              <motion.p 
                className="mb-6 md:mb-8 text-left text-[14px] lg:text-[19px]"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  // fontSize: '18.35px',
                  lineHeight: '34.87px',
                  letterSpacing: '0%',
                  color: '#392D44'
                }}
                variants={itemVariants}
              >
                Our Laser Teeth Whitening treatment uses a dental-grade whitening gel, activated by a <strong >low-heat laser</strong>, to remove surface and deeper stains. This option is ideal for those with <strong>tooth sensitivity</strong> or looking for a more natural brightening.
              </motion.p>

              {/* Image - Mobile only, appears above "Why It's a Favorite" */}
              <motion.div 
                className="block md:hidden mb-6 w-full max-w-[300px] h-[280px] mx-auto"
                variants={imageVariants}
              >
                <img 
                  src={laserImage} 
                  alt="Laser Teeth Whitening procedure"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '20px' }}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Why It's a Favorite Heading */}
              <motion.h4 
                className="mb-4 md:mb-6 text-left text-[21px] lg:text-[24px]"
                style={{ 
                  color: '#0267AC',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  // fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
                variants={itemVariants}
              >
                Why It's a Favorite:
              </motion.h4>

              {/* Bullet Points */}
              <motion.ul 
                className="space-y-0"
                variants={containerVariants}
              >
                {[
                  "Safe for sensitive teeth and gums",
                  "Fast, visible results in one session",
                  "Precision-targeted whitening for an even finish",
                  "Minimal discomfort and no recovery time"
                ].map((point, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start text-left"
                    variants={itemVariants}
                  >
                    <img 
                      src={arrowIcon} 
                      alt="arrow" 
                      className="w-5 h-5 mr-3 flex-shrink-0 mt-2"
                      style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(93%) saturate(1352%) hue-rotate(175deg) brightness(95%) contrast(91%)' }}
                      loading="lazy"
                      decoding="async"
                    />
                    <span
                    className="text-[14px] lg:text-[19px]"
                     style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 400,
                      // fontSize: '18.35px',
                      lineHeight: '34.87px',
                      letterSpacing: '0%',
                      color: '#392D44'
                    }}>
                      {point}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right Column - Image - Order 2 on desktop, hidden on mobile (shown inline) */}
            <motion.div 
              className="hidden md:block flex-shrink-0 md:order-2 w-full md:w-[400px] h-[280px] md:h-[400px] -ml-10"
              variants={imageVariants}
              style={{ alignSelf: 'flex-start' }}
            >
              <img 
                src={laserImage} 
                alt="Laser Teeth Whitening procedure"
                className="w-full h-full object-cover"
                style={{ borderRadius: '20px' }}
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="mt-12 md:mt-16 lg:mt-20"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Benefits Heading */}
          <motion.h2 
            className="text-center mb-8 md:mb-12 text-[23px] lg:text-[40px]"
            style={{ 
              color: '#0267AC',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              // fontSize: '40px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
            variants={headingVariants}
          >
            Benefits
          </motion.h2>

          {/* Benefits Grid - 2 Columns: Left 3, Right 2 */}
          <motion.div 
            className="flex flex-col md:flex-row gap-2 lg:gap-6 lg:w-[1000px] mx-auto"
            variants={containerVariants}
          >
            {/* Left Column - 3 boxes */}
            <div className="flex flex-col gap-1 md:gap-6 flex-1">
              {[
                "Whitens teeth by up to 6-8 shades",
                "Fast, visible results in 30-60 minutes",
                "Safe for sensitive teeth"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 rounded-[16.88px] cursor-pointer hover:shadow-md transition-shadow w-full md:w-[498px] h-auto md:h-[109px]"
                  style={{ 
                    padding: '16px',
                    borderRadius: '16.88px',
                    backgroundColor: '#F1F9FD'
                  }}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-8 h-8 rounded-full lg:ml-10 lg:mr-7 flex items-center justify-center mr-3 flex-shrink-0">
                    <img 
                      src={arrowIcon} 
                      alt="arrow" 
                      className="w-5 h-5 lg:w-8 lg:h-8"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="lg:mr-4 text-[15px] lg:text-[23px]" style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    // fontSize: '23px',
                    lineHeight: '28px',
                    letterSpacing: '0.4px',
                    color: '#392D44'
                  }}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right Column - 2 boxes */}
            <div className="flex flex-col gap-4 md:gap-6 flex-1">
              {[
                "Long-lasting brightness with proper care",
                "Boosts confidence and enhances every smile"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 rounded-[16.88px] cursor-pointer hover:shadow-md transition-shadow w-full md:w-[498px] h-auto md:h-[109px]"
                  style={{ 
                    padding: '16px',
                    borderRadius: '16.88px',
                    backgroundColor: '#F1F9FD'
                  }}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-8 h-8 rounded-full lg:ml-10 lg:mr-7 flex items-center justify-center mr-3 flex-shrink-0">
                    <img 
                      src={arrowIcon} 
                      alt="arrow" 
                      className="w-5 h-5 lg:w-8 lg:h-8"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="lg:mr-4 text-[15px] lg:text-[23px]" style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    // fontSize: '23px',
                    lineHeight: '28px',
                    letterSpacing: '0.4%',
                    color: '#392D44'
                  }}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ImageContentSection;
