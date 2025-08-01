import { assets, serviceData, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in UX design and Front-end development.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {workData.map((project, index) => (
                    <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                        <a target='_blank' href={project.link}>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div className='min-w-0 max-w-[80%] pr-4'>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700 '>{project.description}</p>
                                </div>
                                <div className='flex-shrink-0 border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-300 transition'>
                                    <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                </div>
                            </div>
                        </a>
                        
                    </div>
                ))}
            </div>
            <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 duration-500'>
                Show more <Image src={assets.right_arrow} alt='Right arrow' className='w-4'/>
            </a>
        </div>
    )
}
export default Work