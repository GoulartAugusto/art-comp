import React from 'react';
import './Cavalcanti.css';
import DiCavalcanti01 from '../../../images/dicavalcanti-mulata.jpg';
import DiCavalcanti02 from '../../../images/dicavalcanti-figuras.jpg';

const data = [
    {
        title: 'Mulata (1944)',
        img: DiCavalcanti01,
        artist: 'by Di Cavalcanti',
        price: '$209'
    },
    {
        title: 'Figuras (1970)',
        img: DiCavalcanti02,
        artist: 'by Di Cavalcanti',
        price: '$229'
    },
]


function Cavalcanti() {
  return (

    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Di Cavalcanti</h1>
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

export default Cavalcanti