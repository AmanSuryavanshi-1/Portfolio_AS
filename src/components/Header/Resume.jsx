import React from 'react'
import CV from '../../Assests/Resume.pdf'
const Resume = () => {
  return (
    <div className='resume'>
        {/* download is used to give functionality of download to the CV file */}
        {/* Css is already assigned in index.css for className= 'btn' / btn-primay*/}
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Resume