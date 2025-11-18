import React from "react";
import { motion } from "framer-motion";

// Import the SVG image
import IdealForImage from "../../components/assets/TeethWhitening/WhoIts.svg";

export default function WhoIts() {
  const idealFor = [
    "Coffee, tea, or wine drinkers",
    "Smokers or ex-smokers",
    "Brides, grooms, or anyone preparing for a big event",
    "Individuals with yellowed, stained, or dull teeth",
    "Post-orthodontic patients (braces or aligners)",
    
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Checkmark SVG component
  const CheckmarkIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lg:w-7 lg:h-7"
    >
      <circle cx="12" cy="12" r="12" fill="#0267AC" />
      <path
        d="M7 12L10.5 15.5L17 9"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="py-12 md:py-16 lg:-mt-10 lg:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-center mb-8 md:mb-12 lg:mb-8 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px]"
          style={{ color: "#0267AC", letterSpacing: "0.5px" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Who It's Ideal For
        </motion.h2>

        {/* Content Grid - Image on Left, List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Circular Image */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <motion.div
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]  lg:ml-14 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={IdealForImage}
                alt="Before and After Teeth Whitening"
                className="w-full h-full lg:-mt-5 object-cover"
             
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Bulleted List */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-2 lg:-ml-16 lg:-mt-20"
          >
            <motion.ul
              className="space-y-4 md:space-y-5 lg:space-y-10 "
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {idealFor.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeUp}
                  className="flex items-start gap-4 md:gap-5"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Checkmark Icon */}
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <CheckmarkIcon />
                  </motion.div>

                  {/* Text */}
                  <motion.p
                    className="text-gray-800 font-medium text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed flex-1"
                    style={{ letterSpacing: "0.5px" }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.4,
                    }}
                  >
                    {item}
                  </motion.p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

