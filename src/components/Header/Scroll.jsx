import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
const Scroll = () => {
  return (
    <div className='header_scroll'>
        <a href="#Portfolio" className='scroll_down'>
        <svg
  width="30px"
  height="30px"
  viewBox="0 0 247 390"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.5,
  }}
>
  <path
    id="wheel"
    d="M123.359,79.775l0,72.843"
    style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }}
  />
  <path
    id="mouse"
    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
    style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }}
  />
</svg>
              <span className="header_scroll-name">Scroll Down </span>
              <AiOutlineArrowDown className="header_scroll-arrow"/>
              
        </a> </div>
  )
}

export default Scroll