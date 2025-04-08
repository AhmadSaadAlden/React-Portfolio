import { createContext } from "react";
import iconLink from "../assets/image/projects/Icon.png"
import education from "../assets/image/projects/education.png"
import blog from "../assets/image/projects/blog.png"
import screenShot1 from "../assets/image/projects/Full.png"
import dashboard from "../assets/image/projects/dashboard.png"
import portfolio from "../assets/image/projects/portfolio.png"
export const CardContext = createContext()

export const CardProvider = ({children}) => {
    const CardData = [
        {
            id: "1",
            img: education,
            alt: "education",
            title: "Educational",
            basicLanguage: "Html - Css3 - javscript - Responsive Design",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink : "https://ahmadsaadalden.github.io/Midterm-Project/",
            screenShot: screenShot1,
            screenShotAlt: "screenShot",
            demo: iconLink,
            demoAlt: "demo",
            date: "12-5-2024",
            description: "it is a course site to search and register for any course with the adtion of a website",
            titleBasicLanguage: "Basic Languages :",
            titleFramework: "Framework : ",
            contentFramwork: "",
            titleLibrary: "Libraries :",
            contnetLibrary: "",
            btn: "Github Repo",
            repo: "https://github.com/AhmadSaadAlden/Midterm-Project.git"
        },
        {
            id: "2",
            img: blog,
            alt: "blog",
            title: "Blog",
            basicLanguage: "React - ReactRouter - ReactHooks",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink: "https://ahmadsaadalden.github.io/React-Blogs/",
            screenShot: screenShot1,
            screenShotAlt: "screenShot",
            demo: iconLink,
            demoAlt: "demo",
            date: "04-05-2025",
            description: "Personal Website ",
            titleBasicLanguage: "Basic Languages :",
            titleFramework: "Framework : ",
            contentFramwork: "",
            titleLibrary: "Libraries :",
            contnetLibrary: "React.js",
            btn: "Github Repo",
            repo: "https://github.com/AhmadSaadAlden/React-Blogs.git"
        },
        {
            id: "3",
            img: dashboard,
            alt: "Dashboard",
            title: "Dashboard",
            basicLanguage: "React - ReactRouter - ReactHooks",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink: "https://ahmadsaadalden.github.io/React-Dashboard/",
            screenShot: screenShot1,
            screenShotAlt: "screenShot",
            demo: iconLink,
            demoAlt: "demo",
            date: "12-5-2024",
            description: "product managment example `Add Product Edit Delet ` and registration",
            titleBasicLanguage: "Basic Languages :",
            titleFramework: "Framework : ",
            contentFramwork: "Bootstrap",
            titleLibrary: "Libraries :",
            contnetLibrary: "React.js",
            btn: "Github Repo",
            repo: "https://github.com/AhmadSaadAlden/React-Dashboard.git/"
        },
        {
            id: "4",
            img: portfolio,
            alt: "portfolio",
            title: "Portfolio",
            basicLanguage: "React - ReactRouter - ReactHooks - Tailwind - Figma - Responsive Design - vercel",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink: "https://ahmadsaadalden-portfolio-react.vercel.app/",
            screenShot: screenShot1,
            screenShotAlt: "screenShot",
            demo: iconLink,
            demoAlt: "demo",
            date: "12-5-2024",
            description: "product managment example `Add Product Edit Delet ` and registration",
            titleBasicLanguage: "Basic Languages :",
            titleFramework: "Framework : ",
            contentFramwork: "Tailwind",
            titleLibrary: "Libraries :",
            contnetLibrary: "React.js",
            btn: "Github Repo",
            repo: "https://github.com/AhmadSaadAlden/React-Portfolio.git/"
        },
    ]
    return (
        <CardContext.Provider value={{CardData}}>
            {children}
        </CardContext.Provider>
    )
}