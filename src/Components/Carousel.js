import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import   { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image1 from '../image/Black & Yellow Business Facebook Cover.jpg'
import Image2 from '../image/Orange Digital Marketing Agency Facebook Cover.png'
import Image3 from '../image/Navy Futuristic Business Facebook Cover.png'

// import './Carousel.css'

function Back() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (index) => {
      setCurrentIndex(index);
    };
  
    useEffect(() => {
      // Set an interval to advance to the next slide every 5 seconds (5000 milliseconds).
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % 3; // Assuming you have 3 slides
        setCurrentIndex(nextIndex);
      }, 5000); // 5000 milliseconds (5 seconds)
  
      return () => {
        // Clear the interval when the component unmounts to prevent memory leaks.
        clearInterval(interval);
      };
    }, [currentIndex]);
  return (
    <Carousel  autoPlay
    interval={5000} // Time in milliseconds for auto-play (5 seconds)
    infiniteLoop
    selectedItem={currentIndex}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    onChange={handleSlideChange}>
    <div  style={{width:'100%',height:"100%"}}  >
      <img src={Image1} alt="" />
    
    </div>
    <div  style={{width:'100%',height:"100%"}} >
      <img src={Image2} alt="" />
    
    </div>
    <div  style={{width:'100%',height:"100PX"}}>
      <img src={Image3} alt="" />
 
    </div>
  </Carousel>
  )
}

export default Back
