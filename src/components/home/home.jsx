import React, { useState } from 'react';
import './home.css';
import Foto2 from '../props/foto2.png';

import { BsMouse } from 'react-icons/bs';

function Home() {
    

    return (
        <div id='home' className='container container-home'>
            <div className='about__me'>
            <div className='about__me-image'>
                <img src={Foto2} alt='' />
            </div>
            </div>
            
            <a href="#contact" className="scroll__down">
          Scroll Down
          <BsMouse className='scroll' />
        </a>

            <h2>
                <span>Acerca de mi</span> <br />
                <p>Soy una persona altamente creativa y proactiva, siempre dispuesta a aprender y abordar nuevos desafíos.<br/>
                 Mi enfoque se centra en encontrar soluciones prácticas y eficientes para resolver los problemas que se presentan. Disfruto trabajando en equipo, ya que creo firmemente en el valor de la colaboración y el intercambio de ideas. Constantemente busco nuevas formas de contribuir y proponer ideas innovadoras que impulsen un mejoramiento continuo en todas las áreas en las que trabajo.</p>
          </h2>
            <a href="#contact" className="btn btn-primar">
               <h4>Contacto</h4>
              </a>
        </div>
    );
}

export default Home;