import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookingModal from "../../components/BookingModal";
import bnrSvg from "../../components/assets/ORAL/bnr.svg";
import WhatIsOral from "../../pages/Oral/WhatIsOral";
import WhyCleanImportant from "../../pages/Oral/WhyCleanImportant";
import WhatHappens from "../../pages/Oral/WhatHappens";
import Technology from "../../pages/Oral/Technology";
import WhyChoose from "../../pages/Oral/WhyChoose";
import Benefits from "../../pages/Oral/Benefits";
import WhoShould from "../../pages/Oral/WhoShould";
import WhatToExpect from "../../pages/Oral/WhatToExpect";
import BeforeAfter from "../../pages/Oral/BeforeAfter";
import Frequently from "../../pages/Oral/Frequently";
import Ready from "../../pages/Oral/Ready";
import OurClient from "../../pages/Oral/OurClient";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const OralTop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            variants={headingVariants}
          >
            <span className="text-3xl font-bold leading-tight font-poppins" style={{ color: '#0267AC' }}>
              Oral Prophylaxis{' '}
            </span>
            <span className="text-3xl font-bold leading-tight font-poppins" style={{ color: '#4D4D4D' }}>
              {' '} (Scaling & Polishing)
            </span> 
          </motion.h1>

        

          {/* Description */}
          <motion.p
            className=" text-lg  mb-6  font-inter text-left "
            style={{ color: '#4D4D4D' }}
            variants={textVariants}
          >
            Clean. Polish. Protect. Reveal your most Radiant, Healthy Smile.
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
        className="hidden md:block relative overflow-hidden md:min-h-screen mt-7"
        style={{
          backgroundImage: `url(${bnrSvg})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/2"></div>
        
        <motion.div 
          className="relative mx-auto px-2 md:px-6 lg:px-12 py-11 md:py-20 lg:py-32 md:min-h-screen flex flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          {/* Left Side Content */}
          <div className="max-w-[140px] sm:max-w-[200px] md:max-w-sm lg:max-w-xl xl:max-w-2xl ml-4 md:ml-10 lg:ml-38 z-10 relative flex-shrink-0 pr-2 md:pr-4 lg:pr-8">
            {/* Main Title */}
            <motion.h1 
              className="font-bold text-[#0267AC] leading-tight  lg:mb-7 tracking-tight text-[16px] sm:text-base md:text-2xl lg:text-[54px]"
              variants={headingVariants}
            >
              Oral Prophylaxis
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="font-medium text-[#0267AC] leading-relaxed mb-2 md:mb-8 text-[14px] sm:text-xs md:text-lg lg:text-[42px]"
              variants={subtitleVariants}
            >
              (Scaling & Polishing)
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:leading-relaxed mb-2 md:mb-8 lg:mb-11 text-[8px] sm:text-[10px] md:text-sm lg:text-[30px]" 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
              Clean. Polish. Protect. Reveal your most Radiant, Healthy Smile.
            </motion.p>

            {/* Call to Action Button */}
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0267AC] text-white px-2 py-1 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:bg-[#0056a3] transition-colors duration-300 shadow-lg text-[8px] sm:text-[10px] md:text-base lg:text-[26px] w-full md:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Consultation Today
            </motion.button>
          </div>

          {/* Right Side - Empty space for visual balance */}
          <div className="hidden lg:flex lg:w-[45%] flex-shrink-0"></div>
        </motion.div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        serviceName="Oral Prophylaxis"
      />
      
      {/* Other sections */}
      <WhatIsOral />
      <WhyCleanImportant />
      <WhatHappens />
      <Technology />
      <WhyChoose />
      <Benefits />
      <WhoShould />
      <WhatToExpect />
      <BeforeAfter />
      <Frequently />
      <Ready />
      <OurClient />
    </>
  );
};

export default OralTop;

