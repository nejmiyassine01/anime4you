import React from 'react'
import './Banner.scss'

import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as GoIcons from 'react-icons/go'
import * as BsIcons from 'react-icons/bs'

const Banner = () => {
    return (
        <div className="banner" data-aos="fade-up" data-aos-easing="ease-in-sine">
            <div className="banner__browse">
                <AiIcons.AiOutlineCompass className="banner__icons" />
                <select id="cars" className="banner__select" name="cars">
                    <option value="browse">Browse</option>
                </select>
            </div>

            <div className="banner__search">
                <AiIcons.AiOutlineSearch className="banner__icons" />
                <input id="name" className="banner__input" placeholder="Search Everything" type="text" />
            </div>
            <div className="banner__profils">
                <GoIcons.GoDiffAdded className="banner__icons" />
                <BsIcons.BsChatDots className="banner__icons" />
                <AiIcons.AiOutlineBell className="banner__icons" />
                <MdIcons.MdPersonOutline className="banner__icons" />
            </div>
        </div>
    )
}


export default Banner