import React from 'react';
import { Link } from 'react-router-dom';
import { getPrivateRoute } from '../../../../utils/Routes/getPrivateRoute';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 z-30 mt-6 mb-4 flex w-full flex-wrap items-center justify-between px-4 py-2 shadow-none lg:flex-nowrap lg:justify-center">
      <div className="flex-wrap-inherit container flex items-center py-0">
        <Link
          className="py-2.375 mr-4 ml-4 text-sm font-bold whitespace-nowrap text-white lg:ml-0"
          to={getPrivateRoute('GENERATE_PO')}
        >
          Purchase Order Manager
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
