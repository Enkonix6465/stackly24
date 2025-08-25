import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';

export default function OrderManagement() {
  return (
    <>
      <Head>
        <title>Order Management Services - ShopHub</title>
        <meta name="description" content="Streamline your order processing with our comprehensive order management services. Improve efficiency and customer satisfaction." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section - Video Background */}
          <VideoBackground videoSrc="/vedios/vedio8.mp4">
            <div className="flex items-center justify-center min-h-screen">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <span className="mr-2">📋</span>
                  Order Management Service
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  Streamline Your
                  <span className="block text-indigo-200">Order Process</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Efficient order management solutions that automate workflows, reduce errors, and improve customer satisfaction. 
                  Take control of your order processing from start to finish.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </VideoBackground>

          {/* Features Section - Indigo Background */}
          <section id="features" className="py-20 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Key Features & Benefits
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                  Discover how our order management system can revolutionize your business operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Real-time Tracking</h3>
                  <p className="text-indigo-100">
                    Monitor order status in real-time with automated updates and notifications.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Secure Processing</h3>
                  <p className="text-indigo-100">
                    Enterprise-grade security for all order transactions and customer data.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Mobile Ready</h3>
                  <p className="text-indigo-100">
                    Manage orders from anywhere with our responsive mobile interface.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Analytics Dashboard</h3>
                  <p className="text-indigo-100">
                    Comprehensive insights into order patterns and business performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How Our System Works
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  A seamless workflow designed to handle orders from placement to fulfillment.
                </p>
              </div>

              <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-200 transform -translate-y-1/2"></div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                      1
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Order Placement</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Customer places order through your website or app
                    </p>
                  </div>

                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                      2
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Order Confirmation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      System automatically confirms and validates the order
                    </p>
                  </div>

                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                      3
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Inventory Check</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Real-time inventory verification and allocation
                    </p>
                  </div>

                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                      4
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Processing</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Order processing and preparation for shipping
                    </p>
                  </div>

                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                      5
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Fulfillment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Shipping confirmation and delivery tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Proven Results
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Our order management solutions deliver measurable improvements to your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">85%</div>
                  <div className="text-lg text-gray-700 dark:text-gray-300">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">60%</div>
                  <div className="text-lg text-gray-700 dark:text-gray-300">Error Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">95%</div>
                  <div className="text-lg text-gray-700 dark:text-gray-300">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">40%</div>
                  <div className="text-lg text-gray-700 dark:text-gray-300">Cost Savings</div>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Section - Black Background */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Seamless Integrations
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Connect with your existing tools and platforms for a unified workflow experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">E-commerce Platforms</h3>
                  <p className="text-gray-300">
                    Shopify, WooCommerce, Magento, and more
                  </p>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Shipping Carriers</h3>
                  <p className="text-gray-300">
                    FedEx, UPS, DHL, and local shipping partners
                  </p>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">💳</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Payment Gateways</h3>
                  <p className="text-gray-300">
                    Stripe, PayPal, Square, and major processors
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - Background Image with Overlay */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/CTA.jpg" 
                alt="CTA Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Order Management?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join the hundreds of businesses that have transformed their order processing with our solutions.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
