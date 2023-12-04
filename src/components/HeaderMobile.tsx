import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../../public/assets/images/logo-biofit.png';
import { useMediaQuery } from 'react-responsive';

interface HeaderProps {
  isScrolled: boolean;
}

const HeaderMobile = ({ isScrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`${isMobile ? 'flex' : 'hidden'} ${
        isScrolled ? 'bg-dark-gray' : 'bg-transparent'
      } flex items-center justify-between w-full fixed px-4 sm:px-8 lg:px-16 z-20 transition-all duration-500 ease-in`}
    >
      <Link href="#home">
        <Image src={logo} width={180} height={120} alt="Logo" />
      </Link>

      <span className="z-20">
        <Hamburger toggled={isOpen} toggle={handleToggleIsOpen} color="#fff" />
      </span>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full bg-dark-gray p-8">
          <ul className="flex flex-col items-center mt-8 text-white gap-2">
            <Link href="#about">Sobre Nós</Link>
            <Link href="#categories">Turmas</Link>
            <Link href="#calculator">Calculadora</Link>
            <Link href="#contact">Contato</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HeaderMobile;
