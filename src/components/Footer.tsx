import logo from '../../public/assets/images/logo-biofit.png';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full mt-12 bg-dark-gray grid md:grid-cols-3 content-center text-white/50 p-12">
      <div className="flex flex-col justify-center items-center text-center mb-5 md:block md:m-0">
        <Link href="#home">
          <Image src={logo} width={180} alt="Logo" />
        </Link>
        <p className="font-light md:max-w-[60%] text-justify">
          Eleve sua saúde e corpo para o próximo nível com nosso programa
          abrangente projetado para ajudá-lo a alcançar seus objetivos de
          condicionamento físico.
        </p>
        <div className="flex gap-5 py-4">
          <FaWhatsapp
            size={28}
            className="hover:scale-110 cursor-pointer transition-all"
            onClick={() =>
              window.open(
                `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
                '_blank',
              )
            }
          />
          <FaFacebook
            size={28}
            className="hover:scale-110 cursor-pointer transition-all"
            onClick={() =>
              window.open('https://www.facebook.com/biofitqnj', '_blank')
            }
          />
          <FaInstagram
            size={28}
            className="hover:scale-110 cursor-pointer transition-all"
            onClick={() =>
              window.open('https://www.instagram.com/biofitqnj/', '_blank')
            }
          />
          <FaYoutube
            size={28}
            className="hover:scale-110 cursor-pointer transition-all"
            onClick={() =>
              window.open(
                'https://www.youtube.com/@fitbrothersoficial6096',
                '_blank',
              )
            }
          />
        </div>
        <div className="flex flex-col md:flex md:text-left">
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
      <div className="mb-7 md:mb-0 flex flex-col items-center text-center md:items-start md:text-left">
        <h4 className="uppercase text-white relative before:content-[''] before:absolute before:border-b-orange before:border-b-4 before:w-20 before:left-0 before:-bottom-1 font-bold">
          Nossas Turmas
        </h4>
        <nav className="flex flex-col mt-9 gap-2 w-[20%]">
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
      <div className="flex flex-col gap-9 items-center text-center md:items-start md:text-left md:mb-0">
        <div>
          <h4 className="uppercase text-white relative before:content-[''] before:absolute before:border-b-orange before:border-b-4 before:w-32 before:left-0 before:-bottom-1 font-bold mb-9">
            Horário de Funcionamento
          </h4>
          <h6 className="uppercase text-white font-bold">SEGUNDA A SEXTA:</h6>
          <span>06:00 - 23:00</span>
          <h6 className="uppercase text-white font-bold mt-1.5">SÁBADO:</h6>
          <span>08:00 - 13:00</span>
          <h6 className="uppercase text-white font-bold mt-1.5">
            DOMINGO - FECHADO
          </h6>
        </div>
        <div className="flex flex-col text-left">
          <h4 className="uppercase text-white relative before:content-[''] before:absolute before:border-b-orange before:border-b-4 before:w-32 before:left-0 before:-bottom-1 font-bold mb-4">
            Localização
          </h4>
          <span>St. J Norte QNJ 52 - Taguatinga, Brasília - DF, 72140-520</span>
          <button
            onClick={() =>
              window.open('https://maps.app.goo.gl/48H1biufF629U9aB6', '_blank')
            }
            className="ml-4 border mt-2 py-2 px-4 border-white/50 hover:scale-105 transition-all duration-700"
          >
            Ver localização
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
