import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookingModal from "../../components/BookingModal";
import BnrSvg from "../../components/assets/TeethWhitening/BNR.svg";
import Content from "../../pages/services_last/content";
import ImageContent from "../../pages/services_last/image_content";
import WhyChoose from "../../pages/services_last/WhyChoose";
import WhoIts  from "../../pages/services_last/Who";
import Technologiesused from "../../pages/services_last/Technologiesused";
import BeforeAfter from "../../pages/services_last/BeforeAfter";
import Frequently from "../../pages/services_last/Frequently";
import Ready from "../../pages/services_last/Ready";
import OurClient from "../../pages/services_last/OurClient";

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

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Mobile View - Vertical Layout with Image on Top */}
      <section className="md:hidden relative w-full">
        {/* Top Section - Image */}
        <motion.div
          className="relative w-full"
          style={{ height: 'full' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/Restorationsimagemobile.png"
            alt="Teeth Whitening"
            className="w-full h-full object-cover"
          />
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
              Teeth {' '}
            </span>
            <span className="text-3xl font-bold leading-tight font-poppins" style={{ color: '#4D4D4D' }}> {' '} Whitening</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className=" text-lg  mb-6  font-inter text-left "
            style={{ color: '#4D4D4D' }}
            variants={textVariants}
          >
            Brighten your smile. Instantly lift years of stains
          </motion.p>

          {/* Call to Action Button */}
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
        className="hidden md:block relative overflow-hidden md:min-h-screen mt-12 lg:-mt-3"
        style={{
          backgroundImage: `url(${BnrSvg})`,
          backgroundSize: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/2"></div>
        
        <div className="relative mx-auto px-2 md:px-6 lg:px-12 py-11 md:py-20 lg:py-32 md:min-h-screen flex flex-row items-center">
          
          {/* Left Side Content */}
          <motion.div 
            className="max-w-[240px]  lg:max-w-[600px] xl:max-w-2xl ml-2 md:ml-10 lg:ml-5 z-10 relative flex-shrink-0 pr-2 md:pr-4 lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title */}
            <motion.h1 
              className="font-bold text-[#0267AC] leading-tight mb-1 lg:mb-7 tracking-tight text-[13px] sm:text-base md:text-2xl lg:text-[46px]"
              variants={headingVariants}
            >
              Teeth Whitening
            </motion.h1>
            
         
            {/* Description */}
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:leading-relaxed  text-[9px] sm:text-[10px] md:text-sm lg:text-[30px]" 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
              Brighten your smile. Instantly lift years
            </motion.p>
            <motion.p 
              className="text-[#272727] font-medium leading-relaxed lg:leading-relaxed mb-2 md:mb-8 lg:mb-11 text-[9px] sm:text-[10px] md:text-sm lg:text-[30px]" 
              style={{letterSpacing: '0.5px'}}
              variants={textVariants}
            >
              of stains.
            </motion.p>

            {/* Call to Action Button */}
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0267AC] text-white px-1.5 py-0.5 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:bg-[#0056a3] transition-colors duration-300 shadow-lg text-[7px] sm:text-[10px] md:text-base lg:text-[26px] w-auto md:w-auto"
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
        serviceName="Teeth Whitening"
      />

<Content />
<ImageContent />
<WhyChoose />
<WhoIts />
<Technologiesused />
<BeforeAfter />
<Frequently />
<Ready />
<OurClient />
    </>
  );
}