import React, { useState } from 'react'
import Menu from './Menu'
import Switches from './Switches'
import logo from '../logo.svg'

export default function Mode() {
    const [toggleState, setToggleState] = useState(1)
    const [activeMenu, setActiveMenu] = useState(1)

    const toggleMode = (index) => {
        setToggleState(index)
    }

    const toggleActive = (index) => {
        setActiveMenu (index)
    }

    return (
        <div className="container">
            <div className="top-bar">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <Switches
                    toggleMode={toggleMode}
                    toggleState={toggleState}
                />
            </div>
           
            <Menu
                toggleState={toggleState}
                activeMenu={activeMenu}
                toggleActive={toggleActive}
            />
        </div>
    )
}
