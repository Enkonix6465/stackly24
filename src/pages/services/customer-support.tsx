import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoBackground from '../../components/VideoBackground';
import FadeIn from '../../components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProvider';

export default function CustomerSupport() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t('services.customerSupport.hero.title')} - ShopHub</title>
        <meta name="description" content={t('services.customerSupport.hero.description')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section - Video Background */}
          <VideoBackground videoSrc="/vedios/vedio10.mp4">
            <div className="flex items-center justify-center min-h-screen">
              <FadeIn delay={0.3} duration={1.2} direction="up">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <FadeIn delay={0.5} duration={1} direction="up">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                      <span className="mr-2">🎧</span>
                      {t('services.customerSupport.hero.badge')}
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.7} duration={1} direction="up">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                      {t('services.customerSupport.hero.title')}
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.9} duration={1} direction="up">
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                      {t('services.customerSupport.hero.description')}
                    </p>
                  </FadeIn>
                  <FadeIn delay={1.1} duration={1} direction="up">
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        href="/blog" 
                        className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                      >
                        {t('services.customerSupport.hero.getStarted')}
                      </Link>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 transform hover:scale-105"
                      >
                        {t('services.customerSupport.hero.contactUs')}
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </FadeIn>
            </div>
          </VideoBackground>

          {/* Support Channels Section - Indigo Background */}
          <section id="channels" className="py-20 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('services.customerSupport.channels.title')}
                  </h2>
                  <p className="text-xl text-indigo-100 max-w-2xl mx-auto whitespace-nowrap">
                    {t('services.customerSupport.channels.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                      <span className="text-3xl">💬</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('services.customerSupport.channels.liveChat.title')}</h3>
                    <p className="text-indigo-100">
                      {t('services.customerSupport.channels.liveChat.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                      <span className="text-3xl">📧</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('services.customerSupport.channels.email.title')}</h3>
                    <p className="text-indigo-100">
                      {t('services.customerSupport.channels.email.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                      <span className="text-3xl">📞</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('services.customerSupport.channels.phone.title')}</h3>
                    <p className="text-indigo-100">
                      {t('services.customerSupport.channels.phone.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={1.0} duration={1} direction="up">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                      <span className="text-3xl">📱</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t('services.customerSupport.channels.mobile.title')}</h3>
                    <p className="text-indigo-100">
                      {t('services.customerSupport.channels.mobile.description')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Features Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('services.customerSupport.features.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto whitespace-nowrap">
                    {t('services.customerSupport.features.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🤖</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.customerSupport.features.aiChatbots.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t('services.customerSupport.features.aiChatbots.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📊</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.customerSupport.features.analytics.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t('services.customerSupport.features.analytics.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.customerSupport.features.smartRouting.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t('services.customerSupport.features.smartRouting.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={1.0} duration={1} direction="up">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📚</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.customerSupport.features.knowledgeBase.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t('services.customerSupport.features.knowledgeBase.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Statistics Section - Black Background */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('services.customerSupport.stats.title')}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto whitespace-nowrap">
                    {t('services.customerSupport.stats.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">98%</div>
                    <div className="text-lg text-gray-300">{t('services.customerSupport.stats.satisfaction.label')}</div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">2min</div>
                    <div className="text-lg text-gray-300">{t('services.customerSupport.stats.responseTime.label')}</div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">24/7</div>
                    <div className="text-lg text-gray-300">{t('services.customerSupport.stats.availability.label')}</div>
                  </div>
                </FadeIn>
                <FadeIn delay={1.0} duration={1} direction="up">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">95%</div>
                    <div className="text-lg text-gray-300">{t('services.customerSupport.stats.resolutionRate.label')}</div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Team Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0.2} duration={1} direction="up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('services.customerSupport.team.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto whitespace-nowrap">
                    {t('services.customerSupport.team.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn delay={0.4} duration={1} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.customerSupport.team.certified.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.customerSupport.team.certified.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6} duration={1} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.customerSupport.team.multilanguage.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.customerSupport.team.multilanguage.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8} duration={1} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('services.customerSupport.team.fastResolution.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('services.customerSupport.team.fastResolution.description')}
                    </p>
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
                  {t('services.customerSupport.ctaPage.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.4} duration={1} direction="up">
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto whitespace-nowrap">
                  {t('services.customerSupport.ctaPage.description')}
                </p>
              </FadeIn>
              <FadeIn delay={0.6} duration={1} direction="up">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                >
                  {t('services.customerSupport.ctaPage.cta')}
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
