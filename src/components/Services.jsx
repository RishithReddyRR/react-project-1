import React from 'react'
import{Carousel} from "react-responsive-carousel"
import '../styles/services.scss'
import img1 from "../images/3.jpg"
import img2 from "../images/4.jpg"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Services() {
  return (
    <div className="services">
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}  showThumbs={false}>
            <div>
                <img src={img1} alt="" />
                <p className='legend'>FullStack</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <p className='legend'>peer-to-peer Support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services