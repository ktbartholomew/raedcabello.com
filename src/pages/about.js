import React from 'react';
import Main from '../layouts/Main';

const AboutPage = ({ location }) => {
  return (
    <Main location={location}>
      <div className="container max-w-5xl mx-auto px-4 lg:px-0">
        <p className="text-xl mb-10">
          I’m a Product Designer based in San Antonio, TX. I’m currently a Sr.
          Product Designer at H-E-B — an American privately held supermarket
          chain based in Texas. Below is a sampling of work that reflects
          experience in multiple disciplines.
        </p>
      </div>
    </Main>
  );
};

export default AboutPage;
