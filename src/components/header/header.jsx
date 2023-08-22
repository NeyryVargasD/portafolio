import React from 'react';

import HeaderSocials from './headerSocial';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container-header">
        <br/>
        <h5>Hola! yo soy</h5><br/>
        <h1>Neyry Vargas</h1><br/>
        <h5 className="text-light">Front-end Developer</h5>
        <a href="#contact" className="btn btn-primary">
        <h4>Let's talk</h4>
              </a>
        
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;