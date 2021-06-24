import React from 'react';
import { motion } from "framer-motion";
import Project from '../../components/project/Project';
import ideas from './Projects.json';
import Footer from '../../components/footer/Footer';
import './index.css';

function Projects() {
    const pageVariants = {
        initial: {
          opacity: 0,
          y: "-10vh",
          scale: 0.8,
        },
        in: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        out: {
          opacity: 0,
          y: "100vh",
          scale: 1.2,
        },
    };
    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.8,
    };
    return (
        <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
            <h2 className="projects__header">Projects</h2>
            <div className="projects__render">
                {
                    ideas.ideas.map((project, i) =>(
                        <Project key={i} name={project.name} image={project.image} description={project.description} path={project.path} />
                    ))
                }
            </div>
            <Footer />
        </motion.div>
    )
}

export default Projects;
