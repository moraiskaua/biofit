import Image from 'next/image';
import nossaHistoria1 from '../../public/assets/images/nossa-historia1.png';
import nossaHistoria2 from '../../public/assets/images/nossa-historia2.png';
import targetIcon from '../../public/assets/images/target-icon.png';
import montainIcon from '../../public/assets/images/montain-icon.png';

const OurHistory = () => {
  return (
    <section className="flex justify-center mt-36">
      <div className="flex flex-col justify-center items-center shadow-2xl w-[1100px]">
        <div className="flex">
          <div className="flex justify-center items-center flex-col w-[50%] bg-white">
            <Image src={targetIcon} alt="Target icon" width={80} />
            <h2 className="font-extrabold text-2xl my-4">Nossa História</h2>
            <p className="text-center w-[70%]">
              um grupo de amigos apaixonados por saúde e bem-estar decidiu criar
              uma academia. Inspirados em suas próprias jornadas de
              condicionamento físico, eles transformaram um modesto espaço da
              cidade em um lugar acolhedor.
            </p>
          </div>
          <div className="w-[50%]">
            <Image src={nossaHistoria1} alt="Nossa história" />
          </div>
        </div>

        <div className="flex">
          <div className="w-[50%]">
            <Image src={nossaHistoria2} alt="Nossa história" />
          </div>
          <div className="flex justify-center items-center flex-col w-[50%] bg-white">
            <Image src={montainIcon} alt="Target icon" width={80} />
            <h2 className="font-extrabold text-2xl my-4">Nossa História</h2>
            <p className="text-center w-[70%]" id="categories">
              Com equipamentos conquistados e muita dedicação, a academia
              tornou-se um local onde a comunidade se reúne para se desafiar e
              celebrar conquistas. Surpreendemos nossos alunos com resultados
              incríveis e atingimos o fit em cada um!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
