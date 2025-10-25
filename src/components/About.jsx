import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToWho = () => {
    document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="about-page w-full overflow-x-hidden">
      <div className="global-container">
        <div className="about-page">
          {/* Hero */}
          <section
            className="about-hero"
            style={{ backgroundImage: `url("/images/2nd.jpg")` }}
          >
            <div className="overlay" />
            <div className="about-hero-content container fade-up px-4 sm:px-6 md:px-8 lg:px-12">  {/* Added responsive padding for better adaptation */}
              <h1>About ConsultCorp</h1>
              <p className="lead">
                We are a team of business and technology professionals helping
                organizations embrace digital transformation and achieve measurable
                growth through smart, scalable strategies.
              </p>
              <div className="hero-ctas">
                <button className="cta-btn" onClick={scrollToWho}>
                  Learn More
                </button>
                <button
                  className="cta-link"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Contact Us
                </button>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="about-section reverse fade-up">
            <div className="about-image">
              <img src="/images/1st.jpg" alt="Vision for the future" />
            </div>
            <div className="about-text">
              <h2>Our Vision</h2>
              <p>
                To be a trusted global partner for businesses seeking meaningful and
                measurable transformation — where innovation, technology, and people
                work together to drive sustainable success.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="about-section reverse fade-up">
            <div className="about-image">
              <img src="/images/4th.jpg" alt="Mission - strategy planning" />
            </div>
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                To empower organizations by aligning technology and strategy with
                business goals. We focus on simplifying operations, improving
                efficiency, and driving long-term value.
              </p>
              <p>
                We measure success through our clients’ progress — helping them
                build resilient, future-ready businesses.
              </p>
            </div>
          </section>

          {/* Who We Are */}
          <section id="who-we-are" className="about-section fade-up">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                ConsultCorp is a consulting and advisory firm with a focus on
                digital transformation and enterprise solutions. Our team brings
                together deep domain expertise and innovative thinking to deliver
                practical, people-focused results.
              </p>
              <p>
                From strategy to implementation, we help organizations navigate
                change with clarity and confidence.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/3rd.jpg" alt="Our team working together" />
            </div>
          </section>

          {/* Industries */}
          <section className="about-section fade-up">
            <div className="about-text">
              <h2>Industries We Serve</h2>
              <p>
                We work with businesses across a wide range of industries, helping
                each client achieve their unique goals through proven consulting
                practices and tailored solutions.
              </p>
              <ul className="bullet-list">
                <li>Finance & Banking</li>
                <li>Healthcare</li>
                <li>Information Technology</li>
                <li>Telecommunications</li>
                <li>Retail & Hospitality</li>
                <li>Manufacturing</li>
              </ul>
              <p>
                Our experience across diverse industries helps us deliver
                perspective, agility, and measurable impact.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/5th.jpg" alt="Industries we serve" />
            </div>
          </section>

          {/* Timeline */}
          <section className="about-timeline fade-up">
            <h2>Our Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2016</span>
                <p>Founded with a mission to simplify business transformation.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2019</span>
                <p>Expanded across multiple industries and markets.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2022</span>
                <p>Recognized for innovative consulting and digital strategy.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2025</span>
                <p>Launched new service lines for digital operations and analytics.</p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="about-team fade-up">
            <h2>Meet Our Experts</h2>
            <p className="team-intro">
              Our consultants bring a balance of technical knowledge and strategic
              insight — working closely with clients to create lasting value.
            </p>
            <div className="team-grid">
              <div className="team-card">
                <img src="/images/team1.jpg" alt="Amit Patel" />
                <h3>Amit Patel</h3>
                <p>Founder & CEO</p>
              </div>
              <div className="team-card">
                <img src="/images/team2.jpg" alt="Riya Nair" />
                <h3>Riya Nair</h3>
                <p>Head of Strategy</p>
              </div>
              <div className="team-card">
                <img src="/images/team3.jpg" alt="Karan Malhotra" />
                <h3>Karan Malhotra</h3>
                <p>Technology Consultant</p>
              </div>
              <div className="team-card">
                <img src="/images/team4.jpg" alt="Sanya Kapoor" />
                <h3>Sanya Kapoor</h3>
                <p>Business Analyst</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;