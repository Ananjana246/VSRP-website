import { useState } from "react";
import "./App.css";

function App() {
  const industries = {
    Civil: {
      title: "Civil Engineering",
      image: "/images/civil.jpg",
    },
  
    Mining: {
      title: "Mining",
      image: "/images/mining.jpg",
    },
  
    Agriculture: {
      title: "Agriculture & Irrigation",
      image: "/images/agriculture.jpg",
    },
  
    Building: {
      title: "Building",
      image: "/images/building.jpg",
    },
  
    Transport: {
      title: "Transport & Infrastructure",
      image: "/images/transport.jpg",
    },
  };
  
  const [selectedIndustry, setSelectedIndustry] = useState("Mining");
  const currentIndustry = industries[selectedIndustry];

  return (
    <>

      <header className="header">
        <h1>VSRP</h1>
        <h6>Engineered Rubber</h6>
        <nav>
          <a href="#">ABOUT</a>
          <a href="#">INDUSTRIES</a>
          <a href="#">PRODUCTS</a>
          <a href="#">PROJECTS</a>
          <a href="#">INSIGHTS</a>

          <a href="#" className="contact-button">
            <span>CONTACT</span>
            <span className="contact-arrow">→</span>
          </a>
        </nav>
      </header>
      
      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">
          <div className="hero-title-left">
            <h2>
              Custom Rubber
              <br />
              Solutions<span>.</span>
            </h2>
          </div>
        </div>

        <div className="hero-title-right">
          <h2>
            Engineered To
            <br />
            Perform<span>.</span>
          </h2>
        </div>

        <div className="hero-description">
          <p>
            For more than 20 years, we've helped Australian
            <br />
            businesses solve problems with engineered rubber
            <br />
            solutions. From design and tooling to manufacturing
            <br />
            and delivery, we make what you need, when you need it.
          </p>
        </div>

        <div className="hero-actions">
          <a href="#" className="project-button">
            DISCUSS YOUR PROJECT
            <span>→</span>
          </a>
          <a href="#" className="what-we-do">
            SEE WHAT WE DO →
          </a>
        </div>

        <div className="scroll-down">
          <span>↓</span>
          SCROLL DOWN
        </div>
      </section>
      
      {/* ABOUT SECTION */}

      <section className="about-section">

        <div className="about-stats">
        <h2>
          Wherever Precision Is
        <br />
          Needed, <span>VSRP Delivers.</span>
        </h2>

          <div className="stats-grid">
            <div className="stat">
              <strong>20<span>+</span></strong>
              <p>Years of experience</p>
            </div>
            <div className="stat">
              <strong>122K<span>+</span></strong>
              <p>Ventilation tube joins</p>
            </div>
            <div className="stat">
              <strong>5M<span>+</span></strong>
              <p>Rubber seals supplied</p>
            </div>
            <div className="stat">
              <strong>450K<span>+</span></strong>
              <p>Traffic light seals</p>
            </div>
          </div>

        </div>

        <div className="about-content">
          <h3>
            We're engineers, manufacturers
            <br />
            and problem-solvers.
          </h3>
          <p>
            Whether you need a custom seal, a specialised extrusion,
            a bonded rubber component or a completely new product,
            we'll work with you to find the right solution.
          </p>
          <p>
            We've been doing it for more than two decades, helping
            businesses across Australia keep projects moving.
          </p>
          <a href="#" className="about-button">
            ABOUT VSRP
            <span>→</span>
          </a>
        </div>

      </section>
    
      <a href="#" className="whatsapp-button">
        ☎
      </a>


{/* BUILD SECTION */}

      <section className="build-section">

        <div className="build-content">
          <h2>
            What Can We Help You <span>Build?</span>
          </h2>
          <p>
            We work with you to design, engineer and manufacture rubber
            solutions that meet your exact requirements.
          </p>
            <div className="build-logo">
              <div className="build-v">V</div>
            </div>
            <div className="scroll-indicator">
              <span>↓</span>
              <strong>SCROLL DOWN</strong>
            </div>
        </div>
      </section>


{/* SHAPE SECTION */}

      <section className="shape-section">
        <div className="shape-overlay">
          <h2>
            Whatever You Need in
            <br />
            Rubber, We Can <span>Shape It.</span>
          </h2>
          <a href="#products" className="shape-button">
            SEE PRODUCT CATEGORIES
            <span>→</span>
          </a>
        </div>

      </section>

{/* CONCEPT SECTION */}
      <section className="concept-section">

        <div className="concept-header">
          <h2>
            From Concept to Delivery,
            <br />
            We Make It <span>Happen.</span>
          </h2>
          <p>
            A proven process built around collaboration, precision and a
            <br />
            commitment to quality at every step.
          </p>
        </div>
        <div className="process-content">
          <div className="process-steps">

            <div className="process-step active">
              <div className="step-number">01</div>
              <div className="step-info">
                <h3>Tell Us What You Need</h3>
                <p>Send us a drawing, sample or specification.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-info">
                <h3>We'll Engineer The Solution</h3>
                <p>Materials, tooling and manufacturing approach.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-info">
                <h3>We'll Make It</h3>
                <p>Materials, tooling and manufacturing approach.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-info">
                <h3>We'll Deliver It</h3>
                <p>Materials, tooling and manufacturing approach.</p>
              </div>
            </div>

          </div>
          <div className="process-image">
            <img
              src="/images/concept-delivery.jpg"
              alt="VSRP engineering and manufacturing process"
            />
          </div>
        </div>
        <div className="process-scroll">
          <span>↓</span>
          <strong>SCROLL DOWN</strong>
        </div>

      </section>
      

{/* INDUSTRY SECTION */}

      <section className="industries-section">
        <div className="industries-header">
          <h2>
            Rubber Solutions Built For <span>Industry.</span>
          </h2>
      
          <p>
            From infrastructure and mining to agriculture and transport,
            we help businesses solve complex challenges with engineered
            rubber solutions.
          </p>
        </div>
      
        <div className="industries-content">
      
          <div className="industry-selector">
            <p className="industry-label">OUR INDUSTRIES</p>
            <div className="industry-names">
              {Object.keys(industries).map((industry) => (
                <button
                  key={industry}
                    className={
                      selectedIndustry === industry
                        ? "industry-name active"
                        : "industry-name"
                              }
                  onClick={() => setSelectedIndustry(industry)}
                >
                {industries[industry].title}
                </button>
              ))}
            </div>
      
            <div className="industry-tabs">
              {Object.keys(industries).map((industry) => (
                <button
                  key={industry}
                  className={
                    selectedIndustry === industry
                      ? "industry-tab active"
                      : "industry-tab"
                  }
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>

          </div>
      
          <div className="industry-image">
            <img
              src={currentIndustry.image}
              alt={currentIndustry.title}
            />
            <div className="industry-overlay">
              <h3>{currentIndustry.title}</h3>
              <a href="#" className="industry-button">
                SEE OUR CAPABILITIES
                <span>→</span>
              </a>
            </div>
          </div>
      
        </div>

      </section>

{/* COMPANY VALUE SECTION */}

      <section className="company-values-section">

        <div className="company-values-header">
          <h2>
            More Than A
            <span> Rubber Company.</span>
          </h2>
          <p>
            We're engineers, problem-solvers and manufacturing partners,
            helping businesses turn unique requirements into reliable,
            high-performance rubber solutions.
          </p>
        </div>
        <div className="company-values-grid">
          <div className="company-value-card">
            <div className="value-icon">💡</div>
            <div className="value-content">
              <h3>We Engineer Solutions.</h3>
              <p>
                Custom products designed around your exact requirements.
              </p>
            </div>
          </div>
          <div className="company-value-card">
            <div className="value-icon">👥</div>
            <div className="value-content">
              <h3>We Know Rubber.</h3>
              <p>
                Material expertise backed by 20+ years of industry experience.
              </p>
            </div>
          </div>
          <div className="company-value-card">
            <div className="value-icon">✓</div>
              <div className="value-content">
                <h3>We Deliver Confidence.</h3>
                <p>
                  Quality, traceability and reliability at every stage.
                </p>
              </div>
          </div>
        </div>
   
      </section>




    </>

  );
}
export default App;