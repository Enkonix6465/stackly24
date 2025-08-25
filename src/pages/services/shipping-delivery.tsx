import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';

export default function ShippingDelivery() {
  return (
    <>
      <Head>
        <title>Shipping & Delivery Services - ShopHub</title>
        <meta name="description" content="Comprehensive shipping and delivery solutions for your e-commerce business. Fast, reliable, and cost-effective shipping worldwide." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section - Video Background */}
          <VideoBackground videoSrc="/vedios/vedio11.mp4">
            <div className="flex items-center justify-center min-h-screen">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <span className="mr-2">🚚</span>
                  Shipping & Delivery Service
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  Fast & Reliable
                  <span className="block text-indigo-200">Shipping Solutions</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Optimize your shipping operations with our comprehensive delivery solutions. 
                  Reduce costs, improve delivery times, and enhance customer satisfaction.
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

          {/* Shipping Solutions Section - Indigo Background */}
          <section id="solutions" className="py-20 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Comprehensive Shipping Solutions
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                  Choose from our range of shipping options designed to meet your business needs and budget.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Local Delivery</h3>
                  <p className="text-indigo-100">
                    Same-day and next-day delivery within your city or metropolitan area.
                  </p>
                  <div className="mt-4 text-sm text-indigo-200">
                    <p>• Same-day delivery</p>
                    <p>• Next-day delivery</p>
                    <p>• Local courier service</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🇺🇸</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Domestic Shipping</h3>
                  <p className="text-indigo-100">
                    Fast and reliable shipping across the country with multiple delivery options.
                  </p>
                  <div className="mt-4 text-sm text-indigo-200">
                    <p>• Express shipping (1-2 days)</p>
                    <p>• Standard shipping (3-5 days)</p>
                    <p>• Economy shipping (5-7 days)</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">International Shipping</h3>
                  <p className="text-indigo-100">
                    Global shipping solutions with customs clearance and tracking.
                  </p>
                  <div className="mt-4 text-sm text-indigo-200">
                    <p>• Air freight (3-7 days)</p>
                    <p>• Sea freight (15-30 days)</p>
                    <p>• Express international (1-3 days)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Our Shipping Services?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Experience the benefits of partnering with a reliable shipping provider.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Optimized routes and efficient logistics ensure your packages arrive on time, every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Track your shipments in real-time with our advanced tracking system and mobile app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Competitive Pricing</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get the best rates with our volume discounts and negotiated carrier partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Package Protection</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Full insurance coverage and damage protection for all your shipments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How Our Shipping Process Works
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  A simple and efficient process from order to delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Order Received</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We receive your shipping request and prepare the necessary documentation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Package Pickup</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our team picks up your package from your location or warehouse.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">In Transit</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your package is shipped using the most efficient route and carrier.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Package is delivered to the recipient with proof of delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section - Black Background */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Clear, competitive pricing with no hidden fees or surprises.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">Local Delivery</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-6">$5.99</div>
                  <div className="text-gray-400 mb-6">Same-day delivery</div>
                  <ul className="space-y-3 text-gray-300 mb-8 text-left">
                    <li>✓ Same-day delivery</li>
                    <li>✓ Real-time tracking</li>
                    <li>✓ Package protection</li>
                    <li>✓ Customer support</li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="bg-indigo-600 rounded-2xl p-8 text-center transform scale-105 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Domestic Shipping</h3>
                  <div className="text-4xl font-bold text-white mb-6">$12.99</div>
                  <div className="text-indigo-100 mb-6">2-3 day delivery</div>
                  <ul className="space-y-3 text-indigo-100 mb-8 text-left">
                    <li>✓ 2-3 day delivery</li>
                    <li>✓ Advanced tracking</li>
                    <li>✓ Full insurance</li>
                    <li>✓ Priority support</li>
                    <li>✓ Multiple carriers</li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="w-full bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">International</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-6">$29.99</div>
                  <div className="text-gray-400 mb-6">5-7 day delivery</div>
                  <ul className="space-y-3 text-gray-300 mb-8 text-left">
                    <li>✓ 5-7 day delivery</li>
                    <li>✓ Customs clearance</li>
                    <li>✓ Global tracking</li>
                    <li>✓ 24/7 support</li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                  >
                    Get Started
                  </Link>
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
                Ready to Optimize Your Shipping?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust us with their shipping and delivery needs.
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
