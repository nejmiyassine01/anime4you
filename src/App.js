import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Body from './components/Body/Body.jsx'
import ThemeContext, { themes } from './components/Toggle/ThemeContext.jsx';
import Toggle from './components/Toggle/Toggle.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [theme, setTheme] = useState(themes.light);

  const onToggleTheme = () => theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  
  return (
    <ThemeContext.Provider value={theme}>
      <div className="app fl w-100">
          <Sidebar>
            <Toggle onToggle={onToggleTheme} />
          </Sidebar>
          <Body />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
