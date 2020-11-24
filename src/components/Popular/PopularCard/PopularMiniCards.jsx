import React from 'react'
import * as AiIcons from 'react-icons/ai'

const PopularMiniCards = ({ imgSrc, genre, nameAnime, rate }) => {
    return (
            <div className="popular__card flex flex-wrap" data-aos="fade-down">
                <div className="popular__cardimg w-50">
                    <img className="w-100 h-100 cover" src={imgSrc} alt="Eater" /> 
                </div>
                <div className="popular__cardcontent w-50 mt1 pl2">
                    <p className="f6 br3 link dim ph4 pv2 dark gray b pointer mb2 dib bg-light-gray ba b--light-gray mt3">{genre}</p>
                    <h2 className="f5 ttc">{ nameAnime }</h2>
                    <h4 className="gold mt2 mb1 flex items-center">
                        AnimeList Rate: {rate} <AiIcons.AiFillStar />
                    </h4>
                    <button className="f6 b br3 link white ph3 pv3 mb2 dib bg-light-purple ba b--light-purple mt3">See More</button>
                </div>
            </div>
    )
}

export default PopularMiniCards
