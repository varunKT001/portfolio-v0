import React from 'react';

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='contact-header'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-info'>
        <p className='contact-info-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          expedita exercitationem ullam deleniti nulla provident ipsa repellat
          quam esse ducimus.
        </p>
        <form
          action='mailto:tiwarvarun819.vt33.vt@gmail.com'
          method='post'
          encType='text/plain'
        >
          <button type='submit' className='primary-btn contact-info-button'>
            contact me
          </button>
        </form>
      </div>
    </section>
  );
}
