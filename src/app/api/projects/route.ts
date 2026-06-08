import { NextResponse } from 'next/server';

const projects = [
  {
    id: '1',
    title: 'Portfolio Revamp',
    description: 'A responsive portfolio built with Next.js and focused on performance.',
    link: '#',
  },
  {
    id: '2',
    title: 'SaaS Launch Page',
    description: 'Modern landing page designed to convert and engage visitors.',
    link: '#',
  },
  {
    id: '3',
    title: 'Admin Dashboard',
    description: 'Data-rich dashboard combining frontend UX and API integrations.',
    link: '#',
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
