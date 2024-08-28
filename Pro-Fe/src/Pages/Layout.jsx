// import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
