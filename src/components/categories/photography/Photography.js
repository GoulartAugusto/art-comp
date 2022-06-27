import React from 'react'
import Photography01 from '../../../images/photography-zeyneb-alishova.jpg';
import Photography02 from '../../../images/photography-gabriella.jpg';
import Photography03 from '../../../images/photography-josh-hild.jpg';
import Photography04 from '../../../images/photography-tomas-anunziata.jpg';


const data = [
    {
        title: 'Ginger (2020)',
        img: Photography01,
        artist: 'by Zeineb Alishova',
        price: '$99'
    },
    {
        title: 'The Window (1992)',
        img: Photography02,
        artist: 'by Gabriella',
        price: '$99'
    },
    {
        title: 'New Way (2020)',
        img: Photography03,
        artist: 'by Josh Hild',
        price: '$99'
    },
    {
        title: 'Dock of the Bay (1999)',
        img: Photography04,
        artist: 'by Tomas Anunziata',
        price: '$99'
    },
]

function Photography() {
  return (
    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Photography</h1>
      <div className='sculptures-cards'>
    {data.map((e) => {
      return(

          <div className='sculptures-item'>
            <img className='sculpture-img' src={e.img} />
            <h2 className='sculpture-title'>{e.title}</h2>
            <p className='sculpture-artist'>{e.artist}</p>
            <button className='btn-primary'>{e.price}</button>
          </div>

        )
      })}
       </div>
    </div>
  )
}

export default Photography