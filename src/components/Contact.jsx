import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { 
  MapPin, Phone, Mail, Clock, Send, Loader2, 
  CheckCircle2, AlertCircle
} from 'lucide-react'
import DancingTeeth from '../../public/dazzling_teeth.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const prefersReducedMotion = useReducedMotion()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    // Simulate form submission (you can connect to your backend API)
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Contact form error:', err)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.1 
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut' 
      } 
    }
  }


  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Sasha Clinics, Kavuri Hills, Madhapur',
      subContent: 'Hyderabad, Telangana',
      color: 'text-[#0067AC]',
      link: 'https://www.google.com/maps?q=Sasha+Clinics+Kavuri+Hills+Madhapur+Hyderabad+Telangana'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subContent: 'Mon-Fri 9am-6pm',
      color: 'text-[#FF642F]',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@sashasmiles.com',
      subContent: 'We respond within 24 hours',
      color: 'text-[#0d9488]',
      link: 'mailto:hello@sashasmiles.com'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday',
      subContent: '9:00 AM - 6:00 PM',
      color: 'text-[#0067AC]'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white pt-20 sm:pt-24">
      {/* Hero Section with Background Image */}
      <section 
        className="relative overflow-hidden min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${DancingTeeth})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0067AC]/50 via-[#005a94]/45 to-[#0067AC]/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full flex items-center justify-center">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We're here to help. Reach out to us with any questions or to schedule your appointment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0067AC] mb-6 font-sans">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-6 font-sans">
                Feel free to reach out to us through any of these channels. We're always happy to help.
              </p>
            </motion.div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${info.color} flex-shrink-0`}>
                      <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-3">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 font-sans">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.title === 'Address' ? '_blank' : undefined}
                          rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                          className="text-[#0067AC] hover:underline font-medium font-sans break-words"
                          aria-label={`${info.title}: ${info.content}`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium font-sans">
                          {info.content}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 mt-1 font-sans">
                        {info.subContent}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Social Media Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-[#A1D6FA] via-[#C9E8FB] to-[#EFF8FB] rounded-xl p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4 font-sans">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-medium text-[#0067AC] font-sans">
                      {social}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0067AC] mb-2 font-sans">
                  Send us a Message
                </h2>
                <p className="text-gray-600 font-sans">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Success Message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium font-sans">Message sent successfully!</p>
                    <p className="text-green-600 text-sm font-sans">We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-red-800 font-medium font-sans">Error</p>
                    <p className="text-red-600 text-sm font-sans">{error}</p>
                  </div>
                  <button
                    onClick={() => setError('')}
                    className="text-red-600 hover:text-red-800"
                    aria-label="Close error"
                  >
                    ×
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none resize-none font-sans bg-white"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={loading || success}
                    className="w-full bg-[#FF642F] hover:bg-[#e55a2b] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors font-sans"
                    whileHover={!loading && !success ? { y: -2 } : {}}
                    whileTap={!loading && !success ? { scale: 0.98 } : {}}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : success ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative">
                <iframe
                  title="Sasha Clinics, Kavuri Hills, Madhapur, Hyderabad, Telangana - Map"
                  src="https://www.google.com/maps?q=Sasha+Clinics+Kavuri+Hills+Madhapur+Hyderabad+Telangana&output=embed"
                  className="w-full h-64 sm:h-80 border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="flex items-center justify-between px-4 py-3 border-t bg-white">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-[#0067AC]" />
                    <span className="text-sm sm:text-base font-sans">Sasha Clinics, Kavuri Hills, Madhapur, Hyderabad, Telangana</span>
                  </div>
                  <a
                    href="https://www.google.com/maps?q=Sasha+Clinics+Kavuri+Hills+Madhapur+Hyderabad+Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-[#0067AC] hover:underline font-sans"
                    aria-label="Open location in Google Maps"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact