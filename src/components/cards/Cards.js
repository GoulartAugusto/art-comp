import React from 'react';
import MagritteHome from '../../images/magritte-home.jpg';
import DiCavalcantiHome from '../../images/dicavalcanti-home.jpg';
import PortinariHome from '../../images/portinari-home.jpg';
import TarsilaHome from '../../images/tarsila-home.jpg';
import PosterHome from '../../images/poster-home.jpg';
import PhotographyHome from '../../images/photography-home.jpg';
import ModernHome from '../../images/modern-home.jpg';
import ContemporanyHome from '../../images/contemporany-home.jpg';
import './Cards.css'

function Cards() {
  return (
    <>
            <h1 className='cards-title'>Find a new Art for your home</h1>
    <div className='cards-wrapper'>
        <div className='artist-card'>
      <a href="#">
          <img src={MagritteHome} />
          <h3 className='artist-name'>RENÉ MAGRITTE</h3>
      </a>
        </div>
        <div className='artist-card'>
      <a href="#">
          <img src={DiCavalcantiHome} />
          <h3 className='artist-name'>DI CAVALCANTI</h3>
      </a>
        </div>
        <div className='artist-card'>
      <a href="#">
          <img src={PortinariHome} />
          <h3 className='artist-name'>CANDIDO PORTINARI</h3>
      </a>
        </div>
        <div className='artist-card'>
      <a href="#">
          <img src={TarsilaHome} />
          <h3 className='artist-name'>TARSILA DO AMARAL</h3>
      </a>
        </div>
        <div className='artist-card'>
      <a href="#">
          <img src={PosterHome} />
          <h3 className='artist-name'>VINTAGE</h3>
      </a>
        </div>
        <div className='artist-card'>
      <a href="#">
          <img src={PhotographyHome} />
          <h3 className='artist-name'>Photography</h3>
      </a>
        </div>
        <div className='artist-card'>
      <a href="#">
          <img src={ModernHome} />
          <h3 className='artist-name'>MODERN ART</h3>
      </a>
        </div>
        <div className='artist-card'>
      <a href="#">
          <img src={ContemporanyHome} />
          <h3 className='artist-name'>CONTEMPORANY ART</h3>
      </a>
        </div>
    </div>
    </>
  )
}

export default Cards