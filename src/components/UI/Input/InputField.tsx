import { FC, ReactNode } from 'react';
import InputBase from './Input';
import { CommonBorder } from './Input';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  validationState?: 'success' | 'error' | 'default';
}

const InputField: FC<InputFieldProps> = ({
  label,
  icon,
  id,
  className,
  validationState = 'default',
  ...props
}) => {
  //For validation feedback border
  const borderClass =
    validationState === 'success'
      ? 'border-green-500 focus:border-green-500'
      : validationState === 'error'
        ? 'border-red-500 focus:border-red-500'
        : CommonBorder;
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="mb-3 block text-sm font-medium text-black dark:text-white"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && <span className="absolute top-4 left-4.5">{icon}</span>}
        <InputBase
          id={id}
          className={`px-4.5 ${icon && 'pl-11.5'} ${borderClass} ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputField;
