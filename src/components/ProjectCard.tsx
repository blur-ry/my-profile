type Project = {
  title: string;
  description: string;
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div>
        <p className="overline">Featured</p>
        <h3 style={{ margin: '0.75rem 0' }}>{project.title}</h3>
        <p style={{ color: '#c9c3bf', lineHeight: 1.75 }}>{project.description}</p>
      </div>
      <a className="button" href={project.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </article>
  );
}
