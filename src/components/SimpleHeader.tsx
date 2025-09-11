import React from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import Link from "next/link";

export default function SimpleHeader() {
  const { t } = useLanguage();

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-20 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/home1" className="flex items-center">
                <Image
                  src="/logo-stackly.png"
                  alt={t('common.ecommerceLogo')}
                  className="w-28 h-8"
                  height={32}
                  width={112}
                />
              </Link>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
