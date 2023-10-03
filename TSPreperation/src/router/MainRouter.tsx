import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Blog from "../pages/Blog";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home/>}>
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="blog" element={<Blog />} />
        </Route>
    )

)