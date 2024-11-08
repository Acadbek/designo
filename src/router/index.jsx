import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/home"
import WebDesign from "../pages/web-design";
import Contacts from "../pages/contacts";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import RegisterPage from "../pages/register";

const Routers = () => {
    const [navbarIsActive, setNavbarIsActive] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/our-company' || location.pathname === '/locations' || location.pathname === '/contacts' || location.pathname === '/') {
            setNavbarIsActive(true)
        } else {
            setNavbarIsActive(false)
        }
    }, [location])

    // if(location)

    return (
        <div className="main-container">
            {navbarIsActive && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-company" element={<Home />} />
                <Route path="/locations" element={<WebDesign />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/sign-up" element={<RegisterPage />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default Routers;