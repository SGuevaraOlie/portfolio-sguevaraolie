'use client'
import React, { useState, useTransition } from 'react'
import TabButton from '../functional components/TabButton';

interface AboutSectionProps {
    translations: {
        AboutMe: {
            Titulo: string;
            Parrafo: string;
            Tab1: string;
            Tab2: string;
            Tab3: string;
            Tab4: string;
            Language: string;
            SoftSkills: {
                A: string;
                B: string;
                C: string;
                D: string;
                E: string;
                F: string;
            };
            Education: {
                A: string;
                B: string;
                C: string;
                D: string;
            }
        }
    }
}

const AboutMe: React.FC<AboutSectionProps> = ({ translations }) => {
    const TAB_DATA = [
        {
            title: 'Tecnologías',
            id: 'Tecnologías',
            content:(
                <div className='flex flex-row justify-between text-xs lg:text-base'>
                    <div className='flex-flex-col'>
                        <h1 className='mb-2'>Front-End</h1>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <p>- React.js</p>
                        <p>- Next.js</p>
                        <p>- Redux</p>
                        <p>- Tailwind CSS</p>
                        <p>- Bootstrap</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='mb-2'>Back-End</h1>
                        <p>- Node.js</p>
                        <p>- Express</p>
                        <p>- Sequelize</p>
                        <p>- PostgreSQL</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='mb-2'>{translations.AboutMe.Language}</h1>
                        <p>- Javascript</p>
                        <p>- TypeScript</p>
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
                        <p>- Visual Studio Code</p>
                        <p>- GIT</p>
                        <p>- GitHub</p>
                        <p>- Jira</p>
                        <p>- SCRUM</p>
                        <p>- Docker</p>
                    </div>
                    <div>
                        <p>- Postman</p>
                        <p>- Insomnia</p>
                        <p>- Figma</p>
                        <p>- Cloudinary</p>
                    </div>
                </div>
            )
        },
        {
            title: 'Habilidades Blandas',
            id: 'Habilidades Blandas',
            content:(
                <div className='flex flex-col justify-center text-xs lg:text-base'>
                    <p>- {translations.AboutMe.SoftSkills.A}</p>
                    <p>- {translations.AboutMe.SoftSkills.B}</p>
                    <p>- {translations.AboutMe.SoftSkills.C}</p>
                    <p>- {translations.AboutMe.SoftSkills.D}</p>
                    <p>- {translations.AboutMe.SoftSkills.E}</p>
                    <p>- {translations.AboutMe.SoftSkills.F}</p>
                </div>
            )
        },
        {
            title: 'Educación',
            id: 'Educación',
            content:(
                <div className='flex flex-col text-xs lg:text-base'>
                        <p>- {translations.AboutMe.Education.A}</p>
                        <p>- {translations.AboutMe.Education.B}</p>
                        <p>- {translations.AboutMe.Education.C}</p>
                        <p>- {translations.AboutMe.Education.D}</p>
                </div>
            )
        },
    ]
    const [tab, setTab] = useState('Tecnologías');
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id:string) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white' id='about'>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-36 mb-24 lg:mt-72 lg:mb-56'>
                <img src='\imagenes\skeleton-typing.gif' alt='esqueleto :3' className='rounded rounded-full h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] lg:mr-48 lg:-ml-2'/>
                <div className='flex flex-col h-[400px] mt-2 lg:mt-0 text-center lg:text-start'>
                    <h2 className='text-[#ffb826] font-bold mt-8 lg:mt-0 text-2xl lg:text-4xl'>{translations.AboutMe.Titulo}</h2>
                    <p className="text-[#ADB7BE] text-xs lg:text-lg mt-4">{translations.AboutMe.Parrafo}</p>
                    <div className='flex flex-row justify-between mt-6 text-xs lg:text-base space-x-4'>
                        <TabButton selectTab={() => handleTabChange('Tecnologías')} active={tab === 'Tecnologías'}>
                            {" "}
                            {translations.AboutMe.Tab1}{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('Metodologías y Herramientas')} active={tab === 'Metodologías y Herramientas'}>
                            {" "}
                            {translations.AboutMe.Tab2}{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('Habilidades Blandas')} active={tab === 'Habilidades Blandas'}>
                            {" "}
                            {translations.AboutMe.Tab3}{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('Educación')} active={tab === 'Educación'}>
                            {" "}
                            {translations.AboutMe.Tab4}{" "}
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