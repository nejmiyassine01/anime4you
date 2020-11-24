import React, {/* { useEffect, useState } */} from 'react'
// Icons
import * as GiIcons from 'react-icons/gi'
// Landing Data
import { LandingData } from './LandingData'
// Owl Carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// Styles
import  './landing.scss'

const Landing = () => { 
    return (
        <OwlCarousel className="owl-theme" items="1" autoplay dots loop>
        {LandingData.map((item, index) => (
            <div className="carousel" key={index} >
                <div className="landing">
                    <div className={item.cName} />
                        <div 
                            className="landing__container" 
                            data-aos="fade-right" 
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0"
                        >
                            <div className="landing__span">
                                <GiIcons.GiCutDiamond />
                                <p>Live</p>
                            </div>
                            <h2 className="f2">{item.title} <span>({item.genre})</span></h2>
                            <div className="landing__logo">
                                <img src={item.src} alt='logoSoul'/>
                                <p>{item.name}</p>
                            </div>
                        <button className="landing__button pa3">Watch</button>
                    </div>
                </div>
            </div>
        ))}
        </OwlCarousel>
    )
}

export default Landing
