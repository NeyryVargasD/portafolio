import React from 'react';
import './button.css';

function Buttons (){
    return (
        <>
        <div className='container button-contain'>
            <a href='#about' className='btn pri'>
                more
            </a>
            <a href='#contact' className='btn sec'>
                get in touch
            </a>

        </div>
        </>
    )
};

export default Buttons;