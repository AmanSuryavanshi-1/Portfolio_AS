import React from 'react'
import './Header.css'
import HeaderSocial from './HeaderSocial'
import Data from './Data'
import Scroll from './Scroll'

const Header = ()=> {
  return (
    <header>

      <div className="container header_container">
      
        <div className='header_content'>
      <HeaderSocial/>
      <div className="header_img"></div>
      <Data/>
      </div>

      <Scroll/>
      </div>
    </header>
  )
}

export default Header