import { ReactNode } from 'react';
import '../styles/Formulario.css';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      type="button"
      className={`inline-block px-8 py-6 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md hover:scale-102 active:opacity-85 hover:shadow-soft-xs ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
