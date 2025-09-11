import { ModeToggle } from "@/components/theme/ModeToggle";
import Head from "next/head";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useRouter } from "next/router";

export default function Home() {
  const { t, currentLanguage, isRTL } = useLanguage();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 pt-20">
          <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
            <LanguageSelector />
            <ModeToggle />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10 flex flex-col items-center max-w-md w-full">
            <Image
              src="/logo-stackly.png"
              alt={t('common.ecommerceLogo')}
              className="  mb-4"
              height={200}
              width={200}
            />
            <h1 className="text-4xl font-extrabold text-purple-700 dark:text-purple-400 mb-2">
              {t('home.welcomeTitle')} {t('home.brandName')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              {t('home.welcomeDescription')}
            </p>
            <button
              className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-2"
              onClick={() => router.push("/auth")}
            >
              {t('home.goToLogin')}
            </button>
          </div>
        </div>
      </>
    </>
  );
}
