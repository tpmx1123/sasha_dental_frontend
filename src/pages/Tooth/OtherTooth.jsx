import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../components/assets/Tooth/ARROW.svg";

export default function OtherTooth() {
  const procedures = [
    "Foreign body removal",
    "Tooth exposure (for orthodontic treatment)",
    "Frenectomy (lip or tongue tie release)",
    "Pre-prosthetic surgical prep",
  ];

  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.5
      } 
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const boxAnimation = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section className="px-4 py-10 md:py-16 bg-white lg:-mt-6">
      <div className="max-w-[1270px] mx-auto">
        <motion.h3
          className="text-center font-extrabold text-[18px] sm:text-2xl lg:text-[36px] mb-3 md:mb-8"
          style={{ color: "#0267AC" }}
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Other Tooth-Specific Surgical Procedures
        </motion.h3>

        <motion.p
          className="text-center text-gray-700 font-semibold text-[13px] sm:text-[16px] lg:text-[25px] mb-6 md:mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          style={{letterSpacing: '0.7px'}}
        >
          We also offer tailored surgical treatments for
        </motion.p>

        <motion.div
          variants={boxAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#EBF6FE] rounded-3xl px-6 md:px-8 lg:px-60 lg:py-14 py-6 md:py-8 md:ml-20 max-w-[1200px] mx-auto shadow-md"
        >
          <motion.ul 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 lg:space-y-8"
          >
            {procedures.map((procedure, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-center font-medium text-gray-700 text-[14px] sm:text-[16px] lg:text-[22px]"
                style={{letterSpacing: '0.7px'}}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  src={ArrowIcon} 
                  alt="arrow" 
                  className="w-5 h-5 mr-3 lg:mr-8 lg:w-8 lg:h-8 flex-shrink-0" 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                />
                {procedure}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.p
          className=" text-left text-gray-700 text-[14px] sm:text-[16px] lg:text-[20px] mt-6 md:mt-10 lg:max-w-[970px] mx-auto "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          style={{letterSpacing: '0.5px',lineHeight: '1.8'}}
        >
          Each case is approached with <strong>custom planning</strong>, <strong>minimally invasive tools</strong>, and <strong>surgical expertise</strong> to ensure ideal outcomes.
        </motion.p>
      </div>
    </section>
  );
}

