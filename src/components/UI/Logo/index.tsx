import { FC } from 'react';
import { SiWikibooks } from 'react-icons/si';

interface Props {
  variant: 'black' | 'white';
  small?: boolean;
}

const LogoApp: FC<Props> = ({ variant, small = false }) => {
  const colorText = variant === 'black' ? 'text-gray-900' : 'text-white';
  return (
    <div className="max-w-fit text-center">
      <div className={`flex justify-center ${small ? 'gap-1' : ''}`}>
        <div className="max-w-min rounded-2xl bg-gradient-to-br from-purple-900 to-purple-500 p-3">
          <SiWikibooks
            className={`${small ? 'h-7 w-7' : 'h-14 w-14 md:h-19 md:w-19'} text-white`}
          />
        </div>
        <h2
          className={`${colorText} leading-none ${small ? 'max-w-20 text-2xl' : 'max-w-36 text-4xl md:max-w-50 md:text-5xl'} font-bold`}
        >
          BOOKS 4 LESS
        </h2>
      </div>
      <p
        className={`${colorText} ${small ? 'text-[10px]' : 'md:text-xl'} font-light tracking-wide`}
      >
        Orders Manager System
      </p>
    </div>
  );
};
export default LogoApp;
