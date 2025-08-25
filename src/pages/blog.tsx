import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';

// Dummy data for the blog page
const featuredPosts = [
  {
    id: 1,
    title: "The Future of E-commerce: AI-Powered Shopping Experiences",
    excerpt: "Discover how artificial intelligence is revolutionizing the way customers shop online and what it means for your business.",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Technology",
    image: "/images/image18.jpg",
    slug: "future-ecommerce-ai-powered-shopping"
  },
  {
    id: 2,
    title: "10 Essential Strategies for Boosting Your Conversion Rate",
    excerpt: "Learn proven techniques that successful e-commerce businesses use to turn visitors into loyal customers.",
    author: "Michael Chen",
    date: "March 12, 2025",
    readTime: "12 min read",
    category: "Marketing",
    image: "/images/image19.jpg",
    slug: "essential-strategies-boosting-conversion-rate"
  },
  {
    id: 3,
    title: "Building Customer Trust: The Foundation of E-commerce Success",
    excerpt: "Explore the key elements that build trust with your customers and how to implement them effectively.",
    author: "Emily Rodriguez",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Customer Experience",
    image: "/images/image20.jpg",
    slug: "building-customer-trust-ecommerce-success"
  }
];

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - ShopHub | E-commerce Insights & Tips</title>
        <meta name="description" content="Discover the latest insights, strategies, and tips for e-commerce success. Expert articles on technology, marketing, customer experience, and business strategy." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio6.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  E-commerce
                  <span className="block text-indigo-200">Insights & Tips</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                  Stay ahead of the curve with expert insights, proven strategies, and the latest trends 
                  in e-commerce from industry professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg">
                    Talk to Us
                  </Link>
                  <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300">
                    What We Offer
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Featured Posts Section */}
          <section id="featured" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Articles
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Our most popular and insightful articles handpicked by our editorial team
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-600">
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group-hover:underline"
                        >
                          Read More
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Explore by Category
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Find the content that matters most to your business needs
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { name: "Technology", count: 15, icon: "🚀" },
                  { name: "Marketing", count: 23, icon: "📈" },
                  { name: "Customer Experience", count: 18, icon: "😊" },
                  { name: "Business Strategy", count: 12, icon: "💼" },
                  { name: "Analytics", count: 9, icon: "📊" },
                  { name: "Case Studies", count: 7, icon: "📚" }
                ].map((category) => (
                  <div key={category.name} className="group">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {category.count} articles
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Posts & Newsletter Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Recent Posts */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Recent Articles
                  </h2>
                  <div className="space-y-6">
                    {[
                      { title: "Mobile-First Design: Why It's Crucial for E-commerce", date: "March 8, 2025", readTime: "5 min read", slug: "mobile-first-design" },
                      { title: "The Psychology of Pricing: How to Price Your Products Right", date: "March 5, 2025", readTime: "10 min read", slug: "psychology-pricing" },
                      { title: "Inventory Management Best Practices for Growing Businesses", date: "March 2, 2025", readTime: "7 min read", slug: "inventory-management" }
                    ].map((post) => (
                      <article key={post.slug} className="group">
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-600">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {post.title}
                          </h3>
                          
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group-hover:underline"
                          >
                            Read Article
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div>
                  <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-8 text-white">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Stay Updated with Latest Insights</h3>
                      <p className="text-indigo-100 mb-6">Get weekly tips, industry news, and exclusive content delivered to your inbox.</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {["Weekly insights", "Industry updates", "Exclusive content", "No spam"].map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-indigo-200 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-indigo-100">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white/90 backdrop-blur-sm"
                      />
                      <button className="w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Subscribe Now
                      </button>
                    </div>
                    
                    <p className="text-center text-indigo-200 text-sm mt-4">
                      Join 15,000+ subscribers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Authors Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Meet Our Expert Writers
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Industry professionals sharing their knowledge and insights
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Sarah Johnson", role: "Senior Technology Writer", avatar: "/images/image15.jpg", posts: 45, expertise: "AI & E-commerce" },
                  { name: "Michael Chen", role: "Marketing Strategist", avatar: "/images/image16.jpg", posts: 38, expertise: "Digital Marketing" },
                  { name: "Emily Rodriguez", role: "Customer Experience Expert", avatar: "/images/image17.jpg", posts: 52, expertise: "UX & CX" }
                ].map((author) => (
                  <div key={author.name} className="group">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                      <img 
                        src={author.avatar} 
                        alt={author.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {author.name}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 mb-2">
                        {author.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {author.expertise}
                      </p>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {author.posts} articles published
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your E-commerce Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Apply the insights from our blog to your business and start seeing real results today
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Explore Our Services
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Contact Our Experts
                </button>
              </div>
              
              <p className="text-indigo-200 mt-6 text-sm">
                Questions? Contact our team at blog@shophub.com
              </p>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 
