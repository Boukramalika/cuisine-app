import React  from 'react'
import MyCarousel from '../../carousel/Carousel'
import ImageSlider from '../Slider/Slider'

import './Home.css'

const Home =()=>{
    return (
        <div className='container'>
            <MyCarousel/>
            <div className='content-container'>
            <h1>Creer vos recettes </h1>
            <h4>Pour le paisir de cuisiner</h4>
            <p>Notre  site  vous permet  de mettre  vos recette  en ligne </p>
            <ImageSlider />
            </div>
           
        </div>
    )
}
export  default Home