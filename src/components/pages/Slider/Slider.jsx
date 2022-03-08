import React from 'react';
import Slider from "react-slick";
import Image1 from "../../../assets/images/slider/01.jpg"
import Image2 from "../../../assets/images/slider/02.jpg"
import Image3 from "../../../assets/images/slider/03.jpg"
import Image4 from "../../../assets/images/slider/04.jpg"
import Image5 from "../../../assets/images/slider/05.jpg"
import Image6 from "../../../assets/images/slider/06.jpg"
import Image7 from "../../../assets/images/slider/07.jpg"
import "./slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider className="container mt-5 carousel" {...settings}>
            <div className="card-wrapper">
                <div className="card-slider">
                    <div className="card-image">
                        <img src={Image1}alt= "First slider" />
                    </div>
                    <div className="details">
                        <h2>Venez  <span className="sub-title">decouvrire nos recettes</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card-slider">
                    <div className="card-image">
                        <img src={Image2}alt= "First slider"/>
                    </div>
                    <div className="details">
                        <h2>Venez  <span className="sub-title">connectez-vous </span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card-slider">
                    <div className="card-image">
                        <img src={Image3}alt= "First slider" />
                    </div>
                    <div className="details">
                        <h2>Venez  <span className="sub-title">creer vos recettes</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card-slider">
                    <div className="card-image">
                        <img src={Image4}alt= "First slider" />
                    </div>
                    <div className="details">
                        <h2>Venez  <span className="sub-title">apprendre des recettes</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card-slider">
                    <div className="card-image">
                        <img src={Image5}alt= "First slider" />
                    </div>
                    <div className="details">
                        <h2>Venez  <span className="sub-title">partager avec nous </span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card-slider">
                    <div className="card-image">
                        <img src={Image6}alt= "First slider" />
                    </div>
                    <div className="details">
                        <h2>Venez  <span className="sub-title">decouvrire nos recettes</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card-slider">
                    <div className="card-image">
                        <img src={Image7}alt= "First slider" />
                    </div>
                    <div className="details">
                        <h2>Venez  <span className="sub-title">decouvrire nos recettes</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider