import React from 'react'
import './Popular.scss'
import { MiniCard } from './PopularCard/MiniCardData'
import PopularCard from './PopularCard/PopularCard.jsx'
import PopularMiniCards from './PopularCard/PopularMiniCards.jsx'

const Popular = () => {   
    return(
        <div className="popular center">
            <h1 className="tc underline" data-aos="fade-up">Popular Categories:</h1>
            <div className="popular__categories flex items-center justify-between mt5 cf ph2-ns">
                <PopularCard />

                <div className="popular__minicards pl2 pr2 ma2">
                {MiniCard.map((item, index) => (
                    <PopularMiniCards 
                        key={index}
                        imgSrc={item.imgSrc}
                        genre={item.genre}
                        nameAnime={item.nameAnime}
                        rate={item.rate}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Popular