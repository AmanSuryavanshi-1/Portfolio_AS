import React from 'react'
import './Header.css'
import Resume from './Resume'
import me from '../../Assests/AS3.png'
import HeaderSocial from './HeaderSocial'

const Header = ()=> {
  return (
    
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aman Suryavanshi</h1>
        <h5 className='text-light'>A Tech Geek</h5>
        <Resume/>
        <HeaderSocial/>
        <div className='me'>
          <img className='img' src={me} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header