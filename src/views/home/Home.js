import React from 'react';
import './index.css';

function Home() {
    return (
        <div className="home__container">
            <div className="home__container__section">
                <img className="home__mockup" src="./images/guru_mockup.svg" alt="Timeguru mockup" />
                <div className="home__container__item">
                    <h3>Im An Open Book</h3>
                    <h2>About<br />Me.</h2>
                    <p>I am a self-motivated Web Developer with experience working in JavaScript, HTML, and CSS. Proficient in both back-end and front-end technologies, and familiar with SASS, ReactJs, and NodeJs.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
