import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Banner from "./routes/banner/Banner.tsx";

const router = createBrowserRouter([
    {
        path: "/banner",
        element: <Banner/>
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)