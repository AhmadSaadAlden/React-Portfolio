import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about-me",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/project/:id",
                element: <Project />
            }
        ] 
    }
])

export default router