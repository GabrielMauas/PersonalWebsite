import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const Contact = () => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMsg] = useState('');

    const handleName = e => {
        e.preventDefault();
        const value = e.target.value;
        setName(value);
    }
    const handleMail = e => {
        e.preventDefault();
        const value = e.target.value;
        setMail(value);
    }
    const handleMsg = e => {
        e.preventDefault();
        const value = e.target.value;
        setMsg(value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        emailjs.send("service_fe31m45","template_565h5oq", {
            from_name: name,
            message: msg,
            reply_to: mail
        }, "user_IEsC4yfCbPP6GxwvHkMXz")
            .then(swal('Message Sent!', 'I`ll be back to you soon', 'success')); 

        setName('');
        setMail('');
        setMsg('');
    }


    return(
        <div className="section contact" id="contact">
            <h2 className='section-title'>Contact</h2>
            <div className='contact-container'>
                <div className='contact-data'>
                    <div>
                        <h3>Email</h3>
                        <a href="mailto:gabymauas02@gmail.com" target="_blank" rel="noreferrer">gabymauas02@gmail.com</a>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <a href="https://wa.link/n6q3j6" target="_blank" rel="noreferrer">+54 9 11 6799 2748</a>
                    </div>
                </div>
                <form className='c-form' onSubmit={handleSubmit}>
                    <div className='c-inputs'>
                        <input type="text" placeholder="Name" className='c-input' required onChange={handleName}></input>
                        <input type="mail" placeholder="Email" className='c-input' required onChange={handleMail}></input>
                    </div>
                    <textarea className='c-input' cols="0" rows="10" onChange={handleMsg}></textarea>
                    <input type="submit" value="Send" className='c-button' ></input>
                </form>
            </div>

        </div>
    )
}

export default Contact;