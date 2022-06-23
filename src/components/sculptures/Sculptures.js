import React from 'react'
import './Sculptures.css'
import SculptureData from './data'

function Sculptures (props) {
  return (
    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Sculptures</h1>
      <div className='sculptures-cards'>
    {SculptureData.map((e) => {
      return(

          <div className='sculptures-item'>
            <img className='sculpture-img' src={e.img} />
            <h2 className='sculpture-title'>{e.title}</h2>
            <p className='sculpture-artist'>{e.artist}</p>
            <button className='btn-primary'>+ info</button>
          </div>

        )
      })}
       </div>
    </div>
  )
}

export default Sculptures