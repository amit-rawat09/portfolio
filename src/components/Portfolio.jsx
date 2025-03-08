import React from 'react'
import image from '../assets/images.jpg'
import paste from '../assets/paste1.jpg'
import youtube from '../assets/youtube_logo.png'


function Portfolio() {
    const projectname = [
        {
            id: "1",
            name: "Paste",
            logo: paste,
            Description: "  : Developed a note web app in which you can create your personal notes.",
            Technologies: [" : React js"],
            problemSolved: [
                {
                    head: "Create & Save Notes ",
                    summary: " : Users can easily create and store personal notes."
                },
                {
                    head: "Preview Notes",
                    summary: " : Option to view saved notes in a user-friendly format."
                },
                {
                    head: "Delete Notes",
                    summary: " : Allows users to remove notes when no longer needed."
                },
            ]
        },
        {
            id: "2",
            name: "YouTube Clone",
            logo: youtube,
            Description: "  : Developed a Youtube clone",
            Technologies: [" : React js "," Tailwind CSS "," API "],
            problemSolved: [
                {
                    head: "Video played ",
                    summary: " : Users can easily create and store personal notes."
                },
                {
                    head: "Search for any topic",
                    summary: " : user can get any data by search on searchbar"
                },
                {
                    head: "fully responsive",
                    summary: " : Allows users to use on any device."
                },
            ]
        },
        {
            id: "3",
            name: "password gen",
            logo: image
        },
        {
            id: "4",
            name: "game",
            logo: image
        },
    ]

    return (
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 mt-10 md:px-20'>
            <div className="">
                <h1 className='text-3xl font-bold mb-5 '>Projects</h1>
                <div className=" grid grid-cols-1 md:grid-cols-3 ">
                    {
                        projectname.map(({ id, logo, name, Description, Technologies, problemSolved }) => (
                            <div className=" md:w-[350px] py-3 border-[2px] px-4 rounded-lg shadow-lg hover:scale-105 duration-200 gap-3 my-5 flex flex-col justify-center items-center order-1 mx-auto bg-blue-200" key={id}>
                                <img src={logo} className='w-[120px] ' alt="" srcset="" />
                                <div className="">
                                    <div className='px-2 my-2 font-bold text-xl mb-2 uppercase text-center'>{name}</div>
                                    <ul className=''>
                                        <li className='text-gray-600 px-2 my-1 text-justify '> <span className='font-semibold underline' >Description</span>{Description}</li>
                                        <li className='text-gray-600 px-2 my-1 w-full'> <span className='font-semibold underline' >Technologies</span>{Technologies && Technologies.map((e) => (<span>{e}</span>))}</li>
                                        <li className='text-gray-600 px-2 my-1 text-justify '> <span className='font-semibold underline' >Key Features:</span></li>
                                        {
                                            problemSolved && problemSolved.map(({ head, summary }, idx) => (
                                                <li className='text-gray-600 px-2 ml-5 text-justify mr-2' key={idx}>→ <span className='font-semibold underline'>{head}</span> {summary}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className=" px-2 mt-4 flex ">
                                    <button className='px-4 rounded-lg py-2 text-white mx-4 hover:bg-blue-700 bg-blue-500' ><a href="https://edits-rosy.vercel.app/" target="_blank" rel="noopener noreferrer">Visit</a> </button>
                                    <button className='px-4 rounded-lg py-2 text-white mx-4 hover:bg-green-700 bg-green-500' ><a href="https://github.com/amit-rawat09/edits" target="_blank" rel="noopener noreferrer">Source Code</a></button>
                                </div>
                            </div>
                        ))
                    }
                    {/* {
                        console.log(projectname[0].featureHead)                        
                    } */}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Portfolio