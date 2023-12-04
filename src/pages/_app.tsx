import Header from '@/components/Header';
import HeaderMobile from '@/components/HeaderMobile';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function App({ Component, pageProps }: AppProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 70 ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Biofit</title>
      </Head>
      {isMobile ? (
        <HeaderMobile isScrolled={isScrolled} />
      ) : (
        <Header isScrolled={isScrolled} />
      )}
      <Component {...pageProps} />
    </>
  );
}
