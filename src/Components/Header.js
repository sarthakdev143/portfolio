import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="header-title">
                        Sarthak Parulekar
                    </li>
                </ul>
                <ul className="social-icons">
                    <li className="social-icon">
                        <a href="https://github.com/sarthakdev143">
                            <i className="ri-github-fill"></i>
                        </a>
                    </li>
                    <li className="social-icon">
                        <a href="https://www.instagram.com/sarthakdev143/">
                            <i className="ri-instagram-line"></i>
                        </a>
                    </li>
                    <li className="social-icon">
                        <a href="https://www.linkedin.com/in/sarthakparulekar/">
                            <i className="ri-linkedin-box-fill"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
