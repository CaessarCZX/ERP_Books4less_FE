import { ButtonHTMLAttributes, FC } from 'react';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'color' | 'outlineColor' | 'black' | 'outlineBlack';
  className?: string;
  fullWidth?: boolean;
}

export const Button: FC<BtnProps> = ({
  children,
  className,
  fullWidth = false,
  variant = 'default',
  ...props
}) => {
  const baseStyles = `
    inline-flex justify-center items-center px-4 py-3 mb-2 font-bold text-center uppercase align-middle transition-all border border-solid rounded-lg cursor-pointer hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight shadow-soft-md
    ${fullWidth && 'w-full'}
  `;

  const variantStyles = {
    default: '',
    color: `
      bg-gradient-to-tl from-purple-700 to-pink-500 text-white border-transparent
      xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0
      bg-fuchsia-500 hover:border-fuchsia-500
    `,
    outlineColor: `
      bg-transparent text-fuchsia-500 border-fuchsia-500 bg-none
      xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0
    `,
    black: `
      mb-4 border-0 bg-transparent bg-gradient-to-tl from-gray-900 to-slate-800 px-6 py-3 text-white
    `,
    outlineBlack: `
      mb-4 border border-solid border-slate-700 bg-transparent px-6 py-3 text-slate-700 shadow-none hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonStates: FC<
  BtnProps & { changeState: boolean | undefined }
> = ({ children, className, changeState, ...props }) => {
  return (
    <button
      className={`px-6 py-2 ${
        changeState
          ? 'bg-red-500 hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-900'
          : 'bg-brand-default hover:bg-brand-hover dark:bg-blue-600 dark:hover:bg-blue-700'
      } rounded-md text-white shadow focus:outline-none disabled:bg-gray-400 dark:disabled:bg-gray-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
