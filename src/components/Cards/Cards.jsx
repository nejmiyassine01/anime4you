import React, { useContext } from 'react'
import { CardsData } from './CardsData';
import ThemeContext from '../Toggle/ThemeContext';
import './Cards.scss'

const Cards = () => {
    const theme = useContext(ThemeContext);
    
    return (
        <>
        <h1 className="tc underline" data-aos="fade-up">My Favorite Animes:</h1>
        <div 
            className="container flex flex-wrap justify-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            style={theme}
        >
            {CardsData.map((item,index) => (
                <div 
                    className="anime fl w-100 br2 ba b--light-gray mv4 mw5 center"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    key={index}
                >
                    <img src={item.src} className="image db w-100 br2 br--top" data-aos="fade-right" alt={item.alt} />
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f5 f4-ns mv0">{item.title}</h1>
                            </div>
                            <div className="dtc tr">
                                <h2 className="f5 mv0 red">Ep:{item.ep}</h2>
                            </div>
                        </div>
                        <p className="f6 lh-copy tc measure mt3 gray">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className="f6 br3 pointer justify-center link dim ph3 pv2 mb2 dib white bg-light-purple ba b--near-white mt3">Watch</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Cards
