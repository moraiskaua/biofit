import { CategoryProps } from './Categories';
import GreatButton from './GreatButton';
import { FaArrowRightLong as Arrow } from 'react-icons/fa6';
import { IoIosClose as Close } from 'react-icons/io';

interface ModalProps {
  onClose: () => void;
  category: CategoryProps;
}

const Modal = ({ onClose, category }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-20 overflow-y-auto bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="relative bg-white rounded-lg w-[670px]"
          onClick={e => e.stopPropagation()}
        >
          <div
            className="absolute -right-6 -top-6 z-10 cursor-pointer bg-black rounded-full"
            onClick={onClose}
          >
            <Close size={45} fill="white" />
          </div>
          <div className="relative ">
            <img
              src={category.image}
              alt="Imagem"
              className="w-full h-52 object-cover object-center rounded-t-lg"
            />
            <h1 className="font-bold text-2xl my-3 absolute bottom-7 left-6 text-white">
              {category.name}
            </h1>
            <h2 className="font-bold text-base absolute bottom-3 left-6 text-white bg-orange px-2">
              {category.hour}
            </h2>
          </div>

          <div className="flex flex-col mx-auto py-4 w-[80%]">
            <h1 className="font-bold text-4xl tracking-[-0.05em] mt-3 uppercase text-left">
              {category.title}
            </h1>
            <h2 className="font-light tracking-[-0.05em] text-lg mb-5 uppercase">
              {category.subtitle}
            </h2>
            <p className="text-gray-500 font-extralight text-sm text-justify">
              {category.description}
            </p>
            <div className="mb-6 mx-auto">
              <GreatButton href="#" onClick={onClose} isReserveButton>
                Agende sua aula experimental <Arrow />
              </GreatButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
