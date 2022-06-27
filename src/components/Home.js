import React from 'react'
import About from './about/About'
import Read from './about/Read'
import Cards from './cards/Cards'
import Carousel from './carousel/Carousel'
import HomePoster from './categories/posters/HomePoster'
import Footer from './footer/Footer'
import HeroSection from './HeroSection'
import Sculptures from './sculptures/Sculptures'

function Home() {
  return (
    <div className='home-container'>
      <HeroSection />
      <Cards />
      <About />
      <Carousel />
      <Read />
      <HomePoster />
    </div>
  )
}

export default Home