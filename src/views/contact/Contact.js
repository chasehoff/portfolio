import React, { useState } from 'react';

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
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="fname" placeholder="First Name" value={formInfo.fname} onChange={(e) => setFormInfo({...formInfo, fname: e.target.value})} />
                    <input name="lname" placeholder="Last Name" value={formInfo.lname} onChange={(e) => setFormInfo({...formInfo, lname: e.target.value})} />
                </div>
                <div>
                    <input name="email" placeholder="Email" value={formInfo.email} onChange={(e) => setFormInfo({...formInfo, email: e.target.value})} />
                    <input name="company" placeholder="Company" value={formInfo.company} onChange={(e) => setFormInfo({...formInfo, company: e.target.value})} />
                </div>
                <div>
                    <textarea name="message" placeholder="Message..." value={formInfo.message} onChange={(e) => setFormInfo({...formInfo, message: e.target.value})} />
                </div>
                <input type="submit" placeholder="Submit" />
            </form>
        </div>
    )
}

export default Contact;
