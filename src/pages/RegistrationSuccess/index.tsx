import React from 'react';
import LogoApp from '../../components/UI/Logo';
import { Button } from '../../components/UI/Button';
import { Link } from 'react-router-dom';
import { getPublicRoute } from '../../utils/Routes/getPublicRoute';
import Footer from '../../components/Footer';

const RegistrationSuccessPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <LogoApp variant="black" />
      <div className="mt-8 w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registration Successful!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Thank you for registering with us.
          </p>
        </div>
        <Link to={getPublicRoute('DEFAULTHOME')} replace>
          <Button className="relative" fullWidth variant="black">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Back to dashboard
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationSuccessPage;
