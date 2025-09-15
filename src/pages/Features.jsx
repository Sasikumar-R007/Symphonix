import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Shield, 
  Zap, 
  BarChart3,
  CreditCard,
  Target,
  Users,
  Calendar,
  Bell,
  Lock,
  Smartphone,
  Globe,
  FileText,
  Calculator,
  Eye
} from 'lucide-react'

const Features = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const coreFeatures = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Investment Tracking",
      description: "Monitor your portfolio performance with real-time data, automated rebalancing suggestions, and comprehensive analytics.",
      benefits: ["Real-time portfolio tracking", "Automated rebalancing alerts", "Performance analytics"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Advanced Budgeting Tools",
      description: "Create dynamic budgets that adapt to your spending patterns, with predictive insights and smart spending recommendations.",
      benefits: ["Dynamic budget creation", "Spending pattern analysis", "Smart recommendations"]
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Expense Management",
      description: "Automatically categorize transactions, track recurring expenses, and identify cost-saving opportunities.",
      benefits: ["Auto-categorization", "Recurring expense tracking", "Cost-saving insights"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Financial Reporting",
      description: "Generate comprehensive financial reports with customizable dashboards and exportable data for tax preparation.",
      benefits: ["Customizable dashboards", "Tax preparation support", "Exportable reports"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Planning & Tracking",
      description: "Set financial goals, track progress automatically, and receive personalized recommendations to achieve them faster.",
      benefits: ["Automated goal tracking", "Progress monitoring", "Personalized recommendations"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Bank-level security with 256-bit encryption, two-factor authentication, and regulatory compliance standards.",
      benefits: ["256-bit encryption", "Two-factor authentication", "Regulatory compliance"]
    }
  ]

  const dashboardFeatures = [
    {
      title: "Portfolio Overview",
      description: "Get a comprehensive view of all your investments and their performance in one unified dashboard.",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Cash Flow Management",
      description: "Visualize your income, expenses, and cash flow patterns with interactive charts and forecasting.",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Budget Analytics",
      description: "Track your spending against budgets with detailed breakdowns and variance analysis.",
      image: "/api/placeholder/600/400"
    }
  ]

  const integrations = [
    { name: "Banks", icon: <CreditCard className="w-6 h-6" />, count: "500+" },
    { name: "Investment Accounts", icon: <TrendingUp className="w-6 h-6" />, count: "100+" },
    { name: "Credit Cards", icon: <CreditCard className="w-6 h-6" />, count: "200+" },
    { name: "Tax Software", icon: <FileText className="w-6 h-6" />, count: "15+" }
  ]

  const benefits = [
    {
      category: "Automation",
      title: "AI-Powered Financial Insights",
      description: "Leverage machine learning to get personalized insights, automated categorization, and predictive financial planning.",
      features: ["Smart transaction categorization", "Predictive cash flow analysis", "Automated investment rebalancing", "Intelligent bill reminders"]
    },
    {
      category: "Collaboration", 
      title: "Team Financial Management",
      description: "Enable multiple users to collaborate on budgets, share financial insights, and maintain transparency across organizations.",
      features: ["Multi-user access controls", "Shared budget planning", "Real-time collaboration", "Audit trail tracking"]
    },
    {
      category: "Security",
      title: "Enterprise-Grade Protection",
      description: "Protect your financial data with bank-level security, compliance standards, and comprehensive audit trails.",
      features: ["SOC 2 Type II compliance", "Regular security audits", "Data encryption at rest", "Role-based access control"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-purple-400 font-medium">Features</span>
            </div>
            
            <motion.h1 {...fadeInUp} className="text-5xl md:text-6xl font-bold mb-6">
              Powerful Financial Tools for<br />
              <span className="gradient-text">Modern Businesses</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Discover the comprehensive suite of financial management tools designed to streamline your workflows, maximize your investments, and secure your financial future.
            </motion.p>

            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="text-purple-400 hover:text-purple-300 inline-flex items-center space-x-2 transition-colors duration-200">
                <Eye className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Intuitive <span className="gradient-text">Dashboard Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our user-friendly interface puts all your financial data at your fingertips with customizable dashboards and real-time insights.
            </p>
          </motion.div>

          <div className="space-y-20">
            {dashboardFeatures.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <motion.div 
                  {...fadeInUp} 
                  transition={{ delay: index * 0.2 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold">{feature.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  {...fadeInUp} 
                  transition={{ delay: index * 0.2 + 0.1 }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-xl text-gray-300 mb-6">{feature.description}</p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Core <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to take control of your financial future, from investment tracking to budget planning and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:border-purple-500/50 transition-colors duration-300 group"
              >
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="gradient-text">Saatify</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities that set us apart from traditional financial management tools.
            </p>
          </motion.div>

          <div className="space-y-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div {...fadeInUp} transition={{ delay: index * 0.2 }}>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-purple-400 font-medium text-sm uppercase tracking-wide">
                      {benefit.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-xl text-gray-300 mb-8">{benefit.description}</p>
                  
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  {...fadeInUp} 
                  transition={{ delay: index * 0.2 + 0.1 }}
                  className="aspect-video bg-gray-800 rounded-xl overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        {benefit.category === "Automation" && <Zap className="w-8 h-8 text-white" />}
                        {benefit.category === "Collaboration" && <Users className="w-8 h-8 text-white" />}
                        {benefit.category === "Security" && <Shield className="w-8 h-8 text-white" />}
                      </div>
                      <h3 className="text-2xl font-bold">{benefit.category}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Seamless <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with all your financial institutions and services in one unified platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-purple-500/50 transition-colors duration-300"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {integration.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                <div className="text-2xl font-bold gradient-text">{integration.count}</div>
                <p className="text-gray-400 text-sm">Supported</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center space-x-2 mb-4">
                <Smartphone className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Mobile App</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Manage Finances<br />
                <span className="gradient-text">On the Go</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Access all your financial data, make transactions, and track investments from anywhere with our intuitive mobile applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-green-400" />
                    <span>Real-time notifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-green-400" />
                    <span>Biometric security</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-green-400" />
                    <span>Offline access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calculator className="w-5 h-5 text-green-400" />
                    <span>Built-in calculators</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                  <div className="text-sm text-gray-400">Download on</div>
                  <div className="font-semibold">App Store</div>
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                  <div className="text-sm text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold">Mobile Dashboard</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and discover how Saatify can transform your financial management experience.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Features