import { FaRegClock } from 'react-icons/fa6';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';

export const cardsMock = [
  {
    icon: <FaRegClock size={45} color="#F78320" />,
    text: 'Progresso',
    description: `Nossa equipe de especialistas trabalhará
    com você para criar um plano personalizado
    que o ajuda a alcançar o sucesso
    passo a passo.`,
  },
  {
    icon: <FaRegCheckCircle size={45} color="#F78320" />,
    text: 'Resultados',
    description: `Com uma variedade de treinos para escolher, você terá tudo o que precisa para entrar na melhor forma da sua vida.`,
  },
  {
    icon: <FaRegQuestionCircle size={45} color="#F78320" />,
    text: 'Suporte',
    description: `Com treinos variados e personal trainers dedicados, oferecemos tudo para sua melhor forma. Conte com orientação especializada!`,
  },
];
