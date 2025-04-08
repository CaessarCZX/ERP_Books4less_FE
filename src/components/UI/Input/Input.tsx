import React from 'react';

// Note that's shadow-soft-prymary is a custom var for this project
export const CommonBorder =
  'border-gray-300 focus:border-fuchsia-300 focus:shadow-soft-primary-outline dark:border-gray-200 dark:focus:border-fuchsia-300';

const InputBase: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={`read-only:dark:bg-form-input dark:bg-meta-4 w-full rounded-lg border bg-white py-3 text-black read-only:cursor-default read-only:bg-gray-100 read-only:focus:border-none focus-visible:outline-none dark:text-white ${className}`}
      {...props}
    />
  );
};

export default InputBase;
