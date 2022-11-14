import React from 'react';

const Footer = () => {

  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
    
        <h5>&copy; {new Date().getFullYear()} - Mixing and Matching</h5>
      </div>
    </footer>
  );
};

export default Footer;