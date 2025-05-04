import { Routes, Route } from "react-router-dom";

import Header from "./components/header";

// Pages
import Landing from "./Pages/home";
import Services from "./Pages/services";
import ContactPage from "./Pages/contact";

function App() {

  return (
    <>
      <Header />
      <div
        className="
        w-full
        min-h-screen
        bg-base-200
        overflow-hidden
        pt-24
      "
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>

  )
}

export default App
