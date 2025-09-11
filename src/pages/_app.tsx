import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import ScrollToTop from "@/components/ScrollToTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Error from "next/error";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Scroll to top when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Handle errors
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode || 500} />;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <Component {...pageProps} />
        <ScrollToTop />
      </LanguageProvider>
    </ThemeProvider>
  );
}
