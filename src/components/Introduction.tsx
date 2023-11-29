import GreatButton from '@/components/GreatButton';
import { FaArrowRightLong as Arrow } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section
      className="h-screen m-auto flex flex-col justify-center items-center bg-header-cover bg-cover relative shadow-2xl"
      id="home"
    >
      <div className="flex justify-start pl-24 items-center w-full">
        <div className="text-white tracking-[-0.2em] mb-20">
          <h1 className="text-7xl font-bold">SUPERE SEUS LIMITES</h1>
          <h2 className="sub-title text-5xl font-bold text-transparent">
            CONQUISTE NOVOS RESULTADOS
          </h2>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center gap-x-4 absolute text-white -rotate-90 -right-8 font-bold">
        CONECTE-SE
        <FaInstagram size={28} className="rotate-90" />
        <FaYoutube size={28} className="rotate-90" />
        <FaFacebook size={28} className="rotate-90" />
      </div>

      <GreatButton isReserveButton={false}>
        Nossas turmas <Arrow />
      </GreatButton>
    </section>
  );
};

export default Introduction;
