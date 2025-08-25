import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoBackground from '../components/VideoBackground';
import Link from 'next/link';

// Dummy data for the services page
const services = [
  {
    id: 1,
    title: "Product Listing",
    slug: "product-listing",
    description: "Comprehensive product catalog management with advanced categorization and search capabilities",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><g fill="none" strokeWidth={1.5}><path fill="#000" d="m2.695 7.185l9 4l.61-1.37l-9-4zM12.75 21.5v-11h-1.5v11zm-.445-10.315l9-4l-.61-1.37l-9 4z"></path><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M3 17.11V6.89a.6.6 0 0 1 .356-.548l8.4-3.734a.6.6 0 0 1 .488 0l8.4 3.734A.6.6 0 0 1 21 6.89v10.22a.6.6 0 0 1-.356.548l-8.4 3.734a.6.6 0 0 1-.488 0l-8.4-3.734A.6.6 0 0 1 3 17.11"></path><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m7.5 4.5l8.644 3.842a.6.6 0 0 1 .356.548v3.61"></path></g></svg>,
    features: ["Unlimited products", "Bulk import/export", "SEO optimization", "Multi-language support"],
    image: "/images/s1.jpg"
  },
  {
    id: 2,
    title: "Order Management",
    slug: "order-management",
    description: "Streamlined order processing from cart to delivery with real-time tracking",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 128 128"><circle cx={117.33} cy={9.69} r={5.69} fill="#f44336"></circle><path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="M80.09 78.38s9.51 12.8 9.51 17.85s-4.1 9.15-9.15 9.15c-4.31 0-58.2-.11-64.15-.11s-9.32 3.49-9.32 3.49"></path><path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="M58.83 77.13s10.6 14.05 10.6 19.11s-4.64 9.12-9.69 9.12"></path><path fill="#2f7889" d="M82.77 86.73c-2.01-3.44-3.64-5.44-6.26-9.02c0 0 .69.15 2.55.15s3.2-.59 3.2-.59c2.64 3.73 3.43 4.68 4.84 7.18c0 0-.05 1.63-1.35 2.49s-2.98-.21-2.98-.21m-20.21.17c-2.79-4.26-5.02-7.51-5.02-7.51l6 .14s2.69 3.61 4.23 6.47c0 0 .23 1.3-1.49 1.98c-1.72.66-3.72-1.08-3.72-1.08"></path><path fill="none" stroke="#84b0c1" strokeMiterlimit={10} strokeWidth={4.913} d="m80.11 78.64l-69.94-4.66c-.23-.02-.4-.2-.4-.43V34.5c0-.37.29-.68.66-.7l88.63-5.64c.86-.06 1.48.8 1.17 1.6L81.41 77.82c-.21.53-.73.86-1.3.82z"></path><path fill="none" stroke="#84b0c1" strokeMiterlimit={10} strokeWidth={2.948} d="M23.67 33.06L21.83 74.5m17.71-42.52l-5.75 43.41M55.42 30.9l-9.67 45.38M71.3 29.82L57.71 77.17m29.46-48.43l-17.5 49.32M8.29 48.48l85.56-2.94M9.08 62.11h79.4"></path><circle cx={80.41} cy={116.46} r={7.54} fill="#424242"></circle><path fill="#84b0c1" d="M75.55 106.08h9.73l-2.32 10.09c-.22 1.57-1.29 2.71-2.54 2.71s-2.33-1.14-2.54-2.71z"></path><path fill="#a8e3f0" d="M81.97 116.53c-.18.66-.51 1.41-1.18 1.58c-2.42.62-2.76-5.33-1.54-6.35c.74-.62 2.28-.73 2.93.04c.83.98.1 3.64-.21 4.73"></path><path fill="#2f7889" d="M80.53 109.65c-1.61 0-2.75-.95-3.31-1.54a.283.283 0 0 1 .19-.48c1.04-.05 2.08-.04 3.11-.07c1.04.03 2.08.02 3.11.07c.24.01.36.31.19.48c-.53.59-1.68 1.54-3.29 1.54"></path><path fill="#757575" d="M78.04 119.02c.65.75 1.69 1.1 2.68.98c.98-.12 1.88-.7 2.47-1.5c.34-.47.58-1.01.97-1.44s1.01-.73 1.55-.51c.76.3.86 1.36.6 2.13a6.08 6.08 0 0 1-3.09 3.56c-.99.49-2.37.69-3.47.58c-2.11-.22-4.38-2.13-5.12-4.09c-.4-1.05-.75-3.16 1.34-2.68c.97.23 1.29 2.07 2.07 2.97"></path><path fill="none" stroke="#84b0c1" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4.913} d="m99.82 30.71l4.61-11.27c1.88-4.6 3.27-5.63 6.06-6.88l6.53-2.65"></path><circle cx={19.6} cy={116.46} r={7.54} fill="#424242"></circle><path fill="#84b0c1" d="M14.73 106.08h9.73l-2.32 10.09c-.22 1.57-1.29 2.71-2.54 2.71s-2.33-1.14-2.54-2.71z"></path><path fill="#a8e3f0" d="M21.16 116.53c-.18.66-.51 1.41-1.18 1.58c-2.42.62-2.76-5.33-1.54-6.35c.74-.62 2.28-.73 2.93.04c.83.98.09 3.64-.21 4.73"></path><path fill="#2f7889" d="M19.72 109.65c-1.61 0-2.75-.95-3.31-1.54a.283.283 0 0 1 .19-.48c1.04-.05 2.08-.04 3.11-.07c1.04.03 2.08.02 3.11.07c.24.01.36.31.19.48c-.54.59-1.69 1.54-3.29 1.54"></path><path fill="#757575" d="M17.22 119.02c.65.75 1.69 1.1 2.68.98c.98-.12 1.88-.7 2.47-1.5c.34-.47.58-1.01.97-1.44s1.01-.73 1.55-.51c.76.3.86 1.36.6 2.13a6.08 6.08 0 0 1-3.09 3.56c-.99.49-2.37.69-3.47.58c-2.11-.22-4.38-2.13-5.12-4.09c-.4-1.05-.75-3.16 1.34-2.68c.97.23 1.29 2.07 2.07 2.97"></path></svg>,
    features: ["Order automation", "Inventory sync", "Shipping integration", "Customer notifications"],
    image: "/images/s2.jpg"
  },
  {
    id: 3,
    title: "Payment Gateway",
    slug: "payment-gateway",
    description: "Secure payment processing with multiple payment methods and fraud protection",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 48 48"><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="#2f88ff" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"></path><path stroke="#fff" strokeLinecap="square" d="M4 16H44"></path><path stroke="#fff" strokeLinecap="round" d="M27 32H36"></path><path stroke="#000" strokeLinecap="round" d="M44 10V26"></path><path stroke="#000" strokeLinecap="round" d="M4 10V26"></path></g></svg>,
    features: ["Multiple gateways", "Fraud detection", "Recurring billing", "PCI compliance"],
    image: "/images/s3.jpg"
  },
  {
    id: 4,
    title: "Customer Support",
    slug: "customer-support",
    description: "24/7 customer support with multiple channels and AI-powered assistance",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><path fill="#000" d="M17 18h1c.55 0 1-.45 1-1v-3h-2zM5 17c0 .55.45 1 1 1h1v-4H5z" opacity={0.3}></path><path fill="#000" d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9M7 14v4H6c-.55 0-1-.45-1-1v-3zm12 3c0 .55-.45 1-1 1h-1v-4h2z"></path></svg>,
    features: ["Live chat", "Ticket system", "Knowledge base", "AI chatbot"],
    image: "/images/s4.jpg"
  },
  {
    id: 5,
    title: "Shipping & Delivery",
    slug: "shipping-delivery",
    description: "End-to-end logistics management with real-time tracking and optimization",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 36 36"><path fill="#dd2e44" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-3a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></path><path fill="#ffcc4d" d="m19 13l-.979-1H7.146C4 12 3 14 3 14l-3 5.959V25h19z"></path><path fill="#55acee" d="M9 20H2l2-4s1-2 3-2h2z"></path><circle cx={9} cy={31} r={4} fill="#292f33"></circle><circle cx={9} cy={31} r={2} fill="#ccd6dd"></circle><circle cx={27} cy={31} r={4} fill="#292f33"></circle><circle cx={27} cy={31} r={2} fill="#ccd6dd"></circle><path fill="#ccd6dd" d="M32 8H17a4 4 0 0 0-4 4v13h23V12a4 4 0 0 0-4-4"></path></svg>,
    features: ["Carrier integration", "Route optimization", "Delivery tracking", "Returns management"],
    image: "/images/s5.jpg"
  },
  {
    id: 6,
    title: "Analytics & Reports",
    slug: "analytics-reports",
    description: "Data-driven insights with comprehensive reporting and business intelligence",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 40 40"><g fill="none" strokeMiterlimit={10}><path fill="#ff52a1" stroke="#231f20" d="M10.23 22.33c-.45-1-2.78-1-4.53-1s-4.08 0-4.53 1C.72 22.84.5 25.55.5 27.8s.22 5 .67 5.47c.45 1 2.78 1 4.53 1s4.08 0 4.53-1c.45-.51.67-3.22.67-5.47s-.22-4.96-.67-5.47Zm14.3-7.19c-.45-1.63-2.78-1.64-4.53-1.64s-4.08 0-4.53 1.64c-.47.86-.67 5.16-.67 8.76s.22 7.94.67 8.76c.45 1.63 2.78 1.64 4.53 1.64s4.08 0 4.53-1.64c.45-.82.67-5.16.67-8.76s-.2-7.9-.67-8.76Z" strokeWidth={1}></path><path fill="#ffe236" stroke="#231f20" d="M38.83 8c-.45-2.28-2.78-2.3-4.53-2.3s-4.08 0-4.53 2.26c-.45 1.12-.67 7.09-.67 12s.22 10.92.67 12c.45 2.24 2.78 2.26 4.53 2.26s4.08 0 4.53-2.26c.45-1.12.67-7.09.67-12S39.28 9.08 38.83 8Z" strokeWidth={1}></path><path stroke="#fff" strokeLinecap="round" d="M35.7 8c.83 0 1 .19 1.2 1.82M21.66 16c.82 0 1.05.19 1.2 1.82M7.1 23.63c.82 0 1.05.19 1.2 1.82" strokeWidth={1}></path></g></svg>,
    features: ["Sales analytics", "Customer insights", "Performance metrics", "Custom dashboards"],
    image: "/images/s6.jpg"
  }
];

