import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import logo from './assets/SASHA SMILES LOGO.svg'

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const bottomBarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <footer className="bg-white border-t border-[#0E82C6] border-opacity-100" style={{borderTopWidth: '1px'}}>
      {/* Main Footer Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-12 sm:py-14"
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Column 1: Logo and Tagline */}
          <motion.div className="space-y-4 md:col-span-1 text-center md:text-left" variants={sectionVariants}>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src={logo}
                alt="Sasha Smiles Logo"
                className="h-9 sm:h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-600 font-sans text-sm">
              Precision. Care. Confidence.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div className="space-y-4 text-center md:text-left" variants={sectionVariants}>
            <h3 className="text-gray-800 font-semibold font-sans text-base">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3-4: Services - Spans 2 columns for better layout */}
          <motion.div className="space-y-4 md:col-span-2 text-center md:text-left" variants={sectionVariants}>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-6">
              {/* Services Heading - aligned with second column */}
              <div className="hidden lg:block"></div>
              <h3 className="text-gray-800 font-semibold font-sans text-base text-center md:text-left lg:col-span-1 sm:col-span-2 col-span-2 lg:text-left">
                Services
              </h3>
              <div className="hidden lg:block"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-6">
              {/* First Row - 3 services */}
              <Link to="/dental-service-in-madhapur" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Dental Restorations & Fillings
              </Link>
              <Link to="/dental-service-in-madhapur/teeth-whitening" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Teeth Whitening
              </Link>
              <Link to="/dental-service-in-madhapur/orthodontics" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Orthodontics
              </Link>
              
              {/* Second Row - 3 services */}
              <Link to="/dental-service-in-madhapur/oral-prophylaxis" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Oral Prophylaxis
              </Link>
              <Link to="/dental-service-in-madhapur/dental-crowns-and-veneers" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Dental Crowns & Veneers
              </Link>
              <Link to="/dental-service-in-madhapur/root-canal" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Root Canal
              </Link>
              
              {/* Third Row - 3 services */}
              <Link to="/dental-service-in-madhapur/flap-surgery" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Flap Surgery
              </Link>
              <Link to="/dental-service-in-madhapur/tooth-surgery" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Tooth Surgery
              </Link>
              <Link to="/dental-service-in-madhapur/laser-gum" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Laser Gum
              </Link>
              
              {/* Fourth Row - 2 services */}
              <Link to="/dental-service-in-madhapur/tooth-extraction" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Tooth Extraction
              </Link>
              <Link to="/dental-service-in-madhapur/dental-implants" className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm block py-0.5 text-center md:text-left">
                Dental Implants
              </Link>
            </div>
          </motion.div>

          {/* Column 5: Contact */}
          <motion.div className="space-y-4 text-center md:text-left" variants={sectionVariants}>
            <h3 className="text-gray-800 font-semibold font-sans text-base">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/vxJx4UsrGY5v55ZVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm leading-relaxed text-center md:text-left"
                  aria-label="Open address in Google Maps"
                >
                 4th floor, 3-184, beside Hotel Serenity La Serene, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919154129964"
                  className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm"
                  aria-label="Call +91 9154129964"
                >
                  +91 9154129964
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@sashaclinics.com"
                  className="text-gray-600 hover:text-[#0067AC] transition-colors font-sans text-sm"
                  aria-label="Email hello@sashaclinics.com"
                >
                 hello@sashaclinics.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div className="border-t border-[#0E82C6] border-opacity-100" style={{borderTopWidth: '1px'}}>
        <motion.div 
          className="max-w-7xl mx-auto px-6 py-6"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={bottomBarVariants}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center">
            <p className="text-gray-600 font-sans text-sm text-center sm:text-left">
              © 2025 Sasha Smiles. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-5">
              <motion.a href="#" className="text-gray-500 hover:text-[#0067AC] transition-colors" whileHover={{ y: -2 }}>
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a href="https://www.instagram.com/sashasmiles_dental?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-500 hover:text-[#0067AC] transition-colors" whileHover={{ y: -2 }} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" className="text-gray-500 hover:text-[#0067AC] transition-colors" whileHover={{ y: -2 }}>
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer