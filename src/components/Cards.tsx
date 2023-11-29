import { ReactNode } from 'react';

interface CardsProps {
  icon: ReactNode;
  text: string;
  description: string;
}

const Cards = ({ icon, text, description }: CardsProps) => {
  return (
    <div className="w-[330px] h-[300px] relative z-10 rounded-tl-3xl rounded-br-3xl bg-white flex flex-col items-center shadow-2xl -mt-14 mb-16">
      <span className="mt-12 mb-4">{icon}</span>
      <h2 className="font-bold text-2xl mb-3">{text}</h2>
      <p className="text-center text-base leading-4 w-[80%]">{description}</p>
    </div>
  );
};

export default Cards;
