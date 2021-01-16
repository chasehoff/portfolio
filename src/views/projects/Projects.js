import React from 'react';
import Project from '../../components/project/Project';
import ideas from './Projects.json';
import Footer from '../../components/footer/Footer';
import './index.css';

function Projects() {
    return (
        <div>
            <h2 className="projects__header">Projects</h2>
            <div className="projects__render">
                {
                    ideas.ideas.map((project, i) =>(
                        <Project key={i} name={project.name} image={project.image} description={project.description} path={project.path} />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Projects;
