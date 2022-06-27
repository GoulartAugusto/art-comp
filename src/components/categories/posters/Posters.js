import React from 'react';
import Poster01 from '../../../images/poster-birds.jpeg';
import Poster02 from '../../../images/poster-opera.jpeg';
import Poster03 from '../../../images/poster-gravity.jpg';
import Poster04 from '../../../images/poster-jaws.jpeg';
import Poster05 from '../../../images/poster-kingkong.jpeg';


const data = [
    {
        title: 'The Birds (1963)',
        img: Poster01,
        artist: 'by Vintage',
        price: '$139'
    },
    {
        title: 'The Phanton of the Opera (1956)',
        img: Poster02,
        artist: 'by Lon Chaney',
        price: '$99'
    },
    {
        title: 'Gravity (2014)',
        img: Poster03,
        artist: 'by Alfonso Cuarón',
        price: '$129'
    },
    {
        title: 'Jaws (1983)',
        img: Poster04,
        artist: 'by Steve Shaw',
        price: '$119'
    },
    {
        title: 'King Kong (1943)',
        img: Poster05,
        artist: 'by Fay Cooper',
        price: '$109'
    },
]

function Posters() {
  return (
    <div className='sculptures-container'>
      <h1 className='sculptures-header'>Vintage Movie Posters</h1>
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

export default Posters