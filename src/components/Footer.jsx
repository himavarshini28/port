import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6">
      <div className="container">
        <div className="text-center">
          <p className="text-gray text-sm">
            © {currentYear} HimaVarshini Mahapatruni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
