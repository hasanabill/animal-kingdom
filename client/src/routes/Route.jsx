import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Adopt from "../pages/Adopt";
import PetDetails from "../pages/PetDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/adopt",
                element: <Adopt />,
            },
            {
                path: "/pets/:id",
                element: <PetDetails />,
            },

        ]
    },
]);