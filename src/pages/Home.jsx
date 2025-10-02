import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Star, Rocket, ArrowRight, Users, TrendingUp } from 'lucide-react'

const Home = () => {
  const [email, setEmail] = useState('')

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Version Badge */}
            <motion.div {...fadeInUp} className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full px-4 py-2">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-200 text-sm">V2.0 is now available</span>
              </div>
            </motion.div>

            {/* Main Hero Content */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Smart Finance Solutions for<br />
                <span className="gradient-text">Growth & Efficiency</span>
              </h1>
            </motion.div>

            <motion.p 
              {...fadeInUp} 
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Automate your financial operations, gain real-time insights, and focus on growth.
            </motion.p>

            {/* Email Signup Form */}
            <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-4"
                >
                  Get Notified
                </button>
              </form>

              {/* Feature Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
                <div className="flex items-center space-x-2 text-green-400">
                  <Check className="w-5 h-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Check className="w-5 h-5" />
                  <span>7 days free trial</span>
                </div>
              </div>

              {/* Customer Testimonial */}
              <div className="flex items-center justify-center space-x-4 mb-16">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full border-2 border-gray-800 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-300">Loved by 30k+ happy customers</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-2xl font-semibold mb-12 text-gray-400">
              Trusted by world's boldest companies
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
              {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="bg-gray-800 rounded-lg px-6 py-3 text-gray-400">
                    {company}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the <span className="gradient-text">Symphonix</span> Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the best features of Finance management. Grow your business with it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Automation with AI",
                description: "Control spend before you even start spending. Get full visibility over budgets & team expenses."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Completely Flexible",
                description: "Customize to fit your business and give you the controls you need policies, roles, and approval workflows."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Integrate & Sync",
                description: "Seamlessly integrate with your company accounting systems and consolidate your finance stack."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 text-center hover:border-cyan-500/50 transition-colors duration-300"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/50 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Your Financial Potential with Automation
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create dynamic budgets with predictive insights and scenario planning to help you manage future cash flows.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Request A Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home