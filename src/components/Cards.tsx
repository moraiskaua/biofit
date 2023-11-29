import { ReactNode } from 'react';

interface CardsProps {
  icon: ReactNode;
  text: string;
  description: string;
}

const Cards = ({ icon, text, description }: CardsProps) => {
  return (
    <div className="w-[300px] h-[260px] relative rounded-tl-3xl rounded-br-3xl bg-white flex flex-col items-center shadow-2xl -mt-14 mb-16">
      <span className="mt-12 mb-4">{icon}</span>
      <h2 className="font-bold text-xl mb-3">{text}</h2>
      <p className="text-center text-sm leading-4 w-[80%] pb-4">
        {description}
      </p>
    </div>
  );
};

export default Cards;
