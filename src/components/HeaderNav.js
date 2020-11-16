import React from 'react';
import { Link } from 'gatsby';

const HeaderNav = ({ location }) => {
  const activeClass = (location, prefix) => {
    if (!location) {
      return '';
    }

    if (location.pathname.startsWith(prefix)) {
      return 'active';
    }

    return '';
  };
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-4 mt-4 mb-16 px-4 lg:px-0 text-lg font-accent">
      <div className="mb-4 sm:mb-0">
        <Link to="/" className="block py-3">
          <span
            className="rounded-full bg-blue dark:bg-lightgreen inline-block align-middle mr-4"
            style={{
              width: '1.125em',
              height: '1.125em',
            }}
          ></span>
          <span className="align-middle text-black-black dark:text-white">
            Rae D. Cabello
          </span>
        </Link>
      </div>
      <div className="sm:text-center md:flex justify-end">
        <Link
          to="/work"
          className={`nav-link p-3 sm:px-8 ${activeClass(location, '/work')}`}
        >
          Work
        </Link>
        <Link
          to="/essays"
          className={`nav-link p-3 sm:px-8 ${activeClass(location, '/essays')}`}
        >
          Essays
        </Link>
        <Link
          to="/reading"
          className={`nav-link p-3 sm:px-8 ${activeClass(
            location,
            '/reading'
          )}`}
        >
          Reading
        </Link>
        <Link
          to="/about"
          className={`nav-link pt-3 sm:pl-8 ${activeClass(location, '/about')}`}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default HeaderNav;
