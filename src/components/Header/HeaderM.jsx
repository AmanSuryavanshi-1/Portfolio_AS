import React from 'react'
import './Header.css'
import Resume from './Resume'
import me from '../../Assests/AS main.png'
import HeaderSocial from './HeaderSocial'

const Header = ()=> {
  return (
    
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aman Suryavanshi</h1>
        <h5 className='text-light'>A Tech Geek</h5>
        <Resume/>
        <HeaderSocial/>
        <div className='me'>
          <img className='img' src={me} alt="me" />
        </div>

        <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

// CSS
// header {
//   height: 100vh;
//   padding-top: 3rem;
//   overflow: hidden;
// }

// .header_container{
//   text-align: center;
//   height: 100%;
//   position: relative;
// }

// .resume{
//   margin-top: 2.5rem;
//   display: flex;
//   gap:1.2rem;
//   justify-content: center;
// }

// /*=========== Header_Socials============ */

// .header_socials{
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.8rem;
//   position: absolute;
//   left: 0;
//   bottom: 3rem;
// }

// /* creating a vertical blank below icon */
// .header_socials::after{
//   content: "";
//   width: 1.5px;
//   height: 2.5rem;
//   background-color: var(--color-primary);
// }
// /* =============== me image ============= */
// .me{
//   background: linear-gradient(var(--color-primary),transparent);
//   width: 22rem;
//   height: 30rem;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   margin-top: 4rem;
//   border-radius: 12rem 12rem 0 0;
//   overflow: hidden;
//   padding: 1rem;
// }

// /* .me img
// {
//   width: 450px;
//   margin-left: -80px;
// } */
// /* ===========Scroll_down============== */

// .scroll_down{
//   position: absolute;
//   right: -2.3rem;
//   bottom: 6rem;
//   transform: rotate(90deg);
//   font-weight: 300;
//   font-size: 0.9rem;
// }


// /* ============================ MEDIA QUERIES (MEDIUM DEVICES)====================== */

// @media screen and (max-width:1024px){
//  header{
//   height: 68vh;
//  }
//  .me img{
//   width: 22rem;
//   height: 28rem;
//   margin-top: 2rem;
//   margin-left: -24px;
// }  
// }

// /* ============================ MEDIA QUERIES (SMALL DEVICES)====================== */

// @media screen and (max-width:720px){
//   header{
//       height: 100vh;
//       padding-top: 4rem;

//   }
//   .header_socials,
//   .scroll_down{
//       display: none;
//   }
// }

// @media screen and (max-width:400px){
//   header{
//       height: 115vh;
//   }
//   /* .me img{
//       width: 22rem;
//       height: 28rem;
//       margin-top: 2rem;
//       margin-left: -15px;
//   }   */
//   /* .resume{
//       margin-top: 0;
//   }
//   .me{
//       padding: 0;
//   }
//   .header_socials,
//   .scroll_down{
//       display: none;
//   } */
  
// }