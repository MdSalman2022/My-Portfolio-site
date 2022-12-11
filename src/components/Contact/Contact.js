import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    console.log(errors);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6pxdimo', 'template_kx87kzf', form.current, 'LaXObu08jD013IphK')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="h-full my-44 container mx-auto lg:px-32 p-5" data-aos="zoom-in" data-aos-duration="1000" id="contact" >
            <div className="w-full  lg:p-8 space-y-3 rounded-xl  bg-neutral ">
                <h1 className="text-3xl font-bold text-primary py-2  border-b-4 border-primary w-56">//Contact Us</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block  text-secondary">Name</label>
                        <input type="text" placeholder="Name" name="user_name" className="w-full px-4 py-3 rounded-md text-neutral" />
                    </div>
                    <div className="space-y-1 py-5 text-sm">
                        <label for="email" className="block  text-secondary">Email</label>
                        <input type="email" placeholder="Email" name="user_email" className="w-full px-4 py-3 rounded-md text-neutral" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block  text-secondary">Message</label>
                        <textarea placeholder="Message" name="message" className="w-full px-4 py-3 rounded-md text-neutral" />
                    </div>
                    <button type="submit" className="block w-full p-3 mt-5 text-center rounded-lg btn-primary btn-outline border-2 transition-colors duration-500">Send</button>
                </form>
            </div>
        </div>

    );
};

export default Contact;