import React from 'react'
import './Services.css'
import Img1 from '../../Assests/service.svg'
import Img2 from '../../Assests/service-2.svg'
import Img3 from '../../Assests/S3.png'
const Services = () => {
  return (
    <section id="Services">
        <h2>Services</h2>
      <div className="container services_container">
        <div className="services_card">
          <img src={Img1} alt="" className='services_img'/>
          <h2>UI/UX Design</h2>
          <p> Welcome to my UI/UX Services! I specialize in crafting Captivating interfaces, responsive web pages, and strategic brand positioning. Create exceptional user experiences that leave a lasting impact. Elevate your digital presence today! Get in touch today, and let's take your digital presence to the next level!</p>
        </div>

        <div className="services_card">
          <img src={Img2} alt="" className='services_img'/>
          <h2>Web Development</h2>
          <p>Captivating UI Designs, Seamless Web Page Development, and Intuitive UX Elements—crafted to enhance your brand's impact. Your digital success is my priority. Let's elevate your online presence together! Contact now for focused web development solutions and see your vision come to life.</p>
        </div>

        <div className="services_card">
          <img src={Img3} alt="" className='services_img'/>
          <h2>Software Development</h2>
          <p>Custom solutions tailored to your needs. Web & Mobile App Development, Seamless Integration, Quality Assurance, and Ongoing Support. From concept to deployment, we ensure your software excels at every stage. Let's bring your ideas to life. Contact us now!</p>
        </div>
      </div>
    </section>
  )
}

export default Services