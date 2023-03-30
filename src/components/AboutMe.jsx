import React from 'react'

const data = "A Full Stack Software Engineer with the urge to solve complex problems. A graduate of the Chaminade University of Honolulu and the Flatiron School Software Engineering Program with excitement for creating exceptional application functionality and enhancing user experience. Coming from a background in hospitality, and delivery service, all while being a 4-year college athlete, I can organize time and workload efficiently, am keen on attention to detail, and have the ability to accept criticism and work well under pressure. Working in a team-driven environment is what energizes me on a daily basis."

const AboutMe = () => {
  return (
    <div id='about' className='max-w-[1-4-px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About Me</h1>
        <p className='flex sm:text-2xl text-1xl pt-4 text-gray-800 font-bold'>{data}</p>
    </div>
  )
}

export default AboutMe