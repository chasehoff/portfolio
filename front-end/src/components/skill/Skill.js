import React from 'react';
import './index.css';

function Skill(props) {
    return (
        <div className="skill__container">
            <h4 className="skill__item__number">{props.number}</h4>
            <h3 className="skill__header">{props.header}</h3>
            <p className="skill__text">{props.text}</p>
        </div>
    )
}

export default Skill;
