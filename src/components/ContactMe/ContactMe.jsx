import React from "react";
import './ContactMe.css'
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard
                    iconUrl= "src\assets\icons8-email-open-48.png"
                    text= "panchaljigar0903@gmail.com"
                    />
                <ContactInfoCard
                    iconUrl= "src\assets\icons8-github-64.png"
                    text= "https://github.com/JigarPanchal08"
                    />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
};

export default ContactMe;
