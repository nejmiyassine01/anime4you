import React, { useContext } from 'react'
import Feeds from '../Feeds/Feeds.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import ThemeContext from '../Toggle/ThemeContext.jsx'
import './Sidebar.scss'

const Sidebar = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div style={theme} className='sidebar fl w-100 w-20-ns h-100 fixed bg-near-white'>
            <Navbar />
            <Feeds />
            {children}
        </div>
    )
}

export default Sidebar
