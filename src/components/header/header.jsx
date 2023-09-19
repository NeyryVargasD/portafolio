import React from 'react';

import HeaderSocials from './headerSocial';
import './header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container-header">
        <br/>
        <h5>Hola! yo soy</h5><br/>
        <h1>Neyry Vargas</h1><br/>
        <h5 className="text-light">Desarrolladora Front-end</h5>
        <a href="#contact" className="btn btn-primary">
        <h4>Contacto</h4>
              </a>
              <a href="./H-VNeyry.pdf" download className="btn-secun">
        Descargar CV
      </a>
        
              <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;