// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../styles/main.scss';
import LandingImage1 from '../../assets/Images/LandingImage1.png';
import LandingImage2 from '../../assets/Images/LandingImage2.png';
import LandingImage3 from '../../assets/Images/LandingImage3.png';

class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <>
                <Carousel
                  autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="carousel-banner">
                    <div   id="banner-container">
                        <img src={LandingImage1} alt="LandingImage" />
                        <div className="legend">My Classic Still 1</div>
                    </div>
                    <div   id="banner-container">
                        <img src={LandingImage2}  alt="LandingImage" />
                        <p className="legend">My Classic Still 2</p>
                    </div>
                    <div  id="banner-container">
                        <img src={LandingImage3}  alt="LandingImage"/>
                        <p className="legend">My Classic Still 3</p>
                    </div>
                </Carousel>
            </>
        )
    };
}

export default ImageGallaryComponent;