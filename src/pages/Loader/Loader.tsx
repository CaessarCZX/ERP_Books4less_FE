import { useEffect, useState } from 'react';
import CubeLoader from '../../components/Loader/Cube/CubeLoader';

const Loader = () => {
  const minDuration = 1000;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), minDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show ? (
        <div className="flex h-screen w-screen items-center justify-center">
          <CubeLoader />
        </div>
      ) : null}
    </>
  );
};
export default Loader;
