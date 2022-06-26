import React from 'react'
import About from './about/About'
import Cards from './cards/Cards'
import HeroSection from './HeroSection'

function Home() {
  return (
    <div className='home-container'>
      <HeroSection />
      <Cards />
      <About />
    </div>
  )
}

export default Home