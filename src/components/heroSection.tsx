'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="flex flex-col mb-2">
                <div className="flex flex-col lg:flex-row justify-center">
                    <div className="text-center lg:text-left justify-center items-center">
                        <h1 className="text-[#ffb826] mb-2 text-5xl lg:mt-16">¡Hola! Soy</h1>
                        <TypeAnimation sequence={['Santiago', 1500, 'Full-Stack Web Developer', 1500, 'Programador Versátil', 1500, 'Entusiasta Front-End', 1500]} wrapper="h1" speed={50} style={{ fontSize: '3em', display: 'inline-block'}} repeat={Infinity} />
                        <p className="text-[#ADB7BE] text-lg mt-2 lg:mt-4">Soy un Desarrollador Web Full-Stack con orientación a Front-End, con una firme motivación por ampliar mis conocimientos en todas las áreas del desarrollo web. Soy una persona detallista, eficiente y productiva, que valora trabajar siguiendo buenas prácticas y tiene habilidades efectivas de comunicación, liderazgo y trabajo en equipo.</p>
                    </div>
                    <div className="place-self-center mt-6 mb-6 lg:mb-0">
                        <div className="rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
                            <Image src="/imagenes/yo-circular.png" alt="mi foto" width={400} height={400} className=""/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row lg:mt-6">
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full font-semibold bg-gradient-to-br to-[#ffb826] from-[#96551d] hover:scale-110 lg:text-xl transition duration-300 ease-in-out text-black mr-4 ">Contactame</button>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full font-semibold bg-gradient-to-br to-[#ffb826] from-[#96551d] hover:scale-110 lg:text-xl transition duration-300 ease-in-out text-black">Descarga mi CV</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;