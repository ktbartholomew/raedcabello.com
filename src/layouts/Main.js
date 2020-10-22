import React from 'react';
import HeaderNav from '../components/HeaderNav';

const Main = ({ children }) => {
  return (
    <div className="container mx-auto">
      <HeaderNav />
      {children}
    </div>
  );
};

export default Main;
