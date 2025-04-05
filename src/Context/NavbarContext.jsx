import { createContext } from "react";

export const NavbarContext = createContext()

export const NavbarProvider = ({children}) => {
    const DataNavbar = [
        {
            to: "/",
            content: "Home"
        },
        {
            to: "/about-me",
            content: "About me"
        },
        {
            to: "/education",
            content: "Education"
        },
        {
            to: "/project",
            content: "Projects"
        },
        {
            to: "/contact",
            content: "Contact"
        },
    ]

    return (
        <NavbarContext.Provider value={{DataNavbar}}>
            {children}
        </NavbarContext.Provider>
    )
}