import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <Header isScrolled={isScrolled} />
      <Component {...pageProps} />
    </>
  );
}
