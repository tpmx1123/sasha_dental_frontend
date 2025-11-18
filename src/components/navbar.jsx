import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from './assets/SASHA SMILES LOGO.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesDropdownRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const closeOverlays = () => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
    setIsServicesOpen(false)
  }

  // Close dropdown when clicking outside (only for desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle click outside on desktop (screen width >= 768px)
      if (window.innerWidth >= 768 && servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    // Use mouseleave for better desktop experience
    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        setTimeout(() => {
          if (servicesDropdownRef.current && !servicesDropdownRef.current.matches(':hover')) {
            setIsServicesOpen(false)
          }
        }, 200)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Manage body scroll when mobile menu is open
  useEffect(() => {
    // Ensure body scroll is always enabled
    if (window.innerWidth < 768) {
      // Make sure body can always scroll
      document.body.style.overflow = 'auto'
      document.body.style.position = 'static'
      
      return () => {
        // Cleanup - ensure scroll is enabled
        document.body.style.overflow = 'auto'
        document.body.style.position = ''
      }
    }
  }, [isMenuOpen])

  // Services data - easy to add more later
  const services = [
    { name: 'Dental Restorations & Fillings', path: '/dental-service-in-madhapur' },
    { name: 'Teeth Whitening', path: '/dental-service-in-madhapur/teeth-whitening' },
    { name: 'Orthodontics', path: '/dental-service-in-madhapur/orthodontics' },
    { name: 'Oral Prophylaxis', path: '/dental-service-in-madhapur/oral-prophylaxis' },
    {name:"Dental Crowns & Veneers", path:"/dental-service-in-madhapur/dental-crowns-and-veneers"},
    {name:"Root Canal", path:"/dental-service-in-madhapur/root-canal"},
    {name:"Flap Surgery", path:"/dental-service-in-madhapur/flap-surgery"},
    {name:"Tooth Surgery", path:"/dental-service-in-madhapur/tooth-surgery"},
    {name:"Laser Gum", path:"/dental-service-in-madhapur/laser-gum"},
    {name:"Tooth Extraction", path:"/dental-service-in-madhapur/tooth-extraction"},
    {name:"Dental Implants", path:"/dental-service-in-madhapur/dental-implants"},

  ]

  // Animation Variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  }

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 }
    }
  }

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const mobileServiceVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.03
      }
    }
  }

  const searchVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 }
    }
  }

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <Link to="/" onClick={closeOverlays}>
              <motion.img
                src={logo}
                alt="Sasha Smiles Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
              Home
            </Link>
            
            {/* Services Dropdown - Desktop */}
            <div 
              className="relative group" 
              ref={servicesDropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center cursor-pointer">
                <Link 
                  to="/dental-service-in-madhapur" 
                  className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium flex items-center"
                  onClick={closeOverlays}
                >
                  Services
                </Link>
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 text-dental-dark-blue ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Dropdown Menu - Horizontal Grid Layout */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    className="fixed inset-x-0 pt-4 z-50 flex justify-center"
                    style={{
                      top: '56px'
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <motion.div 
                      className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-6 z-50 overflow-hidden"
                      style={{
                        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)',
                        minWidth: 'min(900px, 95vw)',
                        width: 'max-content',
                        maxWidth: '95vw'
                      }}
                    >
                      {/* Decorative background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-dental-teal/5 via-blue-50/30 to-purple-50/20 pointer-events-none"></div>
                      
                      {/* Horizontal Grid: 3 columns on large, 2 on medium, 2 on small */}
                      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
                        {services.map((service, index) => (
                          <motion.div
                            key={index}
                            variants={serviceCardVariants}
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              to={service.path}
                              className="group/item relative block px-4 py-4 md:px-5 md:py-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-dental-teal hover:shadow-xl transition-all duration-300 overflow-hidden"
                              onClick={closeOverlays}
                            >
                        {/* Service Icon/Indicator */}
                        <div className="flex items-start space-x-3 mb-2">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-dental-teal opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:scale-150 mt-2"></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs md:text-sm font-bold text-dental-dark-blue group-hover/item:text-dental-teal transition-colors duration-300 leading-tight">
                              {service.name}
                            </p>
                          </div>
                          {/* Arrow indicator */}
                          <svg 
                            className="w-4 h-4 text-dental-teal opacity-0 group-hover/item:opacity-100 transform translate-x-0 group-hover/item:translate-x-1 transition-all duration-300 flex-shrink-0 mt-0.5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-dental-teal to-blue-500 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></div>
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/item:translate-x-[200%] transition-transform duration-1000"></div>
                        
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-dental-teal/5 to-blue-500/5 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                  )}
                </AnimatePresence>
              </div>
            <Link to="/blog" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
              Blog
            </Link>
            <a href="/contact" className="text-dental-dark-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
              Contact us
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-dental-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search here..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              onClick={toggleSearch}
              className="text-dental-dark-blue hover:text-dental-teal transition-colors p-1"
              aria-label="Toggle search"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              className="text-dental-dark-blue hover:text-dental-teal transition-colors p-1"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              className="md:hidden py-3 sm:py-4 border-t border-gray-200 overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={searchVariants}
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-dental-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <motion.input
                  type="text"
                  placeholder="Search here..."
                  className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dental-teal focus:border-transparent text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <motion.div variants={mobileMenuItemVariants}>
                  <Link to="/" className="block px-3 py-2 text-dental-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={mobileMenuItemVariants}>
                 
                </motion.div>
                {/* Services with Dropdown - Mobile */}
                <motion.div variants={mobileMenuItemVariants} className="border-b border-gray-200">
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setIsServicesOpen(!isServicesOpen)
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-dental-blue hover:text-dental-teal transition-colors font-medium text-left"
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Services</span>
                    <motion.svg 
                      className="w-4 h-4 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  
                  {/* Mobile Dropdown Items - Horizontal Grid */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-3 px-2"
                          variants={mobileServiceVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {/* 1 column grid for mobile - one service per line */}
                          <div className="grid grid-cols-1 gap-2">
                            {services.map((service, index) => (
                              <motion.div
                                key={index}
                                variants={serviceCardVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Link
                                  to={service.path}
                                  className="group/item relative block px-4 py-3 rounded-lg bg-white border-2 border-gray-200 hover:border-dental-teal hover:shadow-md transition-all duration-200"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    closeOverlays()
                                  }}
                                >
                                  <div className="flex items-center space-x-3">
                                    {/* Indicator dot */}
                                    <div className="w-2 h-2 rounded-full bg-dental-teal opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 flex-shrink-0"></div>
                                    <p className="text-sm font-semibold text-dental-dark-blue group-hover/item:text-dental-teal transition-colors duration-200 leading-tight text-left flex-1">
                                      {service.name}
                                    </p>
                                  </div>
                                  {/* Hover background */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-dental-teal/5 to-blue-500/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 -z-10"></div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div variants={mobileMenuItemVariants}>
                  <Link to="/blog" className="block px-3 py-2 text-dental-blue hover:text-dental-teal transition-colors font-medium" onClick={closeOverlays}>
                    Blog
                  </Link>
                </motion.div>
                <motion.div variants={mobileMenuItemVariants}>
                  <a href="/contact" className="block px-3 py-2 sm:py-3 text-dental-blue hover:text-dental-teal transition-colors font-medium text-sm sm:text-base" onClick={closeOverlays}>
                    Contact us
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar