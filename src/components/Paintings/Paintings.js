import React from 'react'
import './Paintings.css'
import PaintingsData from './data'


function Paintings (props) {
  return (
<>
    <h1 className='paintings-header'>Inspiring paintings for you</h1>

    <div className='paintings-container'>

        <div className='paintings-cards'>

          {PaintingsData.map((e) => {
            return(
                <article className='painting-item' >
                  <div>
                  <img className='paint-img' src={e.img} />
                  </div>
                  <h2 className='paint-title'>{e.title}</h2>
                  <p className='painting-artist'>{e.artist}</p>
                  <div className='painting_link'>  
                  <a href="#" className='btn-primary'>View Price</a>
                  </div>
                </article>

              )
            })}

        </div>

    </div>
</>
  )
}

export default Paintings