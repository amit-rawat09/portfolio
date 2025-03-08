import React from 'react'
import { Link } from 'react-scroll'

function About() {
    return (
        <>
            <div name="About" className="max-w-screen-2xl container mx-auto px-4 my-4 md:px-20">
                <h1 className='text-3xl font-bold mb-5 font-Fredoka text-blue-600'>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum earum explicabo quia cumque, velit non cum temporibus sint quas illo distinctio sunt!</p>
                <br />
                <div className="flex flex-col gap-5">
                    <div className="">
                        <h1 className='text-blue-500 font-semibold text-xl'>Education and Traning</h1>
                        <ul>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg items-center flex justify-between'>
                                <span className='uppercase text-md'>Bachelor's of Computer Application</span>
                                <span className='uppercase text-md'>Panjab University ( 2022 - 2025 )</span>
                            </li>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg items-center flex justify-between'>
                                <span className='text-md'>12 <sup>TH</sup> ( INFORMATION TECHNOLOGY )</span>
                                <span className='text-md'>GOVT. MODEL. SR. SEC. SCHOOL SECTOR 32 CHANDIGARH ( 2020 - 2022 )</span>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className='text-blue-500 font-semibold text-xl'>Certification Course</h1>
                        <ul>
                            <li className='border-2 px-4 py-2 my-2 rounded-lg items-center flex justify-between'>
                                <span className='text-md'>HTML , CSS , JavaScript , React JS by - Udemy</span>
                                <span>
                                    <button className='bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-full'><Link to='' target='_blank'>View Certificate</Link></button>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className='text-blue-500 font-semibold text-xl'>Achivements And Awards</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dicta Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur!.</span>
                    </div>
                    <div className="">
                        <h1 className='text-blue-500 font-semibold text-xl'>Mission Statement</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, magnam dolores. Officiis!</span>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default About