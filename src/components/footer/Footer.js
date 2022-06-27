import React from 'react'
import { BsInstagram, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className='footer_top'>
      <h2 className='footer_subscribe'>Subscribe to our newsletter</h2>
      <div>
      <input type='email' className='footer_input' placeholder='Email Address' />
      <button className='btn-primary'>SUBSCRIBE</button>
      </div>
      <p className='footer_privacy'>By subscribing you agree to our <a href='#'>Privacy Policy</a></p>
      <div className='footer_socials'>
        <BsInstagram /> <FaFacebookF /> <BsPinterest /> <BsTwitter /> <BsYoutube />
      </div>
      </div>

      <div className='footer_mid'>
        <h2>Shipping for all the world, whit an additional fee of $8.95 for framed items.</h2>
      </div>

      <div className='footer_bottom'>
        <div className='footer_lists'> 
        <ul className='first_list'>
          <li><a href='#'>HELP</a></li>
          <li><a href='#'>SHIPPING</a></li>
          <li><a href='#'>RETURN POLICY</a></li>
          <li><a href='#'>ABOUT US</a></li>
          <li><a href='#'>CONTACT US</a></li>
        </ul>
        <ul className='second_list'>
        <li><a href='#'>INSPIRATION</a></li>
        <li><a href='#'>GUIDES</a></li>
        <li><a href='#'>ART FOR BUSINESSES</a></li>
        <li><a href='#'>ARTIST SUBMITIONS</a></li>
        <li><a href='#'>TRADE</a></li>
        </ul>
        <ul className='thirt_list'>
        <li><a href='#'>TERMS & CONDITIONS</a></li>
        <li><a href='#'>COOKIES & PRIVACY</a></li>
        <li><a href='#'>PAYMENT METHODS</a></li>
        <li><a href='#'>GIFTS</a></li>
        <li><a href='#'>JOBS</a></li>
        </ul>
        </div>
        <div className='footer_contact'>
          <h4>CONTACT US</h4>
          <h2>+ 55 48 001 23 45 67</h2>
        </div>
        <p className='footer_rights'>All art prints and images on this website are copyright their respective owners. All rights reserved.</p>
        <p className='footer_rights'>Website &copy; 2001-2022 <a href='#'>Artco</a>.</p>
      </div>
    </div>
  )
}

export default Footer