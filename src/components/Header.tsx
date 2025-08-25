import React, { useState, useEffect } from "react";
import { ModeToggle } from "./theme/ModeToggle";
import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Product Listing", href: "/services/product-listing" },
  { name: "Order Management", href: "/services/order-management" },
  { name: "Payment Gateway", href: "/services/payment-gateway" },
  { name: "Customer Support", href: "/services/customer-support" },
  { name: "Shipping & Delivery", href: "/services/shipping-delivery" },
  { name: "Analytics & Reports", href: "/services/analytics-reports" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [homeTimeout, setHomeTimeout] = useState<NodeJS.Timeout | null>(null);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    window.location.href = '/';
  };

  const handleHomeMouseEnter = () => {
    if (homeTimeout) clearTimeout(homeTimeout);
    setHomeDropdown(true);
  };

  const handleHomeMouseLeave = () => {
    const timeout = setTimeout(() => setHomeDropdown(false), 150);
    setHomeTimeout(timeout);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) clearTimeout(servicesTimeout);
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => setServicesDropdown(false), 150);
    setServicesTimeout(timeout);
  };

  return (
    <header className={``}>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-20 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/home1" className="flex items-center">
                <Image
                  src="/logo-stackly.png"
                  alt="E-Commerce Logo"
                  className="w-28 h-8"
                  height={32}
                  width={32}
                />
                
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center space-x-4">
              {/* Home Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleHomeMouseEnter}
                onMouseLeave={handleHomeMouseLeave}
              >
                <Link href="/home1">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                    Home
                  </button>
                </Link>
                {homeDropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg z-30"
                    onMouseEnter={handleHomeMouseEnter}
                    onMouseLeave={handleHomeMouseLeave}
                  >
                    <Link
                      href="/home1"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Home1
                    </Link>
                    <Link
                      href="/home2"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Home2
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                About Us
              </Link>
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <Link href="/services">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                    Services
                  </button>
                </Link>
                {servicesDropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-30"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Contact Us
              </Link>
              {/* User Menu */}
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  {currentUser.role === 'admin' && (
                    <Link
                      href="/dashboard"
                      className="px-3 py-2 rounded-md text-sm font-medium text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      Dashboard
                    </Link>
                  )}
                  {/* User Avatar */}
                  <div className="relative group">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors">
                      <span className="text-white font-bold text-sm">
                        {currentUser.username ? currentUser.username.substring(0, 2).toUpperCase() : 'U'}
                      </span>
                    </div>
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                          Welcome, {currentUser.username}
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href="/auth"
                  className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  Login
                </Link>
              )}
              {/* Dark Mode Toggle */}
              <ModeToggle />
            </div>
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                aria-label="Main menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              {/* Dark Mode Toggle */}
              <ModeToggle />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1">
            {/* Home Dropdown */}
            <div>
              <div className="flex items-center">
                <Link href="/home1" className="flex-1">
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                    Home
                  </button>
                </Link>
                <button
                  onClick={() => setHomeDropdown(!homeDropdown)}
                  className="px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {homeDropdown && (
                <div className="pl-4">
                  <Link
                    href="/home1"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home1
                  </Link>
                  <Link
                    href="/home2"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home2
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About Us
            </Link>
            {/* Services Dropdown */}
            <div>
              <div className="flex items-center">
                <Link href="/services" className="flex-1">
                  <button className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                    Services
                  </button>
                </Link>
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {servicesDropdown && (
                <div className="pl-4">
                  <Link
                    href="/services"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact Us
            </Link>
            {/* User Menu Mobile */}
            {currentUser ? (
              <>
                <div className="flex items-center space-x-3 px-3 py-2">
                  {/* User Avatar Mobile */}
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {currentUser.username ? currentUser.username.substring(0, 2).toUpperCase() : 'U'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-200">
                    Welcome, {currentUser.username}
                  </div>
                </div>
                {currentUser.role === 'admin' && (
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/auth"
                className="block px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
