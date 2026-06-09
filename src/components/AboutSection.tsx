import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="about-container">
        <div className="about-hero">
          <div className="about-portrait-frame">
            <Image
              src="/myself-formal.png"
              alt="Carl Anderson D. Saniel — professional portrait"
              className="about-portrait-img"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              priority
            />
          </div>

          <div className="about-hero-content">
            <p className="section-subtitle">ABOUT ME</p>
            <div className="profile-info about-profile-info">
              <h2 className="profile-name">Carl Anderson D. Saniel</h2>
              <p className="profile-degree">Bachelor of Science in Computer Science</p>
            </div>
            <p className="about-hero-summary">
              A passionate student on the path to becoming a senior software engineer — building digital
              products through clean code, intuitive design, and efficient development practices.
            </p>
          </div>
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
            <h3 className="intro-title">Why I Am Different</h3>
            <p className="intro-text">
              What sets me apart is my ability to combine technical development with design thinking. I enjoy not only building functional applications but also crafting interfaces that are visually appealing and easy to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
