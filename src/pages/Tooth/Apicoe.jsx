import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../components/assets/Tooth/ARROW.svg";
import ApicoeImg from "../../components/assets/Tooth/Apicoectomy (Root-End Surgery).svg";

export default function Apicoe() {
  const points = [
    "Preserves the natural tooth",
    "Stops chronic infection or abscess",
    "Ideal when root canal retreatment fails",
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
    <section className="px-4 py-10 md:py-16 bg-white lg:-mt-6">
      <div className="max-w-[1150px] mx-auto">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-start gap-4  md:-mt-8"
        >
          <motion.div variants={fadeUp} className="w-full lg:flex-[1] lg:flex lg:justify-end order-1 lg:order-2">
            <div className="rounded-2xl w-full h-[220px] sm:h-[280px] lg:h-[380px] lg:max-w-[360px] flex items-center justify-center lg:justify-end lg:ml-auto overflow-hidden">
              <img
                src={ApicoeImg}
                alt="Cyst Removal (Per Tooth)"
                className="w-[80%] sm:w-[70%] lg:w-[90%] h-auto"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="md:mt-16 order-2 lg:order-1">
            <h3
              className="font-extrabold text-[18px] sm:text-2xl lg:text-[26px] mb-3 md:mb-5 "
              style={{ color: "#0267AC" }}
            >
               Apicoectomy (Root-End Surgery)
            </h3>
            <p className="text-gray-700 text-[15px] sm:text-[16px] lg:text-[19px] leading-7 lg:leading-[38px] tracking-wide mb-4 max-w-[720px] lg:max-w-[770px]">
            A micro-surgical procedure that removes the tip of an infected or failed root canal 
            and seals the canal end to save the natural tooth.
            </p>

            <ul className="space-y-3 lg:space-y-4">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center text-gray-700 text-[15px] sm:text-[16px] lg:text-[19px]"
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
            "High-precision root tip removal",
            "Microscopic sealing of the root canal end",
            "May include bone grafting for regeneration",
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

