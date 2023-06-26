import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src= {props.image} alt= '' />
        </div>
        <div className='about-text'>
            <h2> {props.title} </h2>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, praesentium tempora enim placeat reiciendis ducimus soluta itaque voluptatum cumque obcaecati! Ducimus vel vero maxime eligendi, voluptatibus rem porro qui cum?</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About;
