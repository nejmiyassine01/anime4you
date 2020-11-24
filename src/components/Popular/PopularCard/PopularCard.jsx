import React from 'react'
import * as AiIcons from 'react-icons/ai'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const PopularCard = () => {
    return (
        <div className="popular__largecard w-50 pa2 ma2" data-aos="fade-right">
            <div className="popular__content container white">
                <div className="flex w-100 white">
                    <p className="f6 br3 link ph4 pv2 pointer mb2 dib bg-light-purple ba b--light-purple mt3 mr2">Action</p>
                    <p className="f6 br3 link ph4 pv2 pointer mb2 dib bg-orange ba b--orange mt3">Fantasy</p>
                </div>
                <h2 className="f2 ttc">Nanatsu no taizai</h2>
                <h4 className="gold mt2 mb1 flex items-center">
                    AnimeList Rate: 8.1 
                    <AiIcons.AiFillStar />
                    <AiIcons.AiFillStar />
                    <AiIcons.AiFillStar />
                    <AiIcons.AiFillStar />
                    <AiIcons.AiFillStar />
                </h4>
                <button className="f5 b br3 link white ph3 pv3 mb2 pointer dib bg-light-purple ba b--light-purple mt3">See More</button>
            </div>
        </div>
    )
}

export default PopularCard
