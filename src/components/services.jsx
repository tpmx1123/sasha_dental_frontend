import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import generalDentistry from "./assets/General Dentistry.svg";
import cosmeticDentistry from "./assets/Cosmetic & Aesthetic Dentistry.svg";
import advancedCare from "./assets/Advanced Dental Care.svg";
import preventiveCare from "./assets/Preventive & Maintenance Care.svg";

export default function DentalServices() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: "easeOut",
      },
    },
  };
  const services = [
    {
      icon: generalDentistry,
      title: "General Dentistry",
      items: [
        "Dental Fillings & Restorations",
        "Tooth Extractions",
        "Root Canal Treatment",
        "Scaling & Oral Prophylaxis"
      ]
    },
    {
      icon: cosmeticDentistry,
      title: "Cosmetic & Aesthetic Dentistry",
      items: [
        "Dental Crowns & Veneers",
        "Teeth Whitening",
        "Smile Correction & Alignment",
        "Dental Implants"
      ]
    },
    {
      icon: advancedCare,
      title: "Advanced Dental Care",
      items: [
        "Orthodontic Treatments (Braces & Aligners)",
        "Laser Gum Treatments",
        "Periodontics (Gum & Bone Care)",
        "Tooth-Specific Minor Surgical Care",
        "Flap Surgery"
      ]
    },
    {
      icon: preventiveCare,
      title: "Preventive & Maintenance Care",
      items: [
        "Routine Dental Check-ups",
        "Oral Hygiene Counselling",
        "Preventive Sealants"
      ]
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-white py-12 sm:py-16 px-4 -mt-26  lg:-mt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={headerVariants}
        >
          <motion.h1
            className="text-lg sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 font-sans"
            variants={headerVariants}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-md sm:text-xl text-gray-500 font-sans px-4"
            variants={headerVariants}
          >
            Comprehensive dental care tailored to your needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-white to-[#B5E1FF] rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }
              }
            >
              {/* Icon */}
              <motion.div
                className="text-white w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : 0.2,
                  ease: "easeOut",
                }}
              >
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 font-sans"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : 0.3,
                  ease: "easeOut",
                }}
              >
                {service.title}
              </motion.h3>

              {/* Service Items */}
              <motion.ul
                className="space-y-2 sm:space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {service.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start text-gray-700 font-sans"
                    variants={itemVariants}
                  >
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}