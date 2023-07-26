import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/amansuryavanshi/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AmanSuryavanshi-1" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/__aman_suryavanshi__/" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocial