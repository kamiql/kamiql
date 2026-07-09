import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {HashRouter, Routes, Route} from "react-router-dom";
import Banner from "./routes/banner/Banner.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/banner" element={<Banner/>}/>
            </Routes>
        </HashRouter>
    </StrictMode>,
)