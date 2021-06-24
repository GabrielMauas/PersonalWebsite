import React, { useState } from 'react';

function Header() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <div>
            <header className="header">
                <nav className="nav">
                    <div className="navbar-menu" id="nav_menu">
                        <ul className={open ? "navbar active" : "navbar"}>
                            <a className="navbar-link" href="#about">About</a>
                            <a className="navbar-link" href="#skills">Skills</a>
                            <a className="navbar-link" href="#proyects">Proyects</a>
                            <a className="navbar-link" href="#contact">Contact</a>
                        </ul>
                    </div>

                    <div className={open ? "navbar-toggle active" : "navbar-toggle"} id="nav_toggle" onClick={handleOpen}></div>
                </nav>
                <div className="header-text">
                    <h1 className="header-title">Gabriel Mauas</h1>
                    <p className="header-subtitle">Software Developer.</p>
                </div>
                <a href="#about">
                    <img src="https://icongr.am/feather/chevron-down.svg?size=50&color=fafaff" alt="arrow" className="header-arrow"/>
                </a>
            </header>
        </div>
    );

}

export default Header;