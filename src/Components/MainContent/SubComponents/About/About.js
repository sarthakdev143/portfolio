import React from 'react'
import './About.css'

const About = () => {
    return (
        <section id='about' data-scroll>
            <div id='head-text' data-scroll data-scroll-speed="1">
                <h1 data-scroll>Hii, Folks 👋</h1>
                <h3 data-scroll>This is Sarthak...</h3>
            </div>
            <div id='flying-div' data-scroll data-scroll-speed="2"></div>
        </section>
    )
}

export default About