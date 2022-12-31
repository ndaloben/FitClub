import React, { useRef } from 'react';
import './Join.css';
import  emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_extzqaS', 'template_5fbt3fr', form.current,
        'VLwg1ltoWvnCYAik')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
        </div>
        <div>
        <span>YOUR BODY </span>
        <span className='stroke-text'>WITH US?</span>
        </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
<input type="email" name='user-email' placeholder='Enter your email address'/>
<button className='btn btn-j'>Join Now</button>

            </form>

        </div>
    </div>
  )
}

export default Join;
