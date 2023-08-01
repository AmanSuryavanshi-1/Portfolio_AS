/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Portfolio.css'
import Data from './Data'
import { useState } from 'react';
import {FiLink} from 'react-icons/fi'
import {BiCodeAlt} from 'react-icons/bi'

const Portfolio = () => {
  const [items, setItems] = useState(Data);
  const filterItem = (categoryItem) =>{
    const updatedItems = Data.filter((curElem) =>{
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }

  return (
    <section id='Portfolio'>
      <h2>Recent Works</h2>
      <div className='container portfolio_container'>
        <div className='work_filters'>
          <span className="work_item" onClick={() => setItems(Data)} >Everything</span>
          <span className="work_item" onClick={() => filterItem("Major")}>Major Projects </span>
          <span className="work_item" onClick={() => filterItem("Minor")}> Minor Projects </span>
        </div>

        <div className="work_container">
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
    </section>
  )
}

export default Portfolio