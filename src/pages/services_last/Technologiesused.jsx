import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../components/assets/TeethWhitening/ARROW.svg";

export default function Technologiesused() {
  const technologies = [
    {
      bold: "Laser Whitening Devices",
      text: " for gentle, deep stain removal",
    },
    {
      bold: "Philips Zoom System",
      text: " for accelerated, high-impact whitening",
    },
    {
      bold: "Shade-matching tools",
      text: " to track and customize results",
    },
    {
      bold: "LED light and desensitizing gels",
      text: " for enhanced comfort",
    },
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

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-white -mt-8 lg:-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Heading */}
        <motion.h2
          className="text-center mb-8 md:mb-12 lg:mb-10 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
          style={{ color: "#0267AC", letterSpacing: "0.5px" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Technology We Use
        </motion.h2>
      </div>

      {/* Technologies List - Full Width Background */}
      <div className="bg-blue-50 ">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10">
          <motion.ul
            className="space-y-4 md:space-y-5 lg:space-y-9"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
          {technologies.map((tech, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              className="flex items-start gap-4 md:gap-6"
              whileHover={{ x: 5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Arrow Icon */}
              <motion.div
                className="flex-shrink-0 "
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
                <motion.img
                  src={ArrowIcon}
                  alt="arrow"
                  className="w-4 h-4 mt-1 md:w-6 md:h-6 lg:ml-4 lg:w-8 lg:h-8"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </motion.div>

              {/* Text */}
              <motion.p
                className="text-gray-800 font-medium text-base text-sm md:text-xl lg:text-[22px] leading-relaxed flex-1"
                style={{ letterSpacing: "0.3px" }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.4,
                }}
              >
                <strong>{tech.bold}</strong>
                {tech.text}
              </motion.p>
            </motion.li>
          ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

