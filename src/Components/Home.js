import React, { useState } from 'react';
import Navbar from './Navbar'
import Carousell from './Carousell'
import Cards from './Cards'
import Feedback from './Feedback'
import Footer from './Footer'
import Login from './Login';

function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
      };

  return (
    <div >
  
  <div>
  <Navbar/>
      <div className='Carousel'>
        <Carousell/>
      </div>
      <div className='center'>
        <p>Top Students</p>
      <Cards/>
      </div>
      <div className='center'>
        <p>Reviews</p>
        <Feedback/>
      </div>

      <Footer/>
      
  </div>
     
    </div>
  )
}

export default Home
