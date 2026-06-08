export function HeroSection() {
  return (
    <section className="section section-hero" id="home">
      <div className="page-shell hero-grid">
        <div className="hero-copy-panel">
          <p className="section-subtitle">INITIALIZING STUDENT...</p>
          <h1 className="hero-heading">Hello, I am Carl Anderson Saniel</h1>
          <p className="section-copy hero-copy">
            Architecting high-performance digital ecosystems with a focus on distributed systems, interface polish, and terminal-speed optimization.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">View My Work</a>
            <a className="button button-secondary" href="#contact">Connect</a>
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
