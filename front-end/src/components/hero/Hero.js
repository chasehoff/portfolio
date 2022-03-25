import React from 'react';
import Typed from 'react-typed';
import './index.css';

function Hero() {
    return (
        <div className="hero__container">
            <div className="hero__background" />
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
                <img style={{ height: '300px', width: '300px', borderRadius: '50%'}} src="./images/profile.png" />
            </div>
            <h2>CHASE HOFFMAN</h2>
            <Typed
                strings={[
                    'Primarily developing in Mongo',
                    'Primarily developing in Express',
                    'Primarily developing in React',
                    'Primarily developing in Node'
                ]}
                    typeSpeed={80}
                    backSpeed={80}
                    loop >
                    <input className="typed__styling" type="text"/>
                </Typed>
        </div>
    )
}

export default Hero;
