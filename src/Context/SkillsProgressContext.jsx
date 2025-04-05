import {  createContext } from "react";

export const SkillsProgressContext = createContext()
export const SkillsProgressProvider = ({children}) => {
    const skills = [
        { skill: 'HTML5', percentage: 95 },
        { skill: 'CSS3', percentage: 85 },
        { skill: 'BootStrap', percentage: 75 },
        { skill: 'Responsive Design', percentage: 75 },
        { skill: 'JavaScript', percentage: 80 },
        { skill: 'RESTFULL API', percentage: 70 },
        { skill: 'Figma', percentage: 95 },
        { skill: 'Postman', percentage: 85 },
        { skill: 'React', percentage: 75 },
        { skill: 'Tailwind', percentage: 75 },
    ]

    return(
        <SkillsProgressContext.Provider value={{skills}}>
            {children}
        </SkillsProgressContext.Provider>
    )
}