export function ContactForm() {
  return (
    <section className="section" id="contact">
      <div className="page-shell contact-panel">
        <div className="contact-copy-panel">
          <p className="section-subtitle">OPEN FOR COLLABORATIONS</p>
          <h2 className="section-title">Let's build something impactful together.</h2>
          <p className="section-copy">
            Reach out if you value speed, scale, and technical depth. I build tools that operate at terminal velocity.
          </p>
        </div>

        <div className="glass-card contact-form-card">
          <form action="/api/contact" method="post" className="form-grid">
            <div>
              <label htmlFor="name" className="field-label">Identity</label>
              <input id="name" name="name" className="input" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="field-label">Access Point</label>
              <input id="email" name="email" type="email" className="input" placeholder="email@organization.com" required />
            </div>
            <div className="full-width">
              <label htmlFor="message" className="field-label">Transmission</label>
              <textarea id="message" name="message" className="textarea" rows={6} placeholder="Briefly describe the objective..." required />
            </div>
            <button type="submit" className="button">Send Transmission →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
