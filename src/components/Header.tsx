import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo-biofit.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between fixed w-full px-16">
      <Image src={logo} width={180} height={120} alt="Logo" className="" />

      <ul className="flex gap-7 mr-10 text-white">
        <Link href="#about">
          <li>Sobre Nós</li>
        </Link>
        <Link href="#about">
          <li>Turmas</li>
        </Link>
        <Link href="#about">
          <li>Calculadora</li>
        </Link>
        <Link href="#about">
          <li>Contato</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
