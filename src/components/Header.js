import React, { useState } from 'react';

function Header() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <div>
            <header className="header">
                <div className="navbar-menu" id="nav_menu">
                    <ul className="navbar">
                        <li className="navbar-link" href="#">About</li>
                        <li className="navbar-link" href="#">Proyects</li>
                        <li className="navbar-link" href="#">Contact</li>
                    </ul>
                </div>
                <div className="navbar-toggle" id="nav_toggle" onClick={handleOpen}></div>

                <div className="header-text">
                    <h1 className="header-title">Gabriel Mauas</h1>
                    <p className="header-subtitle">Software Developer.</p>
                </div>
                <div>
                    <img src="https://icongr.am/feather/chevron-down.svg?size=50&color=fafaff" alt="arrow" className="header-arrow"/>
                </div>
            </header>
        </div>
    );

}

export default Header;