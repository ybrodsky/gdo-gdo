import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div style={{ display: 'flex', border: '1px solid red', padding: '10px', marginBottom: '20px' }}>
      <div style={{ marginRight: '10px' }}>
        <Link to="/">Home</Link>
      </div>
      <div style={{ marginRight: '10px' }}>
        <Link to="/stats">Stats</Link>
      </div>
    </div>
  )
};
