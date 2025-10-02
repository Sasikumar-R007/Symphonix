import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, X, Star, Zap, Crown, ArrowRight, Plus, Minus } from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const plans = [
    {
      name: "Basic Plan",
      icon: <Star className="w-6 h-6" />,
      description: "Perfect for individuals just getting started with financial management",
      monthlyPrice: 19,
      annualPrice: 15,
      popular: false,
      features: [
        "Basic budgeting tools",
        "Expense tracking",
        "Financial reports",
        "Email support",
        "Mobile app access",
        "Up to 3 accounts"
      ],
      notIncluded: [
        "Investment tracking",
        "Advanced analytics",
        "Priority support"
      ]
    },
    {
      name: "Pro Plan",
      icon: <Zap className="w-6 h-6" />,
      description: "Ideal for small businesses and advanced personal finance users",
      monthlyPrice: 39,
      annualPrice: 31,
      popular: true,
      features: [
        "Everything in Basic",
        "Investment portfolio tracking",
        "Advanced financial analytics",
        "Tax planning tools",
        "Priority email support",
        "Up to 10 accounts",
        "Custom categories",
        "Goal tracking",
        "Cash flow forecasting"
      ],
      notIncluded: [
        "White-label solutions",
        "API access"
      ]
    },
    {
      name: "Enterprise Plan",
      icon: <Crown className="w-6 h-6" />,
      description: "Comprehensive solution for large businesses and financial institutions",
      monthlyPrice: 79,
      annualPrice: 63,
      popular: false,
      features: [
        "Everything in Pro",
        "White-label solutions",
        "API access & integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited accounts",
        "Advanced security features",
        "Custom reporting",
        "Multi-user collaboration",
        "Compliance tools"
      ],
      notIncluded: []
    }
  ]

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "All plans come with a 14-day free trial that includes full access to all features. No credit card required to start."
    },
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions."
    },
    {
      question: "Is there a discount for annual billing?",
      answer: "Yes! Annual subscriptions save you approximately 20% compared to monthly billing across all plans."
    },
    {
      question: "How secure is my financial data?",
      answer: "We use bank-level security with 256-bit SSL encryption, two-factor authentication, and SOC 2 Type II compliance to keep your data safe."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period."
    }
  ]

  const getPrice = (plan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice
  }

  const getSavings = (plan) => {
    if (!isAnnual) return 0
    const monthlyCost = plan.monthlyPrice * 12
    const annualCost = plan.annualPrice * 12
    return monthlyCost - annualCost
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">💰</span>
              </div>
              <span className="text-cyan-400 font-medium">Pricing</span>
            </div>
            
            <motion.h1 {...fadeInUp} className="text-5xl md:text-6xl font-bold mb-6">
              Choose the Right Plan for Your<br />
              <span className="gradient-text">Financial Success</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Start with our free trial and upgrade as you grow. All plans include essential financial tools with premium features and dedicated support.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center space-x-4"
            >
              <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                  isAnnual ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`relative glass-card p-8 ${
                  plan.popular 
                    ? 'border-cyan-500 ring-2 ring-cyan-500/20' 
                    : 'hover:border-cyan-500/50'
                } transition-colors duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-600 rounded-lg mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold">${getPrice(plan)}</span>
                    <span className="text-gray-400">/{isAnnual ? 'month' : 'month'}</span>
                  </div>
                  
                  {isAnnual && getSavings(plan) > 0 && (
                    <div className="text-green-400 text-sm mb-4">
                      Save ${getSavings(plan)} annually
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className={`w-full inline-block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-cyan-500'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </Link>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <div className="border-t border-gray-700 pt-4 mt-6">
                        <h5 className="font-medium text-gray-400 mb-3">Not included:</h5>
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3 mb-2">
                            <X className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Compare <span className="gradient-text">All Plans</span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that best fits your financial management needs
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 font-semibold">Features</th>
                    <th className="text-center py-4 px-6 font-semibold">Basic</th>
                    <th className="text-center py-4 px-6 font-semibold">Pro</th>
                    <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Basic budgeting tools", basic: true, pro: true, enterprise: true },
                    { feature: "Expense tracking", basic: true, pro: true, enterprise: true },
                    { feature: "Financial reports", basic: true, pro: true, enterprise: true },
                    { feature: "Mobile app access", basic: true, pro: true, enterprise: true },
                    { feature: "Investment tracking", basic: false, pro: true, enterprise: true },
                    { feature: "Advanced analytics", basic: false, pro: true, enterprise: true },
                    { feature: "Tax planning tools", basic: false, pro: true, enterprise: true },
                    { feature: "API access", basic: false, pro: false, enterprise: true },
                    { feature: "24/7 support", basic: false, pro: false, enterprise: true },
                    { feature: "White-label solutions", basic: false, pro: false, enterprise: true }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 px-6 text-gray-300">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.basic ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.pro ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.enterprise ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Got questions? We've got answers to help you make the right choice.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
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
              Ready to Transform Your Financial Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with Symphonix.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing