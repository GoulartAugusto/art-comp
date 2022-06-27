import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import PaintingsData from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'

export default function Carousel() {

    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
               slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
               slidesToShow: 1,
              }
             }
          ]
      };

      return (
        <div className='content'>
            <h4 className='title'>RECENT ARRIVALS</h4>
          <div className='control-btn'>
            <button onClick={sliderRef?.slickPrev}>
              <FaChevronLeft />
            </button>
            <button onClick={sliderRef?.slickNext}>
              <FaChevronRight />
            </button>
          </div>
          <Slider ref={setSliderRef} {...sliderSettings}>

            {PaintingsData.map((e) => (
                <div className='painting-item' >
                <div>
                <img className='paint-img' src={e.img} />
                </div>
                <h2 className='paint-title'>{e.title}</h2>
                <p className='painting-artist'>{e.artist}</p>
                <div className='painting_link'>  
                <a href="#" className='btn-primary'>View-Price</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )
}
