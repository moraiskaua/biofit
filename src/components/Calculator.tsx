import Image from 'next/image';
import GreatTitle from './GreatTitle';
import modeloImc from '../../public/assets/images/modelos/modelo-imc.png';
import { FormEvent, useState } from 'react';

const levels = [
  { title: 'Magro', imc: [0, 18.5] },
  { title: 'Peso ideal', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', imc: [25, 30] },
  { title: 'Obesidade', imc: [30.1, 99] },
];

const calculateIMC = (weight: number, height: number) => {
  if (height > 10) {
    height = height / 100;
  }
  return weight / (height * height);
};

const determineIMCLevel = (imc: number) => {
  for (let level of levels) {
    if (imc >= level.imc[0] && imc < level.imc[1]) {
      return { ...level, yourImc: parseFloat(imc.toFixed(2)) };
    }
  }

  return null;
};

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [imc, setImc] = useState(0);

  const handleCalculateIMC = (e: FormEvent) => {
    e.preventDefault();
    const imc = calculateIMC(Number(weight), Number(height));
    const level = determineIMCLevel(imc);

    if (level) {
      setResult(level.title);
      setImc(level.yourImc);
    }
  };

  return (
    <section className="flex bg-paper-texture" id="calculator">
      <div className="w-full max-w-[1100px] h-[577px] flex flex-col-reverse md:flex-row md:justify-between md:items-end md:mx-auto">
        <Image
          src={modeloImc}
          alt="Modelo IMC"
          width={480}
          className="-mb-[45px] md:w-full"
        />
        <div className="h-full w-full flex flex-col justify-center items-center md:items-start">
          <GreatTitle title="Calculadora" />
          <h1 className="font-extrabold tracking-[-0.08em] text-3xl md:text-5xl my-2 md:my-3 uppercase">
            VAMOS MEDIR SEU ÍNDICE <br /> DE{' '}
            <span className="text-orange">MASSA CORPORAL</span>
          </h1>
          <p className="text-sm md:text-base w-[80%] mb-3">
            O IMC, ou Índice de Massa Corporal, relaciona peso e altura.
            Calculado como peso dividido pela altura ao quadrado, categoriza em
            faixas como abaixo do peso, peso normal, sobrepeso e obesidade.
          </p>

          <form onSubmit={handleCalculateIMC}>
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <input
                  className="p-2 border border-black outline-none"
                  type="number"
                  placeholder="Peso / Kg"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  min={10}
                />
                <div className="p-2 bg-light-gray font-bold border border-black border-t-0">
                  Seu IMC é: <span className="font-normal">{imc}</span>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <input
                  className="p-2 border border-black outline-none"
                  type="number"
                  placeholder="Altura / Cm"
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  min={55}
                />
                <div className="p-2 bg-light-gray font-bold border border-black border-t-0">
                  Resultado: <span className="font-normal">{result}</span>
                </div>
              </div>
            </div>
            <button
              className="w-full py-3 border border-black bg-orange my-4 text-white"
              type="submit"
            >
              Calcular
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
