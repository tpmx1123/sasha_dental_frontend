import React from 'react';
import { motion } from 'framer-motion';
import page3Image from '../../assets/page_3.svg';
import orthodonticTreatmentImage from "../../assets/Orthodontic.png";
import localClearImage from "../../assets/Local Clear.png";
import invisalignImage from "../../assets/Invisalign.png";
import arrowIcon from "../../assets/ARROW.png";


const ContentSection = () => {
  // Animation variants
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

  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageRightVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      scale: 1.03,
      y: -5,
      boxShadow: "0 10px 25px rgba(2, 103, 172, 0.15)",
      transition: { duration: 0.2 }
    }
  };

  const boxContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12 -mt-12 lg:-mt-4">
      {/* What Is Orthodontic Treatment Section */}
      <motion.div 
        className="bg-white py-6 md:py-8"
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2 
          className="text-[19px] md:text-4xl font-bold text-[#0267AC] mb-3 md:mb-8 text-center" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
          variants={headingVariants}
        >
          What Is Orthodontic Treatment?
        </motion.h2>

        {/* Content */}
        <motion.div variants={contentVariants}>
          <motion.p 
            className="text-gray-700 text-left text-[14px]  md:text-sm lg:text-[26px]"
            variants={contentVariants} 
            style={{ fontFamily: 'Montserrat, sans-serif',lineHeight: '1.8', letterSpacing: '0.5px' }}
          >
            Orthodontics focuses on aligning teeth and jaws to improve <strong style={{ color: '#272727' }}>function, health, and aesthetics.</strong> Whether you're dealing with crowding, spacing, bite issues, or misalignment, orthodontic treatment can transform your smile and your confidence.
          </motion.p>
          <br />
          <motion.p 
            className="text-gray-700 text-left text-[14px] md:text-sm lg:text-[26px]" 
            style={{ fontFamily: 'Montserrat, sans-serif',lineHeight: '1.8', letterSpacing: '0.5px' }}
            variants={contentVariants}
          >
            At <strong style={{ color: '#272727'}}>Sasha Luxe</strong>, we offer a full range of orthodontic options including <strong style={{ color: '#272727', fontWeight: '600' }}>Fixed Braces, Custom Clear Aligners, and Invisalign®</strong>, tailored to your needs, lifestyle, and goals. Expect <strong style={{ color: '#272727', fontWeight: '600' }}>precise planning, comfortable treatment, and beautiful results.</strong>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Our Orthodontic Solutions Section */}
      <motion.div 
        className="mt-8 md:mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-[#0267AC] text-[19px] md:text-[36px] mb-2 md:mb-8 text-center" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
          variants={headingVariants}
        >
          Our Orthodontic Solutions
        </motion.h2>

        {/* Fixed Orthodontic Treatment */}
        <div className="bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            {/* Image - Left Side */}
            <motion.div 
              className="w-[280px] md:w-[300px] lg:w-[400px] flex-shrink-0 flex justify-center lg:justify-start"
              variants={imageVariants}
            >
              <motion.img 
                src={orthodonticTreatmentImage} 
                alt="Fixed Orthodontic Treatment" 
                className="w-full max-w-[355px] h-[250px] sm:h-[300px] rounded-lg object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Text Content - Right Side */}
            <div className="flex-1 w-full lg:w-auto">
              <motion.h3 
                className="text-md sm:text-xl md:text-3xl font-bold text-[#0267AC] mb-3 sm:mb-4 md:mb-6" 
                style={{ fontFamily: 'Poppins, sans-serif' }}
                variants={headingVariants}
              >
                Fixed Orthodontic Treatment (Braces)
              </motion.h3>
              
              <motion.p
                variants={contentVariants}
                className="text-gray-700 leading-relaxed mb-4 sm:mb-6" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)', letterSpacing: '0.5px' }}
              >
                Tried, tested, and highly effective—fixed metal or ceramic braces correct complex alignment issues with precision and control.
              </motion.p>
              
              <motion.ul 
                className="space-y-3 md:space-y-4"
                variants={listContainerVariants}
              >
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Ideal for teens and adults
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Corrects severe crowding, bite problems
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Option of metal or tooth-colored brackets
                  </span>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>

        {/* What to Expect Section */}
        <div className="bg-white py-6 md:py-8 mt-1 lg:mt-8">
          <motion.h3 
            className="text-[19px] md:text-3xl font-bold text-[#0267AC] mb-3 lg:mb-10 text-center" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
            variants={headingVariants}
          >
            What to Expect:
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={boxContainerVariants}
          >
            {/* Left Column - First 2 items */}
            <div className="flex flex-col space-y-4">
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif',letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                  Brackets and wires gently move teeth over time
                </span>
              </motion.div>
              
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif',letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                  Visible, reliable, and cost-effective treatment
                </span>
              </motion.div>
            </div>
            
            {/* Right Column - Last item */}
            <div className="flex items-start">
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start w-full min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif',letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                  Regular adjustments every 4-6 weeks
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Local Clear Aligners Section */}
        <div className="bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 mt-8 sm:mt-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            {/* Text Content - Left Side */}
            <div className="flex-1 w-full lg:w-auto">
              <motion.h3 
                className="text-md sm:text-xl md:text-3xl font-bold text-[#0267AC] mb-3 sm:mb-4 md:mb-6" 
                style={{ fontFamily: 'Poppins, sans-serif' }}
                variants={headingVariants}
              >
                Local Clear Aligners (Custom-Made)
              </motion.h3>
              
              <motion.p
                variants={contentVariants}
                className="text-gray-700 leading-relaxed mb-4 sm:mb-6" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)', letterSpacing: '0.5px' }}
              >
                Sasha Luxe offers in-house clear aligners custom-designed for your teeth. Perfect for minor to moderate alignment cases with added affordability.
              </motion.p>
              
              <motion.ul 
                className="space-y-3 md:space-y-4"
                variants={listContainerVariants}
              >
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Discreet and removable
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Ideal for gaps, mild crowding, relapse cases
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Made locally, with personalized monitoring
                  </span>
                </motion.li>
              </motion.ul>
            </div>

            {/* Image - Right Side */}
            <motion.div 
              className="w-[280px] md:w-[300px] lg:w-[400px] flex-shrink-0 flex justify-center lg:justify-start"
              variants={imageRightVariants}
            >
              <motion.img 
                src={localClearImage} 
                alt="Local Clear Aligners" 
                className="w-full max-w-[355px] h-[250px] sm:h-[300px] rounded-lg object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Second What to Expect Section */}
        <div className="bg-white py-6 md:py-8 mt-1 lg:mt-8">
          <motion.h3 
            className="text-[19px] md:text-3xl font-bold text-[#0267AC] mb-3 lg:mb-10 text-center" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
            variants={headingVariants}
          >
            What to Expect:
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={boxContainerVariants}
          >
            {/* Left Column - First 2 items */}
            <div className="flex flex-col space-y-4">
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                  Series of custom aligners changed every 10-14 days
                </span>
              </motion.div>
              
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                Affordable option with flexible treatment plans
                </span>
              </motion.div>
            </div>
            
            {/* Right Column - Last item */}
            <div className="flex items-start">
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start w-full min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                  Easy to remove for eating and brushing
                </span>
              </motion.div>
            </div>
          </motion.div>
          </div>

        {/* Invisalign Section */}
        <div className="bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 mt-8 sm:mt-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            {/* Image - Left Side */}
            <motion.div 
              className="w-[280px] md:w-[300px] lg:w-[400px] flex-shrink-0 flex justify-center lg:justify-start"
              variants={imageVariants}
            >
              <motion.img 
                src={invisalignImage} 
                alt="Invisalign" 
                className="w-full max-w-[355px] h-[250px] sm:h-[300px] rounded-lg object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Text Content - Right Side */}
            <div className="flex-1 w-full lg:w-auto">
              <motion.h3 
                className="text-md sm:text-xl md:text-3xl font-bold text-[#0267AC] mb-3 sm:mb-4 md:mb-6" 
                style={{ fontFamily: 'Poppins, sans-serif' }}
                variants={headingVariants}
              >
                Invisalign® – Premium Clear Aligner System
              </motion.h3>
              
              <motion.p
                variants={contentVariants}
                className="text-gray-700 leading-relaxed mb-4 sm:mb-6" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)', letterSpacing: '0.5px' }}
              >
                Globally trusted, Invisalign® offers virtually invisible orthodontic treatment with advanced technology and world-class precision.
              </motion.p>
              
              <motion.ul 
                className="space-y-3 md:space-y-4"
                variants={listContainerVariants}
              >
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Digitally mapped and 3D printed
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Treats mild to complex cases
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-700"
                  variants={listItemVariants}
                >
                  <motion.img 
                    src={arrowIcon} 
                    alt="arrow" 
                    className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                    whileHover={{ x: 3, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                    Comfortable, removable, and lifestyle-friendly
                  </span>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Third What to Expect Section */}
        <div className="bg-white py-6 md:py-8 mt-1 lg:mt-8">
          <motion.h3 
            className="text-[19px] md:text-3xl font-bold text-[#0267AC] mb-3 lg:mb-10 text-center" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
            variants={headingVariants}
          >
            What to Expect:
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={boxContainerVariants}
          >
            {/* Left Column - First 2 items */}
            <div className="flex flex-col space-y-4">
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                SmartTrack® material for faster, gentler movement
                </span>
              </motion.div>
              
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                Aesthetic, premium treatment option with global support
                </span>
              </motion.div>
            </div>
            
            {/* Right Column - Last item */}
            <div className="flex items-start">
              <motion.div 
                className="bg-blue-50 rounded-lg p-4 flex items-start w-full min-h-[60px] cursor-pointer"
                style={{ backgroundColor: '#F1F9FD', borderRadius: '17.5px' }}
                variants={boxVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 md:w-6 md:h-6 mr-3 flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px', fontSize: 'clamp(13px, 2.5vw, 21px)' }}>
                Digital progress tracking and remote monitoring
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentSection;




