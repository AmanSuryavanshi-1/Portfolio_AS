import React from 'react'
import './Header.css'
import Resume from './Resume'
import me from '../../Assests/AS main.png'
import HeaderSocial from './HeaderSocial'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Header = ()=> {
  return (
    
    <header>
      <div className="container header_container">

      <h5>Hello I'm</h5>
        <h1>Aman Suryavanshi</h1>
        <h5 className='text-light'>A Tech Geek</h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem. Lorem ipsum dolor sit amet.</p>

      <div className='header_socials'>
        <a href="https://www.linkedin.com/in/amansuryavanshi/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AmanSuryavanshi-1" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/__aman_suryavanshi__/" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>

        
        <Resume/>
        <HeaderSocial/>
        <div className='me'>
          <img className='img' src={me} alt="me" />
        </div>

        <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header