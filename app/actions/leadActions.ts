'use server';

export async function submitLeadAction(data: {
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  details: string;
}) {
  const res = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
