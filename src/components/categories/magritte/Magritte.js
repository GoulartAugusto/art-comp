import React from 'react';
import './Magritte.css';
import Magritte01 from '../../../images/Magritte-BowlerHat.jpg';
import Magritte02 from '../../../images/Magritte-TheLovers.jpg';
import Magritte03 from '../../../images/Magritte-TheTherapist.jpg';
import Magritte04 from '../../../images/Magritte-TheArtofLiving.jpg';

const data = [
        {  
          title: 'Man in a Bowler Hat (1964)',
          img: Magritte01,
          artist: 'by René Magritte',
          price: '$369'   
        },
        {
          title: 'The Lovers (1928)',
          img: Magritte02,
          artist: 'by René Magritte',
          price: '$279'
        },
        {
          title: 'The Therapist (1937)',
          img: Magritte03,
          artist: 'by René Magritte',
          price: '$179'
        },
        {
          title: 'The Art of Living (1972)',
          img: Magritte04,
          artist: 'by René Magritte',
          price: '$329'
        },
  ];

function Magritte() {
  return (

    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Renè Magritte</h1>
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

export default Magritte