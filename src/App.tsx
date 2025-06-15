import { Routes, Route } from "react-router-dom";

import Header from "./components/header";

// Pages
import Landing from "./Pages/Home/home";
import Services from "./Pages/Services/services";
import ContactPage from "./Pages/Contact/contact";
import Devform from "./Pages/Devform/Devform";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";

import HotLeadLanding from "./Pages/HotLeadPayment/HotLeadLanding";
import HotLeadPayment from "./Pages/HotLeadPayment/HotLeadPayment";

function App() {
  return (
    <>
      <Header />

      {/*
        1) peel the header off the top with `pt-24` (6rem).
        2) make this inner box exactly `100vh - 6rem` tall.
        3) give it `overflow-y-auto` and `scrolling-touch` for iOS smooth scroll.
      */}
      <div className="w-full bg-base-300 pt-24">
        <div
          className="
            min-h-[calc(100vh-6rem)]
      overflow-y-auto
      scroll-smooth
      overscroll-contain
          "
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/devform" element={<Devform />} />

            {/* For hot lead -> sale */}

            <Route path="/first-step/:businessName" element={<HotLeadLanding/>}/>
            <Route path="/payment1/:businessName/:deployedURL" element={<HotLeadPayment/>}/>

            <Route path="/privacy" element={<PrivacyPolicy/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
