'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="flex flex-col mb-2 min-h-[600px]">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="text-center lg:text-left justify-center items-center min-w-[77%]">
                        <h1 className="text-[#ffb826] font-bold mb-2 text-5xl lg:text-6xl lg:mt-12">¡Hola! Soy</h1>
                        <TypeAnimation sequence={['Santiago', 1500, 'Full-Stack Web Developer', 1500, 'Programador Versátil', 1500, 'Entusiasta Front-End', 1500]} wrapper="strong" speed={50} style={{ fontSize: '3em', display: 'inline-block'}} repeat={Infinity} />
                    </div>
                    <div className="place-self-center lg:mt-8 mt-4 mb-4 lg:mb-0">
                        <div className="rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
                            <Image src="/imagenes/yo-circular.png" alt="mi foto" width={400} height={400} className=""/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row lg:mt-24 justify-center">
                    <button className="px-3 lg:px-6 py-1 lg:py-3 w-full sm:w-fit rounded-full font-semibold bg-gradient-to-br to-[#ffb826] from-[#96551d] hover:scale-110 lg:text-2xl transition duration-300 ease-in-out text-black mr-4 lg:mr-24">Contactame</button>
                    <button className="px-3 lg:px-6 py-1 lg:py-3 w-full sm:w-fit rounded-full font-semibold bg-gradient-to-br to-[#ffb826] from-[#96551d] hover:scale-110 lg:text-2xl transition duration-300 ease-in-out text-black">Descarga mi CV</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;