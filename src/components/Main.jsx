import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1679487660365-34c266635f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Michael Stafford</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    I am a 
                    <TypeAnimation
                        sequence={[
                            'Developer', // Types 'One'
                             2000, // Waits 1s
                            'Coder', // Deletes 'One' and types 'Two'
                             2000, // Waits 2s   
                            'Life Long Learner',
                             2000,                      
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
                     />
                </h2>
                <div className='flex justify-between pt-6 max-w-[50px] w-full'>
                    <a href="https://www.linkedin.com/in/michael-stafford">
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </a>
                    <a href="https://github.com/mikestah808">
                        <FaGithub className='cursor-pointer' size={20} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main