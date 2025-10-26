import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import HomePage from "./components/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      once: true,       // animate only once
      offset: 100,      // how early animation triggers
    });
  }, []);

  return (
    <Router>
      {/* ✅ Responsive wrapper — applied once for all pages */}
      <div className="app-wrapper w-full overflow-x-hidden">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<HomePage />} />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />

          {/* Services Page */}
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
