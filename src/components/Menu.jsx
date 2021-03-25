import React from 'react'

export default function Menu({toggleState, activeMenu, toggleActive}) {

    const appMenuItem = ["Entry1", "Entry2", "Entry3", "Entry4", "Entry5"]
    const adminMenuItem = ["AdminEntry1", "AdminEntry2", "AdminEntry3"]

    const activeStyle = { backgroundColor: '#B1B1B1' };

    return (
        <div className="mode-menu">
            <div
                    className={toggleState === 1 ? "menu active-menu" : "menu"}>
                    <div className="menu-items">
                        {appMenuItem.map((menuItem, index) => 
                            <button
                            style={activeMenu === index ? activeStyle : {}}
                            onClick={() => toggleActive(index)}
                            key={index}
                                >
                                {menuItem}
                            </button>
                        )}
                    </div>
                </div>
                <div
                    className={toggleState === 2 ? "menu active-menu" : "menu"}>
                    <div className="menu-items">
                        {adminMenuItem.map((menuItem, index) => 
                            <button
                            style={activeMenu === index ? activeStyle : {}}
                            onClick={() => toggleActive(index)}
                            key={index}
                                >
                                {menuItem}
                            </button>
                        )}
                    </div>
                </div>
        </div>
    )
}