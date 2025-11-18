import React from "react";
import { motion } from "framer-motion";

export default function RootIntro() {
  return (
    <div className="py-6 md:py-12 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.p 
          className="text-left text-gray-700 font-medium leading-relaxed text-[13px] md:text-lg lg:text-[23px]" 
          style={{lineHeight: '1.8',letterSpacing: '0.9px'}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Suffering from a deep toothache or sensitivity? You might need <strong>root canal therapy</strong>. At Sasha Luxe, we offer gentle, advanced <strong>root canal treatments</strong> to treat infection, relieve pain, and preserve your natural smile.
        </motion.p>
      </div>
    </div>
  );
}

