export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="about-container">
        <div className="who-am-i-circle">
          <img src="/profile.jpg" alt="Profile photo" className="who-am-i-img" />
          <div className="circle-content">
            <p className="circle-text">Who I am</p>
          </div>
        </div>

        <div className="profile-info">
          <h2 className="profile-name">Carl Anderson D. Saniel</h2>
          <p className="profile-degree">Bachelor of Science in Computer Science</p>
        </div>

        <div className="about-introduction">
          <div className="intro-section">
            <h3 className="intro-title">Introduction</h3>
            <p className="intro-text">
              Hi, I am Carl Anderson D. Saniel. A passionate student on becoming a senior software engineer.
              I enjoy transforming ideas into digital products through clean code, intuitive design, and efficient development practices.
            </p>
          </div>

          <div className="intro-section">
            <h3 className="intro-title">My Background</h3>
            <p className="intro-text">
              I specialize in React, Next.js, TypeScript, and Supabase, focusing on creating responsive web applications with excellent user experiences. My development approach emphasizes performance, maintainability, accessibility, and modern development standards.
            </p>
          </div>

          <div className="intro-section">
            <h3 className="intro-title">What Am I Different</h3>
            <p className="intro-text">
              What sets me apart is my ability to combine technical development with design thinking. I enjoy not only building functional applications but also crafting interfaces that are visually appealing and easy to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
