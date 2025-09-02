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
        <title>{t('blog.essentialStrategies.title')} - ShopHub Blog</title>
        <meta name="description" content={t('blog.essentialStrategies.description')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Article Header */}
          <section className="relative text-white py-20 overflow-hidden">
            {/* Background Image with Black Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/image19.jpg')`
              }}
            />
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <span className="mr-2">📈</span>
                  {t('blog.essentialStrategies.category')}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t('blog.essentialStrategies.title')}
                </h1>
                                  <div className="flex items-center justify-center space-x-6 text-gray-100">
                    <div className="flex items-center">
                      <img 
                        src="/images/image16.jpg" 
                        alt={t('blog.essentialStrategies.author')}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <span>{t('blog.essentialStrategies.author')}</span>
                    </div>
                  <span>•</span>
                  <span>{t('blog.essentialStrategies.date')}</span>
                  <span>•</span>
                  <span>{t('blog.essentialStrategies.readTime')}</span>
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
                    {t('blog.essentialStrategies.introduction.paragraph1')}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {t('blog.essentialStrategies.introduction.paragraph2')}
                  </p>
                </div>

                {/* Key Points */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                    {t('blog.essentialStrategies.keyTakeaways.title')}
                  </h3>
                  <ul className="space-y-3 text-indigo-800 dark:text-indigo-200">
                    <li className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                      {t('blog.essentialStrategies.keyTakeaways.point1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                      {t('blog.essentialStrategies.keyTakeaways.point2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                      {t('blog.essentialStrategies.keyTakeaways.point3')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                      {t('blog.essentialStrategies.keyTakeaways.point4')}
                    </li>
                  </ul>
                </div>

                {/* Strategy 1 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy1.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy1.description')}
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('blog.essentialStrategies.strategy1.subtitle')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.essentialStrategies.strategy1.element1')}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.essentialStrategies.strategy1.element2')}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.essentialStrategies.strategy1.element3')}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.essentialStrategies.strategy1.element4')}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.essentialStrategies.strategy1.element5')}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{t('blog.essentialStrategies.strategy1.element6')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategy 2 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy2.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy2.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy2.paragraph2')}
                </p>

                {/* Strategy 3 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy3.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy3.description')}
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                    {t('blog.essentialStrategies.strategy3.subtitle')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">{t('blog.essentialStrategies.strategy3.dos.title')}</h4>
                      <ul className="space-y-2 text-green-700 dark:text-green-300">
                        <li>• {t('blog.essentialStrategies.strategy3.dos.point1')}</li>
                        <li>• {t('blog.essentialStrategies.strategy3.dos.point2')}</li>
                        <li>• {t('blog.essentialStrategies.strategy3.dos.point3')}</li>
                        <li>• {t('blog.essentialStrategies.strategy3.dos.point4')}</li>
                        <li>• {t('blog.essentialStrategies.strategy3.dos.point5')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">{t('blog.essentialStrategies.strategy3.donts.title')}</h4>
                      <ul className="space-y-2 text-red-700 dark:text-red-300">
                        <li>• {t('blog.essentialStrategies.strategy3.donts.point1')}</li>
                        <li>• {t('blog.essentialStrategies.strategy3.donts.point2')}</li>
                        <li>• {t('blog.essentialStrategies.strategy3.donts.point3')}</li>
                        <li>• {t('blog.essentialStrategies.strategy3.donts.point4')}</li>
                        <li>• {t('blog.essentialStrategies.strategy3.donts.point5')}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strategy 4 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy4.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy4.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy4.paragraph2')}
                </p>

                {/* Strategy 5 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy5.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy5.description')}
                </p>

                {/* Performance Metrics */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('blog.essentialStrategies.strategy5.subtitle')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{t('blog.essentialStrategies.strategy5.metric1.value')}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.essentialStrategies.strategy5.metric1.label')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{t('blog.essentialStrategies.strategy5.metric2.value')}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.essentialStrategies.strategy5.metric2.label')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{t('blog.essentialStrategies.strategy5.metric3.value')}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{t('blog.essentialStrategies.strategy5.metric3.label')}</div>
                    </div>
                  </div>
                </div>

                {/* Strategy 6 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy6.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy6.description')}
                </p>

                {/* Strategy 7 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy7.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy7.description')}
                </p>

                {/* Strategy 8 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy8.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy8.description')}
                </p>

                {/* Strategy 9 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy9.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy9.description')}
                </p>

                {/* Strategy 10 */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.strategy10.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.strategy10.description')}
                </p>

                {/* Implementation Timeline */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.implementation.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.implementation.description')}
                </p>

                <div className="space-y-6 mb-12">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.essentialStrategies.implementation.week1.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.essentialStrategies.implementation.week1.point1')}</li>
                      <li>• {t('blog.essentialStrategies.implementation.week1.point2')}</li>
                      <li>• {t('blog.essentialStrategies.implementation.week1.point3')}</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.essentialStrategies.implementation.week2.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.essentialStrategies.implementation.week2.point1')}</li>
                      <li>• {t('blog.essentialStrategies.implementation.week2.point2')}</li>
                      <li>• {t('blog.essentialStrategies.implementation.week2.point3')}</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.essentialStrategies.implementation.week3.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.essentialStrategies.implementation.week3.point1')}</li>
                      <li>• {t('blog.essentialStrategies.implementation.week3.point2')}</li>
                      <li>• {t('blog.essentialStrategies.implementation.week3.point3')}</li>
                    </ul>
                  </div>
                </div>

                {/* Conclusion */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.essentialStrategies.conclusion.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.essentialStrategies.conclusion.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {t('blog.essentialStrategies.conclusion.paragraph2')}
                </p>

                {/* Author Bio */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
                  <div className="flex items-start space-x-6">
                    <img 
                      src="/images/image16.jpg" 
                      alt={t('blog.essentialStrategies.author')}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {t('blog.essentialStrategies.author.title')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {t('blog.essentialStrategies.author.description')}
                      </p>
                      <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{t('blog.essentialStrategies.author.articles')}</span>
                        <span>•</span>
                        <span>{t('blog.essentialStrategies.author.expertise')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('blog.essentialStrategies.related.title')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/blog/future-ecommerce-ai-powered-shopping" className="group">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                          {t('blog.essentialStrategies.related.article1.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('blog.essentialStrategies.related.article1.description')}
                        </p>
                      </div>
                    </Link>
                    <Link href="/blog/building-customer-trust-ecommerce-success" className="group">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                          {t('blog.essentialStrategies.related.article2.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('blog.essentialStrategies.related.article2.description')}
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
