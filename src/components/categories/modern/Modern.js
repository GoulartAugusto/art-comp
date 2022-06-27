import React from 'react'
import Modern01 from '../../../images/modern-hokusai-greatwave.jpg';
import Modern02 from '../../../images/modern-ben-enwonwu-tutu.jpg';
import Modern03 from '../../../images/modern-miro-tilledfield.jpg';
import Modern04 from '../../../images/modern-Ilayaraja-tamilnadu.jpg';


const data = [
    {
        title: 'Great Wave (1831)',
        img: Modern01,
        artist: 'by Hokusai',
        price: "$496"
    },
    {
        title: 'Tutu (1936)',
        img: Modern02,
        artist: 'by Ben Enwonwu',
        price: "$299"
    },
    {
        title: 'Tilled Field (1923)',
        img: Modern03,
        artist: 'by Joan Miró',
        price: "$296"
    },
    {
        title: 'Tamilnadu (1910)',
        img: Modern04,
        artist: 'by Ilayaraja',
        price: "$189"
    },
]


function Modern() {
  return (
    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Modern Art</h1>
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

export default Modern