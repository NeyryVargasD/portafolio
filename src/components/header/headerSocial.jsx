import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/neyry-vargas-diaz-a7b07a263/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/NeyryVargasD" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials