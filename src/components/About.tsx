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
      <div className="h-full max-w-[1440px] mx-auto">
        <div className="flex gap-36">
          {cardsMock.map(card => (
            <Cards
              key={card.text}
              icon={card.icon}
              text={card.text}
              description={card.description}
            />
          ))}
        </div>

        <div className="flex justify-between items-center -mb-[120px]">
          <div className="max-w-[550px]">
            <GreatTitle title="Sobre Nós" />
            <h1 className="font-bold text-6xl mb-2">
              Te daremos força, saúde e resultados!
            </h1>
            <p>
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
            <Image src={ginasta} alt="Ginasta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
