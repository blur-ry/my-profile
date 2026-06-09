export function ContactForm() {
  return (
    <section className="section" id="contact">
      <div className="page-shell contact-panel">
        <div className="contact-copy-panel">
          <p className="section-subtitle">CONTACT</p>
          <h2 className="section-title">Let's build something impactful together.</h2>
          <p className="section-copy">
            I am eager to learn more opportunities to collaborate and contribute to meaningful projects.
          </p>

          <div className="contact-channels">
            <div className="contact-channel-card">
              <p className="contact-channel-label">Direct Contact</p>
              <a href="mailto:carlandersn679@gmail.com" className="contact-channel-link">
                carlandersn679@gmail.com
              </a>
            </div>

            <div className="contact-channel-card">
              <p className="contact-channel-label">Social Hub</p>
              <a
                href="https://github.com/blur-ry"
                target="_blank"
                rel="noreferrer"
                className="contact-channel-link"
              >
                github.com/blur-ry
              </a>
            </div>
          </div>
        </div>

        <div className="glass-card contact-form-card">
          <form action="/api/contact" method="post" className="form-grid">
            <div>
              <label htmlFor="name" className="field-label">NAME</label>
              <input id="name" name="name" className="input" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="field-label">E-MAIL</label>
              <input id="email" name="email" type="email" className="input" placeholder="email@organization.com" required />
            </div>
            <div className="full-width">
              <label htmlFor="message" className="field-label">Message</label>
              <textarea id="message" name="message" className="textarea" rows={6} placeholder="Briefly describe the objective..." required />
            </div>
            <button type="submit" className="button">SEND →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
