import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-8">
        {/* Company Info */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl md:text-2xl font-bold">Eduse Marketing Pvt Ltd</h3>
          <p className="text-gray-400 mt-1 text-sm md:text-base">
            8 years of excellence in marketing | 10 dedicated employees
          </p>
        </div>

        {/* Copyright */}
        <div className="w-full md:w-1/2 text-center md:text-right text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Eduse Marketing Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
