import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProvider';

export default function BlogPost() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{t('blog.customerTrust.title')} - ShopHub Blog</title>
        <meta name="description" content={t('blog.customerTrust.description')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Article Header */}
          <section className="relative text-white py-20 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/image20.jpg')`
              }}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <span className="mr-2">😊</span>
                  {t('blog.customerTrust.category')}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t('blog.customerTrust.title')}
                </h1>
                <div className="flex items-center justify-center space-x-6 text-gray-100">
                  <div className="flex items-center">
                    <img 
                      src="/images/image17.jpg" 
                      alt={t('blog.customerTrust.author')}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <span>{t('blog.customerTrust.author')}</span>
                  </div>
                  <span>•</span>
                  <span>{t('blog.customerTrust.date')}</span>
                  <span>•</span>
                  <span>{t('blog.customerTrust.readTime')}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {t('blog.customerTrust.introduction.paragraph1')}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {t('blog.customerTrust.introduction.paragraph2')}
                  </p>
                </div>

                {/* Key Points */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                    {t('blog.customerTrust.keyTakeaways.title')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                        <span className="text-indigo-800 dark:text-indigo-200">{t('blog.customerTrust.keyTakeaways.point1')}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                        <span className="text-indigo-800 dark:text-indigo-200">{t('blog.customerTrust.keyTakeaways.point2')}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                        <span className="text-indigo-800 dark:text-indigo-200">{t('blog.customerTrust.keyTakeaways.point3')}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                        <span className="text-indigo-800 dark:text-indigo-200">{t('blog.customerTrust.keyTakeaways.point4')}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                        <span className="text-indigo-800 dark:text-indigo-200">{t('blog.customerTrust.keyTakeaways.point5')}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                        <span className="text-indigo-800 dark:text-indigo-200">{t('blog.customerTrust.keyTakeaways.point6')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Pillars */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.customerTrust.pillars.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.pillars.description')}
                </p>

                {/* Pillar 1 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.customerTrust.pillar1.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.pillar1.description')}
                </p>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('blog.customerTrust.pillar1.subtitle')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.customerTrust.pillar1.practice1')}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.customerTrust.pillar1.practice2')}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.customerTrust.pillar1.practice3')}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.customerTrust.pillar1.practice4')}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.customerTrust.pillar1.practice5')}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.customerTrust.pillar1.practice6')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 2 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.customerTrust.pillar2.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.pillar2.description')}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-8">
                  <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                    {t('blog.customerTrust.pillar2.subtitle')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">{t('blog.customerTrust.pillar2.pricing.title')}</h5>
                      <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                        <li>• {t('blog.customerTrust.pillar2.pricing.point1')}</li>
                        <li>• {t('blog.customerTrust.pillar2.pricing.point2')}</li>
                        <li>• {t('blog.customerTrust.pillar2.pricing.point3')}</li>
                        <li>• {t('blog.customerTrust.pillar2.pricing.point4')}</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">{t('blog.customerTrust.pillar2.policy.title')}</h5>
                      <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                        <li>• {t('blog.customerTrust.pillar2.policy.point1')}</li>
                        <li>• {t('blog.customerTrust.pillar2.policy.point2')}</li>
                        <li>• {t('blog.customerTrust.pillar2.policy.point3')}</li>
                        <li>• {t('blog.customerTrust.pillar2.policy.point4')}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pillar 3 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.customerTrust.pillar3.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.pillar3.description')}
                </p>

                {/* Pillar 4 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.customerTrust.pillar4.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.pillar4.description')}
                </p>

                {/* Trust Building Strategies */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.customerTrust.strategies.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.strategies.description')}
                </p>

                {/* Strategy 1 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.customerTrust.strategy1.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.strategy1.description')}
                </p>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('blog.customerTrust.strategy1.subtitle')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{t('blog.customerTrust.strategy1.element1.title')}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t('blog.customerTrust.strategy1.element1.description')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{t('blog.customerTrust.strategy1.element2.title')}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t('blog.customerTrust.strategy1.element2.description')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{t('blog.customerTrust.strategy1.element3.title')}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t('blog.customerTrust.strategy1.element3.description')}</p>
                    </div>
                  </div>
                </div>

                {/* Strategy 2 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.customerTrust.strategy2.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.strategy2.description')}
                </p>

                {/* Strategy 3 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.customerTrust.strategy3.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.strategy3.description')}
                </p>

                {/* Strategy 4 */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.customerTrust.strategy4.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.strategy4.description')}
                </p>

                {/* Case Study */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                    {t('blog.customerTrust.caseStudy.title')}
                  </h3>
                  <p className="text-green-800 dark:text-green-200 mb-4">
                    {t('blog.customerTrust.caseStudy.description')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{t('blog.customerTrust.caseStudy.metric1.value')}</div>
                      <div className="text-sm text-green-700 dark:text-green-300">{t('blog.customerTrust.caseStudy.metric1.label')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{t('blog.customerTrust.caseStudy.metric2.value')}</div>
                      <div className="text-sm text-green-700 dark:text-green-300">{t('blog.customerTrust.caseStudy.metric2.label')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{t('blog.customerTrust.caseStudy.metric3.value')}</div>
                      <div className="text-sm text-green-700 dark:text-green-300">{t('blog.customerTrust.caseStudy.metric3.label')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{t('blog.customerTrust.caseStudy.metric4.value')}</div>
                      <div className="text-sm text-green-700 dark:text-green-300">{t('blog.customerTrust.caseStudy.metric4.label')}</div>
                    </div>
                  </div>
                </div>

                {/* Implementation Guide */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.customerTrust.implementation.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.implementation.description')}
                </p>

                <div className="space-y-6 mb-12">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.customerTrust.implementation.phase1.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.customerTrust.implementation.phase1.point1')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase1.point2')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase1.point3')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase1.point4')}</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.customerTrust.implementation.phase2.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.customerTrust.implementation.phase2.point1')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase2.point2')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase2.point3')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase2.point4')}</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.customerTrust.implementation.phase3.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.customerTrust.implementation.phase3.point1')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase3.point2')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase3.point3')}</li>
                      <li>• {t('blog.customerTrust.implementation.phase3.point4')}</li>
                    </ul>
                  </div>
                </div>

                {/* Conclusion */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.customerTrust.conclusion.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.customerTrust.conclusion.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {t('blog.customerTrust.conclusion.paragraph2')}
                </p>

                {/* Author Bio */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
                  <div className="flex items-start space-x-6">
                    <img 
                      src="/images/image17.jpg" 
                      alt={t('blog.customerTrust.author')}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {t('blog.customerTrust.author.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {t('blog.customerTrust.author.description')}
                      </p>
                      <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{t('blog.customerTrust.author.articles')}</span>
                        <span>•</span>
                        <span>{t('blog.customerTrust.author.expertise')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('blog.customerTrust.related.title')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/blog/future-ecommerce-ai-powered-shopping" className="group">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                          {t('blog.customerTrust.related.article1.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('blog.customerTrust.related.article1.description')}
                        </p>
                      </div>
                    </Link>
                    <Link href="/blog/essential-strategies-boosting-conversion-rate" className="group">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                          {t('blog.customerTrust.related.article2.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('blog.customerTrust.related.article2.description')}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
