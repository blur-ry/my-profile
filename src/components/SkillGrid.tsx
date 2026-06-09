const categories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Supabase', 'Prisma'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'Redis', 'Supabase', 'Firebase'],
  },
  {
    title: 'Core Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Currently Learning',
    items: ['WebAssembly', 'LLM Fine-tuning', 'Rust', 'Cloud Infrastructure'],
  },
  
];

export function SkillGrid() {
  return (
    <section className="section" id="skills">
      <div className="glass-card tech-stack-card page-shell">
        <div className="section-headline">
          <p className="section-subtitle">SYSTEM ARCHIVE SKILLS</p>
          <h2 className="section-title">Tech Stacks</h2>
          <p className="section-copy">
            Organized categories of the tools, languages, and platforms I work with every day.
          </p>
        </div>

        <div className="tech-grid">
          {categories.map((category) => (
            <div key={category.title} className="tech-panel">
              <p className="panel-label skill-category-label">{category.title}</p>
              <div className="tech-tags">
                {category.items.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
