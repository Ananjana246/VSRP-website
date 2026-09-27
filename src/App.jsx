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

      <a href="#" className="whatsapp-button">
        ☎
      </a>
    </main>
  );
}

export default App;