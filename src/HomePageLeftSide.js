import React from 'react';
import Logo from './img/Logologo.png'
import './Newdesign.css'

function HomePageLeftSide() {
    return ( 
        <div className='app'>
        <div className='cover'>
            <div>
                <img src= {Logo} alt='Company logo' className='logo'/>
            </div>
        </div>
        </div>
     );
}

export default HomePageLeftSide;