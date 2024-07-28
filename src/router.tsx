import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Bookmark from "./pages/bookmark";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
    },
    {
        path:"/bookmark",
        element: <Bookmark></Bookmark>,
        errorElement: <Error></Error>
    },
    {
        path:"/movie",
        element: <Movie></Movie>,
        errorElement: <Error></Error>
    },
    {
        path:"/tv-series",
        element: <TvSeries></TvSeries>,
        errorElement: <Error></Error>
    }
])