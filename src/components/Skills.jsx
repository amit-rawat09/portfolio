import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPhp } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";



function Skills() {
    return (
        <>
            <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 my-6 md:px-20">
                <h1 className='text-3xl font-bold mb-5 font-Fredoka'>Skills</h1>
                <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
                    <div className="w-full bg-[#93fbdf] p-4 rounded-lg mx-auto">
                        <h1 className='text-xl text-center my-3 font-bold'>Frontend</h1>
                        <div className="grid grid-cols-2">
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span className=''><FaHtml5 /></span> <span className=''>HTML</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaCss3Alt /></span> <span>CSS</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><IoLogoJavascript /></span> <span>JavaScript</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaReact /></span> <span>React</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><TbBrandRedux /></span> <span>React Redux</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiTailwindcss /></span> <span>Tailwind</span>
                            </div>

                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaGithub /></span> <span>Git</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-[#93fbdf] p-4 rounded-lg mx-auto">
                        <h1 className='font-bold text-center text-xl my-3'>Backend</h1>
                        <div className="grid grid-cols-2">
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaNodeJs /></span> <span>Node</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiExpress /></span> <span>Express</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><FaPhp /></span> <span>PHP</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-[#93fbdf] p-4 rounded-lg mx-auto">
                        <h1 className='font-bold text-center text-xl my-3'>DataBase</h1>
                        <div className="grid grid-cols-2 ">
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiMongodb /></span> <span>MongoDB</span>
                            </div>
                            <div className=" flex my-2 items-center gap-1 text-xl">
                                <span><SiMysql /></span> <span>MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Skills