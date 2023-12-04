import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface GreatButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  reserve?: boolean;
  href?: string;
}

const GreatButton = ({
  children,
  reserve,
  href,
  ...props
}: GreatButtonProps) => {
  return (
    <button
      onClick={() => (href ? (window.location.href = href) : '')}
      className={`${
        reserve
          ? `text-white bg-orange mt-9 flex justify-center items-center gap-3 relative py-4 px-5 max-w-80 border-none rounded-sm uppercase after:content-[''] after:absolute after:-top-3 after:-right-3 after:bottom-3 after:left-3 after:border-2 after:border-orange after:bg-transparent after:rounded-sm hover:after:-top-1.5 hover:after:-right-1.5 hover:after:bottom-1 hover:after:left-1 hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:ease-out after:transition-all after:duration-500 hover:after:opacity-40`
          : `text-black bg-white flex justify-center items-center gap-3 relative py-4 px-5 max-w-52 border-none rounded-sm after:content-[''] after:absolute after:-top-3 after:-right-3 after:bottom-3 after:left-3 after:border-2 after:border-white after:bg-transparent after:rounded-sm hover:after:-top-1.5 hover:after:-right-1.5 hover:after:bottom-1 hover:after:left-1 hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:ease-out after:transition-all after:duration-500 hover:after:opacity-70`
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GreatButton;
