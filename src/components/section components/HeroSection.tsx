'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section id='hero'>
            <div className="flex flex-col mb-2 min-h-[600px]">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration:0.5}} className="text-center lg:text-left justify-center items-center min-w-[77%]">
                        <h1 className="text-[#ffb826] font-bold mb-2 text-5xl lg:text-6xl lg:mt-12">¡Hola! Soy</h1>
                        <TypeAnimation sequence={['Santiago Guevara Olié', 1500, 'Full-Stack Web Developer', 1500, 'Programador Versátil', 1500, 'Entusiasta Front-End', 1500]} wrapper="strong" speed={50} style={{ fontSize: '3em', display: 'inline-block'}} repeat={Infinity} />
                    </motion.div>
                    <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration:0.5}} className="place-self-center lg:mt-8 mt-3 mb-3 lg:mb-0">
                        <div className="rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
                            <Image src="/imagenes/yo-circular.png" alt="mi foto" width={400} height={400} className=""/>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-row lg:mt-24 justify-center space-x-2">
                    <Link href='https://www.linkedin.com/in/sguevaraolie/'>
                        <button className="min-h-[57px] px-3 lg:px-6 py-1 lg:py-3 w-full sm:w-fit rounded-full font-semibold bg-gradient-to-br to-[#ffb826] from-[#96551d] hover:scale-110 lg:text-2xl transition duration-300 ease-in-out text-black mr-4 lg:mr-24">Contactame</button>
                    </Link>
                    <Link href='https://drive.google.com/file/d/1i--ePGAqG3ajdPK3TSJdlLBujsHxNrbo/view?usp=sharing'>
                        <button className="px-3 lg:px-6 py-1 lg:py-3 w-full sm:w-fit rounded-full font-semibold bg-gradient-to-br to-[#ffb826] from-[#96551d] hover:scale-110 lg:text-2xl transition duration-300 ease-in-out text-black">Descarga mi CV</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;