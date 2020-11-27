import React from 'react';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import Spotify from './icons/Spotify';
import Twitter from './icons/Twitter';

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto mt-24 mb-10 px-4 lg:px-0">
      <form
        className="mb-10"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="mb-4">Sign up for my newsletter:</p>
        <input
          type="text"
          className="p-3 bg-darkbg focus:bg-white"
          style={{ width: '24rem', maxWidth: '100%' }}
          placeholder="E-mail address"
        />
        <button
          className="bg-blue text-white dark:bg-lightgreen dark:text-black-black p-3 md:ml-4"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <div className="grid grid-cols-2">
        <div>
          <span style={{ lineHeight: '40px' }}>
            &copy; {new Date().getFullYear().toString(10)} Rae D. Cabello
          </span>
        </div>
        <div className="text-right">
          <div className="inline-block ml-5">
            <a href="https://www.linkedin.com/in/raedcabello">
              <LinkedIn />
            </a>
          </div>
          <div className="inline-block ml-5">
            <a href="https://twitter.com/raedcabello">
              <Twitter />
            </a>
          </div>
          <div className="inline-block ml-5">
            <a href="https://open.spotify.com/user/raedcabello">
              <Spotify />
            </a>
          </div>
          <div className="inline-block ml-5">
            <a href="https://instagram.com/raedcabello">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
