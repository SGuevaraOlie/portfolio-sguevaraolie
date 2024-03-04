import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    deployUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({imgUrl, title, description, gitUrl, deployUrl}) => {
    return (
        <div>
            <div className='group rounded-t-xl h-36 md:h-52 bg-center relative overflow-hidden' style={{background: `url(${imgUrl})`, backgroundSize: 'cover'}}>
                <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center'>
                    <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link">
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </Link>
                    <Link href={deployUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    </Link>
                </div>
            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 h-[180px]'>
                <h5 className='text-sm lg:text-lg font-semibold'>{title}</h5>
                <p className='text-[#ADB7BE] text-sm lg:text-lg'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard