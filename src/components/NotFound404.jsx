import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Home, Smile, ArrowRight, Sparkles, Heart } from 'lucide-react'

// Enhanced tooth SVG icon with more details
const ToothIcon = ({ className, animated = false }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    animate={animated ? {
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
    } : {}}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 3 1 3v9c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-9s1-1 1-3c0-3.5-2.5-6-6-6zm0 2c2.2 0 4 1.8 4 4 0 1.5-1 2-1 2v9H9v-9s-1-.5-1-2c0-2.2 1.8-4 4-4z"/>
    <circle cx="10" cy="7" r="1" fill="currentColor"/>
    <circle cx="14" cy="7" r="1" fill="currentColor"/>
    <path d="M12 10c-1 0-2 .5-2 1.5v2c0 1 1 1.5 2 1.5s2-.5 2-1.5v-2c0-1-1-1.5-2-1.5z" opacity="0.6"/>
  </motion.svg>
)

// Animated floating particles
const FloatingParticle = ({ delay, x, y, size, color }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      background: color,
      boxShadow: `0 0 ${size * 2}px ${color}`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0.7, 0],
      scale: [0, 1, 1.5, 0],
      y: [0, -100, -200],
      x: [0, Math.random() * 50 - 25],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut"
    }}
  />
)

// Animated sparkle effect
const Sparkle = ({ x, y, delay }) => (
  <motion.div
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  >
    <Sparkles className="w-4 h-4 text-[#FF642F]" />
  </motion.div>
)

