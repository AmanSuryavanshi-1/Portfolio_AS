import React from 'react'
import './Experience.css'
import {LuGraduationCap} from 'react-icons/lu'
import {IoLogoHtml5} from 'react-icons/io'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {SiThealgorithms} from 'react-icons/si'
import {VscFileCode} from 'react-icons/vsc'
import {FaGithub} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className='container experience_container'>



      <div className='experience_frontend'>
      <h3>Frontend Developer</h3>
      <div className="experience_content">
        <article className='experience_details'>
          <IoLogoHtml5 className='experience_details-icon'/>
          <div><h4>HTML</h4>
          <small className='text-light'>Advanced</small></div>
        </article>
        <article className='experience_details'>
          <IoLogoCss3 className='experience_details-icon'/>
          <div><h4>CSS</h4>
          <small className='text-light'>Advanced</small></div>
        </article>
        <article className='experience_details'>
          <BsBootstrapFill className='experience_details-icon'/>
          <div><h4>Bootstrap</h4>
          <small className='text-light'>Advanced</small></div>
        </article>
        <article className='experience_details'>
          <IoLogoJavascript className='experience_details-icon'/>
          <div><h4>JavaScript</h4>
          <small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience_details'>
          <FaReact className='experience_details-icon'/>
          <div><h4>React</h4>
          <small className='text-light'>Intermediate</small></div>
        </article>
        <article className='experience_details'>
          <VscFileCode className='experience_details-icon'/>
          <div><h4>C/C++</h4>
          <small className='text-light'>Advanced</small></div>
        </article>
        <article className='experience_details'>
          <SiThealgorithms className='experience_details-icon'/>
          <div>
          <h4>Data Structures</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience_details'>
          <FaGithub className='experience_details-icon'/>
          <div>
          <h4>Git & Github</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

      </div>

      </div>
       
    
      <div className='experience_academic'>
          <h3>Academic Background</h3>
          <div className='academic_content'>
            <article className='experience_details'>
          <LuGraduationCap className='experience_details-icon' />
          <div><h4>Bachelor's Degree</h4>
          <h5>Nov 2020 - Present</h5>
          <small className='text-light'>- Pursuing Electronics and Communication Engineering (ECE)</small>
          <p>Maharaja Surajmal Institue of Technology</p></div>
        </article>

        <article className='experience_details'>
          <LuGraduationCap className='experience_details-icon'/>
          <div><h4>Senior Secondary (XII)</h4>
          <h5> April 2019 - March 2020</h5>
          <small className='text-light'>- Science With Maths</small>
          <p>Army Public School Delhi Cantt</p></div>
        </article>

          </div>
          </div>


</div>
    </section>

  )
}

export default Experience