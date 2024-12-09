import React from 'react';
import './contact.css';
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/Animation - 1733494275246.json";
import contactAnimation from "../../../public/animation/message.json";


import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
    const [state, handleSubmit] = useForm("movqbzyp");


    return (
        <section className='contact'>
            <h1>
                <span className="icon-envelope"></span>
                Contact us
            </h1>
            <p>Contact us for more information and Get notified when I publish something new.</p>
            <div style={{ justifyContent: 'space-between', gap: "4rem"}} className="flex">
                <form onSubmit={handleSubmit} className='form'>
                    <div className='flex'>
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete='off' required type="email" id='email' name='email' placeholder='Email Address' />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea required name="message" id="message" placeholder='Message'></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className='submit'>
                        {state.submitting ? "Submitting ..." : "Submit"}
                    </button>
                    {state.succeeded && (
                        <p className='flex' style={{ marginLeft: -30 }}>
                            <Lottie loop={false} style={{ height: "80px", marginRight: "-10px" }} animationData={doneAnimation}></Lottie>
                            <span style={{ marginLeft: -10, fontSize: 13 }}>Your message has been sent successfully 👍</span>
                        </p>
                    )}
                </form>
                <div className="animation">
                    <Lottie style={{height: "50vh"}} animationData={contactAnimation}></Lottie>
                </div>

            </div>
        </section>


    )
}
export default Contact;