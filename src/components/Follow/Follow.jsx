import React from 'react'
import './Follow.scss'
import { FollowData } from './FollowData'

const Follow = () => {
    return (
        <div className="fl w-100 pa3">
            <h1 className="tc underline ttc" data-aos="fade-up">From Channels You Follow:</h1>
            <div className="flex mt5 mb5 justify-between" data-aos="fade-up">
                <div className="ma2 pointer">
                    <div className="center profile">
                        <span className="profile__icon">+</span>
                    </div>
                    <h2 className="b f4 mt3 tc ttc">Add yours</h2>
                    <p className="light-silver tc mt1">14min ago</p>
                </div>
                
                {FollowData.map((item, index) => (
                    <div className="add ma2 pointer" key={index}>
                        <div className="center profile">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg" className="br-100 h3 w3 dib" alt="avatar" />
                        </div>
                        <h2 className="b f4 mt3 tc ttc">{item.name}</h2>
                        <p className="light-silver tc mt1">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Follow
