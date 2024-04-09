import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import "./Navbar.css"

const Carousell = () => {
  const images = [
    img1,
    "img2",
    "img3",
  ];

  return (
    <Carousel>
        <div className='h'>
            <img src={img1}/>
            
        </div>
        <div className='h'>
            <img src={img2} />
          
        </div>
        <div className='h'>
            <img src={img3} />
           
        </div>
    </Carousel>
);

};

export default Carousell;
