import React from 'react'
import './cards.css'


function Card({title, imagen, text}) {
  return (
    <div className='card text-center bg-dark'>
        <img className='imagen-card' src={imagen} alt='Fake'></img>
      <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-primary'>{text}</p>
      </div>
    </div>
  )
}

export default Card
