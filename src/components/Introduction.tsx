import GreatButton from '@/components/GreatButton';
import { FaArrowRightLong as Arrow, FaWhatsapp } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section
      className="h-screen m-auto flex flex-col justify-center items-center bg-header-cover bg-cover bg-center relative shadow-2xl"
      id="home"
    >
      <div className="flex justify-start pl-11 lg:pl-24 items-center w-full mb-12">
        <div className="text-white tracking-[-0.2em] mb-20">
          <h1 className="text-7xl font-bold">
            SUPERE{' '}
            <span className="block md:inline sub-title text-transparent text-8xl lg:text-white lg:text-7xl">
              SEUS
            </span>{' '}
            LIMITES
          </h1>
          <h2 className="hidden lg:block sub-title text-5xl font-bold text-transparent">
            CONQUISTE NOVOS RESULTADOS
          </h2>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden gap-x-4 absolute text-white bottom-16">
        <FaInstagram
          size={28}
          className="hover:scale-125 cursor-pointer transition-all"
          onClick={() =>
            window.open('https://www.instagram.com/biofitqnj/', '_blank')
          }
        />
        <FaYoutube
          size={28}
          className="hover:scale-125 cursor-pointer transition-all"
          onClick={() =>
            window.open(
              'https://www.youtube.com/@fitbrothersoficial6096',
              '_blank',
            )
          }
        />
        <FaFacebook
          size={28}
          className="hover:scale-125 cursor-pointer transition-all"
          onClick={() =>
            window.open('https://www.facebook.com/biofitqnj', '_blank')
          }
        />
        <FaWhatsapp
          size={28}
          className="hover:scale-125 cursor-pointer transition-all"
          onClick={() =>
            window.open(
              `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
              '_blank',
            )
          }
        />
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex flex-row-reverse items-center gap-x-4 absolute text-white -rotate-90 -right-8 font-bold">
        CONECTE-SE
        <FaInstagram
          size={28}
          className="rotate-90 hover:scale-125 cursor-pointer transition-all"
          onClick={() =>
            window.open('https://www.instagram.com/biofitqnj/', '_blank')
          }
        />
        <FaYoutube
          size={28}
          className="rotate-90 hover:scale-125 cursor-pointer transition-all"
          onClick={() =>
            window.open(
              'https://www.youtube.com/@fitbrothersoficial6096',
              '_blank',
            )
          }
        />
        <FaFacebook
          size={28}
          className="rotate-90 hover:scale-125 cursor-pointer transition-all"
          onClick={() =>
            window.open('https://www.facebook.com/biofitqnj', '_blank')
          }
        />
        <FaWhatsapp
          size={28}
          className="rotate-90 hover:scale-125 cursor-pointer transition-all"
          onClick={() =>
            window.open(
              `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
              '_blank',
            )
          }
        />
      </div>

      <GreatButton href="#categories">
        Nossas turmas <Arrow />
      </GreatButton>
    </section>
  );
};

export default Introduction;
