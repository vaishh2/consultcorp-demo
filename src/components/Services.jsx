import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Service.css";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    title: "ERP Implementation",
    desc: "We ensure smooth end-to-end ERP adoption, from planning & deployment to user training, making sure it integrates well with existing operations with minimal disruption.",
  },
  {
    title: "Process Improvement",
    desc: "We analyze your current workflows, identify inefficiencies, and recommend improvements to increase productivity and effectiveness.",
  },
  {
    title: "Digital Transformation",
    desc: "Helping businesses move to digital-first operations, automating tasks and leveraging modern tools to grow faster and respond to change.",
  },
  {
    title: "Industry Expertise",
    desc: "Serving clients in banking, healthcare, IT, telecom, hospitality & manufacturing, using sector-specific knowledge to deliver tailored solutions.",
  },
  {
    title: "Advisory & Consulting",
    desc: "Providing strategic consulting & advice to help you make informed technology decisions aligned with your business goals.",
  },
  {
    title: "Support & Training",
    desc: "Continuously assisting client teams via training programs and ongoing support to ensure long-term value from digital / ERP investments.",
  },
];

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
   <>
  <Navbar />

  <div className="global-container">
    {/* Hero Section */}
    <section className="services-hero"        style={{ backgroundImage: `url("/images/11.jpg")` }}>
      <div className="hero-content services-hero-content" data-aos="fade-down">
        <h1>Our Services</h1>
        <p>
          Empowering businesses with digital transformation, ERP adoption, and process optimization across industries.
        </p>
        <div className="hero-buttons">
          <button className="btn-hero" onClick={() => (window.location.href = "/")}>
            Home
          </button>
          <button className="btn-hero btn-active">Services</button>
        </div>
      </div>
    </section>

    {/* Services Heading */}
    <section className="services-heading" data-aos="fade-up">
      <h2>What Are Our Services?</h2>
      <p>Explore the wide range of services designed to accelerate your business growth.</p>
    </section>

    {/* Services Cards */}
    <section className="services-cards-wrapper">
      <div className="services-row">
        {servicesData.slice(0, 3).map((service, idx) => (
          <div className="service-card" key={idx} data-aos="fade-up" data-aos-delay={`${100 * idx}`}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="services-row">
        {servicesData.slice(3, 6).map((service, idx) => (
          <div className="service-card" key={idx + 3} data-aos="fade-up" data-aos-delay={`${100 * (idx + 3)}`}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Banner Block */}
    <section className="services-banner"        style={{ backgroundImage: `url("/images/10.jpg")` }} data-aos="fade-in">
      <div className="banner-overlay">
        <h2>Elevate your business with our integrated expertise</h2>
        <p>Get uncompromised solutions tailored to your needs.</p>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="services-extra" data-aos="fade-up">
      <h2>Why Choose Habilite Consultancy?</h2>
      <div className="extra-features">
        <div className="feature-box">
          <h4>Proven Track Record</h4>
          <p>Successful transformations with measurable ROI across sectors.</p>
        </div>
        <div className="feature-box">
          <h4>Custom Solutions</h4>
          <p>Solutions tailor-made to fit your business needs.</p>
        </div>
        <div className="feature-box">
          <h4>Client-centric Support</h4>
          <p>Training, maintenance & support to ensure smooth operations.</p>
        </div>
      </div>
    </section>
  </div>

  <Footer />
</>

  );
}

export default Services;
