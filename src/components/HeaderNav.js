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
    <div className="grid grid-cols-2 gap-4 mt-4 mb-16 text-lg font-accent">
      <div>
        <Link to="/" className="block py-3">
          <span
            className="rounded-full bg-blue dark:bg-lightgreen inline-block align-middle mr-4"
            style={{
              width: '1.125em',
              height: '1.125em',
            }}
          ></span>
          <span className="align-middle text-black dark:text-white">
            Rae D. Cabello
          </span>
        </Link>
      </div>
      <div className="flex justify-end">
        <Link
          to="/work"
          className={`nav-link p-3 px-8 ${activeClass(location, '/work')}`}
        >
          Work
        </Link>
        <Link
          to="/essays"
          className={`nav-link p-3 px-8 ${activeClass(location, '/essays')}`}
        >
          Essays
        </Link>
        <Link
          to="/reading"
          className={`nav-link p-3 px-8 ${activeClass(location, '/reading')}`}
        >
          Reading
        </Link>
        <Link
          to="/about"
          className={`nav-link pt-3 pl-8 ${activeClass(location, '/about')}`}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default HeaderNav;
