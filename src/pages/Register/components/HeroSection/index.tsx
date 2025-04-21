import React from 'react';
import LogoApp from '../../../../components/UI/Logo';

const HeroSection: React.FC = () => {
  const Image =
    'https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/curved-images/curved14.jpg';
  return (
    <section className="min-h-screen">
      <div
        className="relative m-4 flex min-h-[450px] items-start overflow-hidden rounded-xl bg-cover bg-center pt-12"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <span className="absolute top-0 left-0 h-full w-full bg-gradient-to-tl from-gray-900 to-slate-800 bg-cover bg-center opacity-60"></span>
        <div className="z-10 container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="mx-auto mt-0 w-full max-w-full shrink-0 px-3 text-center lg:w-5/12">
              <div className="mx-auto mt-14"></div>
              <LogoApp variant="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
