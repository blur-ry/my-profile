const education = [
  {
    period: '2024 - 2027',
    degree: 'Bachelor of Science in Computer Science',
    role: 'Student',
    field: 'Computer Studies',
    description: 'Focused on frontend engineering, UX design, and modern web architecture.',
  },
  {
    period: '2022 - 2024',
    degree: 'Information and Communications Technology',
    role: 'Student',
    field: 'Computer Studies',
    description: 'Focused on the basics of computers and the fundamentals.',
  },
];

export function EducationTimeline() {
  return (
    <section className="section" id="education">
      <div className="page-shell">
        <div className="section-headline">
          <p className="section-subtitle">ACADEMIC RIGORS</p>
          <h2 className="section-title">Academic Rigors</h2>
          <p className="section-copy">
            A hierarchical view of the programs that shaped my engineering foundation.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <div key={item.period + item.degree} className="education-item">
              <div className="education-header">
                <span className="panel-label">{item.period}</span>
              </div>
              <h3>{item.degree}</h3>
              <p className="education-role">{item.role}</p>
              <p style={{ color: '#e5e2e1', lineHeight: 1.75 }}>{item.field}</p>
              <p style={{ marginTop: '0.85rem', color: '#c9c3bf' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
