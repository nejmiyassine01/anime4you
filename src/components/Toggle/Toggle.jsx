import React, { useState } from 'react'
import './Toggle.scss'

const Toggle = ( { onToggle } ) => {

    const [toggle, setToggle] = useState(false);
    
    const onHandleClick = () => setToggle(!toggle);
    
    return (
        <div className="center pa2 toggle">
            <div 
                onClick={() => {
                    onHandleClick() 
                    onToggle()
                }}
                className="toggle__design"
            >
                <div className={toggle ? "toggle__background toggle__background--dark" : "toggle__background toggle__background--light"}>
                    <div className={toggle ? "toggle__notch toggle__notch--dark" : "toggle__notch toggle__notch--light"}>
                        <div className={toggle ? "toggle__notchInt toggle__notchInt--dark" : "toggle__notchInt toggle__notchInt--light"}></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Toggle
