import React from 'react';
import Navbar from './Navbar';    

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1>Rails</h1>
            <p className='details'>A project management tool for all teams to use to deliver quality work together, faster.</p>
            <a href='#' className='cv-btn'>Get Started</a>  
        </div>      
    </div>
  )
}

export default Header;
