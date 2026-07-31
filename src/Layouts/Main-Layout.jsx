import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function MainLayout() {
    return (
           <div className="min-h-screen bg-[#FAF7F0] text-[#2E3B31]">
            <Navbar/>
            <Outlet/>
           </div>

    )
}

export default MainLayout
