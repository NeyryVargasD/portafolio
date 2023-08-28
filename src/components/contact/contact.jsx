import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_1jmfh8n',
        'template_7oqg7vj',
        formRef.current,
        '3inYLJhelhH5DgS3k'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className='Contact'>
    <section id="contact">
      <h5>Ponerse en contacto</h5><br/>
      <h5>
     Recibo sus mensajes y responderé lo antes posible si se proporciona el correo electrónico válido :)
      </h5>
      <h2>Contáctame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>neyry007@gmail.com</h5>
            <a href="mailto:neyry007@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primarys">
            Send Message
          </button>
          {message && <span>Gracias por enviar tu mensaje :)</span>}
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;