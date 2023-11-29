import Cards from '@/components/Cards';
import { cardsMock } from './cards-mock';

const About = () => {
  return (
    <section className="min-h-screen flex gap-16 justify-center">
      {cardsMock.map(card => (
        <Cards
          key={card.text}
          icon={card.icon}
          text={card.text}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default About;
