import React from 'react'
import ProjectItem from './ProjectItem'
import portfolioImg from '/Users/michaelstafford/michael-portfolio-hostinger/src/assets/Screen Shot 2023-04-11 at 8.37.42 PM.png'
import movieImg from '/Users/michaelstafford/michael-portfolio-hostinger/src/assets/Screen Shot 2023-03-27 at 8.53.21 AM (2).png'
import shirtImg from '/Users/michaelstafford/michael-portfolio-hostinger/src/assets/Screen Shot 2023-04-27 at 5.35.43 PM.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='flex sm:text-2xl text-1xl pt-4 text-gray-800 font-bold'>
            Having been enrolled in Flatiron's flex program, all of these projects have been built solely by me. Links to these projects can be found when you hover over an image. These are full-stack projects utilizing JavaScript, React, Rails, ThreeJS, and other technologies. 
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={portfolioImg} title='Personal Portfolio' link='https://github.com/mikestah808/Michael-Stafford-Portfolio.git'/>
            <ProjectItem img={movieImg} title='Movie Keeper' link='https://github.com/mikestah808/netflix-clone-frontend.git'/>
            <ProjectItem img={shirtImg} title='DIY Shirts' link='https://github.com/mikestah808/ai-products'/>
        </div>
    </div>
  )
}

export default Projects