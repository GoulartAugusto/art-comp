import React from 'react'
import Contemporany01 from '../../../images/contemporary-Helena-Wierzbicki.jpg';
import Contemporany02 from '../../../images/contemporary-Celito-Medeiros.jpg';
import Contemporany03 from '../../../images/contemporary-Justyna-Kopania.jpg';
import Contemporany04 from '../../../images/contemporary-Mark-Bennett.jpg';

const data = [
    {
        title: 'Glance (2012)',
        img: Contemporany01,
        artist: 'by Helena Wierzbicki',
        price: '$639'
    },
    {
        title: 'Golden (2007)',
        img: Contemporany02,
        artist: 'by Celito Medeiros',
        price: '$199'
    },
    {
        title: 'Sunshine (2002)',
        img: Contemporany03,
        artist: 'by Justyna Kopania',
        price: '$399'
    },
    {
        title: 'El Tango (2020)',
        img: Contemporany04,
        artist: 'by Mark Bennett',
        price: '$369'
    },
]

function Contemporany() {
  return (
    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Contemporany Art</h1>
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

export default Contemporany