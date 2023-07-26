/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'


const Navbar = () => {
  const[activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> <p>HOME</p> </a>
      <a href="#About" onClick= {() => setActiveNav('#About')} className={activeNav === '#' ? 'active': ''}><AiOutlineUser/> <p>HOME</p> </a>
      <a href="#Experience" onClick= {() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active': ''}><BiBook/> <p>HOME</p> </a>
      <a href="#Services" onClick= {() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active': ''}><RiServiceLine/> <p>HOME</p> </a>
      <a href="#Contact" onClick= {() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active': ''}><BiMessageSquareDetail/> <p>HOME</p> </a>
    </nav>
  )
}

export default Navbar