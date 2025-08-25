import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';

export default function ProductListing() {
  return (
    <>
      <Head>
        <title>Product Listing Services - ShopHub</title>
        <meta name="description" content="Professional product listing services for your e-commerce business. Optimize your product catalog with our expert solutions." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section - Video Background */}
          <VideoBackground videoSrc="/vedios/vedio7.mp4">
            <div className="flex items-center justify-center min-h-screen">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <span className="mr-2">📦</span>
                  Product Listing Service
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  Transform Your Product
                  <span className="block text-indigo-200">Catalog Today</span>
                </h1>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                  Professional product listing services that boost visibility, improve conversions, and drive sales. 
                  Let our experts optimize your product catalog for maximum impact.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200 transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </VideoBackground>

          {/* Features Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Our Product Listing Services?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We combine expertise, technology, and creativity to deliver exceptional product listing solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Fast Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get your products listed and optimized within 48 hours with our streamlined process.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data-Driven Approach</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Optimize listings based on real-time analytics and customer behavior insights.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">SEO Optimized</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Improve search rankings with keyword-optimized product descriptions and titles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our 4-Step Process
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We follow a proven methodology to ensure your product listings are optimized for success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We analyze your current listings and identify optimization opportunities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We optimize titles, descriptions, and images for better visibility.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We implement all optimizations and test for functionality.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Monitoring</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We continuously monitor performance and make adjustments as needed.
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
                  Choose Your Plan
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Flexible pricing options designed to meet your business needs and budget.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                    <div className="text-4xl font-bold text-indigo-400 mb-6">$299</div>
                    <ul className="space-y-3 text-gray-300 mb-8">
                      <li>✓ Up to 50 products</li>
                      <li>✓ Basic optimization</li>
                      <li>✓ SEO analysis</li>
                      <li>✓ 30-day support</li>
                    </ul>
                    <Link 
                      href="/contact" 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="bg-indigo-600 rounded-2xl p-8 transform scale-105 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                    <div className="text-4xl font-bold text-white mb-6">$599</div>
                    <ul className="space-y-3 text-indigo-100 mb-8">
                      <li>✓ Up to 200 products</li>
                      <li>✓ Advanced optimization</li>
                      <li>✓ SEO + PPC optimization</li>
                      <li>✓ 90-day support</li>
                      <li>✓ Performance reports</li>
                    </ul>
                    <Link 
                      href="/contact" 
                      className="w-full bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                    <div className="text-4xl font-bold text-indigo-400 mb-6">$999</div>
                    <ul className="space-y-3 text-gray-300 mb-8">
                      <li>✓ Unlimited products</li>
                      <li>✓ Full optimization suite</li>
                      <li>✓ Custom solutions</li>
                      <li>✓ 1-year support</li>
                      <li>✓ Dedicated manager</li>
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
            </div>
          </section>

          {/* Testimonials Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      S
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        "ShopHub's product listing service transformed our catalog. Sales increased by 40% within the first month!"
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Fashion Forward</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      M
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        "Professional, efficient, and results-driven. Our product visibility improved dramatically."
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Mike Chen</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, TechGear</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - Background Image with Overlay */}
          <section id="get-started" className="py-20 relative">
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
                Ready to Optimize Your Product Listings?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have transformed their product catalogs with our expert services.
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
