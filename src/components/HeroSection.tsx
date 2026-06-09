export function HeroSection() {
  return (
    <section className="section section-hero" id="home">
      <div className="page-shell hero-grid">
        <div className="hero-copy-panel">
          <p className="section-subtitle">INITIALIZING STUDENT...</p>
          <h1 className="hero-heading">Hello, I am Carl Anderson Saniel</h1>
          <p className="section-copy hero-copy">
            A college students that is very passionate about software development, machine learning, and technology in general. 
            I am currently pursuing a degree in Computer Science at the University of the Arellano, 
            and I am always looking for new opportunities to learn and grow as a developer
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">View My School Projects</a>
            <a className="button button-secondary" href="#contact">Reach Me</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="code-window">
            <div className="code-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="code-content">
              <div className="code-line short" />
              <div className="code-line long" />
              <div className="code-line medium" />
              <div className="code-line long" />
              <div className="code-line short" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
