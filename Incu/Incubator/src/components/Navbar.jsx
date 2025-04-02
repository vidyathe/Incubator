import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">ForeverU</a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;