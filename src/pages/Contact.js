import React from "react";
import { useGlobalContext } from "../context";
const Contact = () => {
  const { useName } = useGlobalContext();
  return (
    <section className='section contact-section'>
      <h2 className='section-title'>
        {" "}
        {useName ? `${useName} expert` : "contact us"}
      </h2>

      <div className='section-center'>
        <article className='contacts-info'>
          <div className='contact-info'>
            <p>
              <span className='drink-data'>address :</span>
              <br />
              &nbsp;Plac Rodła, 71-899 Szczecin
            </p>
          </div>

          <div className='contact-info'>
            <p>
              <span className='drink-data'>email :</span> <br />
              &nbsp;
              {useName ? `the${useName}expert@gmail.com` : "coktails@gmail.com"}
            </p>
          </div>

          <div className='contact-info'>
            <p>
              <span className='drink-data'>telephone :</span> <br />
              &nbsp;+48 511 111 111
            </p>
          </div>
        </article>

        <article className='contact-form'>
          <h3 className='contact-form-title'>contact form</h3>
          <form action='' className='inputs-form'>
            <input type='text' className='form-input' placeholder='name' />
            <input type='email' className='form-input' placeholder='email' />
            <textarea
              className='form-input'
              name='text-area'
              rows='3'
              placeholder='message'
            ></textarea>
            <input
              type='submit'
              value='submit here'
              className='btn-primary form-btn'
            />
          </form>
        </article>
      </div>
    </section>
  );
};

export default Contact;
