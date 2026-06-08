import { NextResponse } from 'next/server';

const education = [
  {
    id: '1',
    institution: 'University of Web Design',
    degree: 'B.S. in Computer Science',
    period: '2018 — 2022',
    description: 'Concentrated on frontend systems, modern UI frameworks, and database-driven applications.',
  },
  {
    id: '2',
    institution: 'Full-Stack Academy',
    degree: 'Web Development Immersive',
    period: '2022 — 2023',
    description: 'Practical experience building production-ready web apps with React and PostgreSQL.',
  },
];

export async function GET() {
  return NextResponse.json(education);
}
