import React from 'react'
import './About.css'
import img from '../../Assests/me main.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

<div className="container about_container">

      <div className="about_me">
        <div className="about_me-image">
          <img src={img} alt="AboutImage"/>
        </div>
      </div>

      <div className="about_content">

      <div className='about_cards'>

        <article className='about_card'>
        <FaAward className="about_icon"/>
        <h5>Experience</h5>
        <small> 1+ Years Working</small>
        </article>

        <article className='about_card'>
        <FiUsers className="about_icon"/>
        <h5>Companies Worked </h5>
        <small>2+ Companies </small>
        </article>

        <article className='about_card'>
        <VscFolderLibrary className="about_icon"/>
        <h5>Projects</h5>
        <small> 35+ Completed</small>
        </article>

        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>

      </div>
      </div>
      <div className='Desc Container'>
        <h5> BIOGRAPHY </h5>
        <p>Hi, I'm Aman Suryavanshi, a web developer and UI/UX designer with a passion for creating beautiful,functional, and user-centered digital experiences.
With 4 years of experience in the field. I am always
looking for new and innovative ways to bring my
clients' visions to life.
I believe that design is about more than just making
things look pretty - it's about solving problems and
creating intuitive, enjoyable experiences for users.
Whether I'm working on a website, mobile app, or
other digital product, I bring my commitment to
design excellence and user-centered thinking to
every project I work on. I look forward to the
opportunity to bring my skills and passion to your
next project.
        </p>
</div>
    
    
    </section>

  )
}

export default About