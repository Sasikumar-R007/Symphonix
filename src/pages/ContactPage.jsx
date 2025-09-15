import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Users,
  Star,
  ArrowRight,
  Building,
  Globe,
  Headphones
} from 'lucide-react'

const ContactPage = () => {
  console.log('CONTACT_OK_2025-09-15_T1')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    setIsSubmitted(true)
    // Clear form on successful submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    })
    // Keep success message visible longer for better UX
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      details: "hello@saatify.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak with our team",
      details: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with support",
      details: "Available 24/7",
      action: "Start Chat"
    }
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Financial Street, Suite 500",
      region: "San Francisco, CA 94105",
      phone: "+1 (415) 555-0123",
      hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
      city: "New York",
      address: "456 Business Avenue, Floor 15",
      region: "New York, NY 10001",
      phone: "+1 (212) 555-0456",
      hours: "Mon-Fri: 9AM-6PM EST"
    },
    {
      city: "London",
      address: "789 Finance Row, Level 8",
      region: "London EC2V 8AB, UK",
      phone: "+44 20 7555 0789",
      hours: "Mon-Fri: 9AM-5PM GMT"
    }
  ]

  const faqs = [
    {
      question: "How quickly can I get started with Saatify?",
      answer: "You can start using Saatify immediately with our free 14-day trial. Simply sign up, connect your accounts, and begin managing your finances in minutes."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support through live chat, email, and phone. Enterprise customers also get dedicated account managers."
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use bank-level security with 256-bit encryption, two-factor authentication, and comply with SOC 2 Type II standards."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Absolutely! We support integrations with 500+ banks, 100+ investment accounts, and popular financial tools like QuickBooks, Xero, and more."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      content: "Saatify has transformed how we manage our company finances. The automation features alone have saved us 20 hours per week.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "StartupXYZ",
      content: "The customer support team is incredible. They helped us set up everything perfectly and were available whenever we needed help.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Financial Advisor",
      company: "WealthManagement Co",
      content: "I recommend Saatify to all my clients. The platform is intuitive, secure, and provides excellent insights for financial planning.",
      rating: 5
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
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-purple-400 font-medium">Contact</span>
              <span data-proof="CONTACT_OK_2025-09-15_T1" className="hidden">Proof</span>
            </div>
            
            <motion.h1 {...fadeInUp} className="text-5xl md:text-6xl font-bold mb-6">
              Let's Start Your<br />
              <span className="gradient-text">Financial Journey</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Ready to take control of your finances? Get in touch with our team of financial experts and discover how Saatify can transform your financial management experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the method that works best for you. Our team is here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center hover:border-purple-500/50 transition-colors duration-300 group"
              >
                <div className="text-purple-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-200">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <div className="text-white font-semibold mb-6">{method.details}</div>
                {method.title === "Email Us" ? (
                  <a href="mailto:hello@saatify.com" className="w-full btn-primary inline-block text-center">
                    {method.action}
                  </a>
                ) : method.title === "Call Us" ? (
                  <a href="tel:+15551234567" className="w-full btn-primary inline-block text-center">
                    {method.action}
                  </a>
                ) : (
                  <button onClick={() => alert('Live chat coming soon! Please use email or phone for now.')} className="w-full btn-primary">
                    {method.action}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="glass-card p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Questions</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 resize-vertical"
                      placeholder="Tell us about your needs and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Office Information */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold mb-8">Our Offices</h2>
              
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="glass-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-purple-400">
                        <Building className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                        <div className="space-y-2 text-gray-300">
                          <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 mt-1 text-gray-400" />
                            <div>
                              <div>{office.address}</div>
                              <div>{office.region}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Headphones className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="font-semibold">24/7 Support</div>
                      <div className="text-gray-400 text-sm">Available for all plans</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="font-semibold">Global Coverage</div>
                      <div className="text-gray-400 text-sm">Supporting 50+ countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Find <span className="gradient-text">Our Locations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visit us at any of our global offices. We're here to help you succeed.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="glass-card p-2 overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361665766!2d-74.30933516697282!3d40.69753994999756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1697811234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saatify Office Locations"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Map Navigation */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 text-center hover:border-purple-500/50 transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    // In a real app, this would update the map to show the specific location
                    alert(`Showing ${office.city} office on map`)
                  }}
                >
                  <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{office.city}</h3>
                  <p className="text-gray-400 text-sm">{office.region}</p>
                </motion.div>
              ))}
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
              Quick answers to common questions about getting started with Saatify.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-purple-400">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about their experience with Saatify.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-purple-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their financial management with Saatify. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="text-purple-400 hover:text-purple-300 inline-flex items-center space-x-2 transition-colors duration-200">
                <MessageSquare className="w-5 h-5" />
                <span>Schedule Demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage