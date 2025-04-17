import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12">
      <div className="container">
        <div className="-mx-3 flex flex-wrap">
          <div className="mx-auto mb-6 w-full max-w-full flex-shrink-0 text-center lg:w-8/12 lg:flex-0">
            <a
              href="javascript:void(0);"
              className="mr-4 mb-2 text-slate-400 sm:mb-0 xl:mr-12"
            >
              Company
            </a>
            <a
              href="javascript:void(0);"
              className="mr-4 mb-2 text-slate-400 sm:mb-0 xl:mr-12"
            >
              About Us
            </a>
            <a
              href="javascript:void(0);"
              className="mr-4 mb-2 text-slate-400 sm:mb-0 xl:mr-12"
            >
              Team
            </a>
            <a
              href="javascript:void(0);"
              className="mr-4 mb-2 text-slate-400 sm:mb-0 xl:mr-12"
            >
              Products
            </a>
            <a
              href="javascript:void(0);"
              className="mr-4 mb-2 text-slate-400 sm:mb-0 xl:mr-12"
            >
              Blog
            </a>
            <a
              href="javascript:void(0);"
              className="mr-4 mb-2 text-slate-400 sm:mb-0 xl:mr-12"
            >
              Pricing
            </a>
          </div>
          <div className="mx-auto mt-2 mb-6 w-full max-w-full flex-shrink-0 text-center lg:w-8/12 lg:flex-0">
            <a href="javascript:void(0);" className="mr-6 text-slate-400">
              <span className="fab fa-dribbble text-lg"></span>
            </a>
            <a href="javascript:void(0);" className="mr-6 text-slate-400">
              <span className="fab fa-twitter text-lg"></span>
            </a>
            <a href="javascript:void(0);" className="mr-6 text-slate-400">
              <span className="fab fa-instagram text-lg"></span>
            </a>
            <a href="javascript:void(0);" className="mr-6 text-slate-400">
              <span className="fab fa-pinterest text-lg"></span>
            </a>
            <a href="javascript:void(0);" className="mr-6 text-slate-400">
              <span className="fab fa-github text-lg"></span>
            </a>
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap">
          <div className="mx-auto mt-1 w-8/12 max-w-full flex-0 px-3 text-center">
            <p className="mb-0 text-slate-400">
              Copyright © {new Date().getFullYear()} Soft by Creative Tim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
