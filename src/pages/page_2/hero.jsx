import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import bnrSvg from "../../components/assets/Page2/BNR.svg";
import BookingModal from "../../components/BookingModal";
import ContentSection from "../../pages/page_2/content";
import CrownOptions from "../../pages/page_2/crown_options";
import Veneer from "../../pages/page_2/Veneer";
import WhyChoose from "../../pages/page_2/WhyChoose";
import PerfectFor from "../../pages/page_2/PerfectFor";
import WhatExpect from "../../pages/page_2/WhatExpect";
import CrownVeneerCareTips from "../../pages/page_2/CrownVeneer";
import Frequently from "../../pages/page_2/Frequentlyask";
import IsTheProcedure from "../../pages/page_2/IsTheProcedure";
import OurClient from "../../pages/page_2/OurClient";
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <>
        {/* Mobile View - Vertical Layout with Image on Top */}
        <section className="md:hidden relative w-full ">
        {/* Top Section - Image (65-70% of viewport) */}
        <motion.div
          className="relative w-full "
          style={{ height: 'full' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/Restorationsimagemobile.png"
            alt="Dental Restorations & Fillings"
            className="w-full h-full object-cover"
          />
          
          {/* Curved White Line Separator */}
         
        </motion.div>

        {/* Bottom Section - Text Content (White Background) */}
        <motion.div
          className="relative bg-white w-full px-6 py-8 pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.h1
            className="mb-4 text-left"
            variants={titleVariants}
          >
            <span className="text-3xl font-bold leading-tight font-poppins" style={{ color: '#0267AC' }}>
              Dental 
            </span>
            <span className="text-3xl font-bold leading-tight font-poppins" style={{ color: '#4D4D4D' }}> {' '}Crowns & Veneers</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className=" text-lg  mb-6  font-inter text-left "
            style={{ color: '#4D4D4D' }}
            variants={textVariants}
          >
            Crafted for Strength. Designed for Beauty.
          </motion.p>

          {/* Call to Action Button - Centered */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FF6633] text-white rounded-lg flex items-center justify-center gap-2 font-semibold px-6 py-3 text-sm transition-all shadow-md w-fit "
            style={{ borderRadius: '8px' }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </section>

      {/* Desktop View - Original Design */}
       <section 
        className="hidden md:block relative overflow-hidden md:min-h-screen mt-12 lg:-mt-4 "
        style={{
          backgroundImage: `url(${bnrSvg})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/2"></div>
        
        <div className="relative mx-auto px-2 lg:ml-10 md:px-6 lg:px-12 py-11 md:py-20 lg:py-32 md:min-h-screen flex flex-row items-center">
          
          {/* Left Side Content */}
          <motion.div 
            className="max-w-[240px]  lg:max-w-[600px] xl:max-w-2xl ml-1 md:ml-10 lg:ml-38 z-10 relative flex-shrink-0 pr-2 md:pr-4 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title */}
            <motion.h1 
              className="font-bold text-[#0267AC] leading-tight mb-1 lg:mb-9 tracking-tight text-[16px] sm:text-base md:text-2xl lg:text-[52px]"
              variants={titleVariants}
            >
              Dental Crowns & Veneers
            </motion.h1>
            
         
            {/* Description */}
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:leading-relaxed lg:mb-6 text-[9px] sm:text-[10px] md:text-sm lg:text-[28px]" 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
              Crafted for Strength. Designed for Beauty.
            </motion.p>
           

            {/* Call to Action Button */}
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0267AC] text-white px-1  py-0.5 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:bg-[#0056a3] transition-colors duration-300 shadow-lg text-[6px] sm:text-[10px] md:text-base lg:text-[26px] w-auto md:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book Your Consultation Today
            </motion.button>
          </motion.div>

          {/* Right Side - Empty space for visual balance */}
          <div className="hidden lg:flex lg:w-[45%] flex-shrink-0"></div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        serviceName="Dental Crowns & Veneers"
      />

      {/* Content Section */}
      <ContentSection />

      {/* Crown Options Section */}
      <CrownOptions />

      {/* Veneer Section */}
      <Veneer />
      <WhyChoose />
      <PerfectFor />
      <WhatExpect />
      <CrownVeneerCareTips />
      <Frequently />
      <IsTheProcedure />
      <OurClient />
    </>
  );
};

export default HeroSection;
