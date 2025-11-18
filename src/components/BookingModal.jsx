import React, { useState, useEffect } from 'react'
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const BookingModal = ({ isOpen, onClose, serviceName = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    service: serviceName || '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // API URL from .env file (VITE_API_URL) or default to localhost
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

  // Generate time slots from 9am to 9pm
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour <= 21; hour++) {
      const time12 = hour > 12 ? `${hour - 12}:00 PM` : hour === 12 ? '12:00 PM' : `${hour}:00 AM`
      const time24 = `${String(hour).padStart(2, '0')}:00`
      slots.push({ label: time12, value: time24 })
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Check if a time slot should be disabled
  const isTimeDisabled = (timeValue) => {
    if (!formData.preferredDate) return false
    
    const selectedDate = new Date(formData.preferredDate)
    const today = new Date()
    const now = new Date()
    
    // If selected date is today, disable past times
    if (selectedDate.toDateString() === today.toDateString()) {
      const [hours, minutes] = timeValue.split(':').map(Number)
      const selectedTime = new Date(selectedDate)
      selectedTime.setHours(hours, minutes, 0, 0)
      
      return selectedTime < now
    }
    
    return false
  }

  // Service options
  const services = [
    'Dental Restorations & Fillings',
    'Dental Crowns & Veneers',
    'Orthodontic Solutions',
    'Oral Prophylaxis',
    'Tooth Extractions',
    'Root Canal',
    'Flap Surgery',
    'Tooth-Specific Minor Surgical Care',
    'Teeth Whitening',
    'Dental Implants',
    'Laser Gum Treatments'
  ]

  // Update service when serviceName prop changes
  useEffect(() => {
    if (serviceName && serviceName !== formData.service) {
      setFormData(prev => ({ ...prev, service: serviceName }))
    }
  }, [serviceName])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        service: serviceName || '',
        message: ''
      })
      setError('')
      setSuccess(false)
    }
  }, [isOpen, serviceName])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Validate time if date is today
      if (formData.preferredDate && formData.preferredTime) {
        const selectedDate = new Date(formData.preferredDate)
        const today = new Date()
        
        if (selectedDate.toDateString() === today.toDateString()) {
          const [hours, minutes] = formData.preferredTime.split(':').map(Number)
          const selectedDateTime = new Date(selectedDate)
          selectedDateTime.setHours(hours, minutes, 0, 0)
          
          if (selectedDateTime < new Date()) {
            throw new Error('Selected time cannot be in the past')
          }
        }
      }

      const response = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          service: formData.service,
          message: formData.message || ''
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create appointment')
      }

      if (data.success) {
        setSuccess(true)
        // Reset form after success
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            preferredDate: '',
            preferredTime: '',
            service: serviceName || '',
            message: ''
          })
          setSuccess(false)
          onClose()
        }, 2000)
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      console.error('Error creating appointment:', err)
    } finally {
      setLoading(false)
    }
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{
                background: 'linear-gradient(135deg, #A1D6FA 0%, #C9E8FB 52%, #EFF8FB 100%)'
              }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white rounded-t-2xl sm:rounded-t-3xl px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between z-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#0067AC] font-sans">
                  Book Appointment
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Success Message */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-medium">Appointment booked successfully!</p>
                      <p className="text-green-600 text-sm">We've sent a confirmation email to your inbox.</p>
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
                      <p className="text-red-800 font-medium">Error</p>
                      <p className="text-red-600 text-sm">{error}</p>
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

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Input Fields Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="modal-fullName" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="modal-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white text-sm sm:text-base"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                        Email
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white text-sm sm:text-base"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white text-sm sm:text-base"
                        required
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="modal-service" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                        Service
                      </label>
                      <select
                        id="modal-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white text-sm sm:text-base"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="modal-preferredDate" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="modal-preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={getMinDate()}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans pr-10 sm:pr-12 text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label htmlFor="modal-preferredTime" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <select
                          id="modal-preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none font-sans bg-white text-sm sm:text-base"
                          required
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((slot) => (
                            <option
                              key={slot.value}
                              value={slot.value}
                              disabled={isTimeDisabled(slot.value)}
                            >
                              {slot.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                      Message (Optional)
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your dental needs..."
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#0067AC] focus:border-transparent outline-none resize-none font-sans bg-white text-sm sm:text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <motion.button
                      type="submit"
                      disabled={loading || success}
                      className="w-full bg-[#FF642F] hover:bg-[#e55a2b] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors font-sans text-sm sm:text-base"
                      whileHover={!loading && !success ? { y: -2 } : {}}
                      whileTap={!loading && !success ? { scale: 0.98 } : {}}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          <span>Booking Appointment...</span>
                        </>
                      ) : success ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Appointment Booked!</span>
                        </>
                      ) : (
                        <>
                          <span>Book Appointment</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BookingModal

