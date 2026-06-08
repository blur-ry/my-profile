export async function fetchProjects() {
  const response = await fetch('/api/projects');
  return response.json();
}

export async function fetchSkills() {
  const response = await fetch('/api/skills');
  return response.json();
}

export async function fetchEducation() {
  const response = await fetch('/api/education');
  return response.json();
}
