import Cards from '@/components/Cards';
import { cardsMock } from './mocks/cards-mock';
import GreatTitle from './GreatTitle';
import GreatButton from './GreatButton';
import { FaArrowRightLong as Arrow } from 'react-icons/fa6';
import ginasta from '../../public/assets/images/modelos/ginasta-modelo.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const About = () => {
  return (
    <section className="max-h-screen flex flex-col bg-paper-texture" id="about">
      <div className="h-full w-full max-w-[1100px] mx-auto">
        {/* Mobile */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
          >
            {cardsMock.map(card => (
              <SwiperSlide key={card.text}>
                <Cards
                  icon={card.icon}
                  text={card.text}
                  description={card.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:hidden">
          <div className="w-full flex flex-col items-center text-center">
            <GreatTitle title="Sobre Nós" />
            <h1 className="font-extrabold tracking-[-0.08em] text-4xl my-3 uppercase">
              Te daremos força, saúde e resultados!
            </h1>
            <p className="text-sm text-justify p-5">
              Na Biofit, estamos dedicados a transformar seu sonho de um corpo
              incrível em realidade! Nossos treinadores especializados vão criar
              um plano personalizado de fitness para superar suas metas.
              Descubra seu potencial máximo e alcance resultados
              extraordinários!
            </p>

            <GreatButton
              onClick={() =>
                window.open(
                  `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
                  '_blank',
                )
              }
              reserve
            >
              Agende sua aula experimental <Arrow />
            </GreatButton>
            <div className="mt-5 flex justify-end">
              <Image src={ginasta} alt="Ginasta" width={320} />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex justify-between">
          {cardsMock.map(card => (
            <Cards
              key={card.text}
              icon={card.icon}
              text={card.text}
              description={card.description}
            />
          ))}
        </div>

        <div className="hidden lg:flex justify-between items-center -mb-[45px]">
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

            <GreatButton
              onClick={() =>
                window.open(
                  `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
                  '_blank',
                )
              }
              reserve
            >
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
