import { ButtonHTMLAttributes, ReactNode } from 'react';

interface GreatButtonProps {
  children: ReactNode;
  isReserveButton: boolean;
}

const GreatButton = ({ children, isReserveButton }: GreatButtonProps) => {
  return (
    <button
      className={`${
        isReserveButton
          ? `uppercase text-white bg-orange mt-9 flex justify-center items-center gap-3 relative py-4 px-5 w-96 border-none rounded-sm after:content-[''] after:absolute after:-top-3 after:-right-3 after:bottom-3 after:left-3 after:border-2 after:border-orange after:bg-transparent after:rounded-sm`
          : `text-black bg-white flex justify-center items-center gap-3 relative py-4 px-5 w-60 border-none rounded-sm after:content-[''] after:absolute after:-top-3 after:-right-3 after:bottom-3 after:left-3 after:border-2 after:border-white after:bg-transparent after:rounded-sm`
      }`}
    >
      {children}
    </button>
  );
};

export default GreatButton;
