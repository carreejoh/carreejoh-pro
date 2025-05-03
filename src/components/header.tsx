import { Link } from "react-router-dom"

const Header: React.FC = () => {

    return (
        <div className="w-full h-24 fixed z-[100] bg-base-100 shadow-sm flex items-center justify-between pl-32 pr-32">
            <h1 className="text-2xl font-Rubik font-semibold">Carreejoh's Websites</h1>
            <div className="flex items-center">
                <Link to="/" className="ml-8">
                    <p className="text-lg">Home</p>
                </Link>
                <Link to="/services" className="ml-8">
                    <p className="text-lg">Services</p>
                </Link>
                <Link to="/" className="ml-8">
                    <p className="text-lg">Examples</p>
                </Link>
                <Link to="/contact" className="ml-8">
                    <p className="text-lg">Contact</p>
                </Link>
            </div>
        </div>
    )

}

export default Header