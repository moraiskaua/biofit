import logo from '../../public/assets/images/logo-biofit.png';
import { FaFacebook } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full mt-12 bg-dark-gray grid grid-cols-3 content-center text-white/50 p-12 ">
      <div>
        <Link href="#home">
          <Image src={logo} width={180} alt="Logo" />
        </Link>
        <p className="font-light max-w-[60%] text-justify">
          Eleve sua saúde e corpo para o próximo nível com nosso programa
          abrangente projetado para ajudá-lo a alcançar seus objetivos de
          condicionamento físico.
        </p>
        <div className="flex gap-5 py-4">
          <FaFacebook
            size={28}
            className="hover:scale-110 cursor-pointer transition-all"
          />
          <FaInstagram
            size={28}
            className="hover:scale-110 cursor-pointer transition-all"
          />
          <FaYoutube
            size={28}
            className="hover:scale-110 cursor-pointer transition-all"
          />
        </div>
        <div className="flex flex-col">
          <span>Todos os direitos reservados. | © 2023 Biofit</span>
          <span>
            Desenvolvido por{' '}
            <strong
              className="cursor-pointer hover:underline"
              onClick={() =>
                window.open('https://github.com/JefersonLRS', '_blank')
              }
            >
              JefersonLRS
            </strong>{' '}
            e{' '}
            <strong
              className="cursor-pointer hover:underline"
              onClick={() =>
                window.open('https://github.com/moraiskaua', '_blank')
              }
            >
              KauaMorais
            </strong>
            .
          </span>
        </div>
      </div>
      <div>
        <h4 className="uppercase text-white relative before:content-[''] before:absolute before:border-b-orange before:border-b-4 before:w-20 before:left-0 before:-bottom-1 font-bold">
          Nossas Turmas
        </h4>
        <nav className="flex flex-col mt-9 gap-2">
          <Link
            href="#categories"
            className="hover:text-white transition-colors"
          >
            Pilates
          </Link>
          <Link
            href="#categories"
            className="hover:text-white transition-colors"
          >
            Ritmos
          </Link>
          <Link
            href="#categories"
            className="hover:text-white transition-colors"
          >
            Boxe Chinês
          </Link>
          <Link
            href="#categories"
            className="hover:text-white transition-colors"
          >
            Jiu Jitsu
          </Link>
          <Link
            href="#categories"
            className="hover:text-white transition-colors"
          >
            Spinning
          </Link>
          <Link
            href="#categories"
            className="hover:text-white transition-colors"
          >
            Abdominal
          </Link>
          <Link
            href="#categories"
            className="hover:text-white transition-colors"
          >
            Mobilidades
          </Link>
        </nav>
      </div>
      <div>
        <h4 className="uppercase text-white relative before:content-[''] before:absolute before:border-b-orange before:border-b-4 before:w-32 before:left-0 before:-bottom-1 font-bold mb-9">
          Horário de Funcionamento
        </h4>
        <h6 className="uppercase text-white font-bold">SEGUNDA A SEXTA:</h6>
        <span>06:00 - 23:00</span>
        <h6 className="uppercase text-white font-bold mt-3.5">SÁBADO:</h6>
        <span>08:00 - 13:00</span>
        <h6 className="uppercase text-white font-bold mt-3.5">
          DOMINGO - FECHADO
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
