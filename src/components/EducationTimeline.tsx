const education = [
  {
    period: '2022 - 2027',
    degree: 'Bachelor of Science in Computer Science',
    role: 'College Student',
    field: 'Computer Studies',
    description: 'Focused on frontend engineering, UX design, and modern web architecture.',
  },
  {
    period: '2020 - 2022',
    degree: 'Information and Communications Technology',
    role: 'Senior Highschool Student',
    field: 'Computer Studies',
    description: 'Focused on the basics of computers and the fundamentals.',
  },
  {
    period: '2020 - 2016',
    degree: 'An Jr. High School Student',
    role: 'Junior High School Student',
    description: 'General academics in science, math, and technology.',
  },
  {
    period: '2010 - 2016',
    degree: 'An Elementary Student',
    role: 'Elementary School Student',
    description: 'The basics of foundating subjects.',
  },
];

const certifications = [
  {
    title: 'Cloud Computing Fundamentals',
    issuer: 'IBM SkillsBuild',
    description:
      'Completed the course of IBM Skillsbuild where we learn the path on Cloud Computing Fundamentals',
  },
  {
    title: 'Digital Literacy',
    issuer: 'IBM SkillsBuild',
    description: 'Completed the course of IBM SkillsBuild certification in the Digital Literacy',
  },
  {
    title: 'Information Technology Fundamentals',
    issuer: 'IBM SkillsBuild',
    description:
      'Completed the course of IBM SkillsBuild certification in Information Technology Fundamentals',
  },
  {
    title: 'User Experience Design Fundamentals',
    issuer: 'IBM SkillsBuild',
    description:
      'Completed the course of IBM SkillsBuild certification in User Experience Design Fundamentals',
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
                <span className="education-period">{item.period}</span>
              </div>
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-role">{item.role}</p>
              <p className="education-field">{item.field}</p>
              <p className="education-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="section-headline education-certifications-headline">
          <p className="section-subtitle">ACHIEVEMENTS AND CERTIFICATION</p>
          <h2 className="section-title">Achievements and Certification</h2>
        </div>

        <div className="education-grid">
          {certifications.map((item) => (
            <div key={item.title} className="education-item">
              <h3 className="education-degree">{item.title}</h3>
              <p className="education-role">{item.issuer}</p>
              <p className="education-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
