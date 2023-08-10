import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Modes from './components/Modes/Modes'

const App = () => {
  return (
    <>
      <Modes/>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App