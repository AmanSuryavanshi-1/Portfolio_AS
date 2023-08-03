/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Portfolio.css'
import Data from './Data'
import { useState } from 'react';
import {FiLink} from 'react-icons/fi'
import {BiCodeAlt} from 'react-icons/bi'
import { useEffect } from 'react';
import left from '../../Assests/left-arrow.png'


const Portfolio = () => {
  const [items, setItems] = useState(Data);                  //fetching data from data.jsx
  const [activeIndex, setActiveIndex]=useState(0);          //adding scroll effect after 5sec delay
  const [activeFilter, setActiveFilter] = useState('Everything');   //setting  Active on the work filters to figure out when which filter is on

  const filterItem = (categoryItem) =>{
    const updatedItems = Data.filter((curElem) =>{
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
    setActiveIndex(0);
    setActiveFilter(categoryItem);
  }

  // useEffect(() => {
  //   const autoSlide = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(autoSlide); // Clean up interval on component unmount
  // }, [items]);

  const handleMoveLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleMoveRight = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <section id='Portfolio'>
      <h2>Recent Works</h2>
      <div className='container main_container'>
  <div className='portfolio_container'>
        <div className='work_filters'>
          <span className={`work_item ${activeFilter === 'Everything' ? 'active' : ''}`} onClick={() => {setItems(Data); setActiveFilter('Everything'); }} >Everything</span>
          <span className={`work_item ${activeFilter === 'Major' ? 'active' : ''}`} onClick={() => filterItem("Major")}>Major Projects </span>
          <span className={`work_item ${activeFilter === 'Minor' ? 'active' : ''}`} onClick={() => filterItem("Minor")}> Minor Projects </span>
        </div>
    
        
        <div className="work_container">
        
        <div className="work_carousel" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map((elem) =>{
            const{id, image, title,link, github_link, category} = elem;
            return (
              <div className="work_card" key={id}>
                <div className="work_thumbnail">
                  <img src={image} alt="" className='work_img'/>
                  <div className='work_mask'></div>
                </div>

                <span className="work_category">{category}</span>
                <h3 className="work_title">{title}</h3>
                {/* <p className="work_category">{description}</p> */}
                {link && (
                <a href={link} className='link_button'>
                  <i className="icon-link work_button-icon"><FiLink/></i>
                </a>
                )}
{/* he links will only be rendered if the link and github_link are not empty (truthy) */}
{github_link && (
                <a href={github_link} className='code_button'>
                <i className="icon-link work_button-icon"><BiCodeAlt/></i>
                </a>
)}
              </div>
            )
          })}
        </div>
        </div>


      </div>
      <div className="carousel_buttons">
          <button className="move_button left" onClick={handleMoveLeft}>
          <img src={left} alt="" className='Btn_image' height={'30px'} width={'30px'}/> <p className='Btn_text'>Prev. Project</p>
          </button>
          <button className="move_button right" onClick={handleMoveRight}>
          <p className='Btn_text'> Next Project </p><img src={left} alt="" className='Right Btn_image' />
          </button>
        </div>
        </div>
    </section>
  )
}

export default Portfolio