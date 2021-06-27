import React, { useState } from 'react';
import { motion } from "framer-motion";
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import './index.css';

function Contact() {
    const [ formInfo, setFormInfo ] = useState({});
    const [ formBtn, setFormBtn ] = useState('Submit'); 

    const handleSubmit = (e) => {
        e.preventDefault();
        submitEmail();
    }
    // Page fade in
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
    
    const submitEmail = () => {
        console.log(formInfo);
        setFormBtn('Sending...')
        const headers = {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
            };
        axios.post ("http://localhost:5000/v1/form-submission", {formInfo}, {
            headers
        })
        .then((response) => {
            if(response.data.success === true) {
                setFormInfo({
                    fname: '',
                    lname: '',
                    email: '',
                    company: '',
                    message: ''
                });
                setFormBtn('Submitted!')
            } else if(response.data.success === false) {
                setFormBtn('Error')
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}  className="contact__container">
            <h2 className="contact__header">Contact</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__input__section">
                    <input required className="contact__item__double" name="fname" placeholder="First Name*" value={formInfo.fname} onChange={(e) => setFormInfo({...formInfo, fname: e.target.value})} />
                    <input required className="contact__item__double" name="lname" placeholder="Last Name*" value={formInfo.lname} onChange={(e) => setFormInfo({...formInfo, lname: e.target.value})} />
                </div>
                <div className="contact__input__section">
                    <input required className="contact__item__double" name="email" placeholder="Email*" value={formInfo.email} onChange={(e) => setFormInfo({...formInfo, email: e.target.value})} />
                    <input required className="contact__item__double" name="company" placeholder="Company" value={formInfo.company} onChange={(e) => setFormInfo({...formInfo, company: e.target.value})} /> 
                </div>
                <div className="contact__input__section">
                    <textarea rows="8" className="contact__item__single" name="message" placeholder="Message..." value={formInfo.message} onChange={(e) => setFormInfo({...formInfo, message: e.target.value})} />
                </div>
                <div className="captcha__container">
                    <p>6 + 5 = </p>
                    <input className="captcha__input" placeholder="" value={formInfo.captcha} onChange={(e) => setFormInfo({...formInfo, captcha: e.target.value})} />
                </div>
                <button className="contact__submit__button" type="submit">{formBtn}</button>
            </form>
            <Footer />
        </motion.div>
    )
}
export default Contact;
