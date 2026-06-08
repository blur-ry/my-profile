import { NextResponse } from 'next/server';

const skills = [
  { id: '1', name: 'React' },
  { id: '2', name: 'TypeScript' },
  { id: '3', name: 'Next.js' },
  { id: '4', name: 'Supabase' },
  { id: '5', name: 'Responsive Design' },
  { id: '6', name: 'Accessibility' },
];

export async function GET() {
  return NextResponse.json(skills);
}
