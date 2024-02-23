'use client'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Tecnologías',
        id: 'Tecnologías',
        content:(
            <div className='flex flex-row justify-between text-xs lg:text-base'>
                <div className='flex-flex-col'>
                    <h1 className='mb-2'>Front-End</h1>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Redux</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                </div>
                <div className='flex flex-col'>
                    <h1 className='mb-2'>Back-End</h1>
                    <li>Node.js</li>
                    <li>Express</li>
                </div>
                <div className='flex flex-col'>
                    <h1 className='mb-2'>Database</h1>
                    <li>Sequelize</li>
                    <li>PostgreSQL</li>
                </div>
                <div className='flex flex-col'>
                    <h1 className='mb-2'>Idiomas</h1>
                    <li>Javascript</li>
                    <li>TypeScript</li>
                </div>
            </div>
        )
    },
    {
        title: 'Metodologías y Herramientas',
        id: 'Metodologías y Herramientas',
        content:(
            <div className='flex flex-row text-xs lg:text-base'>
                <div className='mr-8'>
                    <li>Visual Studio Code</li>
                    <li>GIT</li>
                    <li>GitHub</li>
                    <li>Jira</li>
                    <li>SCRUM</li>
                </div>
                <div>
                    <li>Postman</li>
                    <li>Insomnia</li>
                    <li>Figma</li>
                    <li>Cloudinary</li>
                </div>
            </div>
        )
    },
    {
        title: 'Habilidades Blandas',
        id: 'Habilidades Blandas',
        content:(
            <div className='flex flex-col justify-center text-xs lg:text-base'>
                <li>Colaboración</li>
                <li>Comunicación</li>
                <li>Liderazgo</li>
                <li>Trabajo en Equipo</li>
                <li>Resolución de problemas</li>
                <li>Comunicación Efectiva</li>
            </div>
        )
    },
    {
        title: 'Educación',
        id: 'Educación',
        content:(
            <div className='flex flex-col mt-2 text-xs lg:text-base'>
                    <li>SoyHenry Fullstack Web Developer</li>
                    <li>Argentina Programa Introducción a la programación</li>
                    <li>Arrow Academy Introducción a Phyton / POO / DJANGO</li>
            </div>
        )
    },
]

const AboutMe = () => {
    const [tab, setTab] = useState('Tecnologías');
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id:string) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white'>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-48 mb-24s lg:mt-72 lg:mb-48'>
                <img src='\imagenes\skeleton-typing.gif' alt='esqueleto :3' className='rounded rounded-full h-[80%] w-[80%] lg:mr-48 lg:-ml-2'/>
                <div className='flex flex-col h-[400px] mt-4 lg:mt-0'>
                    <h2 className='text-[#ffb826] font-bold mt-8 lg:mt-0 text-2xl lg:text-4xl'>Sobre mí</h2>
                    <p className="text-[#ADB7BE] text-xs lg:text-lg mt-4">Soy un Desarrollador Web Full-Stack con orientación a Front-End, con una firme motivación por ampliar mis conocimientos en todas las áreas del desarrollo web. Soy una persona detallista, eficiente y productiva, que valora trabajar siguiendo buenas prácticas y tiene habilidades efectivas de comunicación, liderazgo y trabajo en equipo.</p>
                    <div className='flex flex-row justify-between mt-8 text-xs lg:text-base'>
                        <TabButton selectTab={() => handleTabChange('Tecnologías')} active={tab === 'Tecnologías'}>
                            {" "}
                            Tecnologías{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('Metodologías y Herramientas')} active={tab === 'Metodologías y Herramientas'}>
                            {" "}
                            Metodologías y Herramientas{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('Habilidades Blandas')} active={tab === 'Habilidades Blandas'}>
                            {" "}
                            Habilidades Blandas{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('Educación')} active={tab === 'Educación'}>
                            {" "}
                            Educación{" "}
                        </TabButton>
                    </div>
                    <div className='mt-4'>
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe