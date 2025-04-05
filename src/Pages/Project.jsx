import React from 'react'
import DemoCard from '../components/DemoCard/DemoCard'
import { useTheme } from '../Context/ThemeContext'
import ProjectSlider from '../components/ProjectSlider/ProjectSlider'

const Project = () => {
  const {isDarkMode} = useTheme()
  return (
    <div data-theme = {isDarkMode ? 'dark' : 'light'}>
      <DemoCard />
      <ProjectSlider />
    </div>
  )
}

export default Project
