import React from 'react'

export const themes = {
    dark: {
        color: '#fff',
        background: '#1f2128'
    },
    light: {
        color: '#1f2128',
        background: '#fff'
    }
}

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext
