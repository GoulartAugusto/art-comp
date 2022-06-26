import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about-wrapper'>
        <h4 className='about-title'>ABOUT US</h4>
        <p className='about-text'>
            We are an Art galery founded in 2001 by three friends in a basement flat in Florianópolis, Brazil. Art comp exist to celebrate Art. Back then, we produced thousends of prints whit a single, and second-hand screen press and started to trade some original paintings of known artists. Today, we're expanded our delivering of art all across the globe. <br />
            Whit Twenty one years of trade of art and printing expirience under our own belts we're recognized by world-leading instituitions - Such <a href='https://www.moma.org/'>MoMA</a> and <a href='https://www.nationalgallery.org.uk/'>National Gallery</a>. We are proud of producing pretigeous prints whit licenses to produce iconic artworks and trade art of the greatests artists of the world.
        </p>
        <button className='btn-primary'>READ MORE</button>
    </div>
  )
}

export default About