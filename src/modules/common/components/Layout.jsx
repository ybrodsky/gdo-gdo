import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <div style={{ padding: '2%' }}>
      <Navbar />
      <div style={{ padding: '8px' }}>
        {children}
      </div>
    </div>
  );
};
