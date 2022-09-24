import React from 'react'
import Card from './card'
import developers from './Json/developers.json'
//import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'


function Cards() {
  return (
    <div className='container d-flex justify-content-center h-100'>
      <div className='row'>
        {
          developers.map(dev => (
            <div className='col-md-4' key={dev.id}>
            <Card title={dev.title} imagen={dev.imagen} text={dev.text}/>
            </div>
          ))
        }
        <footer>
          <button className='button-card'> 
            Volver
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Cards
