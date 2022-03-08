import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/images/carousel/carousel1.jpg"
import Slider2 from "../../assets/images/carousel/carousel2.jpg"
import "./Carousel.css"

const MyCarousel = () => {
        return(
        <div className='home'>
            <Carousel controls={false} indicators interval={10000} pause={false}>
                <Carousel.Item>
                    <img className='d-block w-100 custom-img' src={Slider1}alt= "First slider"/>
                    <Carousel.Caption>
                        <a className='legend' href="/sucree">Sucree</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100 custom-img' src={Slider2}alt= "Second slider"/>
                    <Carousel.Caption>
                        <a className='legend' href="/salee">Salée</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
        );
    };
export default MyCarousel