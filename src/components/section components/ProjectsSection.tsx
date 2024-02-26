import React from 'react'
import ProjectCard from '../functional components/ProjectCard'

const projectsData = [
    {
        id:1,
        title: 'Countries APP',
        description: 'Aplicación que permite buscar países y obtener sus datos, así como crear actividades turisticas relacionadas a estos. Proyecto individual para SoyHenry.',
        image: '/imagenes/countries.png',
        gitUrl: 'https://github.com/SGuevaraOlie/PI-Countries-FRONT-SoyHenry',
        deployUrl: 'https://countriesapp-soyhenry-nine.vercel.app/',
    },
    {
        id:2,
        title: 'Olimpus Shop APP',
        description: 'E-Commerce Deportivo. Proyecto final para SoyHenry',
        image: '/imagenes/olimpus.png',
        gitUrl: 'https://github.com/michiqueli/olimpus_front',
        deployUrl: 'https://olimpus-shop.vercel.app',
    }
]

const ProjectsSection = () => {
    return (
        <div className='mt-36 mb-24 lg:mt-80 lg:mb-56'>
            <h1 className='text-center text-4xl font-bold text-[#ffb826] mt-4 mb-8 lg:mb-12'>Mis Proyectos</h1>
            <div className='grid lg:grid-cols-3 gap-8 lg:gap-12'>
                {projectsData.map((project) => (<ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} deployUrl={project.deployUrl}/>))}
            </div>
        </div>
    )
}

export default ProjectsSection