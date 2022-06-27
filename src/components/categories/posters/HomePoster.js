import React from 'react'
import Poster from '../../../images/poster-gravity.jpg'
import './HomePoster.css'

function HomePoster() {
  return (
    <div className='poster_home'>
        <div className='poster_img'>
            <img src={Poster} />
        </div>
        <div className='poster_button'>
            <button className=''>Original Posters</button>
        </div>
        <div className='poster_title'>
            <h1>Discover our Original framed Posters for you</h1>
            <p>Working in collaboration with many independent artists based all over the world, we are delighted to introduce our inaugural collection, Movie World.</p>
        </div>
    </div>
  )
}

export default HomePoster