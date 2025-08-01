import { createContext } from "react";
import iconLink from "../assets/image/projects/Icon.png"
import education from "../assets/image/projects/education.png"
import blog from "../assets/image/projects/blog.png"
import screenShot1 from "../assets/image/projects/Full.png"
import dashboard from "../assets/image/projects/dashboard.png"
import portfolio from "../assets/image/projects/portfolio.png"
import todos from "../assets/image/projects/todos.png"
import eshop from "../assets/image/projects/eshop.png"
import new_dashboard from "../assets/image/projects/new-dashboard.png"

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
            img: new_dashboard,
            alt: "Dashboard",
            title: "Dashboard",
            basicLanguage: "React - ReactRouter - ReactHooks - Tailwind - TypeScript - Vercel",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink: "https://dashboard-flame-sigma-81.vercel.app/",
            screenShot: screenShot1,
            screenShotAlt: "screenShot",
            demo: iconLink,
            demoAlt: "demo",
            date: "06-21-2025",
            description: "product managment example `Add Product Edit Delete ` and registration",
            titleBasicLanguage: "Basic Languages :",
            titleFramework: "Framework : ",
            contentFramwork: "Tailwind",
            titleLibrary: "Libraries :",
            contnetLibrary: "React.js",
            btn: "Github Repo",
            repo: "https://github.com/AhmadSaadAlden/Dashboard"
        },
        {
            id: "3",
            img: dashboard,
            alt: "Dashboard",
            title: "Dashboard",
            basicLanguage: "React - ReactRouter - ReactHooks",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink: "https://react-dashboard-t36x.vercel.app/",
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
            repo: "https://github.com/AhmadSaadAlden/React-Dashboard/"
        },
        {
            id: "4",
            img: eshop,
            alt: "eshop",
            title: "Ecommerce-Eshop",
            basicLanguage: "React - ReactHooks -  Tailwind  - Responsive Design - vercel",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink: "https://react-ecommerce-esop.vercel.app/",
            screenShot: screenShot1,
            screenShotAlt: "screenShot",
            demo: iconLink,
            demoAlt: "demo",
            date: "03-05-2025",
            description: "A commercial site for selling and showcasing digital technical equipment.",
            titleBasicLanguage: "Basic Languages :",
            titleFramework: "Framework : ",
            contentFramwork: "Tailwind",
            titleLibrary: "Libraries :",
            contnetLibrary: "React.js",
            btn: "Github Repo",
            repo: "https://github.com/AhmadSaadAlden/React-Ecommerce-Esop.git/"
        },
        {
            id: "5",
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
            description: "Here I showcase my best works, ideas, and creative journey in a way that represents my passion and professionalism.",
            titleBasicLanguage: "Basic Languages :",
            titleFramework: "Framework : ",
            contentFramwork: "Tailwind",
            titleLibrary: "Libraries :",
            contnetLibrary: "React.js",
            btn: "Github Repo",
            repo: "https://github.com/AhmadSaadAlden/React-Portfolio.git/"
        },
        {
            id: "6",
            img: blog,
            alt: "blog",
            title: "Blog",
            basicLanguage: "React - ReactRouter - ReactHooks",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink: "https://react-blog-xi-sepia.vercel.app/",
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
            repo: "https://github.com/AhmadSaadAlden/React-Blog"
        },
        {
            id: "7",
            img: todos,
            alt: "todos",
            title: "Todos",
            basicLanguage: "React - ReactHooks - TypeScript -  Tailwind  - Responsive Design - vercel",
            icon: iconLink,
            iconAlt: "Link Icon",
            iconLink: "https://todos-xi-bice.vercel.app/",
            screenShot: screenShot1,
            screenShotAlt: "screenShot",
            demo: iconLink,
            demoAlt: "demo",
            date: "14-4-2025",
            description: "It’s a list of tasks you need to complete or things that you want to do.",
            titleBasicLanguage: "Basic Languages :",
            titleFramework: "Framework : ",
            contentFramwork: "Tailwind",
            titleLibrary: "Libraries :",
            contnetLibrary: "React.js",
            btn: "Github Repo",
            repo: "https://github.com/AhmadSaadAlden/Todos.git/"
        },
    ]
    return (
        <CardContext.Provider value={{CardData}}>
            {children}
        </CardContext.Provider>
    )
}