const testimonials = [
  {
    name: "David Chen",
    role: "Operations Director",
    company: "TechCorp",
    content: "The order management system has reduced our processing time by 60% and eliminated errors completely.",
    avatar: "/images/image12.jpg"
  },
  {
    name: "Maria Garcia",
    role: "E-commerce Manager",
    company: "FashionHub",
    content: "The analytics dashboard gives us insights we never had before. Our conversion rates improved by 40%.",
    avatar: "/images/image13.jpg"
  },
  {
    name: "James Wilson",
    role: "CEO",
    company: "EcoStore",
    content: "Customer support integration has transformed our customer satisfaction scores from 3.2 to 4.8.",
    avatar: "/images/image14.jpg"
  }
];

const pricing = [
  {
    plan: "Basic",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses starting their e-commerce journey",
    features: ["2 services included", "Basic support", "Standard features", "Email support"]
  },
  {
    plan: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses with multiple service needs",
    features: ["4 services included", "Priority support", "Advanced features", "Phone support", "Custom integrations"]
  },
  {
    plan: "Enterprise",
    price: "$799",
    period: "/month",
    description: "Complete solution for large-scale operations",
    features: ["All 6 services", "24/7 support", "Custom development", "Dedicated manager", "White-label options"]
  }
];

const stats = [
  { number: "500+", label: "Businesses Served", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 64 64"><g fill="#b6a7a1"><path d="M28.886 21.15v42.097c0 .346.241.636.529.636h34.04c.288 0 .529-.29.529-.636V21.15a.67.67 0 0 0-.143-.436l-.014-.011s-.008-.013-.019-.019a.44.44 0 0 0-.354-.173h-34.04c-.287 0-.528.293-.528.639"></path><path d="M.1 21.15v42.097c0 .346.241.636.529.636h34.04c.288 0 .529-.29.529-.636V21.15a.66.66 0 0 0-.143-.436l-.013-.011s-.009-.013-.018-.019a.45.45 0 0 0-.356-.173H.628c-.287 0-.528.293-.528.639"></path></g><path fill="#5697a2" d="M2.237 31.107h11.479c.094 0 .184-.039.184-.077v-4.869c0-.042-.089-.075-.184-.075H2.237a.3.3 0 0 0-.126.023v.004c-.026.015-.049.028-.049.047v4.87c0 .039.075.077.175.077m.007 8.196h11.785c.094 0 .188-.039.188-.077v-4.868c0-.042-.094-.077-.188-.077H2.245a.3.3 0 0 0-.137.025v.004s-.045.026-.045.047v4.868c0 .039.074.078.181.078m.051 7.063h15.114c.12 0 .239-.038.239-.076v-4.87c0-.043-.12-.074-.239-.074H2.295a.5.5 0 0 0-.171.023v.004c-.03.015-.062.028-.062.047v4.871c0 .037.1.075.233.075m-.026 8.201h13.262c.104 0 .209-.038.209-.077v-4.869c0-.043-.104-.075-.209-.075H2.269a.4.4 0 0 0-.151.023v.005c-.028.015-.056.027-.056.047v4.87c0 .038.087.076.207.076M51.56 31.742h10.425c.079 0 .16-.039.16-.077v-4.869c0-.043-.081-.075-.16-.075H51.56a.3.3 0 0 0-.121.023v.004c-.018.015-.039.028-.039.047v4.87c0 .039.066.077.16.077m-2.2 8.2h12.587c.099 0 .199-.038.199-.076v-4.87c0-.042-.101-.075-.199-.075H49.36a.4.4 0 0 0-.141.023v.004c-.025.015-.051.028-.051.047v4.871c0 .038.079.076.192.076m-3.99 7.06h16.52c.13 0 .261-.038.261-.077v-4.869c0-.043-.131-.075-.261-.075H45.377a.7.7 0 0 0-.188.023v.005c-.034.015-.066.027-.066.047v4.87c0 .038.103.076.253.076m2.685 8.203H61.93c.111 0 .222-.039.222-.077v-4.869c0-.043-.11-.075-.222-.075H48.062a.5.5 0 0 0-.158.023v.004c-.029.016-.055.028-.055.048v4.87c0 .037.086.076.212.076"></path><path fill="#d4c8c3" d="M11.812 3.493v59.47c0 .493.277.901.606.901h39.098c.329 0 .604-.408.604-.901V3.493c0-.267-.062-.472-.16-.615l-.018-.017c0-.015-.008-.017-.021-.026a.47.47 0 0 0-.406-.243H12.418c-.329 0-.606.41-.606.901"></path><path fill="#9a535f" d="M26.542 63.882h11.083c.087 0 .168-.056.168-.126v-7.963c0-.068-.081-.122-.168-.122H26.543a.2.2 0 0 0-.115.037l-.004.004h-.004c-.023.023-.049.051-.049.081v7.962c0 .071.082.127.171.127"></path><path fill="#86a7ac" d="M27.923 59.942h1.925s.03-.017.03-.034V57.73c0-.019-.017-.034-.017-.034h-1.938s-.019.005-.021.011v.003s-.008.013-.008.021v2.178c0 .016 0 .033.029.033"></path><path fill="#6cb5c6" d="M14.418 19.067h34.428c.273 0 .547-.049.547-.096v-6.093c0-.053-.273-.094-.547-.094H14.418c-.135 0-.301.001-.382.03v.004c-.068.019-.137.036-.137.06v6.093c0 .046.218.096.519.096m0 10.255h34.428c.273 0 .547-.049.547-.096v-6.093c0-.054-.273-.094-.547-.094H14.418c-.135 0-.301.011-.382.03v.006c-.068.017-.137.034-.137.058v6.093c0 .047.218.096.519.096m.316 8.968h34.438c.273 0 .546-.049.546-.096v-6.093c0-.053-.272-.094-.546-.094H14.739a2 2 0 0 0-.382.03v.004c-.066.019-.134.036-.134.06v6.093c0 .047.219.096.516.096m-.005 10.256h34.438c.273 0 .546-.049.546-.096v-6.093c0-.054-.272-.094-.546-.094H14.739a2.3 2.3 0 0 0-.382.029v.007c-.066.017-.134.034-.134.058v6.093c0 .047.219.096.516.096"></path><path fill="#86a7ac" d="M34.23 59.942h1.928c.013 0 .03-.017.03-.034V57.73c0-.019-.018-.034-.03-.034H34.23s-.015.005-.02.011v.003s-.008.013-.008.021v2.178c0 .016.013.033.028.033"></path></svg> },
  { number: "99.9%", label: "Uptime", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.684 3.603c.521-.659.03-1.603-.836-1.603h-6.716a1.06 1.06 0 0 0-.909.502l-5.082 8.456c-.401.666.103 1.497.908 1.497h3.429l-3.23 8.065c-.467 1.02.795 1.953 1.643 1.215L20 9.331h-6.849z"></path></svg> },
  { number: "24/7", label: "Support Available", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 50 50"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path stroke="#306cfe" d="M29.167 37.5H18.75a12.5 12.5 0 0 1-7.208-22.687m9.291-2.313H31.25a12.5 12.5 0 0 1 7.208 22.688"></path><path stroke="#344054" d="m25 33.333l4.167 4.167L25 41.667m0-25L20.833 12.5L25 8.333"></path></g></svg> },
  { number: "50M+", label: "Orders Processed", icon: <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"></path></svg> }
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - ShopHub | Complete E-commerce Solutions</title>
        <meta name="description" content="Discover ShopHub's comprehensive e-commerce services including product listing, order management, payment processing, customer support, shipping, and analytics." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <div className="pt-16">
          {/* Hero Section */}
          <VideoBackground videoSrc="/vedios/vedio5.mp4" className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Our Complete
                  <span className="block text-indigo-200">Service Suite</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                  From product listing to customer support, we provide every service you need 
                  to build and scale your e-commerce business successfully.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/about" className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg text-center">
                    Explore
                  </Link>
                  <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 text-center">
                    Reach Out
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
          </VideoBackground>

          {/* Services Overview Section */}
          <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Six Core Services
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Each service is designed to work seamlessly with the others, creating a unified e-commerce ecosystem
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={service.id} id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-')} className="group">
                    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-600">
                      <div className="relative overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="text-4xl mb-2">{service.icon}</div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                                                 <Link href={`/services/${service.slug}`} className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300 group-hover:shadow-lg text-center block">
                           Know More
                         </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  How Our Services Work Together
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  A seamless integration that creates a powerful e-commerce ecosystem
                </p>
              </div>
              
              <div className="relative">
                {/* Connection Lines */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-200 dark:bg-indigo-800 transform -translate-y-1/2"></div>
                
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                   {services.map((service, index) => (
                     <div key={service.id} className="relative">
                       <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700 relative z-10">
                         <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                           <div className="w-8 h-8 flex items-center justify-center">
                             {service.icon}
                           </div>
                         </div>
                         <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                           {service.title}
                         </h3>
                         <div className="text-xs text-gray-500 dark:text-gray-400">
                           Step {index + 1}
                         </div>
                       </div>
                       
                       {/* Connection Arrow */}
                       {index < services.length - 1 && (
                         <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                           <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                           </svg>
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Real feedback from businesses using our comprehensive service suite
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-600 h-full">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonial.role}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Service Package Pricing
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Choose the package that fits your business needs and scale as you grow
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`relative ${index === 1 ? 'transform scale-105' : ''}`}>
                    {index === 1 && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className={`bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border-2 ${index === 1 ? 'border-indigo-600' : 'border-gray-100 dark:border-gray-600'} h-full`}>
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.plan}</h3>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{plan.price}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
                      </div>
                      
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link href="/contact" className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors duration-300 text-center block ${
                        index === 1 
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}>
                        {index === 1 ? 'Get Started' : 'Choose Plan'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Service Excellence by Numbers
                </h2>
                <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                  Proven results that speak for themselves
                </p>
              </div>
              
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {stats.map((stat, index) => (
                   <div key={index} className="text-center">
                     <div className="flex justify-center items-center mb-3">
                       <div className="w-16 h-16 flex items-center justify-center">
                         {stat.icon}
                       </div>
                     </div>
                     <div className="text-4xl md:text-5xl font-bold text-indigo-200 mb-2">
                       {stat.number}
                     </div>
                     <div className="text-indigo-100 font-medium">
                       {stat.label}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your E-commerce Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Let our team of experts help you choose the right services and get started today
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
                  Schedule a Consultation
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 text-center">
                  Get a Custom Quote
                </Link>
              </div>
              
              <p className="text-indigo-200 mt-6 text-sm">
                Questions? Contact our services team at services@shophub.com
              </p>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
