import { ButtonHTMLAttributes, FC } from 'react';

type ButtonVariant =
  | 'default'
  | 'color'
  | 'outlineColor'
  | 'black'
  | 'outlineBlack';

/**
 * IMPORTANT: The 'disabled:' directive was not used because
 * the component uses a gradient background that affects the
 * behavior of the disabled component.
 */

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  fullWidth?: boolean;
  noMargin?: boolean;
}

export const Button: FC<BtnProps> = ({
  children,
  className,
  fullWidth = false,
  variant = 'default',
  disabled,
  noMargin = false,
  ...props
}) => {
  const baseStyles = `
    inline-flex
    justify-center
    items-center
    px-4
    py-3
    font-bold
    text-center
    uppercase
    align-middle
    transition-all
    border
    border-solid
    rounded-lg
    hover:shadow-soft-xs
    active:opacity-85
    leading-pro
    text-xs
    ease-soft-in
    tracking-tight
    shadow-soft-md;
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-forbidden hover:scale-102' : 'cursor-pointer hover:scale-102'}
    ${noMargin ? '' : 'mb-2'}
  `;

  const variantStyles = {
    default: '',
    color: `
      text-white
      border-transparent
      ${
        disabled
          ? `bg-gray-400 dark:bg-gray-600`
          : 'bg-gradient-to-tl from-purple-700 to-pink-500 bg-fuchsia-500 hover:border-fuchsia-500'
      }
    `,
    outlineColor: `
      bg-none
      ${
        disabled
          ? 'border-gray-400 dark:border-gray-600'
          : 'bg-transparent text-fuchsia-500 border-fuchsia-500'
      }
    `,
    black: `
      border-0
      px-6
      py-3
      text-white
      ${
        disabled
          ? 'bg-gray-400 dark:bg-gray-600 hover:border-none'
          : 'bg-transparent bg-gradient-to-tl from-gray-900 to-slate-800'
      }
    `,
    outlineBlack: `
      border
      bg-transparent
      px-6
      py-3
      shadow-none
      hover:bg-transparent
      hover:shadow-none
      ${
        disabled
          ? 'text-gray-400 dark:text-gray-600 border-gray-400 dark:border-gray-600 hover:text-gray-400 dark:hover:text-gray-600'
          : 'border-solid border-slate-700 text-slate-700 hover:text-slate-700'
      }
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className || ''} disabled:cursor-forbidden`}
      disabled={disabled}
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
