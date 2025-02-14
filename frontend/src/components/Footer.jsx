import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Web Development Solutions. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

