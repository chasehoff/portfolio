import React from 'react';
import { motion } from "framer-motion";
import './index.css';
import Skill from '../../components/skill/Skill';
import Skills from '../../components/skill/Skills.json';
import Footer from '../../components/footer/Footer';

function Home() {
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
        transition={pageTransition} className="home__container">
            <div className="home__container__section">
                <img className="home__mockup" src="./images/guru_mockup.svg" alt="Timeguru mockup" />
                <div className="home__container__item">
                    <h3>Im An Open Book</h3>
                    <h2>About<br />Me.</h2>
                    <p>I am a self-motivated Web Developer with experience working in JavaScript, HTML, and CSS. Proficient in both back-end and front-end technologies, and familiar with SASS, ReactJs, and NodeJs.</p>
                </div>
            </div>
            <div className="home__container__section">
                <h2 className="home__skills__header">My Skills.</h2>
                <div className="home__skills__container">
                    {
                        Skills.skills.map((skill, i) =>(
                            <Skill key={i} number={skill.number} header={skill.header} text={skill.text} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Home;
