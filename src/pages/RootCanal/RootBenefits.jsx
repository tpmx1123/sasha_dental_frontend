import React from "react";
import { motion } from 'framer-motion';
import TickIcon from "../../components/assets/RootCanal/TICK.svg";
import RootCanalImg from "../../components/assets/RootCanal/Root Canal.svg";

export default function RootBenefits() {
  const benefits = [
    "Pain relief",
    "Stops spread of infection",
    "Helps avoid tooth extraction",
    "Preserves your natural tooth"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-2 md:py-8 px-3 md:px-4 bg-white">
      <div className="max-w-[1155px] mx-auto">
        {/* Light Blue Container with Background Image */}
        <motion.div 
          className="rounded-3xl py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-12 relative overflow-hidden min-h-[150px] md:min-h-[350px] lg:min-h-[430px]"
          style={{
            backgroundImage: `url(${RootCanalImg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 lg:gap-8 items-center">
            {/* Left Side - Benefits List (Dark text on light blue) */}
            <motion.div 
              className="order-2 lg:order-1 ml-2  md:ml-4 lg:ml-24 mt-4 md:mt-4 lg:mt-14"
              variants={containerVariants}
            >
              <ul className="space-y-2 md:space-y-5 lg:space-y-9">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Checkmark Icon - Blue circle with white checkmark */}
                    <motion.div 
                      className="flex-shrink-0 mr-2 md:mr-3 lg:mr-4"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                    >
                      <img 
                        src={TickIcon}
                        alt="checkmark"
                        className="w-3 h-3 lg:mr-2 md:w-5 md:h-5 lg:w-9 lg:h-9"
                      />
                    </motion.div>
                    {/* Benefit Text - Black */}
                    <span className="text-gray-800 font-medium text-[10px] md:text-sm lg:text-[24px]" style={{letterSpacing: '0.7px'}}>
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Side - Background Image Area */}
            <div className="order-1 lg:order-2">
              {/* Image is already set as background in parent container */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

