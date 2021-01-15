import React from 'react';
import './index.css'

function Project(props) {
    return (
        <div className="project__container">
            <img src={props.image} alt="Project" />
            <div className="project__title__container">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Project;
