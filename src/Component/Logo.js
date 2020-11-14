import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide from "../Component/Image/slide.png";



class Logo extends React.Component {
    render(){
      return(
        <div>
         <Carousel>
  <Carousel.Item>
  <img className="d-block" src={slide} alt="First slide" width="1400px" height = "200px"/>
  </Carousel.Item>
  </Carousel>
       </div>
       );
     }
   }
   
   export default Logo;
  