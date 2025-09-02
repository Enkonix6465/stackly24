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
        <title>{t('blog.futureEcommerce.title')} - ShopHub Blog</title>
        <meta name="description" content={t('blog.futureEcommerce.description')} />
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
                backgroundImage: 'url(/images/image18.jpg)'
              }}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <span className="mr-2">🚀</span>
                  {t('blog.futureEcommerce.category')}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {t('blog.futureEcommerce.title')}
                </h1>
                                 <div className="flex items-center justify-center space-x-6 text-white">
                   <div className="flex items-center">
                     <img 
                       src="/images/image15.jpg" 
                       alt={t('blog.futureEcommerce.author')}
                       className="w-10 h-10 rounded-full mr-3 object-cover"
                     />
                     <span>{t('blog.futureEcommerce.author')}</span>
                   </div>
                   <span>•</span>
                   <span>{t('blog.futureEcommerce.date')}</span>
                   <span>•</span>
                   <span>{t('blog.futureEcommerce.readTime')}</span>
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
                    {t('blog.futureEcommerce.introduction.paragraph1')}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {t('blog.futureEcommerce.introduction.paragraph2')}
                  </p>
                </div>

                {/* Key Points */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                    {t('blog.futureEcommerce.keyTakeaways.title')}
                  </h3>
                  <ul className="space-y-3 text-indigo-800 dark:text-indigo-200">
                    <li className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                      {t('blog.futureEcommerce.keyTakeaways.point1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                      {t('blog.futureEcommerce.keyTakeaways.point2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                      {t('blog.futureEcommerce.keyTakeaways.point3')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1">•</span>
                      {t('blog.futureEcommerce.keyTakeaways.point4')}
                    </li>
                  </ul>
                </div>

                {/* Main Content */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.futureEcommerce.section1.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section1.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section1.paragraph2')}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('blog.futureEcommerce.section1.subsection.title')}
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                  <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>{t('blog.futureEcommerce.section1.subsection.step1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>{t('blog.futureEcommerce.section1.subsection.step2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>{t('blog.futureEcommerce.section1.subsection.step3')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      <span>{t('blog.futureEcommerce.section1.subsection.step4')}</span>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.futureEcommerce.section2.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section2.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section2.paragraph2')}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.futureEcommerce.section3.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section3.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section3.paragraph2')}
                </p>

                {/* Case Study */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                    {t('blog.futureEcommerce.caseStudy.title')}
                  </h3>
                  <p className="text-indigo-800 dark:text-indigo-200 mb-4">
                    {t('blog.futureEcommerce.caseStudy.description')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{t('blog.futureEcommerce.caseStudy.metric1.value')}</div>
                      <div className="text-sm text-indigo-700 dark:text-indigo-300">{t('blog.futureEcommerce.caseStudy.metric1.label')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{t('blog.futureEcommerce.caseStudy.metric2.value')}</div>
                      <div className="text-sm text-indigo-700 dark:text-indigo-300">{t('blog.futureEcommerce.caseStudy.metric2.label')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{t('blog.futureEcommerce.caseStudy.metric3.value')}</div>
                      <div className="text-sm text-indigo-700 dark:text-indigo-300">{t('blog.futureEcommerce.caseStudy.metric3.label')}</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.futureEcommerce.section4.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section4.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section4.paragraph2')}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.futureEcommerce.section5.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section5.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.section5.paragraph2')}
                </p>

                {/* Implementation Guide */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.futureEcommerce.implementation.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.implementation.description')}
                </p>

                <div className="space-y-6 mb-12">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.futureEcommerce.implementation.phase1.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.futureEcommerce.implementation.phase1.point1')}</li>
                      <li>• {t('blog.futureEcommerce.implementation.phase1.point2')}</li>
                      <li>• {t('blog.futureEcommerce.implementation.phase1.point3')}</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.futureEcommerce.implementation.phase2.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.futureEcommerce.implementation.phase2.point1')}</li>
                      <li>• {t('blog.futureEcommerce.implementation.phase2.point2')}</li>
                      <li>• {t('blog.futureEcommerce.implementation.phase2.point3')}</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t('blog.futureEcommerce.implementation.phase3.title')}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• {t('blog.futureEcommerce.implementation.phase3.point1')}</li>
                      <li>• {t('blog.futureEcommerce.implementation.phase3.point2')}</li>
                      <li>• {t('blog.futureEcommerce.implementation.phase3.point3')}</li>
                    </ul>
                  </div>
                </div>

                {/* Conclusion */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('blog.futureEcommerce.conclusion.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('blog.futureEcommerce.conclusion.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {t('blog.futureEcommerce.conclusion.paragraph2')}
                </p>

                {/* Author Bio */}
                                 <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
                   <div className="flex items-start space-x-6">
                     <img 
                       src="/images/image15.jpg" 
                       alt={t('blog.futureEcommerce.author')}
                       className="w-20 h-20 rounded-full object-cover"
                     />
                     <div>
                       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                         {t('blog.futureEcommerce.author.title')}
                       </h3>
                       <p className="text-gray-600 dark:text-gray-300 mb-3">
                         {t('blog.futureEcommerce.author.description')}
                       </p>
                       <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                         <span>{t('blog.futureEcommerce.author.articles')}</span>
                         <span>•</span>
                         <span>{t('blog.futureEcommerce.author.expertise')}</span>
                       </div>
                     </div>
                   </div>
                 </div>

                {/* Related Articles */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('blog.futureEcommerce.related.title')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/blog/essential-strategies-boosting-conversion-rate" className="group">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                          {t('blog.futureEcommerce.related.article1.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('blog.futureEcommerce.related.article1.description')}
                        </p>
                      </div>
                    </Link>
                    <Link href="/blog/building-customer-trust-ecommerce-success" className="group">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                          {t('blog.futureEcommerce.related.article2.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('blog.futureEcommerce.related.article2.description')}
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
