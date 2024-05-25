import React from 'react';
import ContactContent from '../sub/ContactContent';
import ContactText from '../sub/ContactText';
import { Contact_icons } from '@/constants';

export default function Contact() {
    return (
        <div id='contact' className='pt-[80px]'>
            <section  className='flex flex-col backdrop-blur-xs ring-1 rounded-3xl items-center justify-center gap-5 relative py-8 px-2' style={{ transform: 'scale(0.9)' }}>
                <div>
                    <ContactText />
                </div>
                <div className="flex flex-row flex-wrap justify-center mx-auto gap-4 mt-2 items-center">
                    {Contact_icons.map((image, index) => (
                        <ContactContent
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                            text={image.text}
                            name={image.icon_name}
                            dtext={image.dtext}
                        />
                    ))}

                </div>
            </section>
        </div>
    )
}
