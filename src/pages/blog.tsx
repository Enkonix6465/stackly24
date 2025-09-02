import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

export default function Blog() {
  const { t } = useLanguage();

  //  data for the blog page
  const featuredPosts = [
    {
      id: 1,
      title: t('blog.posts.futureEcommerce.title'),
      excerpt: t('blog.posts.futureEcommerce.excerpt'),
      author: t('blog.posts.futureEcommerce.author'),
      date: t('blog.posts.futureEcommerce.date'),
      readTime: t('blog.posts.futureEcommerce.readTime'),
      category: t('blog.posts.futureEcommerce.category'),
      image: "/images/image18.jpg",
      slug: "future-ecommerce-ai-powered-shopping"
    },
    {
      id: 2,
      title: t('blog.posts.conversionRate.title'),
      excerpt: t('blog.posts.conversionRate.excerpt'),
      author: t('blog.posts.conversionRate.author'),
      date: t('blog.posts.conversionRate.date'),
      readTime: t('blog.posts.conversionRate.readTime'),
      category: t('blog.posts.conversionRate.category'),
      image: "/images/image19.jpg",
      slug: "essential-strategies-boosting-conversion-rate"
    },
    {
      id: 3,
      title: t('blog.posts.customerTrust.title'),
      excerpt: t('blog.posts.customerTrust.excerpt'),
      author: t('blog.posts.customerTrust.author'),
      date: t('blog.posts.customerTrust.date'),
      readTime: t('blog.posts.customerTrust.readTime'),
      category: t('blog.posts.customerTrust.category'),
      image: "/images/image20.jpg",
      slug: "building-customer-trust-ecommerce-success"
    }
  ];

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
                  {t('blog.hero.title')}
                  <span className="block text-indigo-200">{t('blog.hero.subtitle')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                  {t('blog.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg">
                    {t('blog.hero.talkToUs')}
                  </Link>
                  <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300">
                    {t('blog.hero.whatWeOffer')}
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
                  {t('blog.featured.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('blog.featured.subtitle')}
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
                          {t('blog.readMore')}
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
                  {t('blog.categories.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('blog.categories.subtitle')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[ 
                  { name: t('blog.categories.technology.name'), count: 15, icon:<svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 72 72"><circle cx={48.465} cy={23.759} r={2.101} fill="#fff"></circle><path fill="#fcea2b" d="M16.12 48.114c-3.158 3.163-4.652 7.56-3.97 11.688c4.128.676 8.522-.82 11.683-3.977c3.158-3.163 4.652-7.56 3.97-11.688c-4.128-.676-8.522.82-11.683 3.977"></path><path fill="#61b2e4" d="M31.973 45.839a5 5 0 0 1-1.362 2.55a5 5 0 0 1-1.145.852a29.9 29.9 0 0 1 4.695 9.75q1.065-.931 2.042-1.968a30.7 30.7 0 0 0 4.852-6.832a30.7 30.7 0 0 0 2.744-7.636c-3.729 1.955-7.772 3.077-11.826 3.284"></path><path fill="#92d3f5" d="M14.923 35.749q-1.035.975-1.97 2.038a29.9 29.9 0 0 1 9.761 4.679c.227-.414.51-.794.844-1.128a5 5 0 0 1 2.542-1.36c.21-4.05 1.336-8.09 3.292-11.814l.006-.011a30.8 30.8 0 0 0-7.64 2.743a30.8 30.8 0 0 0-6.835 4.853"></path><path fill="#ea5a47" d="M34.821 20.747c-5.231 5.25-8.366 12.164-8.723 19.233a4.99 4.99 0 0 1 4.515 1.358a4.99 4.99 0 0 1 1.356 4.534c7.076-.361 13.992-3.503 19.242-8.74c6.712-6.723 9.885-16.067 8.434-24.84a26 26 0 0 0-5.292-.313c-7.174.292-14.21 3.45-19.532 8.767zm10.249-.53a4.716 4.716 0 0 1 6.669 0a4.713 4.713 0 0 1 .002 6.668h-.001a4.717 4.717 0 0 1-6.67-6.667"></path><path fill="#f1b31c" d="M26.538 52.037a14.5 14.5 0 0 1-3.007 2.562c-3.49 2.223-7.725 2.834-11.441 1.653c-.15 1.196-.13 2.391.06 3.55c4.128.676 8.522-.82 11.683-3.978a14.4 14.4 0 0 0 2.705-3.787"></path><path fill="#d22f27" d="M26.204 38.687q-.05.642-.068 1.283a4.985 4.985 0 0 1 5.833 5.901c7.075-.361 13.99-3.503 19.24-8.74a31 31 0 0 0 3.974-4.935a31 31 0 1-4.352 3.308c-7.558 4.71-16.694 5.892-24.627 3.183"></path><path fill="#61b2e4" d="M24.039 48.551q1.305-.657 2.55-1.438a31.7 31.7 0 0 0 6.63-5.555l.002-.003a31.7 31.7 0 0 0 4.733-6.912a1 1 0 0 0 .105-.387c-3.399-.753-14.846 10.251-14.02 14.295"></path><path d="M48.405 29.49c-3.276 0-5.941-2.664-5.941-5.94s2.665-5.938 5.941-5.938s5.941 2.664 5.941 5.939s-2.665 5.939-5.941 5.939m0-9.899c-2.184 0-3.96 1.776-3.96 3.96s1.776 3.96 3.96 3.96s3.96-1.777 3.96-3.96s-1.776-3.96-3.96-3.96"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.949} d="M20.653 45.063a14.4 14.4 0 0 0-4.533 3.05c-3.158 3.164-4.652 7.56-3.97 11.688c4.128.676 8.522-.82 11.683-3.977a14.4 14.4 0 0 0 3.053-4.532M14.923 35.749q-1.035.975-1.97 2.038a29.9 29.9 0 0 1 9.761 4.679c.227-.414.51-.794.844-1.128a5 5 0 0 1 2.542-1.36c.21-4.05 1.336-8.09 3.292-11.814l.006-.011a30.8 30.8 0 0 0-7.64 2.743a30.8 30.8 0 0 0-6.835 4.853m17.05 10.09a5 5 0 0 1-1.362 2.55a5 5 0 0 1-1.145.852a29.9 29.9 0 0 1 4.695 9.75q1.065-.931 2.042-1.968a30.7 30.7 0 0 0 4.852-6.832a30.7 30.7 0 0 0 2.744-7.636c-3.729 1.955-7.772 3.077-11.826 3.284"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.949} d="M31.83 43.345c.27.886.25 1.692.137 2.525c7.076-.362 13.993-3.504 19.243-8.742c6.71-6.721 9.884-16.063 8.435-24.834c-8.771-1.436-18.108 1.742-24.823 8.451c-5.232 5.251-8.368 12.164-8.724 19.234a5 5 0 0 1 2.77.239"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.949} d="M37.072 34.196a30.8 30.8 0 0 0-6.7 4.584a30.7 30.7 0 0 0-5.384 6.421a30 30 0 0 0-1.392 2.47"></path></svg> },
                  { name: t('blog.categories.marketing.name'), count: 23, icon:<svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 40 40"><g fill="none" strokeMiterlimit={10}><path fill="#ff52a1" stroke="#231f20" d="M10.23 22.33c-.45-1-2.78-1-4.53-1s-4.08 0-4.53 1C.72 22.84.5 25.55.5 27.8s.22 5 .67 5.47c.45 1 2.78 1 4.53 1s4.08 0 4.53-1c.45-.51.67-3.22.67-5.47s-.22-4.96-.67-5.47Zm14.3-7.19c-.45-1.63-2.78-1.64-4.53-1.64s-4.08 0-4.53 1.64c-.47.86-.67 5.16-.67 8.76s.22 7.94.67 8.76c.45 1.63 2.78 1.64 4.53 1.64s4.08 0 4.53-1.64c.45-.82.67-5.16.67-8.76s-.2-7.9-.67-8.76Z" strokeWidth={1}></path><path fill="#ffe236" stroke="#231f20" d="M38.83 8c-.45-2.28-2.78-2.3-4.53-2.3s-4.08 0-4.53 2.26c-.45 1.12-.67 7.09-.67 12s.22 10.92.67 12c.45 2.24 2.78 2.26 4.53 2.26s4.08 0 4.53-2.26c.45-1.12.67-7.09.67-12S39.28 9.08 38.83 8Z" strokeWidth={1}></path><path stroke="#fff" strokeLinecap="round" d="M35.7 8c.83 0 1 .19 1.2 1.82M21.66 16c.82 0 1.05.19 1.2 1.82M7.1 23.63c.82 0 1.05.19 1.2 1.82" strokeWidth={1}></path></g></svg> },
                  { name: t('blog.categories.happyClients.name'), count: 18, icon: <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 24 24"><g fill="none"><path fill="#ffef5e" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11"></path><path fill="#fff9bf" d="M12 4.826a11.8 11.8 0 0 1 10.994 7.517c0-.114.006-.228.006-.343a11 11 0 1 0-21.994.343A11.8 11.8 0 0 1 12 4.826"></path><path stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11" strokeWidth={1}></path><path stroke="#191919" d="M6.739 10.326a.24.24 0 0 1 0-.478m.001.478a.24.24 0 0 0 0-.478m10.52.478a.24.24 0 0 1 0-.478m0 .478a.24.24 0 0 0 0-.478" strokeWidth={1}></path><path fill="#ff808c" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" d="M15.705 15.348a.957.957 0 0 1 .927 1.194a4.782 4.782 0 0 1-9.264 0a.956.956 0 0 1 .927-1.194z" strokeWidth={1}></path></g></svg> },
                  { name: t('blog.categories.businessStrategy.name'), count: 12, icon: <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 36 36"><path fill="#9a4e1c" d="M32 8h-6V4a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v4H4a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4M12 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2H12z"></path><path fill="#662113" d="M36 20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></path><path fill="#9a4e1c" d="M36 18a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></path><path fill="#ccd6dd" d="M22 18a2 2 0 0 1-2 2h-4a2 2 0 0 1 0-4h4a2 2 0 0 1 2 2"></path></svg>},
                  { name: t('blog.categories.analytics.name'), count: 9, icon: <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 40 40"><g fill="none"><path fill="#ff52a1" stroke="#231f20" strokeMiterlimit={10} d="M35 21.53A1.4 1.4 0 0 1 36.34 23c-.52 10-6.49 16.49-17.9 16.49C6.48 39.5.5 32.33.5 21.56C.5 11.23 6 4.2 17 3.66A1.37 1.37 0 0 1 18.46 5c0 3.06.11 10.6 0 16.54c5.54-.2 13.37-.07 16.54-.01Z" strokeWidth={1}></path><path fill="#ffe236" stroke="#231f20" strokeLinejoin="round" d="M39.5 16.07C39 7.05 33.81 1 23.87.5a1.3 1.3 0 0 0-1.34 1.31v15.66h15.66a1.32 1.32 0 0 0 1.31-1.4Z" strokeWidth={1}></path><path stroke="#fff" strokeLinecap="round" strokeMiterlimit={10} d="M26.38 3.69a11.6 11.6 0 0 1 4.72 1.74m-19.61 2a15.5 15.5 0 0 1 3.24-.95" strokeWidth={1}></path></g></svg> },
                  { name: t('blog.categories.caseStudies.name'), count: 7, icon: <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 32 32"><g fill="none"><path fill="#00a6ed" d="M17.045 27.286H30V13a2 2 0 0 0-2-2H17.045z"></path><path fill="#d3d3d3" d="M15.682 27.964H30v1.357H15.682z"></path><path fill="#0074ba" d="M16.023 11A1.02 1.02 0 0 0 15 12.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V11z"></path><path fill="#0074ba" d="M16.023 27.286A1.02 1.02 0 0 0 15 28.304v.678A1.02 1.02 0 0 0 16.023 30h12.954c.446 0 .824-.283.965-.678H16.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H30v-.678z"></path><path fill="#ca0b4a" d="M10.045 23.286H23V9a2 2 0 0 0-2-2H10.045z"></path><path fill="#d3d3d3" d="M8.682 23.964H23v1.357H8.682z"></path><path fill="#990838" d="M9.023 7A1.02 1.02 0 0 0 8 8.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V7z"></path><path fill="#990838" d="M9.023 23.286A1.02 1.02 0 0 0 8 24.304v.678A1.02 1.02 0 0 0 9.023 26h12.954c.446 0 .824-.283.965-.678H9.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H23v-.678z"></path><path fill="#86d72f" d="M4.045 20.286H17V6a2 2 0 0 0-2-2H4.045z"></path><path fill="#d3d3d3" d="M2.682 20.964H17v1.357H2.682z"></path><path fill="#44911b" d="M3.023 4A1.02 1.02 0 0 0 2 5.018v16.625h.682a.68.68 0 0 1 .682-.679h.681V4z"></path><path fill="#008463" d="M3.023 20.286A1.02 1.02 0 0 0 2 21.304v.678A1.02 1.02 0 0 0 3.023 23h12.954c.446 0 .824-.283.965-.678H3.364a.68.68 0 0 1-.682-.68a.68.68 0 0 1 .682-.678H17v-.678z"></path></g></svg> }
                ].map((category) => (
                  <div key={category.name} className="group">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700">
                      <div className="flex justify-center text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {category.count} {t('blog.categories.articles')}
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
                    {t('blog.recent.title')}
                  </h2>
                  <div className="space-y-6">
                    {[
                      { title: t('blog.posts.mobileFirst.title'), date: t('blog.posts.mobileFirst.date'), readTime: t('blog.posts.mobileFirst.readTime'), slug: "mobile-first-design" },
                      { title: t('blog.posts.pricing.title'), date: t('blog.posts.pricing.date'), readTime: t('blog.posts.pricing.readTime'), slug: "psychology-pricing" },
                      { title: t('blog.posts.inventory.title'), date: t('blog.posts.inventory.date'), readTime: t('blog.posts.inventory.readTime'), slug: "inventory-management" }
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
                          
                          <button 
                            onClick={() => {
                              document.getElementById('featured')?.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }}
                            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group-hover:underline cursor-pointer"
                          >
                            {t('blog.readArticle')}
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
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
                      <h3 className="text-2xl font-bold mb-2">{t('blog.newsletter.title')}</h3>
                      <p className="text-indigo-100 mb-6">{t('blog.newsletter.subtitle')}</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {[t('blog.newsletter.weeklyInsights'), t('blog.newsletter.industryUpdates'), t('blog.newsletter.exclusiveContent'), t('blog.newsletter.noSpam')].map((benefit, index) => (
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
                        placeholder={t('blog.newsletter.emailPlaceholder')}
                        className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white/90 backdrop-blur-sm"
                      />
                      <button className="w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        {t('blog.newsletter.subscribe')}
                      </button>
                    </div>
                    
                    <p className="text-center text-indigo-200 text-sm mt-4">
                      {t('blog.newsletter.subscribers')}
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
                  {t('blog.authors.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('blog.authors.subtitle')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: t('blog.authors.sarah.name'), role: t('blog.authors.sarah.role'), avatar: "/images/image15.jpg", posts: 45, expertise: t('blog.authors.sarah.expertise') },
                  { name: t('blog.authors.michael.name'), role: t('blog.authors.michael.role'), avatar: "/images/image16.jpg", posts: 38, expertise: t('blog.authors.michael.expertise') },
                  { name: t('blog.authors.emily.name'), role: t('blog.authors.emily.role'), avatar: "/images/image17.jpg", posts: 52, expertise: t('blog.authors.emily.expertise') }
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
                        {author.posts} {t('blog.authors.articlesPublished')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/images/BCTA.jpg" 
                alt="CTA Background" 
                className="w-full h-full object-cover"
              />
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('blog.cta.title')}
              </h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                {t('blog.cta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  {t('blog.cta.exploreServices')}
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  {t('blog.cta.contactExperts')}
                </button>
              </div>
              
              <p className="text-white mt-6 text-sm">
                {t('blog.cta.questions')}
              </p>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </div>
  );
} 
