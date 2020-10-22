import React from 'react';
import { Link } from 'gatsby';

const HeaderNav = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 mb-16 text-lg font-accent">
      <div>
        <Link to="/" className="block py-3">
          <span
            className="rounded-full bg-blue inline-block align-middle mr-4"
            style={{
              width: '1.125em',
              height: '1.125em',
            }}
          ></span>
          <span className="align-middle text-black">Rae D. Cabello</span>
        </Link>
      </div>
      <div className="flex justify-end">
        <Link to="/work" className="nav-link p-3 px-8">
          Work
        </Link>
        <Link to="/essays" className="nav-link p-3 px-8">
          Essays
        </Link>
        <Link to="/reading" className="nav-link p-3 px-8">
          Reading
        </Link>
        <Link to="/about" className="nav-link pt-3 pl-8">
          About
        </Link>
      </div>
    </div>
  );
};

export default HeaderNav;
