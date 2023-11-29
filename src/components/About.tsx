import Cards from '@/components/Cards';
import { cardsMock } from './cards-mock';
import GreatTitle from './GreatTitle';
import GreatButton from './GreatButton';
import { FaArrowRightLong as Arrow } from 'react-icons/fa6';
import ginasta from '../../public/assets/images/modelos/ginasta-modelo.png';
import Image from 'next/image';

const About = () => {
  return (
    <section className="max-h-screen flex flex-col bg-paper-texture">
      <div className="h-full max-w-[1100px] mx-auto">
        <div className="flex justify-between">
          {cardsMock.map(card => (
            <Cards
              key={card.text}
              icon={card.icon}
              text={card.text}
              description={card.description}
            />
          ))}
        </div>

        <div className="flex justify-between items-center -mb-[45px]">
          <div className="max-w-[700px]">
            <GreatTitle title="Sobre Nós" />
            <h1 className="font-extrabold w-[80%] tracking-[-0.08em] text-5xl my-3 uppercase">
              Te daremos força, saúde e resultados!
            </h1>
            <p className="w-[70%]">
              Na Biofit, estamos dedicados a transformar seu sonho de um corpo
              incrível em realidade! Nossos treinadores especializados vão criar
              um plano personalizado de fitness para superar suas metas.
              Descubra seu potencial máximo e alcance resultados
              extraordinários!
            </p>

            <GreatButton isReserveButton>
              Agende sua aula experimental <Arrow />
            </GreatButton>
          </div>
          <div>
            <Image src={ginasta} alt="Ginasta" width={430} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
