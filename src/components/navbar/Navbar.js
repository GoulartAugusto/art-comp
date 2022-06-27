import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-section'>
        <div className='navbar-logo'>
        <h2><a href="/">Art co.</a></h2>
        </div>
        <ul className='navbar-links'>

        </ul>
        <div className='navbar-login'>
          <h2><a>Log in</a></h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar