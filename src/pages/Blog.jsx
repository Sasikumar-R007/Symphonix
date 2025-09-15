import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag, ExternalLink } from 'lucide-react'

const Blog = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Market Trends: What 2024 Holds for Investors",
      category: "Investing",
      excerpt: "Explore the latest market trends and investment opportunities for 2024, including emerging sectors and economic indicators to watch.",
      image: "/api/placeholder/400/250",
      date: "Dec 15, 2024",
      author: "Sarah Johnson",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "IT Integration in Mergers and Acquisitions: Structuring Synergy",
      category: "Financial Technology",
      excerpt: "Learn how successful IT integration drives value creation in M&A transactions and the key strategies for seamless technology consolidation.",
      image: "/api/placeholder/400/250",
      date: "Dec 12, 2024",
      author: "Michael Chen",
      readTime: "7 min read",
      featured: true
    },
    {
      id: 3,
      title: "Top Investment Strategies for Beginners",
      category: "Investing",
      excerpt: "A comprehensive guide to getting started with investing, covering fundamental strategies and risk management principles.",
      image: "/api/placeholder/400/250",
      date: "Dec 10, 2024",
      author: "Emily Davis",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "Tax Planning and Preparing Made Easy for Everyone",
      category: "Tax Strategies",
      excerpt: "Simplify your tax planning process with practical tips and strategies that can help maximize your deductions and minimize your liability.",
      image: "/api/placeholder/400/250",
      date: "Dec 8, 2024",
      author: "David Wilson",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Bootstrapping New Venture: The Case for Going Back to Basics",
      category: "Financial Technology",
      excerpt: "Discover why bootstrapping your startup might be the smartest financial decision and how to build a sustainable business model.",
      image: "/api/placeholder/400/250",
      date: "Dec 5, 2024",
      author: "Rachel Martinez",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "How to Prepare Your Business for a Financial Audit: Best Practices",
      category: "Investing",
      excerpt: "Essential steps and best practices to ensure your business is audit-ready, from documentation to compliance requirements.",
      image: "/api/placeholder/400/250",
      date: "Dec 3, 2024",
      author: "James Thompson",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "The Power of Automated Financial Tools",
      category: "Investing",
      excerpt: "Explore how automation is revolutionizing personal and business finance management, and which tools deliver the best results.",
      image: "/api/placeholder/400/250",
      date: "Nov 30, 2024",
      author: "Lisa Anderson",
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "Using AI-powered Enterprise Interfaces to Optimize Efficiency",
      category: "Financial Technology",
      excerpt: "Learn how AI-powered interfaces are transforming enterprise operations and driving unprecedented levels of operational efficiency.",
      image: "/api/placeholder/400/250",
      date: "Nov 28, 2024",
      author: "Robert Kim",
      readTime: "7 min read"
    }
  ]

  const categories = [
    { name: "All", count: blogPosts.length, active: true },
    { name: "Investing", count: blogPosts.filter(post => post.category === "Investing").length },
    { name: "Financial Technology", count: blogPosts.filter(post => post.category === "Financial Technology").length },
    { name: "Tax Strategies", count: blogPosts.filter(post => post.category === "Tax Strategies").length }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case "Investing":
        return "bg-green-600/20 text-green-400 border-green-600/30"
      case "Financial Technology":
        return "bg-blue-600/20 text-blue-400 border-blue-600/30"
      case "Tax Strategies":
        return "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
      default:
        return "bg-purple-600/20 text-purple-400 border-purple-600/30"
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📝</span>
              </div>
              <span className="text-purple-400 font-medium">Blogs</span>
            </div>
            
            <motion.h1 {...fadeInUp} className="text-5xl md:text-6xl font-bold mb-6">
              Our Blog and <span className="gradient-text">Insights</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Stay informed with expert financial advice, practical tips, and in-depth guides designed to help you make smarter decisions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full border transition-colors duration-200 ${
                  category.active 
                    ? 'bg-purple-600 text-white border-purple-600' 
                    : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-purple-500/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden hover:border-purple-500/50 transition-colors duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.slice(3).map((post, index) => (
              <motion.article
                key={post.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden hover:border-purple-500/50 transition-colors duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-transparent">
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

export default Blog