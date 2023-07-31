import React from 'react'
import './Services.css'
import Img1 from '../../Assests/service.svg'
import Img2 from '../../Assests/service-2.svg'
import Img3 from '../../Assests/service-3.svg'
const Services = () => {
  return (
    <section id="Services">
        <h2>Services</h2>
      <div className="container services_container">
        <div className="services_card">
          <img src={Img1} alt="" className='services_img'/>
          <h2>UI/UX Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati dolorem magnam nesciunt corporis laboriosam labore cumque nihil similique architecto eaque, tempora repellat minima nobis.</p>
        </div>

        <div className="services_card">
          <img src={Img2} alt="" className='services_img'/>
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati dolorem magnam nesciunt corporis laboriosam labore cumque nihil similique architecto eaque, tempora repellat minima nobis.</p>
        </div>

        <div className="services_card">
          <img src={Img3} alt="" className='services_img'/>
          <h2>Software Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati dolorem magnam nesciunt corporis laboriosam labore cumque nihil similique architecto eaque, tempora repellat minima nobis.</p>
        </div>
      </div>
    </section>
  )
}

export default Services