const NotFound404 = () => {
  const navigate = useNavigate()

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 2,
    color: ['#0076C0', '#FF642F', '#A1D6FA'][Math.floor(Math.random() * 3)]
  }))

  // Generate sparkles
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }))

  // Enhanced tooth positions with more variety
  const toothPositions = [
    [5, 8], [90, 12], [15, 85], [82, 78],
    [45, 3], [2, 48], [95, 52], [48, 92],
    [25, 25], [75, 30], [30, 70], [70, 65],
    [10, 60], [88, 35], [55, 15], [35, 80]
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center relative overflow-hidden px-3 sm:px-4 py-8 sm:py-12 md:py-20 mt-14 sm:mt-16 md:mt-16">
      {/* Animated background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0076C0]/10 via-transparent to-[#FF642F]/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}

      {/* Enhanced floating background teeth with more animations */}
      {toothPositions.map(([x, y], i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.3, 0.2],
            scale: [0.3, 0.7, 0.5, 0.3],
            y: [0, -40, -20, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 5 + (i * 0.3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        >
          <ToothIcon 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-[#0076C0] opacity-50" 
            animated={i % 3 === 0}
          />
        </motion.div>
      ))}

      {/* Large animated tooth in background */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <ToothIcon className="w-64 h-64 sm:w-96 sm:h-96 text-[#0076C0]" />
      </motion.div>

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto w-full px-2 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* 404 Numbers with enhanced animations */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-4 sm:mb-6 md:mb-8 relative">
          {/* Glowing background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#0076C0]/20 via-[#FF642F]/20 to-[#0076C0]/20 blur-3xl rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.1, 1],
              rotate: 0,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="text-7xl sm:text-7xl md:text-8xl lg:text-[12rem] font-extrabold text-[#0076C0] leading-none drop-shadow-2xl relative z-10"
            style={{
              textShadow: '0 0 20px rgba(0, 118, 192, 0.5), 0 0 40px rgba(0, 118, 192, 0.3)'
            }}
          >
            4
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.2, 1, 1.1, 1],
              rotate: [0, 10, -10, 0],
              y: [0, -20, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: { 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 10px rgba(255, 100, 47, 0.8))',
                  'drop-shadow(0 0 20px rgba(255, 100, 47, 1))',
                  'drop-shadow(0 0 10px rgba(255, 100, 47, 0.8))',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Smile className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 text-[#FF642F]" />
            </motion.div>
            {/* Rotating hearts around smile */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Heart
                  className="w-4 h-4 text-pink-400 absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: `${40 + i * 10}px 0`,
                    transform: `translate(-50%, -50%) translateY(-${40 + i * 10}px)`,
                  }}
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.1, 1],
              rotate: 0,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut"
              }
            }}
            className="text-7xl sm:text-7xl md:text-8xl lg:text-[12rem] font-extrabold text-[#0076C0] leading-none drop-shadow-2xl relative z-10"
            style={{
              textShadow: '0 0 20px rgba(0, 118, 192, 0.5), 0 0 40px rgba(0, 118, 192, 0.3)'
            }}
          >
            4
          </motion.div>
        </div>

        {/* Main Message with animated emoji */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0 flex items-center justify-center gap-3"
        >
          <span>Oops! This Tooth is Missing!</span>
          <motion.span
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            🦷
          </motion.span>
        </motion.h1>

        {/* Fun Dental Facts with animated background */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1,
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 sm:mb-8 md:mb-12 p-4 sm:p-5 md:p-6 bg-gradient-to-br from-white/80 via-blue-50/60 to-orange-50/60 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border-2 border-[#0076C0]/30 max-w-2xl mx-auto relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle, #0076C0 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          
          <div className="relative z-10">
            <motion.p
              className="text-xs sm:text-sm md:text-base text-gray-700 italic leading-relaxed flex items-start gap-2"
              animate={{
                textShadow: [
                  '0 0 0px rgba(0, 118, 192, 0)',
                  '0 0 10px rgba(0, 118, 192, 0.3)',
                  '0 0 0px rgba(0, 118, 192, 0)',
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-xl sm:text-2xl"
              >
                💡
              </motion.span>
              <span>
                <strong>Fun Fact:</strong> Just like a missing tooth, this page is gone! But don't worry - we're here to help you get back to smiling! 
                <motion.span
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block ml-2 text-xl sm:text-2xl"
                >
                  😄
                </motion.span>
              </span>
            </motion.p>
          </div>
        </motion.div>
      
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 15px 40px rgba(0, 118, 192, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-[#0076C0] to-[#0056a3] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-2xl hover:from-[#0056a3] hover:to-[#0076C0] transition-all relative overflow-hidden w-full sm:w-auto min-w-[200px] sm:min-w-0 group"
          >
            {/* Animated background shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
            </motion.div>
            <span className="relative z-10">Back to Home</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
            </motion.div>
          </motion.button>

        
        </motion.div>
      </motion.div>

      {/* Enhanced Animated Background Elements */}
      <motion.div
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 border-2 sm:border-4 border-[#0076C0]/30 rounded-full hidden sm:block"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 180, 360],
          boxShadow: [
            '0 0 0px rgba(0, 118, 192, 0)',
            '0 0 30px rgba(0, 118, 192, 0.5)',
            '0 0 0px rgba(0, 118, 192, 0)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 border-2 sm:border-4 border-[#FF642F]/30 rounded-full hidden sm:block"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 180, 0],
          boxShadow: [
            '0 0 0px rgba(255, 100, 47, 0)',
            '0 0 40px rgba(255, 100, 47, 0.5)',
            '0 0 0px rgba(255, 100, 47, 0)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Additional decorative animated circles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute hidden sm:block"
          style={{
            left: `${20 + i * 30}%`,
            top: `${15 + i * 25}%`,
            width: `${40 + i * 20}px`,
            height: `${40 + i * 20}px`,
            border: `2px solid rgba(0, 118, 192, ${0.1 + i * 0.1})`,
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
      
      {/* Floating tooth icons that move across screen */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`floating-${i}`}
          className="absolute"
          initial={{ x: '-100px', y: `${30 + i * 20}%` }}
          animate={{
            x: ['-100px', 'calc(100vw + 100px)'],
            y: [`${30 + i * 20}%`, `${35 + i * 20}%`, `${30 + i * 20}%`],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3
          }}
        >
          <ToothIcon className="w-12 h-12 text-[#0076C0]/20" />
        </motion.div>
      ))}
    </div>
  )
}

export default NotFound404