import React from 'react';
import Typed from 'react-typed';
import './index.css';

function Hero() {
    return (
        <div className="hero__container">
            <div className="hero__background" />
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
