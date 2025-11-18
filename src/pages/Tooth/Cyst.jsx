import React from "react";
import { motion } from "framer-motion";
import CystImg from "../../components/assets/Tooth/Cyst Removal (Per Tooth).svg";
import ArrowIcon from "../../components/assets/Tooth/ARROW.svg";

export default function Cyst() {
  const points = [
    "Eliminates infection at the source",
    "Preserves healthy bone & adjacent teeth",
    "Prevents recurrence",
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section className="px-4 py-10 md:py-16 bg-white">
      <div className="max-w-[1220px] mx-auto">
        <motion.h2
          className="text-center font-extrabold text-[20px] sm:text-3xl lg:text-[40px]  "
          style={{ color: "#0267AC" }}
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Minor Surgical Services
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 items-center md:-mt-7"
        >
          {/* Left image */}
          <motion.div variants={fadeUp} className="w-full">
            <div className="rounded-2xl w-full h-[240px] sm:h-[300px] lg:h-[408px] lg:max-w-[408px] flex items-center justify-center overflow-hidden">
              <img
                src={CystImg}
                alt="Cyst Removal (Per Tooth)"
                className="w-[80%] sm:w-[70%] lg:w-[80%] h-auto"
              />
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div variants={fadeUp}
          className="md:-ml-56   "
          >
            <h3
              className="font-extrabold text-[18px] sm:text-2xl lg:text-[26px] mb-3 md:mb-5 "
              style={{ color: "#0267AC" }}
            >
              Cyst Removal (Per Tooth)
            </h3>
            <p className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[20px] leading-7 lg:leading-[38px] tracking-wide mb-4">
              Cysts can form near the root of a tooth due to infection or trauma. Timely
              removal is crucial to prevent bone loss, swelling, or damage to surrounding
              structures.
            </p>

            <ul className="space-y-3 lg:space-y-4">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center text-gray-700 text-[14px] sm:text-[16px] lg:text-[20px]"
                >
                  <img src={ArrowIcon} alt="arrow" className="w-5 h-5 mr-3" />
                  {p}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* What to Expect */}
        <motion.h3
          className="text-center font-extrabold text-[18px] sm:text-2xl lg:text-[34px] mt-5 md:mt-8 mb-4 md:mb-6 md:gap-3"
          style={{ color: "#0267AC" }}
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          What to Expect:
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-1 md:gap-x-4 md:gap-4"
        >
          {[
            "Local anesthesia for a pain-free procedure",
            "Precise excision with thorough site cleaning",
            "Post-op support for smooth recovery",
          ].map((text, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`bg-[#EBF6FE] rounded-2xl px-4 md:px-6 py-4 flex items-center shadow-md w-full md:max-w-[500px] lg:max-w-[550px] ${
                idx % 2 === 0 ? "justify-self-end" : "justify-self-start"
              } ${idx === 2 ? "md:col-span-1" : ""}`}
            >
              <img src={ArrowIcon} alt="arrow" className="w-6 h-6 mr-4" />
              <p className="text-[#2A2333]  text-[14px] sm:text-[16px] lg:text-[20px]">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

