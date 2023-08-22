import React from 'react';
import './footer.css';
import {BsMouse} from 'react-icons/bs';
import { TiSocialGithub } from 'react-icons/ti';


function Footer(){
    return(
        <div id='' className='container footer-container'>
            <h1>Eso es todo</h1>
            <a href='#home'>
                <h2>
                    <BsMouse/>- scroll up-
            </h2>
            </a>
            <div className='social-links'>
                

                <a href='#'>
                    <TiSocialGithub className='social'/>
                </a>

            </div>
        </div>
    )
}

export default Footer;