import React from "react";
import { motion } from "framer-motion";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const Clients = () => {
  return (
    <div className="bg-white">
      <div
        className="w-full min-h-auto md:min-h-[552px] rounded-lg flex flex-col justify-start items-center relative p-8 md:p-16 box-border overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 550%)",
          borderRadius: "7.48px",
        }}
      >
        {/* Heading */}
        <motion.h2
          className="font-bold mb-2 text-left w-full max-w-[1108px] font-montserrat"
          style={{
            fontSize: "clamp(20px, 4vw, 32.93px)",
            lineHeight: "clamp(30px, 5vw, 49.4px)",
            color: "#0267AC",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInVariants}
        >
          Our Clients Love
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="w-full max-w-[1107.69px] text-left mb-6 md:mb-8 px-3 md:px-0 font-montserrat"
          style={{
            fontSize: "clamp(14px, 2.5vw, 17.96px)",
            lineHeight: "clamp(22px, 3.5vw, 29.94px)",
            color: "#392D44",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Some best words from our beloved clients. It's always encouraging to
          know that our clients loved our services as it keeps us{" "}
          <br className="hidden md:block" /> going even more enthusiastically.
        </motion.p>

        {/* Main Section */}
        <motion.div
          className="flex flex-wrap justify-between items-start w-full max-w-[1108.12px] gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left: Testimonials */}
          <div className="flex flex-col gap-5 w-full max-w-[605px] flex-[1_1_100%]">
            <div className="flex flex-wrap gap-4 w-full justify-center">
              {/* Testimonial 1 */}
              <motion.div
                className="w-full max-w-[294px] min-h-auto bg-white rounded-xl shadow-md p-4 md:p-5 flex flex-col justify-between box-border relative flex-[1_1_280px]"
                style={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                variants={itemVariants}
              >
                <img
                  src="/firstquote.svg"
                  alt="opening quote"
                  className="absolute w-[50px] h-[38px] md:w-[65.52px] md:h-[49.35px] -top-5 md:-top-6 left-3 opacity-100"
                />
                <img
                  src="/stars.svg"
                  alt="stars"
                  className="w-[60px] h-[12px] md:w-[80px] md:h-[16px] mt-5 md:mt-8 mb-2 self-start"
                />
                <p
                  className="font-montserrat mb-4 md:mb-7 text-justify"
                  style={{
                    fontSize: "clamp(9px, 1.5vw, 10px)",
                    lineHeight: "clamp(15px, 2.5vw, 19px)",
                    color: "#392D44",
                  }}
                >
                  I had dark patches on my gums that made me self-conscious.
                  After laser depigmentation at Sasha Luxe, my gums are pink and
                  healthy looking. It was quick and completely painless!
                </p>
                <strong
                  className="font-montserrat font-bold self-start"
                  style={{
                    fontSize: "clamp(10px, 1.5vw, 11px)",
                    color: "#392D44",
                  }}
                >
                  Sneha R.
                </strong>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                className="w-full max-w-[294px] min-h-auto bg-white rounded-xl shadow-md p-4 md:p-5 flex flex-col justify-between box-border relative flex-[1_1_280px]"
                style={{
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                variants={itemVariants}
              >
                <img
                  src="/stars.svg"
                  alt="stars"
                  className="w-[60px] h-[12px] md:w-[80px] md:h-[16px] mt-5 md:mt-8 mb-2 self-start"
                />
                <p
                  className="font-montserrat mb-4 md:mb-7 md:second-testimonial text-justify"
                  style={{
                    fontSize: "clamp(9px, 1.5vw, 10px)",
                    lineHeight: "clamp(15px, 2.5vw, 19px)",
                    color: "#392D44",
                  }}
                >
                  My gum line was uneven, and it really threw off my smile. The
                  laser reshaping was fast, precise, and the healing was a
                  breeze. I love how natural my smile looks now
                </p>
                <strong
                  className="font-montserrat font-bold self-start"
                  style={{
                    fontSize: "clamp(10px, 1.5vw, 11px)",
                    color: "#392D44",
                  }}
                >
                  Ravi K.
                </strong>
              </motion.div>
            </div>

            {/* Button placed below the testimonials - Desktop only */}
            <div className="hidden md:block">
              <motion.button
                className="mt-7 w-[136.19px] h-[45.39px] rounded-lg font-roboto font-medium cursor-pointer self-start"
                style={{
                  backgroundColor: "#0267AC",
                  color: "#FFFFFF",
                  borderRadius: "7.48px",
                  fontSize: "clamp(16px, 3vw, 22.94px)",
                  lineHeight: "clamp(22px, 4vw, 30.59px)",
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Click More
              </motion.button>
            </div>
          </div>

          {/* Right: Video/Image Section */}
          <div className="flex flex-col w-full max-w-[446.08px] flex-[1_1_400px] mx-auto">
            <motion.div
              className="w-full h-auto md:h-[270px] min-h-[200px] rounded-xl overflow-visible relative"
              variants={scaleVariants}
            >
              <img
                src="/ourclient.svg"
                alt="Client Video"
                className="w-full h-full object-cover rounded-xl"
              />

              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: "#F3B81F" }}
              >
                <div
                  className="ml-1 md:ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "10px solid white",
                    borderTop: "6px solid transparent",
                    borderBottom: "6px solid transparent",
                  }}
                />
              </div>

              <img
                src="/quotes.svg"
                alt="closing quote"
                className="absolute w-[50px] h-[38px] md:w-[63.33px] md:h-[47.7px] -bottom-4 md:-bottom-5 right-2.5 opacity-100"
              />
            </motion.div>

            {/* Button placed after video/image - Mobile only */}
            <div className="flex justify-start mt-6 w-full md:hidden">
              <motion.button
                className="w-[120px] h-[40px] rounded-lg font-roboto font-medium cursor-pointer self-center"
                style={{
                  backgroundColor: "#0267AC",
                  color: "#FFFFFF",
                  borderRadius: "7.48px",
                  fontSize: "clamp(16px, 3vw, 22.94px)",
                  lineHeight: "clamp(22px, 4vw, 30.59px)",
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Click More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="h-10 md:h-20 bg-white w-full" />
    </div>
  );
};

export default Clients;
