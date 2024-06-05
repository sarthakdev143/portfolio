import React, { useState } from 'react';
import './Header.css';
import '../littles.css';

const Header = () => {
    const [isNavMenuActive, setIsNavMenuActive] = useState(false);

    const handleMenuClick = () => {
        setIsNavMenuActive(true);
    };

    const handleCloseClick = () => {
        setIsNavMenuActive(false);
    };

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li className="header-title">
                            <h1 id='name1'>Sarthak Parulekar</h1>
                            <h1 id='name2'>Sarthak Parulekar</h1>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li title='GitHub' className="social-icon">
                            <a href="https://github.com/sarthakdev143">
                                <i className="ri-github-fill"></i>
                            </a>
                        </li>
                        <li title='Instagram' className="social-icon">
                            <a href="https://www.instagram.com/_sarthak.parulekar/">
                                <i className="ri-instagram-line"></i>
                            </a>
                        </li>
                        <li title='Linkedin' className="social-icon">
                            <a href="https://www.linkedin.com/in/sarthak-parulekar/">
                                <i className="ri-linkedin-box-fill"></i>
                            </a>
                        </li>
                    </ul>
                    <i className="menu ri-menu-3-line" onClick={handleMenuClick}></i>
                </nav>
            </header >
            <section id='nav-menu' className={isNavMenuActive ? 'active' : ''}>
                <h1>
                    <span>
                        My Socials..
                    </span>
                    <i className="close ri-close-line" onClick={handleCloseClick}></i>
                </h1>
                <ul className="social-icons">
                    <li title='GitHub' className="social-icon">
                        <a href="https://github.com/sarthakdev143">
                            <i className="ri-github-fill"></i>
                        </a>
                    </li>
                    <li title='Instagram' className="social-icon">
                        <a href="https://www.instagram.com/_sarthak.parulekar/">
                            <i className="ri-instagram-line"></i>
                        </a>
                    </li>
                    <li title='Linkedin' className="social-icon">
                        <a href="https://www.linkedin.com/in/sarthak-parulekar/">
                            <i className="ri-linkedin-box-fill"></i>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Header;
