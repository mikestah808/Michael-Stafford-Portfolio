import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <SideNav />
      <Main />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
