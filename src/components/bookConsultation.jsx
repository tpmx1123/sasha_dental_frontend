import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import bookaconsulting from "./assets/Book a Consultation.png";


const BookConsultation = () => {
  const prefersReducedMotion = useReducedMotion();
  const scrollToBookAppointment = () => {
    const element = document.getElementById('book-appointment');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
    hover: { scale: 1.03, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-12 sm:py-16 -mt-20 sm:-mt-24 lg:-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-6 sm:p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #A1D6FA 13%, #FAFDFF 100%)'
          }}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            
            {/* Left Content */}
            <motion.div className="space-y-4 sm:space-y-6 text-center lg:text-left" variants={itemVariants}>
              {/* Title */}
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight font-sans"
                variants={itemVariants}
              >
                <span className="text-black">Book a</span>
                <br />
                <span className="text-[#0267AC]">Consultation</span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg text-gray-600 font-normal max-w-md mx-auto lg:mx-0" 
                style={{fontFamily: 'Segoe UI Symbol'}}
                variants={itemVariants}
              >
                A healthy smile starts with a conversation. Book your free consultation and discover the right path for your dental care.
              </motion.p>

              {/* Button */}
              <motion.button 
              onClick={scrollToBookAppointment}
                className="bg-[#FF6633] hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-normal flex items-center space-x-2 transition-colors font-sans text-sm sm:text-base mx-auto lg:mx-0"
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>  

            {/* Right Side - Illustration */}
            <motion.div className="flex justify-center lg:justify-middle" variants={itemVariants}>
              <motion.div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center" variants={imageVariants} whileHover="hover">
                <motion.img 
                  src={bookaconsulting} 
                  alt="Tooth illustration for dental consultation"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  width="256"
                  height="256"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BookConsultation
