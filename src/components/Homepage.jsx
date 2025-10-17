import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const images = ["/images/12.jpg", "/images/13.jpg", "/images/14.jpg"];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleServicesClick = () => navigate("/services");
  const handleContactClick = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar />
<div className="global-container">
      {/* HERO */}
      <section className="hero" id="home">
        {images.map((img, i) => (
          <div
            key={i}
            className={`hero-bg ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-content">
          <h1>Empowering Businesses with Smart Consulting</h1>
          <p>
            ConsultCorp helps organizations accelerate growth, streamline
            processes, and unlock their full potential through modern consulting
            and digital solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleServicesClick}>
              Our Services
            </button>
            <button className="btn-secondary" onClick={handleContactClick}>
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="about" data-aos="fade-down">
        <h2>Our Core Strengths</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Expert Consulting</h3>
            <p>
              Strategic, data-driven consulting designed to meet your business
              objectives.
            </p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Innovative Solutions</h3>
            <p>
              Leveraging modern technologies to drive digital transformation and
              efficiency.
            </p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Proven Results</h3>
            <p>
              Our clients achieve measurable improvements in productivity and
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="highlight" data-aos="fade-down">
        <div className="highlight-content">
          <h2>Building Smarter, Sustainable Businesses</h2>
          <p>
            We partner with companies to design scalable systems, streamline
            operations, and create long-term business value.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" data-aos="fade-down" id="clients">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial" data-aos="fade-down" data-aos-delay="100">
            <p>
              "ConsultCorp helped us reimagine our processes and boosted
              efficiency across departments."
            </p>
            <h4>- Alex Johnson</h4>
          </div>
          <div className="testimonial" data-aos="fade-down" data-aos-delay="200">
            <p>
              "Their team is incredibly knowledgeable and focused on delivering
              real impact."
            </p>
            <h4>- Maya Patel</h4>
          </div>
          <div className="testimonial" data-aos="fade-down" data-aos-delay="300">
            <p>
              "We’ve seen tangible business improvements since partnering with
              ConsultCorp."
            </p>
            <h4>- Daniel Lee</h4>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}

export default HomePage;
