import React, { useState } from 'react';
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
    
    const submitEmail = () => {
        setFormBtn('Sending...')
        const headers = {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
            };
        axios.post ("https://localhost:5000/v1/form-submission", JSON.stringify({formInfo}), {
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
            } else {
                setFormBtn('Error')
            }
        })
        .catch((error) => {
            console.log(error)
        })
        
    }

    return (
        <div className="contact__container">
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
                <button className="contact__submit__button" type="submit">{formBtn}</button>
            </form>
            <Footer />
        </div>
    )
}

export default Contact;
