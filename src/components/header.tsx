import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const [selectedLocation, setSelectedLocation] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync selectedLocation with current path
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedLocation("home");
        break;
      case "/services":
        setSelectedLocation("services");
        break;
      case "/contact":
        setSelectedLocation("contact");
        break;
      default:
        setSelectedLocation("");
    }
    // Close mobile menu when navigation changes
    setMobileOpen(false);
  }, [location]);

  const links = [
    { name: "Home", to: "/", key: "home" },
    { name: "Services", to: "/services", key: "services" },
    { name: "Contact", to: "/contact", key: "contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-base-100 shadow-md">
      <div className="h-24 flex items-center justify-between px-4 
        sm:px-6    /* 1.5rem on ≥640px */
        md:px-8    /* 2rem on ≥768px */
        lg:px-32   /* 8rem on ≥1024px */
        xl:px-48   /* 10rem on ≥1280px */
        2xl:px-72
        ">

        {/* Logo */}
        {/* <h1 className="text-3xl font-Gabarito font-medium">Carreejoh Web</h1> */}
        <Link to="/" className="flex items-center z-[200]">
          <img src="/Base_Logo.png" alt="Logo" className="h-36" />
          <span className="font-exo text-5xl -mt-1 -ml-4 font-extrabold">RevUp<span className="text-primary">Web</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4" role="tablist">
          {links.map(({ name, to, key }) => (
            <Link key={key} to={to} className="tab">
              <p
                className={`text-lg font-exo ${selectedLocation === key ? "text-primary font-bold" : "text-base-content font-medium"
                  }`}
              >
                {name}
              </p>
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="md:hidden bg-base-100 shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            {links.map(({ name, to, key }) => (
              <Link
                key={key}
                to={to}
                className="w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                <p
                  className={`text-lg font-medium font-exo ${selectedLocation === key ? "text-primary font-semibold" : "[#CDCDCD]"
                    }`}
                >
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
