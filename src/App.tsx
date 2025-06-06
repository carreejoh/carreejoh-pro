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

      {/*
        1) peel the header off the top with `pt-24` (6rem).
        2) make this inner box exactly `100vh - 6rem` tall.
        3) give it `overflow-y-auto` and `scrolling-touch` for iOS smooth scroll.
      */}
      <div className="w-full bg-base-200 pt-24">
        <div
          className="
            h-[calc(100vh-6rem)]
            overflow-y-auto
            scrolling-touch
          "
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
