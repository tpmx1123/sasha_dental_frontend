import React from 'react';
import { motion } from 'framer-motion';

export default function IsTheProcedure() {
  return (
    <div className="py-6 md:py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="mb-3 md:mb-4 font-bold text-center" 
          style={{color: '#0267AC', fontSize: 'clamp(24px, 5.5vw, 43px)'}}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Is the procedure painful or invasive?
        </motion.h2>
        <motion.p 
          className="leading-relaxed text-gray-600 px-2 md:px-0" 
          style={{ fontSize: 'clamp(14px, 3.5vw, 23px)', letterSpacing: '0.5px', lineHeight: '1.8'}}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Not at all. With our digital precision and minimal-prep techniques, most procedures are painless and comfortable. Local anesthesia is used, and many patients are surprised by how quick and easy the process feels.
        </motion.p>
      </div>
    </div>
  );
}

