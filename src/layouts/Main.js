import React from 'react';
import HeaderNav from '../components/HeaderNav';

const Main = ({ children, location }) => {
  return (
    <div className="container mx-auto">
      <HeaderNav location={location} />
      {children}
    </div>
  );
};

export default Main;
