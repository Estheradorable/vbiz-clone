import React from 'react';
import Logo from './img/Logologo.png'
//import './NewDesign.css'
import HomePageRightSide from './HomePageRightSide';
import "./HomePageRightSide.css"

function HomePageLeftSide() {
    return ( 
        <div className='app--left'>
        <div className='cover--left'>
            <div className='logo--left'>
                <img src= {Logo} alt='Company logo'/>
            </div>
        </div>
        <HomePageRightSide/>
        </div>
     );
}

export default HomePageLeftSide;