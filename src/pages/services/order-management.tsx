import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import FadeIn from '../../components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProvider';

export default function OrderManagement() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t('services.orderManagement.title')} - ShopHub</title>
        <meta name="description" content={t('services.orderManagement.description')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section - Video Background */}
          <VideoBackground videoSrc="/vedios/vedio8.mp4">
            <div className="flex items-center justify-center min-h-screen">
              <FadeIn delay={0.3} duration={1.2} direction="up">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <FadeIn delay={0.5} duration={1} direction="up">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                      <span className="mr-2">📋</span>
                      {t('services.orderManagement.hero.badge')}
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.7} duration={1} direction="up">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white whitespace-nowrap">
                      {t('services.orderManagement.hero.title')} {t('services.orderManagement.hero.subtitle')}
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.9} duration={1} direction="up">
                    <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed whitespace-nowrap">{t('services.orderManagement.hero.description')}</p>
                  </FadeIn>
                  <FadeIn delay={1.1} duration={1} direction="up">
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        href="/blog" 
                        className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                      >
                        {t('services.orderManagement.hero.getStarted')}
                      </Link>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200 transform hover:scale-105"
                      >
                        {t('services.orderManagement.hero.contactUs')}
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </FadeIn>
            </div>
          </VideoBackground>

          {/* Features Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('services.orderManagement.features.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('services.orderManagement.features.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.orderManagement.features.automation.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.orderManagement.features.automation.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                      <span className="text-3xl">📍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.orderManagement.features.tracking.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.orderManagement.features.tracking.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                      <span className="text-3xl">🔗</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.orderManagement.features.integration.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.orderManagement.features.integration.description')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Process Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('services.orderManagement.process.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto whitespace-nowrap">
                    {t('services.orderManagement.process.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('services.orderManagement.process.step1.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.orderManagement.process.step1.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('services.orderManagement.process.step2.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.orderManagement.process.step2.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('services.orderManagement.process.step3.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.orderManagement.process.step3.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={1.0} duration={1} direction="up">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      4
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('services.orderManagement.process.step4.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.orderManagement.process.step4.description')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Pricing Section - Black Background */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('services.orderManagement.pricing.title')}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {t('services.orderManagement.pricing.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{t('services.orderManagement.pricing.starter.title')}</h3>
                      <div className="text-4xl font-bold text-indigo-400 mb-6">{t('services.orderManagement.pricing.starter.price')}</div>
                      <ul className="space-y-3 text-gray-300 mb-8">
                        <li>✓ {t('services.orderManagement.pricing.starter.feature1')}</li>
                        <li>✓ {t('services.orderManagement.pricing.starter.feature2')}</li>
                        <li>✓ {t('services.orderManagement.pricing.starter.feature3')}</li>
                        <li>✓ {t('services.orderManagement.pricing.starter.feature4')}</li>
                      </ul>
                      <Link 
                        href="/contact" 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                      >
                        {t('services.orderManagement.pricing.starter.cta')}
                      </Link>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="bg-indigo-600 rounded-2xl p-8 transform scale-105 relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      {t('services.orderManagement.pricing.professional.mostPopular')}
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{t('services.orderManagement.pricing.professional.title')}</h3>
                      <div className="text-4xl font-bold text-white mb-6">{t('services.orderManagement.pricing.professional.price')}</div>
                      <ul className="space-y-3 text-indigo-100 mb-8">
                        <li>✓ {t('services.orderManagement.pricing.professional.feature1')}</li>
                        <li>✓ {t('services.orderManagement.pricing.professional.feature2')}</li>
                        <li>✓ {t('services.orderManagement.pricing.professional.feature3')}</li>
                        <li>✓ {t('services.orderManagement.pricing.professional.feature4')}</li>
                        <li>✓ {t('services.orderManagement.pricing.professional.feature5')}</li>
                      </ul>
                      <Link 
                        href="/contact" 
                        className="w-full bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                      >
                        {t('services.orderManagement.pricing.professional.cta')}
                      </Link>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{t('services.orderManagement.pricing.enterprise.title')}</h3>
                      <div className="text-4xl font-bold text-indigo-400 mb-6">{t('services.orderManagement.pricing.enterprise.price')}</div>
                      <ul className="space-y-3 text-gray-300 mb-8">
                        <li>✓ {t('services.orderManagement.pricing.enterprise.feature1')}</li>
                        <li>✓ {t('services.orderManagement.pricing.enterprise.feature2')}</li>
                        <li>✓ {t('services.orderManagement.pricing.enterprise.feature3')}</li>
                        <li>✓ {t('services.orderManagement.pricing.enterprise.feature4')}</li>
                        <li>✓ {t('services.orderManagement.pricing.enterprise.feature5')}</li>
                      </ul>
                      <Link 
                        href="/contact" 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                      >
                        {t('services.orderManagement.pricing.enterprise.cta')}
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Testimonials Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('services.orderManagement.testimonials.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto whitespace-nowrap">
                    {t('services.orderManagement.testimonials.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src="/images/l3.jpg" 
                          alt="Client testimonial" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          "{t('services.orderManagement.testimonials.david.content')}"
                        </p>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{t('services.orderManagement.testimonials.david.name')}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{t('services.orderManagement.testimonials.david.role')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src="/images/I4.jpg" 
                          alt="Client testimonial" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          "{t('services.orderManagement.testimonials.lisa.content')}"
                        </p>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{t('services.orderManagement.testimonials.lisa.name')}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{t('services.orderManagement.testimonials.lisa.role')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* CTA Section - Background Image with Overlay */}
          <section id="get-started" className="py-20 relative">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/CTA.jpg" 
                alt={t('common.ctaBackground')} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <FadeIn delay={0.2} duration={1} direction="up">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t('services.orderManagement.cta.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.4} duration={1} direction="up">
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  {t('services.orderManagement.cta.description')}
                </p>
              </FadeIn>
              <FadeIn delay={0.6} duration={1} direction="up">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                >
                  {t('services.orderManagement.cta.cta')}
                </Link>
              </FadeIn>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
