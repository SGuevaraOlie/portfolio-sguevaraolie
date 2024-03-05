'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface EmailSectionProps {
    translations: {
        EmailSection: {
            Title: string;
            P1: string;
            P2: string;
            Form: {
                Title1: string;
                Placeholder1: string;
                Title2: string;
                Placeholder2: string;
                Title3: string;
                Placeholder3: string;
                Button: string;
                Span: string;
            }
        }
    }
}

const EmailSection: React.FC<EmailSectionProps> = ({ translations }) => {
    const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            email: (e.target as HTMLFormElement).email.value,
            subject: (e.target as HTMLFormElement).subject.value,
            message: (e.target as HTMLFormElement).message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if(response.status === 200) {
            setEmailSubmitted(true);
        }
    };
    return (
        <section id='contactForm'>
            <div className='flex flex-col lg:flex-row mb-12 mt-32 lg:mb-48 space-y-12 lg:space-y-0 justify-between'>
                <div className='text-center lg:text-start'>
                    <h5 className='text-2xl lg:text-4xl font-bold text-[#ffb826] mb-4'>{translations.EmailSection.Title}</h5>
                    <p className='text-[#ADB7BE] text-xs lg:text-lg mb-2 max-w-md'>{translations.EmailSection.P1}</p>
                    <p className='text-[#ADB7BE] text-xs lg:text-lg mb-2 max-w-md'>{translations.EmailSection.P2}</p>
                    <p className='text-[#ADB7BE] text-xs lg:text-lg mb-2 max-w-md'>Email: sguevaraolie.dev@gmail.com</p>
                    <p className='text-[#ADB7BE] text-xs lg:text-lg mb-4 max-w-md'>Whatsapp: +543513084840</p>
                    <div className='flex flex-row space-x-2 justify-center lg:justify-start'>
                        <Link href='https://github.com/SGuevaraOlie'>
                            <Image src="/imagenes/github.png" alt="github" width={35} height={35}/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/sguevaraolie/'>
                            <Image src="/imagenes/linkedin.png" alt="linkedin" width={35} height={35}/>
                        </Link>
                    </div>
                </div>
                <div>
                    <form className='flex flex-col w-full lg:w-[600px] space-y-6 lg:space-y-12' onSubmit={handleSubmit}>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-white block mb-2 text-xs lg:text-lg font-medium'>{translations.EmailSection.Form.Title1}</label>
                            <input name='email' type="email" id='email' required placeholder={translations.EmailSection.Form.Placeholder1} className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="subject" className='text-white block mb-2 text-xs lg:text-lg font-medium'>{translations.EmailSection.Form.Title2}</label>
                            <input name='text' type="text" id='subject' required placeholder={translations.EmailSection.Form.Placeholder2} className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="message" className='text-white block mb-2 text-xs lg:text-lg font-medium'>{translations.EmailSection.Form.Title3}</label>
                            <textarea name='message' id='message' required placeholder={translations.EmailSection.Form.Placeholder3} className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                        </div>
                        <button type='submit' className='min-h-[40px] bg-gradient-to-br to-[#ffb826] from-[#96551d] hover:scale-110 lg:text-2xl transition duration-300 ease-in-out text-black font-semibold px-5 rounded-lg w-full'>{translations.EmailSection.Form.Button}</button>
                        {emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>{translations.EmailSection.Form.Span}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EmailSection