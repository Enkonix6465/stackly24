import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import FadeIn from '../../components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProvider';

export default function PaymentGateway() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t('services.paymentGateway.hero.title')} - ShopHub</title>
        <meta name="description" content={t('services.paymentGateway.hero.description')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section - Video Background */}
          <VideoBackground videoSrc="/vedios/vedio9.mp4">
            <div className="flex items-center justify-center min-h-screen">
              <FadeIn delay={0.3} duration={1.2} direction="up">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <FadeIn delay={0.5} duration={1} direction="up">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                      <span className="mr-2">💳</span>
                      {t('services.paymentGateway.hero.badge')}
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.7} duration={1} direction="up">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                      {t('services.paymentGateway.hero.title')} {t('services.paymentGateway.hero.subtitle')}
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.9} duration={1} direction="up">
                    <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                      {t('services.paymentGateway.hero.subtitleText')}
                    </p>
                  </FadeIn>
                  <FadeIn delay={1.1} duration={1} direction="up">
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        href="/blog" 
                        className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                      >
                        {t('services.paymentGateway.hero.getStarted')}
                      </Link>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200 transform hover:scale-105"
                      >
                        {t('services.paymentGateway.hero.contactUs')}
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </FadeIn>
            </div>
          </VideoBackground>

          {/* Security Features Section - White Background */}
          <section id="security" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('services.paymentGateway.security.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('services.paymentGateway.security.subtitleText')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.paymentGateway.security.pci.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.paymentGateway.security.pci.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.paymentGateway.security.fraud.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.paymentGateway.security.fraud.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🔐</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.paymentGateway.security.encryption.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.paymentGateway.security.encryption.description')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Payment Methods Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('services.paymentGateway.paymentMethods.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('services.paymentGateway.paymentMethods.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💳</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.paymentGateway.paymentMethods.creditCards.title')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('services.paymentGateway.paymentMethods.creditCards.description')}</p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.paymentGateway.paymentMethods.digitalWallets.title')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('services.paymentGateway.paymentMethods.digitalWallets.description')}</p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏦</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.paymentGateway.paymentMethods.bankTransfers.title')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('services.paymentGateway.paymentMethods.bankTransfers.description')}</p>
                  </div>
                </FadeIn>

                <FadeIn delay={1.0} duration={1} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.paymentGateway.paymentMethods.localMethods.title')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('services.paymentGateway.paymentMethods.localMethods.description')}</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Benefits Section - Black Background */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('services.paymentGateway.benefits.title')}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {t('services.paymentGateway.benefits.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{t('services.paymentGateway.benefits.successRates.title')}</h3>
                        <p className="text-gray-300">{t('services.paymentGateway.benefits.successRates.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{t('services.paymentGateway.benefits.globalCoverage.title')}</h3>
                        <p className="text-gray-300">{t('services.paymentGateway.benefits.globalCoverage.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{t('services.paymentGateway.benefits.support.title')}</h3>
                        <p className="text-gray-300">{t('services.paymentGateway.benefits.support.description')}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{t('services.paymentGateway.benefits.pricing.title')}</h3>
                        <p className="text-gray-300">{t('services.paymentGateway.benefits.pricing.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{t('services.paymentGateway.benefits.integration.title')}</h3>
                        <p className="text-gray-300">{t('services.paymentGateway.benefits.integration.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{t('services.paymentGateway.benefits.analytics.title')}</h3>
                        <p className="text-gray-300">{t('services.paymentGateway.benefits.analytics.description')}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Pricing Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('services.paymentGateway.pricing.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('services.paymentGateway.pricing.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('services.paymentGateway.pricing.starter.title')}</h3>
                    <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{t('services.paymentGateway.pricing.starter.price')}</div>
                    <div className="text-gray-600 dark:text-gray-400 mb-6">{t('services.paymentGateway.pricing.starter.transaction')}</div>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8 text-left">
                      <li>✓ {t('services.paymentGateway.pricing.starter.feature1')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.starter.feature2')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.starter.feature3')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.starter.feature4')}</li>
                    </ul>
                    <Link 
                      href="/contact" 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                    >
                      {t('services.paymentGateway.pricing.starter.cta')}
                    </Link>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="bg-indigo-600 rounded-2xl p-8 text-center transform scale-105 relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      {t('services.paymentGateway.pricing.professional.mostPopular')}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t('services.paymentGateway.pricing.professional.title')}</h3>
                    <div className="text-4xl font-bold text-white mb-2">{t('services.paymentGateway.pricing.professional.price')}</div>
                    <div className="text-indigo-100 mb-6">{t('services.paymentGateway.pricing.professional.transaction')}</div>
                    <ul className="space-y-3 text-indigo-100 mb-8 text-left">
                      <li>✓ {t('services.paymentGateway.pricing.professional.feature1')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.professional.feature2')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.professional.feature3')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.professional.feature4')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.professional.feature5')}</li>
                    </ul>
                    <Link 
                      href="/contact" 
                      className="w-full bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                    >
                      {t('services.paymentGateway.pricing.professional.cta')}
                    </Link>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('services.paymentGateway.pricing.enterprise.title')}</h3>
                    <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{t('services.paymentGateway.pricing.enterprise.price')}</div>
                    <div className="text-gray-600 dark:text-gray-400 mb-6">{t('services.paymentGateway.pricing.enterprise.transaction')}</div>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8 text-left">
                      <li>✓ {t('services.paymentGateway.pricing.enterprise.feature1')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.enterprise.feature2')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.enterprise.feature3')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.enterprise.feature4')}</li>
                      <li>✓ {t('services.paymentGateway.pricing.enterprise.feature5')}</li>
                    </ul>
                    <Link 
                      href="/contact" 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                    >
                      {t('services.paymentGateway.pricing.enterprise.cta')}
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* CTA Section - Background Image with Overlay */}
          <section className="py-20 relative">
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
                  {t('services.paymentGateway.cta.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.4} duration={1} direction="up">
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  {t('services.paymentGateway.cta.description')}
                </p>
              </FadeIn>
              <FadeIn delay={0.6} duration={1} direction="up">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                >
                  {t('services.paymentGateway.cta.cta')}
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
