import { ReactNode } from 'react';

interface CardsProps {
  icon: ReactNode;
  text: string;
  description: string;
}

const Cards = ({ icon, text, description }: CardsProps) => {
  return (
    <div className="w-[330px] h-[300px] relative z-10 rounded-tl-3xl rounded-br-3xl bg-white flex flex-col justify-center items-center shadow-xl -mt-14">
      {icon}
      <h2 className="font-bold text-2xl p-3">{text}</h2>
      <p className="text-center text-base w-[80%]">{description}</p>
    </div>
  );
};

export default Cards;
