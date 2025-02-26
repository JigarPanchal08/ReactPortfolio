import React from "react";
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div>
        <div className="contact-form-content">
            <form action="">
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>
                <input type="text" name="email" placeholder="Email"/>
                <textarea type="text" name="message" placeholder="Message" rows={3}></textarea>

                <button>SEND</button>
            </form>
        </div>
    </div>
  )
};

export default ContactForm;
