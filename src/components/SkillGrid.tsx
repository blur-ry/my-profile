type SkillItem = {
  name: string;
  hint?: string;
  symbol?: string;
};

type Category = {
  title: string;
  description?: string;
  layout: 'pills' | 'blocks' | 'list' | 'tags' | 'learning';
  gridArea: string;
  icon: 'code' | 'layout' | 'server' | 'database' | 'sparkle';
  items: SkillItem[];
};

const categories: Category[] = [
  {
    title: 'Core Languages',
    description: 'Foundational languages that power every layer of the stack.',
    layout: 'pills',
    gridArea: 'languages',
    icon: 'code',
    items: [
      { name: 'TypeScript', symbol: '</>' },
      { name: 'JavaScript', symbol: '[ ]' },
      { name: 'Python', symbol: '( )' },
      { name: 'SQL', symbol: '{ }' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Interfaces built for speed, motion, and pixel-perfect polish.',
    layout: 'blocks',
    gridArea: 'frontend',
    icon: 'layout',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
    ],
  },
  {
    title: 'Backend',
    layout: 'list',
    gridArea: 'backend',
    icon: 'server',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Supabase' },
      { name: 'Prisma' },
    ],
  },
  {
    title: 'Database',
    layout: 'tags',
    gridArea: 'database',
    icon: 'database',
    items: [
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Firebase' },
      { name: 'Supabase' },
    ],
  },
  {
    title: 'Currently Learning',
    description: 'Technologies I am actively exploring to expand my toolkit.',
    layout: 'learning',
    gridArea: 'learning',
    icon: 'sparkle',
    items: [
      { name: 'WebAssembly', hint: 'Near-native performance' },
      { name: 'LLM Fine-tuning', hint: 'Adaptive AI systems' },
      { name: 'Rust', hint: 'Memory-safe systems' },
      { name: 'Cloud Infrastructure', hint: 'Scalable deployments' },
    ],
  },
];

function CategoryIcon({ type }: { type: Category['icon'] }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (type) {
    case 'code':
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'layout':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case 'server':
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="8" rx="2" />
          <rect x="2" y="13" width="20" height="8" rx="2" />
          <path d="M6 7h.01M6 17h.01" />
        </svg>
      );
    case 'database':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'sparkle':
      return (
        <svg {...props}>
          <path d="M12 3l1.4 4.2L17.6 9 13.4 10.2 12 14.4 10.6 10.2 6.4 9l4.2-1.8L12 3z" />
          <path d="M5 15l.8 2.4L8.2 18l-2.4.8L5 21.2 3.8 18.8 1.4 18l2.4-.8L5 15z" />
        </svg>
      );
  }
}

function SkillItems({ category }: { category: Category }) {
  switch (category.layout) {
    case 'pills':
      return (
        <div className="skill-pills">
          {category.items.map((item) => (
            <span key={item.name} className="skill-pill">
              {item.symbol && <span className="skill-pill-symbol">{item.symbol}</span>}
              {item.name}
            </span>
          ))}
        </div>
      );
    case 'blocks':
      return (
        <div className="skill-blocks">
          {category.items.map((item) => (
            <div key={item.name} className="skill-block">
              <span className="skill-block-icon" aria-hidden="true" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      );
    case 'list':
      return (
        <ul className="skill-list">
          {category.items.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      );
    case 'tags':
      return (
        <div className="skill-tags">
          {category.items.map((item) => (
            <span key={item.name} className="skill-tag">
              {item.name}
            </span>
          ))}
        </div>
      );
    case 'learning':
      return (
        <div className="skill-learning-grid">
          {category.items.map((item) => (
            <div key={item.name} className="skill-learning-item">
              <span className="skill-learning-icon" aria-hidden="true" />
              <div>
                <p className="skill-learning-name">{item.name}</p>
                {item.hint && <p className="skill-learning-hint">{item.hint}</p>}
              </div>
            </div>
          ))}
        </div>
      );
  }
}

export function SkillGrid() {
  return (
    <section className="section" id="skills">
      <div className="glass-card tech-stack-card page-shell">
        <div className="section-headline">
          <p className="section-subtitle">ECOSYSTEM ARCHITECTURE</p>
          <h2 className="section-title">Tech Stacks</h2>
          <p className="section-copy">
            Organized categories of the tools, languages, and platforms I work with every day to build
            resilient, scalable digital experiences.
          </p>
        </div>

        <div className="skill-bento">
          {categories.map((category) => (
            <article
              key={category.title}
              className={`skill-card skill-card--${category.layout}`}
              style={{ gridArea: category.gridArea }}
            >
              <header className="skill-card-header">
                <div className="skill-card-title-row">
                  {category.layout === 'learning' && (
                    <span className="skill-card-sparkle" aria-hidden="true">
                      <CategoryIcon type="sparkle" />
                    </span>
                  )}
                  <h3 className="skill-card-title">{category.title}</h3>
                </div>
                {category.description && (
                  <p className="skill-card-description">{category.description}</p>
                )}
                {category.layout !== 'learning' && (
                  <span className="skill-card-corner-icon" aria-hidden="true">
                    <CategoryIcon type={category.icon} />
                  </span>
                )}
              </header>

              <SkillItems category={category} />

              {category.layout === 'learning' && (
                <div className="skill-learning-ornament" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
