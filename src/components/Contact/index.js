import React, { useState } from 'react';

import {validateEmail} from '../../utils/helpers'

function ContactForm () {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            !isValid ? setErrorMessage('ERROR: Invalid email address') : setErrorMessage('')
        } else {
            !e.target.value.length ? setErrorMessage(`ERROR: ${e.target.name} is required.`) : setErrorMessage("")
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
            // [] is used for dynamic property names 
        }
    }

    function handleSubmit(e) {

        e.preventDefault()
        console.log(formState)
    }

    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contactForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="submit" type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm