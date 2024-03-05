import React from 'react'
import ProjectCard from '../functional components/ProjectCard'

interface ProjectSectionProps {
    translations: {
        ProjectSection: {
            ProjectsData:{
                CountriesDesc: string;
                OlimpusDesc: string;
            }
            Title: string;
        };
    }
}


const ProjectsSection: React.FC<ProjectSectionProps> = ({ translations }) => {
    const projectsData = [
        {
            id:1,
            title: 'Countries APP',
            description: translations.ProjectSection.ProjectsData.CountriesDesc,
            image: '/imagenes/countries.png',
            gitUrl: 'https://github.com/SGuevaraOlie/PI-Countries-FRONT-SoyHenry',
            deployUrl: 'https://countriesapp-soyhenry-nine.vercel.app/',
        },
        {
            id:2,
            title: 'Olimpus Shop APP',
            description: translations.ProjectSection.ProjectsData.OlimpusDesc,
            image: '/imagenes/olimpus.png',
            gitUrl: 'https://github.com/michiqueli/olimpus_front',
            deployUrl: 'https://olimpus-shop.vercel.app',
        }
    ]
    return (
        <section id='proyects'>
            <div className='mt-48 mb-12 lg:mt-80 lg:mb-60'>
                <h1 className='text-center text-2xl lg:text-4xl font-bold text-[#ffb826] mt-4 mb-8 lg:mb-12'>{translations.ProjectSection.Title}</h1>
                <div className='grid lg:grid-cols-3 gap-8 lg:gap-12'>
                    {projectsData.map((project) => (<ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} deployUrl={project.deployUrl}/>))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection