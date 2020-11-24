import React, { useContext } from 'react'
import './Feeds.scss'
import { FeedsData } from './FeedsData'
import ThemeContext from '../Toggle/ThemeContext.jsx'

const Feeds = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className="feeds">
            <div style={theme} className="feeds__box">
                <h4 className="">New Feeds</h4>
                <ul>
                    {FeedsData.map((item, index) => (
                        <li key={index}>
                            <a className="mid-gray" href="#a">
                                {item.icons}
                                <span className="title">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Feeds
