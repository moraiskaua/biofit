import { FaRegClock } from 'react-icons/fa6';

const Card = () => {
  return (
    <section className="h-screen">
      <div className="w-[330px] h-[300px] relative z-10 rounded-tl-3xl rounded-br-3xl bg-white flex flex-col justify-center items-center shadow-xl">
        <span>
          <FaRegClock color="orange" size={40} />
        </span>
        <span className="font-bold text-2xl p-3">PROGRESSO</span>
        <p className="text-center text-md w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          aspernatur assumenda vero aperiam maiores.
        </p>
      </div>
    </section>
  );
};

export default Card;
