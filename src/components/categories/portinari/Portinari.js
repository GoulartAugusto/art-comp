import React from 'react'
import Portinari01 from '../../../images/portinari-caffe.jpg';
import Portinari02 from '../../../images/portinari-flautista.jpg';

const data = [
    {
        title: 'Café (1935)',
        img: Portinari01,
        artist: 'by Candido Portinari',
        price: '$239'
    },
    {
        title: 'O Flautista (1934)',
        img: Portinari02,
        artist: 'by Candido Portinari',
        price: '$239'
    },
]


function Portinari() {
  return (
    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Candido Portinari</h1>
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

export default Portinari