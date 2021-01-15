import React from 'react';
import Project from '../../components/project/Project';
import ideas from './Projects.json';
import './index.css';

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <div className="projects__render">
                {
                    ideas.ideas.map((project, i) =>(
                        <Project key={i} name={project.name} image={project.image} description={project.description} path={project.path} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;
