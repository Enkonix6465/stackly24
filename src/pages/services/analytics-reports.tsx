import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProvider';

export default function AnalyticsReports() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t('services.analyticsReports.hero.title')} - ShopHub</title>
        <meta name="description" content={t('services.analyticsReports.hero.description')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section - Video Background */}
          <VideoBackground videoSrc="/vedios/vedio12.mp4">
            <div className="flex items-center justify-center min-h-screen">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <span className="mr-2">📊</span>
                  {t('services.analyticsReports.hero.badge')}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  {t('services.analyticsReports.hero.title')}
                  <span className="block text-indigo-200">{t('services.analyticsReports.hero.subtitle')}</span>
                </h1>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                  {t('services.analyticsReports.hero.description')}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                  >
                    {t('services.analyticsReports.hero.getStarted')}
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200 transform hover:scale-105"
                  >
                    {t('services.analyticsReports.hero.contactUs')}
                  </Link>
                </div>
              </div>
            </div>
          </VideoBackground>

          {/* Features Section - White Background */}
          <section id="features" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('services.analyticsReports.features.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('services.analyticsReports.features.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.analyticsReports.features.performance.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.analyticsReports.features.performance.description')}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.analyticsReports.features.customer.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.analyticsReports.features.customer.description')}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.analyticsReports.features.sales.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.analyticsReports.features.sales.description')}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.analyticsReports.features.conversion.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.analyticsReports.features.conversion.description')}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.analyticsReports.features.mobile.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.analyticsReports.features.mobile.description')}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.analyticsReports.features.seo.title')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('services.analyticsReports.features.seo.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard Preview Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('services.analyticsReports.dashboard.title')}
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                  {t('services.analyticsReports.dashboard.subtitle')}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">$45,230</div>
                    <div className="text-indigo-200">{t('services.analyticsReports.dashboard.revenue')}</div>
                    <div className="text-green-400 text-sm mt-1">+12.5% {t('services.analyticsReports.dashboard.vsLastMonth')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">1,234</div>
                    <div className="text-indigo-200">{t('services.analyticsReports.dashboard.orders')}</div>
                    <div className="text-green-400 text-sm mt-1">+8.2% {t('services.analyticsReports.dashboard.vsLastMonth')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">3.2%</div>
                    <div className="text-indigo-200">{t('services.analyticsReports.dashboard.conversion')}</div>
                    <div className="text-red-400 text-sm mt-1">-0.5% {t('services.analyticsReports.dashboard.vsLastMonth')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">$36.70</div>
                    <div className="text-indigo-200">{t('services.analyticsReports.dashboard.aov')}</div>
                    <div className="text-green-400 text-sm mt-1">+5.1% {t('services.analyticsReports.dashboard.vsLastMonth')}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Report Types Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('services.analyticsReports.reports.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('services.analyticsReports.reports.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📊</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.analyticsReports.reports.daily.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('services.analyticsReports.reports.daily.description')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📅</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.analyticsReports.reports.weekly.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('services.analyticsReports.reports.weekly.description')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📈</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.analyticsReports.reports.monthly.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('services.analyticsReports.reports.monthly.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.analyticsReports.reports.custom.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('services.analyticsReports.reports.custom.description')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📧</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.analyticsReports.reports.automated.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('services.analyticsReports.reports.automated.description')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📱</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('services.analyticsReports.reports.mobile.title')}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('services.analyticsReports.reports.mobile.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section - Black Background */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('services.analyticsReports.benefits.title')}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {t('services.analyticsReports.benefits.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t('services.analyticsReports.benefits.performance.title')}</h3>
                  <p className="text-gray-300">
                    {t('services.analyticsReports.benefits.performance.description')}
                  </p>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t('services.analyticsReports.benefits.revenue.title')}</h3>
                  <p className="text-gray-300">
                    {t('services.analyticsReports.benefits.revenue.description')}
                  </p>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{t('services.analyticsReports.benefits.customer.title')}</h3>
                  <p className="text-gray-300">
                    {t('services.analyticsReports.benefits.customer.description')}
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
                alt={t('common.ctaBackground')} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('services.analyticsReports.ctaPage.title')}
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                {t('services.analyticsReports.ctaPage.description')}
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
              >
                {t('services.analyticsReports.ctaPage.cta')}
              </Link>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
