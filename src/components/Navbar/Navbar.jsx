/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsPersonWorkspace} from 'react-icons/bs'




const Navbar = () => {
  const[activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a> 
      <a href="#About" onClick= {() => setActiveNav('#About')} className={activeNav === '#' ? 'active': ''}><AiOutlineUser/> </a>
      <a href="#Experience" onClick= {() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active': ''}><BiBook/>  </a>
      <a href="#Services" onClick= {() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active': ''}><RiServiceLine/> </a>
      <a href="#Portfolio" onClick= {() => setActiveNav('#Portfolio')} className={activeNav === '#Portfolio' ? 'active': ''}><BsPersonWorkspace/>  </a>
      <a href="#Contact" onClick= {() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active': ''}><BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Navbar