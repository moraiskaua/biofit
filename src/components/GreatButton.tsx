import { ReactNode } from 'react';

interface GreatButtonProps {
  children: ReactNode;
}

const GreatButton = ({ children }: GreatButtonProps) => {
  return <button className="great-button">{children}</button>;
};

export default GreatButton;
