import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import FadeIn from '../components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>{t('contact.title')} - ShopHub</title>
        <meta name="description" content={t('contact.description')} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio4.mp4" className="text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <FadeIn direction="up" delay={0.3} duration={1}>
                <div className="text-center">
                  <FadeIn direction="up" delay={0.5} duration={0.8}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white whitespace-nowrap">
                      {t('contact.hero.title')} {t('contact.hero.subtitle')}
                    </h1>
                  </FadeIn>
                  <FadeIn direction="up" delay={0.7} duration={0.8}>
                    <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                      Ready to transform your e-commerce business? Our team of experts is here to help
                    </p>
                  </FadeIn>
                  <FadeIn direction="up" delay={0.9} duration={0.8}>
                    <div className="mt-8 flex justify-center">
                      <a href="#contact-form" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg">
                        {t('contact.hero.cta')}
                      </a>
                    </div>
                  </FadeIn>
                </div>
              </FadeIn>
            </div>
          </VideoBackground>

          {/* Contact Information Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('contact.info.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('contact.info.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn direction="up" delay={0.4} duration={0.8}>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                      <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('contact.info.phoneSupport.title')}</h3>
                    <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{t('contact.info.phoneSupport.number')}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.info.phoneSupport.hours')}</p>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.6} duration={0.8}>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                      <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('contact.info.emailSupport.title')}</h3>
                    <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{t('contact.info.emailSupport.email')}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.info.emailSupport.response')}</p>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.8} duration={0.8}>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-300">
                      <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('contact.info.liveChat.title')}</h3>
                    <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{t('contact.info.liveChat.available')}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.info.liveChat.click')}</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Contact Form Section - Indigo Background */}
          <section className="py-20 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
            <div id="contact-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('contact.form.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('contact.form.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4} duration={0.8}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <FadeIn direction="up" delay={0.6} duration={0.8}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {t('contact.form.nameLabel')}
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                            placeholder={t('contact.form.namePlaceholder')}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {t('contact.form.emailLabel')}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                            placeholder={t('contact.form.emailPlaceholder')}
                          />
                        </div>
                      </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.8} duration={0.8}>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('contact.form.subjectLabel')}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                        >
                          <option value="">{t('contact.form.subjectPlaceholder')}</option>
                          <option value="general">{t('contact.form.subjectGeneral')}</option>
                          <option value="support">{t('contact.form.subjectSupport')}</option>
                          <option value="sales">{t('contact.form.subjectSales')}</option>
                          <option value="partnership">{t('contact.form.subjectPartnership')}</option>
                          <option value="feedback">{t('contact.form.subjectFeedback')}</option>
                        </select>
                      </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={1.0} duration={0.8}>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('contact.form.messageLabel')}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                          placeholder={t('contact.form.messagePlaceholder')}
                        />
                      </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={1.2} duration={0.8}>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          {t('contact.form.submit')}
                        </button>
                      </div>
                    </FadeIn>
                  </form>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Office Locations Section - Black Background */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('contact.offices.title')}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {t('contact.offices.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeIn direction="up" delay={0.4} duration={0.8}>
                  <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">{t('contact.offices.newYork.title')}</h3>
                        <p className="text-gray-300 mb-4">
                          {t('contact.offices.newYork.address').split('\n').map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < t('contact.offices.newYork.address').split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                          <p>{t('contact.offices.newYork.phone')}</p>
                          <p>{t('contact.offices.newYork.email')}</p>
                          <p>{t('contact.offices.newYork.hours')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.6} duration={0.8}>
                  <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">{t('contact.offices.london.title')}</h3>
                        <p className="text-gray-300 mb-4">
                          {t('contact.offices.london.address').split('\n').map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < t('contact.offices.london.address').split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                          <p>{t('contact.offices.london.phone')}</p>
                          <p>{t('contact.offices.london.email')}</p>
                          <p>{t('contact.offices.london.hours')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Interactive Map Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('contact.map.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('contact.map.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Map Container */}
                <div className="lg:col-span-2">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="h-96 relative">
                      {/* Google Maps iframe */}
                      <iframe
                        title={t('common.googleMap')}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953736315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1620211234567!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Map Legend & Quick Actions */}
                <div className="space-y-6">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800">
                    <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
                      {t('contact.map.officeLocations')}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-indigo-800 dark:text-indigo-200">{t('contact.map.newYork')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-indigo-800 dark:text-indigo-200">{t('contact.map.london')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {t('contact.map.quickActions')}
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full text-left p-3 rounded-lg bg-white dark:bg-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.map.getDirections')}</span>
                        </div>
                      </button>
                      <button className="w-full text-left p-3 rounded-lg bg-white dark:bg-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.map.scheduleVisit')}</span>
                        </div>
                      </button>
                      <button className="w-full text-left p-3 rounded-lg bg-white dark:bg-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('contact.map.callOffice')}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section - White Background */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('contact.faq.title')}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('contact.faq.subtitle')}
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn direction="up" delay={0.4} duration={0.8}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('contact.faq.services.question')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('contact.faq.services.answer')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.6} duration={0.8}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('contact.faq.timeline.question')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('contact.faq.timeline.answer')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.8} duration={0.8}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('contact.faq.support.question')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('contact.faq.support.answer')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={1.0} duration={0.8}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('contact.faq.pricing.question')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('contact.faq.pricing.answer')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* CTA Section - Background Image with Black Overlay */}
          <section className="py-20 relative text-white overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
              style={{ backgroundImage: 'url(/images/CTA5.jpg)' }}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('contact.cta.title')}
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.4} duration={0.8}>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Don't wait to transform your e-commerce business.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.6} duration={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="#contact-form" 
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                  >
                    {t('contact.cta.startConversation')}
                  </Link>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200 transform hover:scale-105"
                  >
                    {t('contact.cta.viewServices')}
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
