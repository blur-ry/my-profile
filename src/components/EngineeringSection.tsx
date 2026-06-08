export function EngineeringSection() {
  return (
    <section className="section" id="about">
      <div className="section-row page-shell">
        <div className="panel panel-main">
          <p className="section-subtitle">ENGINEERING PRECISION</p>
          <h2 className="section-title">I don't just write code; I engineer solutions.</h2>
          <p className="section-copy">
            My philosophy is rooted in the "terminal velocity" mindset—achieving maximum output with minimal friction.
            I build high-performance systems, interfaces, and APIs that feel polished, fast, and resilient.
          </p>
        </div>

        <div className="panel panel-aside">
          <div className="glass-card ethos-card">
            <p className="section-subtitle">Technical Ethos</p>
            <h3 className="panel-title">Precision, clarity, and blazing efficiency.</h3>
            <p className="section-copy">
              Deeply committed to writing clean, maintainable, and highly efficient code. My expertise spans from memory management in C++ to building reactive microservices.
            </p>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <p className="stat-value">99.9%</p>
              <p className="stat-label">Uptime Focus</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">12+</p>
              <p className="stat-label">Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
