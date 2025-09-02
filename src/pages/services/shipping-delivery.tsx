import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProvider';

export default function ShippingDelivery() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t('services.shippingDelivery.hero.title')} - ShopHub</title>
        <meta name="description" content={t('services.shippingDelivery.hero.description')} />
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
                  {t('services.shippingDelivery.hero.badge')}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  {t('services.shippingDelivery.hero.title')}
                  <span className="block text-indigo-200">{t('services.shippingDelivery.hero.subtitle')}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {t('services.shippingDelivery.hero.description')}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    {t('services.shippingDelivery.hero.getStarted')}
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 transform hover:scale-105"
                  >
                    {t('services.shippingDelivery.hero.contactUs')}
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
                  {t('services.shippingDelivery.solutions.title')}
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                  {t('services.shippingDelivery.solutions.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t('services.shippingDelivery.solutions.local.title')}</h3>
                  <p className="text-indigo-100">
                    {t('services.shippingDelivery.solutions.local.description')}
                  </p>
                  <div className="mt-4 text-sm text-indigo-200">
                    <p>• {t('services.shippingDelivery.solutions.local.feature1')}</p>
                    <p>• {t('services.shippingDelivery.solutions.local.feature2')}</p>
                    <p>• {t('services.shippingDelivery.solutions.local.feature3')}</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🇺🇸</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t('services.shippingDelivery.solutions.domestic.title')}</h3>
                  <p className="text-indigo-100">
                    {t('services.shippingDelivery.solutions.domestic.description')}
                  </p>
                  <div className="mt-4 text-sm text-indigo-200">
                    <p>• {t('services.shippingDelivery.solutions.domestic.feature1')}</p>
                    <p>• {t('services.shippingDelivery.solutions.domestic.feature2')}</p>
                    <p>• {t('services.shippingDelivery.solutions.domestic.feature3')}</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t('services.shippingDelivery.solutions.international.title')}</h3>
                  <p className="text-indigo-100">
                    {t('services.shippingDelivery.solutions.international.description')}
                  </p>
                  <div className="mt-4 text-sm text-indigo-200">
                    <p>• {t('services.shippingDelivery.solutions.international.feature1')}</p>
                    <p>• {t('services.shippingDelivery.solutions.international.feature2')}</p>
                    <p>• {t('services.shippingDelivery.solutions.international.feature3')}</p>
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
                  {t('services.shippingDelivery.features.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('services.shippingDelivery.features.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.shippingDelivery.features.fastDelivery.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.shippingDelivery.features.fastDelivery.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.shippingDelivery.features.tracking.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.shippingDelivery.features.tracking.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.shippingDelivery.features.pricing.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.shippingDelivery.features.pricing.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.shippingDelivery.features.protection.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.shippingDelivery.features.protection.description')}
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
                  {t('services.shippingDelivery.process.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('services.shippingDelivery.process.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('services.shippingDelivery.process.step1.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.shippingDelivery.process.step1.description')}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('services.shippingDelivery.process.step2.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.shippingDelivery.process.step2.description')}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('services.shippingDelivery.process.step3.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.shippingDelivery.process.step3.description')}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('services.shippingDelivery.process.step4.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.shippingDelivery.process.step4.description')}
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
                  {t('services.shippingDelivery.pricing.title')}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {t('services.shippingDelivery.pricing.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('services.shippingDelivery.pricing.local.title')}</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-6">{t('services.shippingDelivery.pricing.local.price')}</div>
                  <div className="text-gray-400 mb-6">{t('services.shippingDelivery.pricing.local.delivery')}</div>
                  <ul className="space-y-3 text-gray-300 mb-8 text-left">
                    <li>✓ {t('services.shippingDelivery.pricing.local.feature1')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.local.feature2')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.local.feature3')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.local.feature4')}</li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                  >
                    {t('services.shippingDelivery.pricing.cta')}
                  </Link>
                </div>

                <div className="bg-indigo-600 rounded-2xl p-8 text-center transform scale-105 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    {t('services.shippingDelivery.pricing.domestic.mostPopular')}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('services.shippingDelivery.pricing.domestic.title')}</h3>
                  <div className="text-4xl font-bold text-white mb-6">{t('services.shippingDelivery.pricing.domestic.price')}</div>
                  <div className="text-indigo-100 mb-6">{t('services.shippingDelivery.pricing.domestic.delivery')}</div>
                  <ul className="space-y-3 text-indigo-100 mb-8 text-left">
                    <li>✓ {t('services.shippingDelivery.pricing.domestic.feature1')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.domestic.feature2')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.domestic.feature3')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.domestic.feature4')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.domestic.feature5')}</li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="w-full bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                  >
                    {t('services.shippingDelivery.pricing.cta')}
                  </Link>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('services.shippingDelivery.pricing.international.title')}</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-6">{t('services.shippingDelivery.pricing.international.price')}</div>
                  <div className="text-gray-400 mb-6">{t('services.shippingDelivery.pricing.international.delivery')}</div>
                  <ul className="space-y-3 text-gray-300 mb-8 text-left">
                    <li>✓ {t('services.shippingDelivery.pricing.international.feature1')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.international.feature2')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.international.feature3')}</li>
                    <li>✓ {t('services.shippingDelivery.pricing.international.feature4')}</li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                  >
                    {t('services.shippingDelivery.pricing.cta')}
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
                alt={t('common.ctaBackground')} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('services.shippingDelivery.ctaPage.title')}
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                {t('services.shippingDelivery.ctaPage.description')}
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
              >
                {t('services.shippingDelivery.ctaPage.cta')}
              </Link>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
