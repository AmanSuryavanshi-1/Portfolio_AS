import React from 'react'
import './Footer.css'
import logo from '../../Assests/main logo.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'><img src={logo} alt="" /></a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#Services">Services</a></li>
      <li><a href="#Portfolio">Portfolio</a></li>
      <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/amansuryavanshi/"><BsLinkedin/></a>
        <a href="https://github.com/AmanSuryavanshi-1"><FaGithub/></a>
        <a href="https://www.instagram.com/__aman_suryavanshi__/"><FaInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; AMAN SURYAVANSHI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer