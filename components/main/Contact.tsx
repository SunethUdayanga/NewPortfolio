import React from 'react';
import ContactContent from '../sub/ContactContent';

function Contact() {
  return (
    <div>
        <section className='flex flex-col bg-gray-900 rounded-3xl items-center justify-center gap-5 relative py-20'>
            <ContactContent />
        </section>
    </div>
  )
}

export default Contact;