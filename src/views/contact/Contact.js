import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import './index.css';

function Contact() {

    const [ formInfo, setFormInfo ] = useState({
        fname: '',
        lname: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo)
    }

    return (
        <div className="contact__container">
            <h1 className="contact__header">Contact</h1>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__input__section">
                    <input className="contact__item__double" name="fname" placeholder="First Name" value={formInfo.fname} onChange={(e) => setFormInfo({...formInfo, fname: e.target.value})} />
                    <input className="contact__item__double" name="lname" placeholder="Last Name" value={formInfo.lname} onChange={(e) => setFormInfo({...formInfo, lname: e.target.value})} />
                </div>
                <div className="contact__input__section">
                    <input className="contact__item__double" name="email" placeholder="Email" value={formInfo.email} onChange={(e) => setFormInfo({...formInfo, email: e.target.value})} />
                    <input className="contact__item__double" name="company" placeholder="Company" value={formInfo.company} onChange={(e) => setFormInfo({...formInfo, company: e.target.value})} />
                </div>
                <div className="contact__input__section">
                    <textarea rows="8" className="contact__item__single" name="message" placeholder="Message..." value={formInfo.message} onChange={(e) => setFormInfo({...formInfo, message: e.target.value})} />
                </div>
                <input className="contact__submit__button" type="submit" placeholder="Submit" />
            </form>
            <Footer />
        </div>
    )
}

export default Contact;
