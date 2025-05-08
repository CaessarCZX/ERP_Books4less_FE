import { FC } from 'react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

const BoxUI: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`shadow-soft-xl min-w-0 rounded-2xl bg-white bg-clip-border break-words ${className}`}
    >
      <div className="p-5">{children}</div>
    </div>
  );
};
export default BoxUI;
