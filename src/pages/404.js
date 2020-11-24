import React from 'react';
import Main from '../layouts/Main';

const AboutPage = ({ location }) => {
  return (
    <Main location={location}>
      <div className="container max-w-5xl mx-auto px-4 lg:px-0">
        <h1>Page Not Found</h1>
        <p className="text-xl mb-10">
          Sorry, the page you were looking for couldn’t be found. It may have
          been moved to somewhere else in the site.
        </p>
      </div>
    </Main>
  );
};

export default AboutPage;
