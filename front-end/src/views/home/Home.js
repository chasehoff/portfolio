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
                <svg style={{ width: '100%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,64L0,288L36.9,288L36.9,128L73.8,128L73.8,288L110.8,288L110.8,64L147.7,64L147.7,256L184.6,256L184.6,96L221.5,96L221.5,32L258.5,32L258.5,192L295.4,192L295.4,192L332.3,192L332.3,256L369.2,256L369.2,224L406.2,224L406.2,288L443.1,288L443.1,160L480,160L480,192L516.9,192L516.9,128L553.8,128L553.8,288L590.8,288L590.8,32L627.7,32L627.7,96L664.6,96L664.6,64L701.5,64L701.5,256L738.5,256L738.5,128L775.4,128L775.4,160L812.3,160L812.3,224L849.2,224L849.2,224L886.2,224L886.2,160L923.1,160L923.1,224L960,224L960,64L996.9,64L996.9,160L1033.8,160L1033.8,224L1070.8,224L1070.8,32L1107.7,32L1107.7,288L1144.6,288L1144.6,256L1181.5,256L1181.5,288L1218.5,288L1218.5,64L1255.4,64L1255.4,288L1292.3,288L1292.3,256L1329.2,256L1329.2,96L1366.2,96L1366.2,64L1403.1,64L1403.1,96L1440,96L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>
                <div style={{ backgroundColor: '#f3f4f5', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>Schooling</h2>
                    <div style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{ textAlign: 'center'}}>
                            <h4 style={{ color: '#00FDDC'}}>Hopkins Highschool</h4>
                            <p>2011-2015</p>
                            <p>Diploma</p>
                        </div>
                        <div className='home__school__divider' />
                        <div style={{ textAlign: 'center'}}>
                            <h4 style={{ color: '#00FDDC'}}>Fullsail University</h4>
                            <p>2020-2021</p>
                            <p>Associates Degree</p>
                            <p>Comp-Sci</p>
                        </div>
                        <div className='home__school__divider' />
                        <div style={{ textAlign: 'center'}}>
                            <h4 style={{ color: '#00FDDC'}}>Fullsail University</h4>
                            <p>2021-Current</p>
                            <p>Bachelors Degree</p>
                            <p>Comp-Sci</p>
                        </div>
                    </div>
                </div>
                <svg style={{ width: '100%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,64L0,288L36.9,288L36.9,128L73.8,128L73.8,288L110.8,288L110.8,64L147.7,64L147.7,256L184.6,256L184.6,96L221.5,96L221.5,32L258.5,32L258.5,192L295.4,192L295.4,192L332.3,192L332.3,256L369.2,256L369.2,224L406.2,224L406.2,288L443.1,288L443.1,160L480,160L480,192L516.9,192L516.9,128L553.8,128L553.8,288L590.8,288L590.8,32L627.7,32L627.7,96L664.6,96L664.6,64L701.5,64L701.5,256L738.5,256L738.5,128L775.4,128L775.4,160L812.3,160L812.3,224L849.2,224L849.2,224L886.2,224L886.2,160L923.1,160L923.1,224L960,224L960,64L996.9,64L996.9,160L1033.8,160L1033.8,224L1070.8,224L1070.8,32L1107.7,32L1107.7,288L1144.6,288L1144.6,256L1181.5,256L1181.5,288L1218.5,288L1218.5,64L1255.4,64L1255.4,288L1292.3,288L1292.3,256L1329.2,256L1329.2,96L1366.2,96L1366.2,64L1403.1,64L1403.1,96L1440,96L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"></path></svg>
            </div>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column'}} className="home__container__section">
                <h2 style={{ textAlign: 'left'}} className="home__skills__header">I am specialized in</h2>
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
