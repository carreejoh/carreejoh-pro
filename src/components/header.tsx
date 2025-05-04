import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Header: React.FC = () => {

    const location = useLocation()

    const [selectedLocation, setSelectedLocation] = useState("home")

    useEffect(() => {
        if(location.pathname === "/") {
            setSelectedLocation("home")
        } 
        if(location.pathname === "/services") {
            setSelectedLocation("services")
        } 
        if(location.pathname === "/contact") {
            setSelectedLocation("contact")
        } 
    }, [location])  

    return (
        <div className="w-full h-24 fixed z-[100] bg-base-100 shadow-sm flex items-center justify-between pl-96 pr-96">
            <h1 className="text-3xl font-Gabarito font-medium">Carreejoh Web</h1>
            <div
                role="tablist"
                className="inline-flex items-center flex items-center justify-center rounded-md p-1"
            >
                <Link to="/" className="tab">
                    <p className={`text-lg font-medium ${selectedLocation === "home" ? "text-black" : "text-gray-400"}`}>Home</p>
                </Link>
                <Link to="/services" className="tab">
                    <p className={`text-lg font-medium ${selectedLocation === "services" ? "text-black" : "text-gray-400"}`}>Services</p>
                </Link>
                <Link to="/contact" className="tab">
                    <p className={`text-lg font-medium ${selectedLocation === "contact" ? "text-black" : "text-gray-400"}`}>Contact</p>
                </Link>
            </div>
        </div>
    )

}

export default Header