import React, { useContext } from 'react'
import Banner from '../Banner/Banner'
import Landing from '../Landing/Landing'
import Cards from '../Cards/Cards'
import ThemeContext from '../Toggle/ThemeContext'
import Popular from '../Popular/Popular'
import Follow from '../Follow/Follow'
import Footer from '../Footer/Footer'
import './Body.scss'

const Body = () => {
    const theme = useContext(ThemeContext);
    
    return (
        <div className="body fr w-80 h-100" style={theme}>
            <Banner />
            <Landing />
            <Cards />
            <Follow />
            <Popular />
            <Footer />
        </div>
    )
}

export default Body
