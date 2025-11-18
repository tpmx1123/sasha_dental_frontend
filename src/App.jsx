import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'
import Homepage from './pages/Homepage'
import Contact from './components/Contact'
import Top from './pages/firstpage/Top'
import Services from './pages/services'
import OralTop from './pages/Oral/OralTop'
import DentalCrownsAndVeneers from './pages/page_2/hero'
import RootTop from './pages/RootCanal/RootTop'
import ToothTop from './pages/Tooth/ToothTop'
import Hero from './pages/services_last/hero'
import FlapSurgery from './pages/FLAPSURGERY/FlapSurgery'
import LaserGum from './pages/laser gum/LaserGum'
import Tooth_Extra from './pages/TOOTH_Extraction/Tooth_Extra'
import Dental_Implents from './pages/Dental_Implants/Dental_Implents'
import SecretLogin from './pages/SecretLogin'
import SecretDashboard from './pages/SecretDashboard'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import BookAppointment from './components/bookAppointment'
import NotFound404 from './components/NotFound404'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Secret login page (no navbar/footer) */}
          <Route path="/secret-login" element={<SecretLogin />} />
          
          {/* Password reset pages (no navbar/footer) */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:resettoken" element={<ResetPassword />} />
          
          {/* Protected admin dashboard (no navbar/footer) */}
          <Route 
            path="/secret-dashboard" 
            element={
              <ProtectedRoute>
                <SecretDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Public website routes (with navbar and footer) */}
          <Route path="/" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <Homepage />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <Top />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/teeth-whitening" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <Hero />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/orthodontics" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <Services />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/oral-prophylaxis" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <OralTop />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/dental-crowns-and-veneers" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <DentalCrownsAndVeneers />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/root-canal" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <RootTop />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/tooth-surgery" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <ToothTop />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/flap-surgery" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <FlapSurgery />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/laser-gum" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <LaserGum />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/tooth-extraction" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <Tooth_Extra />
              <Footer />
            </div>
          } />
          
          <Route path="/dental-service-in-madhapur/dental-implants" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <Dental_Implents />
              <Footer />
            </div>
          } />
          
          <Route path="/blog" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <Blogs />
              <Footer />
            </div>
          } />
          
          <Route path="/blog/:slug" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <BlogDetail />
              <Footer />
            </div>
          } />
          
          <Route path="/book-appointment" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <BookAppointment />
              <Footer />
            </div>
          } />
          
          <Route path="/contact" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <Contact />
              <Footer />
            </div>
          } />
          
          <Route path="*" element={
            <div className="min-h-screen overflow-x-hidden w-full max-w-full">
              <Navbar />
              <NotFound404 />
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App