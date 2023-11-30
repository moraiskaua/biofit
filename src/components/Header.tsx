import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo-biofit.png';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  return (
    <nav
      className={`${
        isScrolled ? 'bg-dark-gray' : 'bg-transparent'
      } flex items-center justify-between fixed w-full px-16 z-20 transition-all duration-500 easy-in`}
    >
      <Link href="#home">
        <Image src={logo} width={180} height={120} alt="Logo" className="" />
      </Link>

      <ul className="flex gap-10 mr-10 text-white">
        <Link
          href="#about"
          className="opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out"
        >
          <li>Sobre Nós</li>
        </Link>
        <Link
          href="#categories"
          className="opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out"
        >
          <li>Turmas</li>
        </Link>
        <Link
          href="#calculator"
          className="opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out"
        >
          <li>Calculadora</li>
        </Link>
        <Link
          href="#contact"
          className="opacity-70 hover:opacity-100 transition-all hover:scale-105 duration-300 easy-in-out"
        >
          <li>Contato</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
