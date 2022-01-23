// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LandingImage from '../../assets/Images/LandingImage.png';


class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <div>
                <Carousel
                  autoPlay
        infiniteLoop
        interval={6000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}>
                    <div>
                        <img src={LandingImage} />
                        <p className="legend">My Classic Still 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" />
                        <p className="legend">My Classic Still 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallaryComponent;