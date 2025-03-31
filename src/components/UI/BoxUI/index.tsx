import { FC } from 'react';
import { PropsWithChildren } from 'react';

const BoxUI: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="shadow-soft-xl min-w-0 rounded-2xl bg-white bg-clip-border break-words">
      <div className="p-4">{children}</div>
    </div>
  );
};
export default BoxUI;
