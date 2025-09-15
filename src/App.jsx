import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
import Contact from './pages/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <Router>
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="pricing" element={<Pricing />} />
                  <Route path="features" element={<Features />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
              </Routes>
            </motion.div>
          </Router>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App