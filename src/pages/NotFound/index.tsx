import { Button } from '../../components/UI/Button';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <section className="relative z-[1] flex h-screen items-center justify-center overflow-hidden bg-white py-28 text-zinc-900 md:py-48 dark:bg-[#0b1727] dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-8 lg:col-start-3">
            <h2 className="mb-6 bg-gradient-to-bl from-blue-300 to-pink-300 bg-clip-text text-8xl leading-none font-bold text-transparent underline-offset-8 drop-shadow-lg md:text-[300px]">
              404
            </h2>
            <p className="mx-auto mb-2 max-w-70 text-2xl font-medium text-wrap opacity-80 md:max-w-full">
              <strong>Oops!</strong> The page you're trying to access is
              unavailable!
            </p>
            <div className="mx-auto mt-8 max-w-50">
              <Button onClick={handleGoBack} fullWidth variant="black">
                Go back!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
