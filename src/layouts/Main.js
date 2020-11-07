import React from 'react';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';

const Main = ({ children, location }) => {
  return (
    <div className="container mx-auto">
      <HeaderNav location={location} />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
