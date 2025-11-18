import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../components/assets/arrow.svg";

export default function BeforeAfter() {
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.12,
        delayChildren: 0.1,
        duration: 0.5
      } 
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };
  const beforeInstructions = [
    "Clinical & radiographic evaluation (X-rays or CBCT)",
    " Informed consent & treatment planning",
    " Medical history and anesthesia options",
    "Pre-op instructions (e.g.,\ fasting, medication review)"

  ];

  const afterInstructions = [
    " Mild swelling or tenderness is normal",
    " Avoid chewing on the surgical  side for a few days",
    " Follow prescribed medication or rinses",
    " Return for follow-up to monitor healing"

  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white lg:-mt-6">
      <div className="max-w-[1000px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-13 lg:mb-16 font-bold text-xl md:text-3xl lg:text-[40px]" 
          style={{color: '#0267AC'}}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          What to Expect
        </motion.h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 -mt-6">
          {/* Left Column - BEFORE */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="font-bold mb-3 md:mb-4 text-lg md:text-2xl lg:text-[30px]" 
              style={{color: '#0267AC'}}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              BEFORE YOUR PROCEDURE
            </motion.h3>
            <motion.div 
              className="space-y-3 md:space-y-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {beforeInstructions.map((instruction, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-blue-50 rounded-2xl p-3 md:p-4 lg:p-5 flex items-center w-full h-auto md:w-[471px] md:h-[102px]"
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Circular Icon */}
                  <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-9 ml-2 md:ml-4 lg:ml-8">
                    <motion.div 
                      className="rounded-full flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    >
                      <motion.img 
                        src={ArrowIcon}
                        alt="arrow"
                        className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Text */}
                  <motion.p 
                    className="text-gray-800 flex-1 font-semibold text-sm md:text-base lg:text-[21px]" 
                    style={{letterSpacing: '0.6px', lineHeight: '1.2'}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    {instruction}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - AFTER */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="font-bold mb-3 md:mb-4 text-lg md:text-2xl lg:text-[30px]" 
              style={{color: '#0267AC'}}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              AFTER YOUR PROCEDURE
            </motion.h3>
            <motion.div 
              className="space-y-3 md:space-y-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {afterInstructions.map((instruction, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="bg-blue-50 rounded-2xl p-3 md:p-4 lg:p-5 flex items-center w-full h-auto md:w-[471px] md:h-[102px]"
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Circular Icon */}
                  <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-9 ml-2 md:ml-4 lg:ml-8">
                    <motion.div 
                      className="rounded-full flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    >
                      <motion.img 
                        src={ArrowIcon}
                        alt="arrow"
                        className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Text */}
                  <motion.p 
                    className="text-gray-800 flex-1 font-semibold text-sm md:text-base lg:text-[21px]" 
                    style={{letterSpacing: '0.6px', lineHeight: '1.2'}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    {instruction}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

