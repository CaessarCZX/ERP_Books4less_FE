import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const shortLinks = [
    {
      name: 'Company',
      url: '/',
    },
    {
      name: 'About Us',
      url: '/',
    },
    {
      name: 'Team',
      url: '/',
    },
    {
      name: 'Products',
      url: '/',
    },
  ];

  return (
    <footer className="py-11">
      <div className="container mx-auto flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <div className="flex flex-wrap">
          <div className="mx-auto w-full max-w-full flex-shrink-0 space-x-4 text-center">
            {shortLinks.map((shortLink) => (
              <Link to={shortLink.url} key={shortLink.name}>
                {shortLink.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex min-w-50 flex-wrap">
          <div className="mx-auto mt-1 max-w-full px-3 text-center">
            <p className="mb-0 text-slate-400">
              {/* Copyright © {new Date().getFullYear()} */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
