import { FC } from 'react';
import { SiWikibooks } from 'react-icons/si';

const LogoApp: FC<{ variant?: 'black' | 'white' }> = ({ variant }) => {
  const colorText = variant === 'black' ? 'text-gray-900' : 'text-white';
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="max-w-min rounded-2xl bg-gradient-to-br from-purple-900 to-purple-500 p-3">
          <SiWikibooks className={`h-14 w-14 text-white md:h-19 md:w-19`} />
        </div>
        <h2
          className={`${colorText} max-w-36 text-4xl font-bold md:max-w-50 md:text-5xl`}
        >
          BOOKS 4 LESS
        </h2>
      </div>
      <p className={`${colorText} font-light tracking-wide md:text-xl`}>
        Orders Manager System
      </p>
    </div>
  );
};
export default LogoApp;
