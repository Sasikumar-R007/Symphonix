import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Star, Trophy, Users, TrendingUp, Award, ArrowUp, Target } from 'lucide-react'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "2M+", label: "Consumers" },
    { number: "500+", label: "Active Users" },
    { number: "70k", label: "Companies" }
  ]

  const actions = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Budgeting & Expense Tracking",
      description: "Automatically track your spending, set budgets, and monitor your financial health."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Investment Management",
      description: "Monitor your expenses, set spending limits, and enhance your financial stability."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Financial Reports & Insights",
      description: "Monitor your expenses, set spending limits, and enhance your financial stability."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Tax Planning",
      description: "Monitor your expenses, set spending limits, and enhance your financial stability."
    }
  ]

  const testimonials = [
    {
      name: "Gerald Mason",
      role: "CEO",
      company: "Maritano",
      content: "The AI-powered tools have completely streamlined our workflow. Tasks that used to take hours now take minutes. It's like having an extra team member",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Marvin McKinney",
      role: "Founder",
      company: "TechCorp",
      content: "The AI-powered tools have completely streamlined our workflow. Tasks that used to take hours now take minutes. It's like having an extra team member",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Marvin McKinney",
      role: "COO",
      company: "Vertex",
      content: "AI tools have greatly streamlined our workflow, cutting tasks from hours to just minutes—like gaining an invaluable extra team member.",
      avatar: "/api/placeholder/60/60"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">About</span>
            </div>
            <motion.h1 {...fadeInUp} className="text-5xl md:text-6xl font-bold mb-6">
              We Support Companies to<br />
              <span className="gradient-text">Expand Customers</span>
            </motion.h1>
            <motion.p 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Our platform is designed to simplify the complexities of managing your finances—whether for individuals, small businesses, or large enterprises.
            </motion.p>
          </div>

          {/* Hero Images Grid */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center space-x-2 mb-4">
                <Check className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Focused on<br />
                <span className="gradient-text">Teamwork</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our mission is to transform the way teams collaborate, helping them work smarter, faster, and more effectively.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Innovation in Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Growth & Achievement</span>
                </div>
              </div>

              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="relative">
                <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Financial Dashboard</h3>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-cyan-600 rounded-xl p-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-cyan-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden mb-8">
                <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Analytics Dashboard</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Achievements</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Emphasize<br />
                <span className="gradient-text">Achievements</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our solutions have boosted team productivity, reduced project delays by half, and increased task completion rates.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Reduced Project Delays</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Enhanced Task Completion Rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Cut Operational Costs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Action</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Actions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We provide a powerful suite of financial tools designed to help you manage budgets, optimize investments, track expenses, and plan for the future—efficiently and effortlessly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 gap-6">
              {actions.map((action, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-cyan-500/50 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-cyan-400 mt-1">
                      {action.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold">{action.title}</h3>
                        <ArrowUp className="w-4 h-4 text-green-400" />
                      </div>
                      <p className="text-gray-300">{action.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Revenue Analytics</h3>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Statistics Overview</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Reason</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Reasons to <span className="gradient-text">Select Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              With seamless integrations, intuitive design, and best-in-class customer support, we make managing your finances easier than ever
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Tools",
                description: "Provide users with a personalized dashboard that highlights the most relevant financial data"
              },
              {
                title: "Secure and Reliable",
                description: "Based on the user's financial data, offer personalized recommendations for saving, or managing finances."
              },
              {
                title: "Personalized Insights",
                description: "Allow users to set personal financial goals (e.g., saving for a home, retirement, debt reduction)."
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-transparent flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Testimonial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Check out the feedback that our clients are giving after using our services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                <p className="text-cyan-400 mb-1">{testimonial.role}</p>
                <p className="text-gray-400 text-sm mb-4">{testimonial.company}</p>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
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
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About