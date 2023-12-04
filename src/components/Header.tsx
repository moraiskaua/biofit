import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo-biofit.png';
import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [active, setActive] = useState('');

  const handleScroll = () => {
    const sections = ['home', 'about', 'categories', 'calculator', 'contact'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? 'bg-dark-gray' : 'bg-transparent'
      } flex items-center justify-between fixed w-full px-16 z-20 transition-all duration-500 easy-in`}
    >
      <Link href="#home" onClick={() => setActive('')}>
        <Image src={logo} width={180} height={120} alt="Logo" className="" />
      </Link>

      <ul className="flex gap-10 mr-10 text-white border-b-2 border-b-transparent">
        <Link
          href="#about"
          className={`${
            active === 'about'
              ? 'border-b-2 border-b-orange opacity-100'
              : 'border-b-2 border-transparent'
          } opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out`}
        >
          <li>Sobre Nós</li>
        </Link>
        <Link
          href="#categories"
          className={`${
            active === 'categories'
              ? 'border-b-2 border-b-orange opacity-100'
              : 'border-b-2 border-transparent'
          } opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out`}
        >
          <li>Turmas</li>
        </Link>
        <Link
          href="#calculator"
          className={`${
            active === 'calculator'
              ? 'border-b-2 border-b-orange opacity-100'
              : 'border-b-2 border-transparent'
          } opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out`}
        >
          <li>Calculadora</li>
        </Link>
        <Link
          href="#contact"
          className={`${
            active === 'contact'
              ? 'border-b-2 border-b-orange opacity-100'
              : 'border-b-2 border-transparent'
          } opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out`}
        >
          <li>Contato</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
