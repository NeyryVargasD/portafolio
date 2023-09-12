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
                <p>⭐ Soy una apasionada programadora frontend con cuatro meses de experiencia. Tengo habilidades sólidas en HTML, CSS, JavaScript y React y me esfuerzo por contribuir de manera significativa a proyectos de desarrollo frontend
                con código limpio y diseños atractivos. Estoy comprometida con el aprendizaje continuo y el crecimiento profesional.⭐
                </p>
          </h2>
            <a href="#contact" className="btn btn-primar">
               <h4>Contacto</h4>
              </a>
        </div>
    );
}

export default Home;