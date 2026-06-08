import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Message received successfully.', details: { name, email, message } });
}
