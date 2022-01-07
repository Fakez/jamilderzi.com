import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'
import { useTranslation } from "react-i18next";
import Script from 'next/script';


export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{t('common:title')}</title>
        <meta property="og:title" content={t('common:title')} />
        <meta name="description" content={t('common:meta-description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/meta-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script
        id="analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"drzjamil@gmail.com",utcoffset:"-3"}))};sessionStorage.setItem("_swa","1");`
        }}>
      </Script>

      <Header />
      <main className=''>
        {children}
      </main>
      <Footer />
      {/* <ScrollToTopButton /> */}
    </>
  )
}