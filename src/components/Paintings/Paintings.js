import React from 'react'
import './Paintings.css'
import PaintingsData from './data'

function Paintings (props) {
  return (
    <div className='paintings-container'>
      <h1 className='paintings-header'>Paintings</h1>
      <div className='paintings-cards'>
    {PaintingsData.map((e) => {
      return(

          <div className='painting-item'>
            <img className='paint-img' src={e.img} />
            <h2 className='paint-title'>{e.title}</h2>
            <p className='painting-artist'>{e.artist}</p>
            <button className='btn-primary'>+ info</button>
          </div>

        )
      })}
       </div>
    </div>
  )
}

export default Paintings