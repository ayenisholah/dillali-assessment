import React from 'react'

export default function Switches({toggleMode, toggleState}) {

    return (
        <div className="switches">
            <div>
                <input
                        className={toggleState === 1 ? "mode active-mode" : "mode"}
                        type="radio"
                        value="app mode"
                        name="mode"
                        defaultChecked
                    onChange={() => toggleMode(1)}/>
                 <label>
                    App Mode
                </label>
            </div>
            <div>
                    <input
                        className={toggleState === 2 ? "mode active-mode" : "mode"}
                        type="radio"
                        value="admin mode"
                        name="mode"
                        onChange={() => toggleMode(2) }/>
                    <label>
                        Admin Mode
                    </label>
                </div>
        </div>
    )
}
