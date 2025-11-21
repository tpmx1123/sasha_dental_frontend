import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

const testimonials = [
  {
    quote: "/firstquote.svg",
    text: "I had lost a front tooth in an accident, and it really affected my confidence. The team at Sasha Luxe recommended a Nobel Active implant. From day one, they made me feel comfortable and informed. The final crown looks exactly like my natural tooth. I can smile without thinking twice now.",
    name: "Karan S.",
  },
  {
    quote: null,
    text: "I got two Osstem implants at Sasha Luxe, and I honestly forgot they aren't my real teeth. No pain, no hassle just great service and even better results. Highly recommended!",
    name: "Priya T.",
  },
];

const OurClientsLove = () => {
  return (
    <div className="bg-white">
      <motion.div
        className="w-full min-h-[552px] rounded-lg flex flex-col justify-start items-center relative py-10 px-4 md:py-[60px] md:px-0 box-border overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 550%)",
          borderRadius: "7.48px",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="font-bold mb-2 text-left w-full md:w-[1108px] font-montserrat"
          style={{
            fontSize: "clamp(20px, 5vw, 32.93px)",
            lineHeight: "clamp(30px, 7vw, 49.4px)",
            color: "#0267AC",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Our Clients Love
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="w-full md:w-[1107.69px] text-left mb-8 md:mb-8 px-3 md:px-0 font-montserrat"
          style={{
            fontSize: "clamp(14px, 3.5vw, 17.96px)",
            lineHeight: "clamp(22px, 4.5vw, 29.94px)",
            color: "#392D44",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Some best words from our beloved clients. It's always encouraging to know
          that our clients loved our services as it keeps us going even more
          enthusiastically.
        </motion.p>

        {/* Main Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start w-full md:w-[1108.12px] gap-5 md:gap-6"
          variants={itemVariants}
        >
          {/* Left: Testimonials */}
          <div className="flex flex-col gap-5 w-full md:w-[605px]">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-[294px] h-auto md:h-[270px] bg-white rounded-xl shadow-md p-4 md:p-5 flex flex-col justify-between box-border relative"
                  style={{
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  variants={itemVariants}
                >
                  {testimonial.quote && (
                    <img
                      src={testimonial.quote}
                      alt="opening quote"
                      className="absolute w-[50px] h-[38px] md:w-[65.52px] md:h-[49.35px] -top-5 md:-top-6 left-3 opacity-100"
                    />
                  )}
                  <img
                    src="/stars.svg"
                    alt="stars"
                    className="w-[60px] h-[12px] md:w-[80px] md:h-[16px] mt-5 md:mt-8 mb-2 self-start"
                  />
                  <p
                    className={`font-montserrat text-justify mb-3 md:mb-3 ${
                      index === 1 ? "md:mb-14" : ""
                    }`}
                    style={{
                      fontSize: "clamp(9px, 2.2vw, 10px)",
                      lineHeight: "clamp(16px, 3.5vw, 18.4px)",
                      color: "#392D44",
                    }}
                  >
                    {testimonial.text}
                  </p>
                  <strong
                    className="font-montserrat font-bold self-start"
                    style={{
                      fontSize: "clamp(14px, 3.5vw, 17px)",
                      color: "#392D44",
                    }}
                  >
                    {testimonial.name}
                  </strong>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Video */}
          <motion.div
            className="w-full md:w-[446.08px] h-auto md:h-[270px] min-h-[200px] rounded-xl overflow-visible relative"
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurClientsLove;
