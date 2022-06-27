import React from 'react'
import TarsilaHome from '../../../images/tarsila-home.jpg';
import Tarsila01 from '../../../images/tarsila-abaporu.jpg';
import Tarsila02 from '../../../images/tarsila-moon.jpg';

const data = [
    {
        title: 'Abaporu (1928)',
        img: Tarsila01,
        artist: 'by Tarsila do Amaral',
        price: '$489'
    },
    {
        title: 'The Moon (1928)',
        img: Tarsila02,
        artist: 'by Tarsila do Amaral',
        price: '$329'
    },
    {
        title: 'Pau Brasil (1928)',
        img: TarsilaHome,
        artist: 'by Tarsila do Amaral',
        price: '$189'
    },
]


function Tarsila() {
  return (
    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Tarsila do Amaral</h1>
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

export default Tarsila