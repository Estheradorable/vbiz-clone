import React from 'react';
import "./HomePageRightSide.css"

function HomePageRightSide() {
    return ( 
        <div className='contain'>
            <div className='wrap'>
            <div className='text'>
                <h4>What will you like to do?</h4>
            </div>
            <div className='log-in'>
                <h4>Log in</h4>
                <p>I'm registered on VBiz</p>
            </div>
            <div className='sign-in'>
                <h4>Sign in</h4>
                <p>I will like to open a new Corporate Account</p>
            </div>
            <div className='create-profile'>
                <h4>Create profile</h4>
                <p>I have a Corporate Account and will like to create a profile on V Biz</p>
            </div>
            </div>
            
        </div>
     );
}

export default HomePageRightSide;
