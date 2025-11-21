import React from "react";
import { motion } from "framer-motion";

const FLAPcleients = () => {
  const testimonials = [
    {
      id: 1,
      name: "Karan S.",
      text: "I was diagnosed with severe gum disease, and Sasha Luxe recommended flap surgery with bone grafting. The entire process was smooth, and I feel like my mouth has been completely restored.",
      hasOpeningQuote: true,
    },
    {
      id: 2,
      name: "Priya T.",
      text: "I was nervous about gum surgery, but the laser procedure made a huge difference—less bleeding, less pain, and I was back to work in two days.",
      hasOpeningQuote: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const videoVariants = {
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

  return (
    <div className="bg-white">
      <div
        className="w-full min-h-[552px] rounded-lg flex flex-col justify-start items-center relative p-10 md:p-16 overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 550%)",
          borderRadius: "7.48px",
        }}
      >
        {/* Heading */}
        <motion.h2
          className="font-bold mb-2 text-left w-full max-w-[1108px] font-montserrat"
          style={{
            fontSize: "clamp(24px, 4vw, 32.93px)",
            lineHeight: "clamp(36px, 6vw, 49.4px)",
            color: "#0267AC",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          Our Clients Love
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="w-full max-w-[1107.69px] text-left mb-6 md:mb-8 px-2 md:px-0 font-montserrat"
          style={{
            fontSize: "clamp(14px, 2.5vw, 17.96px)",
            lineHeight: "clamp(22px, 4vw, 29.94px)",
            color: "#392D44",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Some best words from our beloved clients. It's always encouraging to
          know that our clients loved our services as it keeps us going even
          more enthusiastically.
        </motion.p>

        {/* Main Section */}
        <motion.div
          className="flex flex-wrap justify-between items-start w-full max-w-[1108.12px] gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Testimonials */}
          <div className="flex flex-col gap-5 w-full max-w-[605px] flex-[1_1_100%]">
            <div className="flex flex-wrap gap-3 md:gap-4 w-full justify-center">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full max-w-[294px] min-h-[210px] bg-white rounded-xl shadow-md p-4 md:p-5 flex flex-col justify-between box-border relative flex-[1_1_280px]"
                  style={{
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  {testimonial.hasOpeningQuote && (
                    <img
                      src="/firstquote.svg"
                      alt="opening quote"
                      className="absolute w-[52px] h-[39px] md:w-[65.52px] md:h-[49.35px] -top-5 md:-top-6 left-3 opacity-100"
                    />
                  )}
                  <img
                    src="/stars.svg"
                    alt="stars"
                    className="w-[70px] h-[14px] md:w-[80px] md:h-[16px] mt-6 md:mt-8 mb-2 self-start"
                  />
                  <p
                    className="font-montserrat mb-5 md:mb-7 text-justify"
                    style={{
                      fontSize: "clamp(9px, 1.5vw, 10px)",
                      lineHeight: "clamp(16px, 2.5vw, 19px)",
                      color: "#392D44",
                    }}
                  >
                    {testimonial.text}
                  </p>
                  <strong
                    className="font-montserrat font-bold self-start"
                    style={{
                      fontSize: "clamp(10px, 1.5vw, 11px)",
                      color: "#392D44",
                    }}
                  >
                    {testimonial.name}
                  </strong>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Video/Image Section */}
          <motion.div
            className="w-full max-w-[446.08px] h-[200px] md:h-[270px] rounded-xl overflow-visible relative flex-[1_1_400px] mx-auto shadow-md"
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={videoVariants}
          >
            <img
              src="/ourclient.svg"
              alt="Client Video"
              className="w-full h-full object-cover rounded-xl"
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: "#F3B81F" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
            </motion.div>
            <img
              src="/quotes.svg"
              alt="closing quote"
              className="absolute w-[50px] h-[38px] md:w-[63.33px] md:h-[47.7px] -bottom-4 md:-bottom-5 right-2.5 opacity-100"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="h-[60px] md:h-20 bg-white w-full" />
    </div>
  );
};

export default FLAPcleients;
