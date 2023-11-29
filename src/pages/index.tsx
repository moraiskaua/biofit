import GreatButton from '@/components/GreatButton';
import { FaArrowRightLong as Arrow } from 'react-icons/fa6';

const Home = () => {
  return (
    <main className="min-h-screen bg-page-color">
      <section
        className="h-screen m-auto flex flex-col justify-center items-center bg-header-cover bg-cover"
        id="home"
      >
        <div className="flex justify-start pl-24 items-center w-full">
          <div className="text-white tracking-[-0.2em] mb-24">
            <h1 className="text-7xl font-bold">SUPERE SEUS LIMITES</h1>
            <h2 className="sub-title text-5xl font-bold text-transparent">
              CONQUISTE NOVOS RESULTADOS
            </h2>
          </div>
        </div>

        <GreatButton>
          Nossas turmas <Arrow />
        </GreatButton>
      </section>
      <section className="h-screen w-full"></section>
    </main>
  );
};

export default Home;
