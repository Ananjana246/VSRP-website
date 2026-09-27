import "./App.css";

function App() {
  return (
    <main>
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

      <section className="hero">
        <div className="hero-content">
          <div className="hero-title-left">
            <h2>
              Custom Rubber
              <br />
              Solutions<span>.</span>
            </h2>
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
        </div>
      </section>

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
    </main>
  );
}

export default App;