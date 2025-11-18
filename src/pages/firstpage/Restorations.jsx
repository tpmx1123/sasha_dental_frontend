import React from 'react';
import { motion } from 'framer-motion';
import GICImage from '../../components/assets/GIC.svg';
import CompositeFillingsImage from '../../components/assets/Composite Fillings.svg';
import CompositeVeneersImage from '../../components/assets/Composite Veneers.svg';
import Benefits from './Benifits';
import WhyChoose from './WhyChoose';
import Frequently from './Frequently';

export default function Restorations() {
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 lg:py-16 px-4 -mt-4 lg:-mt-8">
      <div className="max-w-4xl mx-auto mb-12 lg:mb-60">
        {/* Main Heading */}
        <motion.h2 
          className="font-bold text-center mb-4 lg:mb-10 text-xl lg:text-[35px]" 
          style={{color: '#0267AC'}}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          What Are Dental Restorations?
        </motion.h2>
        
        {/* Content */}
        <motion.div 
          className="space-y-5 lg:space-y-12 ml-0 lg:-ml-24 w-full lg:w-[1105px] h-auto lg:h-[90px]"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First Paragraph */}
          <motion.p 
            className="text-xs text-left lg:text-[22px] mb-4" 
            style={{color: '#392D44', letterSpacing: '1px', lineHeight: '1.8'}}
            variants={paragraphVariants}
          >
            Dental restorations, also known as fillings, are used to repair teeth that have been damaged by decay, fractures, or wear. At Sasha Luxe, we offer advanced restorative solutions that not only restore the function of your teeth but also enhance their appearance.
          </motion.p>
          
          {/* Second Paragraph */}
          <motion.p 
            className="text-xs text-left lg:text-[22px] space-y-8" 
            style={{color: '#392D44', letterSpacing: '1px', lineHeight: '1.8'}}
            variants={paragraphVariants}
          >
            We use modern materials like Composite Resin, GIC (Glass Ionomer Cement), and Composite Veneers to deliver durable, aesthetic, and minimally invasive treatments tailored to your needs.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Types of Restorations Section */}
      <div className="mt-8 lg:mt-16">
        <motion.h1 
          className="font-bold text-center mb-6 lg:mb-12 text-xl lg:text-[38px]" 
          style={{color: '#0267AC'}}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Types of Restorations We Offer
        </motion.h1>
        
        {/* GIC Fillings Card */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-blue-300 rounded-2xl mb-6 lg:mb-8 mx-auto px-4 py-4 lg:px-0 lg:py-0" 
          style={{maxWidth: '910px'}}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Side - Image */}
            <motion.div 
              className="flex justify-center lg:justify-start h-[180px] lg:h-full mb-4 lg:mb-0"
              variants={imageVariants}
            >
              <img 
                src={GICImage} 
                alt="Dental patient with GIC filling procedure"
                className="w-full max-w-xs lg:w-60 h-full rounded-2xl lg:rounded-l-2xl lg:rounded-r-none object-cover"
              />
            </motion.div>
            
            {/* Right Side - Content */}
            <motion.div 
              className="space-y-3 lg:space-y-4 ml-0 lg:-ml-40 p-2"
              variants={contentVariants}
            >
              <motion.h3 
                className="text-md lg:text-[28px] font-bold" 
                style={{color: '#0267AC'}}
                variants={paragraphVariants}
              >
                GIC (Glass Ionomer Cement) Fillings
              </motion.h3>
              <motion.p 
                className="text-xs lg:text-[18px] leading-relaxed" 
                style={{color: '#392D44', letterSpacing: '1.5px', lineHeight: '1.6'}}
                variants={paragraphVariants}
              >
                GIC is a tooth-colored restorative material that chemically bonds to the tooth structure and releases fluoride over time—helping to protect against further decay.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
      
        
        {/* Best For and Advantages */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-10 max-w-4xl mx-auto mb-8 lg:mb-12 px-4 lg:px-0"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Best For Section */}
          <motion.div 
            className="space-y-2 lg:space-y-3"
            variants={contentVariants}
          >
            <motion.h4 
              className="text-base lg:text-[29px] font-bold mb-3 lg:mb-4" 
              style={{color: '#0267AC'}}
              variants={paragraphVariants}
            >
              Best For:
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              variants={listVariants}
            >
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Pediatric (children's) fillings</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Non-load bearing areas (e.g., near the gumline)</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Patients with high caries (cavity) risk</span>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Advantages Section */}
          <motion.div 
            className="space-y-2 lg:space-y-3 ml-0 lg:ml-10"
            variants={contentVariants}
          >
            <motion.h4 
              className="text-base lg:text-[29px] font-bold mb-3 lg:mb-4" 
              style={{color: '#0267AC'}}
              variants={paragraphVariants}
            >
              Advantages:
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              variants={listVariants}
            >
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Fluoride-releasing for added protection</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Strong adhesion to enamel and dentin</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Gentle on the tooth structure</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
          {/* Composite Fillings Card */}
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-blue-300 rounded-2xl mb-6 lg:mb-8 mx-auto px-4 py-4 lg:px-0 lg:py-0" 
            style={{maxWidth: '910px'}}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Side - Image */}
            <motion.div 
              className="flex justify-center lg:justify-start h-[180px] lg:h-full mb-4 lg:mb-0"
              variants={imageVariants}
            >
              <img 
                src={CompositeFillingsImage} 
                alt="Dental patient with composite filling procedure"
                className="w-full max-w-xs lg:w-60 h-full rounded-2xl lg:rounded-l-2xl lg:rounded-r-none object-cover"
              />
            </motion.div>
            
            {/* Right Side - Content */}
            <motion.div 
              className="space-y-3 lg:space-y-4 ml-0 lg:-ml-40 p-2"
              variants={contentVariants}
            >
              <motion.h3 
                className="text-md lg:text-[28px] font-bold" 
                style={{color: '#0267AC'}}
                variants={paragraphVariants}
              >
                Composite Fillings
              </motion.h3>
              <motion.p 
                className="text-xs lg:text-[18px] leading-relaxed" 
                style={{color: '#392D44', letterSpacing: '1.5px', lineHeight: '1.6'}}
                variants={paragraphVariants}
              >
                Composite (tooth-colored) fillings are made of a resin-based material that is both strong and highly aesthetic. They are ideal for repairing small to moderate cavities, chips, or worn edges while blending seamlessly with your natural tooth.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        {/* Composite Fillings - Ideal For and Benefits */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-10 max-w-4xl mb-8 lg:mb-12 mx-auto px-4 lg:px-0"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Ideal For Section */}
          <motion.div 
            className="space-y-2 lg:space-y-3"
            variants={contentVariants}
          >
            <motion.h4 
              className="text-base lg:text-[29px] font-bold mb-3 lg:mb-4" 
              style={{color: '#0267AC'}}
              variants={paragraphVariants}
            >
              Ideal For:
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              variants={listVariants}
            >
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Front and back teeth</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Replacing old silver (amalgam) fillings</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Repairing chipped or fractured enamel</span>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Benefits Section */}
          <motion.div 
            className="space-y-2 lg:space-y-3 ml-0 lg:ml-10"
            variants={contentVariants}
          >
            <motion.h4 
              className="text-base lg:text-[29px] font-bold mb-3 lg:mb-4" 
              style={{color: '#0267AC'}}
              variants={paragraphVariants}
            >
              Benefits:
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              variants={listVariants}
            >
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Excellent aesthetic match to natural teeth</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Preserves more of the original tooth</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Durable and long-lasting with proper care</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        
        {/* Composite Veneers Card */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-blue-300 rounded-2xl mb-6 lg:mb-8 mx-auto px-4 py-4 lg:px-0 lg:py-0" 
          style={{maxWidth: '910px'}}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Side - Image */}
            <motion.div 
              className="flex justify-center lg:justify-start h-[180px] lg:h-full mb-4 lg:mb-0"
              variants={imageVariants}
            >
              <img 
                src={CompositeVeneersImage} 
                alt="Dental patient with composite veneer procedure"
                className="w-full max-w-xs lg:w-60 h-full rounded-2xl lg:rounded-l-2xl lg:rounded-r-none object-cover"
              />
            </motion.div>
            
            {/* Right Side - Content */}
            <motion.div 
              className="space-y-3 lg:space-y-4 ml-0 lg:-ml-40 p-2"
              variants={contentVariants}
            >
              <motion.h3 
                className="text-md lg:text-[28px] font-bold" 
                style={{color: '#0267AC'}}
                variants={paragraphVariants}
              >
                Composite Veneers
              </motion.h3>
              <motion.p 
                className="text-xs lg:text-[18px] leading-relaxed" 
                style={{color: '#392D44', letterSpacing: '1.5px', lineHeight: '1.6'}}
                variants={paragraphVariants}
              >
                A Composite Veneer is a thin layer of tooth-colored resin applied to the front surface of a tooth to improve its shape, color, or alignment. Unlike porcelain veneers, composite veneers are applied directly and sculpted chairside in a single visit.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Composite Veneers - Perfect For and Benefits */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-10 max-w-4xl mx-auto px-4 lg:px-0"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Perfect For Section */}
          <motion.div 
            className="space-y-2 lg:space-y-3"
            variants={contentVariants}
          >
            <motion.h4 
              className="text-base lg:text-[29px] font-bold mb-3 lg:mb-4" 
              style={{color: '#0267AC'}}
              variants={paragraphVariants}
            >
              Perfect For:
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              variants={listVariants}
            >
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Discolored, chipped, or slightly misaligned teeth</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Closing small gaps</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Patients seeking affordable smile makeovers</span>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Benefits Section */}
          <motion.div 
            className="space-y-2 lg:space-y-3 ml-0 lg:ml-10"
            variants={contentVariants}
          >
            <motion.h4 
              className="text-base lg:text-[29px] font-bold mb-3 lg:mb-4" 
              style={{color: '#0267AC'}}
              variants={paragraphVariants}
            >
              Benefits:
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              variants={listVariants}
            >
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Immediate results in one appointment</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Cost-effective alternative to porcelain veneers</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                variants={listItemVariants}
              >
                <span className="text-gray-600 mr-2 lg:mr-3 text-base lg:text-xl font-bold">✓</span>
                <span className="text-xs lg:text-[18px]" style={{color: '#392D44'}}>Can be repaired or modified easily</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Why Choose Sasha Luxe Section */}
      {/* <WhyChoose /> */}
      
      {/* Frequently Asked Questions Section */}
    </div>
  );
}
