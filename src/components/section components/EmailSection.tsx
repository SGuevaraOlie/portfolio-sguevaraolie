'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
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
        <section className='flex flex-col lg:flex-row mb-32 py-24 space-y-12 lg:space-y-0 justify-between'>
            <div className='text-center lg:text-start'>
                <h5 className='text-4xl font-bold text-[#ffb826] mb-4'>¡Contactame!</h5>
                <p className='text-[#ADB7BE] text-sm mb-2 max-w-md'>Actualmente estoy buscando nuevas oportunidades para avanzar en mi carrera dentro del campo de la tecnología de la información (IT) y contribuir al crecimiento de una organización. Estoy entusiasmado por explorar roles desafiantes y colaborar en proyectos innovadores que me permitan desarrollar y aplicar mis habilidades.</p>
                <p className='text-[#ADB7BE] text-sm mb-2 max-w-md'>¡No dudes en escribirme, y me pondré en contacto cuanto antes!</p>
                <p className='text-[#ADB7BE] text-sm mb-2 max-w-md'>Email: sguevaraolie.dev@gmail.com</p>
                <p className='text-[#ADB7BE] text-sm mb-4 max-w-md'>Whatsapp: +543513084840</p>
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
                <form className='flex flex-col w-full lg:w-[600px] space-y-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Tu Email:</label>
                        <input name='email' type="email" id='email' required placeholder='tumailaqui@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Asunto:</label>
                        <input name='text' type="text" id='subject' required placeholder='Motivo de contacto' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Cuerpo del mail:</label>
                        <textarea name='message' id='message' required placeholder='Inicia una conversación conmigo' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
                    </div>
                    <button type='submit' className='bg-gradient-to-br to-[#ffb826] from-[#96551d] hover:scale-110 lg:text-2xl transition duration-300 ease-in-out text-black font-semibold px-5 rounded-lg w-full'>Envía el mensaje</button>
                    {emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>Email enviado correctamente</p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailSection