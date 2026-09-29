import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.jpg";
import rubberV from "./assets/vsrp-rubber-v-clean.jpg";
import insight1 from "./assets/image1.jpg";
import insight2 from "./assets/image2.jpg";
import insight3 from "./assets/image3.jpg";
import project1 from "./assets/images1.jpg";
import project2 from "./assets/images2.jpg";
import project3 from "./assets/images3.jpg";

function App() {

  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [selectedMenuIndustry, setSelectedMenuIndustry] = useState(
    "Agriculture"
  );
  const [isWhatWeDoClicked, setIsWhatWeDoClicked] = useState(false);
  const [isAboutClicked, setIsAboutClicked] = useState(false);

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
        <img
          src={logo}
          alt="VSRP Engineered Rubber"
          className="header-logo"
        />
        <nav>
          <a href="#">ABOUT</a>

            <button
              className="industries-link"
              onClick={() => setIndustriesOpen(!industriesOpen)}
            >
            INDUSTRIES
            <span>⌄</span>
            </button>

          <a href="#">PRODUCTS</a>
          <a href="#">PROJECTS</a>
          <a href="#">INSIGHTS</a>

          <a href="#" className="contact-button">
            <span>CONTACT</span>
            <span className="contact-arrow">→</span>
          </a>
        </nav>
        
        {industriesOpen && (
          <div className="industries-dropdown">
            <div className="industry-column">

              <div
                className={`industry-item ${
                  selectedMenuIndustry === "Agriculture & Irrigation" ? "active" : ""
                }`}
                onClick={() => setSelectedMenuIndustry("Agriculture & Irrigation")}
              >
                  <span className="industry-icon">♟</span>
                  <span>Agriculture & Irrigation</span>
              </div>
              
              <div
                className={`industry-item ${
                  selectedMenuIndustry === "Plumbing" ? "active" : ""
                }`}
                onClick={() => setSelectedMenuIndustry("Plumbing")}
              >
                <span className="industry-icon">♧</span>
                <span>Plumbing</span>
              </div>

              <div
                className={`industry-item ${
                  selectedMenuIndustry === "Civil Engineering & Construction" ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedMenuIndustry("Civil Engineering & Construction")
                }
              >
                <span className="industry-icon">⌂</span>
                <span>Civil Engineering & Construction</span>
              </div>

              <div
                className={`industry-item ${
                  selectedMenuIndustry === "Mining & Mining-Related Applications"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedMenuIndustry("Mining & Mining-Related Applications")
                }
              >
                <span className="industry-icon">▣</span>
                <span>Mining & Mining-Related Applications</span>
              </div>

            </div>

            <div className="industry-column">

              <div
                className={`industry-item ${
                  selectedMenuIndustry === "Defence" ? "active" : ""
                }`}
                onClick={() => setSelectedMenuIndustry("Defence")}
              >
                <span className="industry-icon">⬡</span>
                <span>Defence</span>
              </div>

              <div
                className={`industry-item ${
                  selectedMenuIndustry === "Architecture" ? "active" : ""
                }`}
                onClick={() => setSelectedMenuIndustry("Architecture")}
              >
                <span className="industry-icon">⚙</span>
                <span>Architecture</span>
              </div>

              <div
                className={`industry-item ${
                  selectedMenuIndustry === "Road & Transport" ? "active" : ""
                }`}
                onClick={() => setSelectedMenuIndustry("Road & Transport")}
              >
                <span className="industry-icon">▰</span>
                <span>Road & Transport</span>
              </div>

              <div
                className={`industry-item ${
                  selectedMenuIndustry === "Industrial" ? "active" : ""
                }`}
                onClick={() => setSelectedMenuIndustry("Industrial")}
              >
                <span className="industry-icon">◉</span>
                <span>Industrial</span>
              </div>


            </div>
          </div>
        )}

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

          <a
            href="#"
            className={`what-we-do ${isWhatWeDoClicked ? "shake" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setIsWhatWeDoClicked(true);
              setTimeout(() => {
                setIsWhatWeDoClicked(false);
              }, 400);
            }}
          >
            SEE WHAT WE DO →
          </a>
          
        </div>

        <div className="scroll-down">
          <span>↓</span>
          SCROLL DOWN
        </div>
      </section>
      
      {/* ABOUT SECTION */}

      <section id="about" className="about-section">

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
          
          <a
            href="#"
            className={`about-button ${isAboutClicked ? "clicked" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setIsAboutClicked(true);
            }}
          >
            ABOUT VSRP
            <span>→</span>
          </a>

        </div>

      </section>
    
      <a
        href="#"
        className="whatsapp-button"
        onClick={(e) => e.preventDefault()}
      >
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
            <img src={rubberV} alt="VSRP" className="build-v-image" />
          </div>
          <a href="#about" className="scroll-down">
            <span>↓</span>
            SCROLL DOWN
          </a>
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

{/* PROJECT SECTION */}

      <section className="projects-section">

        <div className="projects-header">
          <h2>
            Wherever Precision Is
            <br />
            Needed, <span>VSRP Delivers.</span>
          </h2>
          <a
            href="#"
            className="projects-button"
            onClick={(e) => e.preventDefault()}
          >
            VIEW ALL PROJECTS
            <span>→</span>
          </a>
        </div>

        <div className="projects-slider">
          <article className="project-card">
            <div className="project-image">
              <img src={project1} alt="Custom Extrusion Solution" />
              <a
                href="#"
                className="view-project"
                onClick={(e) => e.preventDefault()}
              >
                VIEW PROJECT
              </a>
              <div className="project-tags">
                <span>MINING</span>
                <span>EPDM</span>
                <span>EXTRUSION</span>
                <span>CONVEYOR SYSTEM</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Custom Extrusion Solution</h3>
              <p>
                A specialised rubber extrusion profile engineered to meet strict
                performance and dimensional requirements.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-image">
              <img src={project2} alt="Custom Extrusion Solution" />
              <a
                href="#"
                className="view-project"
                onClick={(e) => e.preventDefault()}
              >
                VIEW PROJECT
              </a>
              <div className="project-tags">
                <span>MINING</span>
                <span>EPDM</span>
                <span>EXTRUSION</span>
                <span>CONVEYOR SYSTEM</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Custom Extrusion Solution</h3>
              <p>
                A specialised rubber extrusion profile engineered to meet strict
                performance and dimensional requirements.
              </p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-image">
              <img src={project3} alt="Custom Extrusion Solution" />
              <a
                href="#"
                className="view-project"
                onClick={(e) => e.preventDefault()}
              >
                VIEW PROJECT
              </a>
              <div className="project-tags">
                <span>MINING</span>
                <span>EPDM</span>
                <span>EXTRUSION</span>
                <span>CONVEYOR SYSTEM</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Custom Extrusion Solution</h3>
              <p>
                A specialised rubber extrusion profile engineered to meet strict
                performance and dimensional requirements.
              </p>
            </div>
          </article>
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
              <a
                href="#"
                className="industry-button"
                onClick={(e) => e.preventDefault()}
              >
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

 {/* FAQ SECTION */}

      <section className="faq-section">

        <div className="faq-left">
          <h2>
            Frequently Asked
            <br />
            <span>Questions</span>
          </h2>
          <p>
            We’ve heard it all. Here’s everything you need to know
            <br />
            before working with us.
          </p>
          <a href="#contact" className="faq-button">
            ASK A QUESTION
            <span>→</span>
          </a>
          <div className="faq-decoration">
            <div className="decoration-orange"></div>
            <div className="decoration-gray"></div>
          </div>
        </div>
        <div className="faq-right">
          <FAQItem
            question="What type of rubber should I use?"
            answer="At VSRP, we know rubber. Across any application, our experts are well equipped to advise on the best make and material for your rubber products. If you need excellent performance, we can show you exactly how to get it. All you need to do is give us a call."
            defaultOpen={true}
          />
          <FAQItem
            question="What is the hardness scale for rubber?"
            answer="Rubber hardness is commonly measured using the Shore hardness scale. Our team can help you select the appropriate hardness for your application."
          />
          <FAQItem
            question="What are minimum order quantities?"
            answer="Minimum order quantities depend on the product, material, tooling and manufacturing requirements. Contact our team and we can discuss your specific requirements."
          />
          <FAQItem
            question="How can I get a quote?"
            answer="Send us your drawing, sample or specifications and our team can review your requirements and prepare a quotation."
          />
          <FAQItem
            question="Which materials types do VSRP offer?"
            answer="We work with a range of rubber materials and can help determine the right material based on your application and performance requirements."
          />
          <FAQItem
            question="Can VSRP source products & materials?"
            answer="Yes. Our team can assist with sourcing products and materials depending on your project requirements."
          />
        </div>

      </section>

      {/* INSIGHTS SECTION */}

      <section className="insights-section">
        <div className="insights-header">
          <div>
            <h2>
              Industry <span>Insights</span>
            </h2>
            <p>
              Practical advice, material expertise and engineering
              <br />
              knowledge to help you make informed decisions
            </p>
          </div>

          <a href="#" className="insights-button" onClick={(e) => e.preventDefault()}>
            VIEW ALL INSIGHTS
            <span>→</span>
          </a>
        </div>

        <div className="insights-grid">
          <article className="insight-card">
            <img src={insight1} alt="Rubber compounds" />
            <div className="insight-content">
              <h3>
                Understanding Rubber Compounds:
                <br />
                Choosing The Right Material...
              </h3>
              <a href="#" onClick={(e) => e.preventDefault()}>
                VIEW DETAIL →
              </a>
            </div>
          </article>

          <article className="insight-card">
            <img src={insight2} alt="Rubber manufacturing" />
            <div className="insight-content">
              <h3>
                Understanding Rubber Compounds:
                <br />
                Choosing The Right Material...
              </h3>
              <a href="#" onClick={(e) => e.preventDefault()}>
                VIEW DETAIL →
              </a>
            </div>
          </article>

          <article className="insight-card">
            <img src={insight3} alt="Rubber products" />
            <div className="insight-content">
              <h3>
                Understanding Rubber Compounds:
                <br />
                Choosing The Right Material...
              </h3>
              <a href="#" onClick={(e) => e.preventDefault()}>
                VIEW DETAIL →
              </a>
            </div>
          </article>
        </div>
      </section>
{/* INDUSTRIES CTA SECTION */}
      <section className="industries-cta-section">
        <div className="industries-cta-overlay">
          <div className="industries-cta-left">
            <h2>
              VSRP are
              <br />
              furthering quality
              <br />
              in <span>our industries.</span>
            </h2>
          </div>

          <div className="industries-cta-right">
            <p>
              Across private, commercial and civil projects, our
              rubber products are custom-engineered to be
              reliable and cost-effective. We support the specific
              needs of specialised providers, plugging the gaps in
              their projects so they can continue to deliver at the
              highest level.
            </p>
            <a
              href="#"
              className="industries-contact-button"
              onClick={(e) => e.preventDefault()}
            >
              CONTACT US
              <span>→</span>
            </a>
          </div>
        </div>
      </section>


{/* FOOTER SECTION */}

      <footer className="footer-section">
        <div className="footer-main">
          {/* Logo and description */}
          <div className="footer-brand">
            <img
              src={logo}
              alt="VSRP Engineered Rubber"
              className="footer-logo"
            />
            <p>
              For over 20 years, VSRP has delivered
              <br />
              engineered rubber solutions built around the
              <br />
              unique requirements of Australian businesses.
            </p>
            <div className="footer-socials">
              <a href="#" onClick={(e) => e.preventDefault()}>◎</a>
              <a href="#" onClick={(e) => e.preventDefault()}>f</a>
              <a href="#" onClick={(e) => e.preventDefault()}>in</a>
              <a href="#" onClick={(e) => e.preventDefault()}>𝕏</a>
            </div>
            <div className="footer-certification">
              <div className="certificate-box">✓</div>
              <span>ISO9001:2015 Accredited</span>
            </div>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>COMPANY</h3>

            <a href="#">About</a>
            <a href="#">Case Studies</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
          </div>

          {/* Industries */}
          <div className="footer-column">
            <h3>INDUSTRIES</h3>
            <a href="#">Agriculture & Irrigation</a>
            <a href="#">Plumbing</a>
            <a href="#">Civil Engineering and Construction</a>
            <a href="#">Mining</a>
            <a href="#">Defence</a>
            <a href="#">Architectural Industry</a>
            <a href="#">Road Transport</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>CONTACT</h3>
            <strong>
              1800 787 777, +61 (2) 8834 9958
            </strong>
            <strong>
              enquiries@vsrp.com.au
            </strong>
          </div>

          {/* Location */}
          <div className="footer-column">
            <h3>LOCATION</h3>
            <strong>
              Unit 3, 10 Banksia Place,
              <br />
              South Windsor NSW 2756
            </strong>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>COPYRIGHT © 2026 VSRP</span>
          <span>SITE BY ACODEZ</span>
          <div>
            <span>PRIVACY POLICY</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </footer>


    </>

  );

}

function FAQItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>

        <span className="faq-icon">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );

}
export default App;