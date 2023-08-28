import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Neyry vargas</a>
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#Skill">Habilidades</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/neyry-vargas-diaz-a7b07a263/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/NeyryVargasD" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2023. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer