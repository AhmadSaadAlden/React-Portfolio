import {  createContext } from "react";

export const SkillsProgressContext = createContext()
export const SkillsProgressProvider = ({children}) => {
    const skills = [
        { skill: 'HTML5', percentage: 95 },
        { skill: 'CSS3', percentage: 85 },
        { skill: 'Responsive Design', percentage: 85 },
        { skill: 'JavaScript', percentage: 80 },
        { skill: 'BootStrap', percentage: 85 },
        { skill: 'Git/GitHub', percentage: 75 },
        { skill: 'RESTFULL API', percentage: 75 },
        { skill: 'Postman', percentage: 75 },
        { skill: 'Figma', percentage: 75 },
        { skill: 'React', percentage: 85 },
        { skill: 'React-Router', percentage: 85 },
        { skill: 'React-Hooks', percentage: 75 },
        { skill: 'React-Redux', percentage: 60 },
        { skill: 'Redux-Toolkit', percentage: 60 },
        { skill: 'Tailwind', percentage: 70 },
        { skill: 'TypeScript', percentage: 70 },
        { skill: 'Next.js', percentage: 70 },
        { skill: 'prisma', percentage: 60 },
        { skill: 'MySQL', percentage: 60 },
        { skill: 'Postgree', percentage: 50 },
        { skill: 'zod', percentage: 60 },
    ]

    return(
        <SkillsProgressContext.Provider value={{skills}}>
            {children}
        </SkillsProgressContext.Provider>
    )
}