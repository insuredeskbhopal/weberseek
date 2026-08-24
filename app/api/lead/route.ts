import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

const SERVICE_LABELS: Record<string, string> = {
  SINGLE_PAGE: 'Single Page Website (From ₹2,999)',
  ECOMMERCE: 'E-Commerce Storefront (From ₹13,999)',
  MOBILE_APP: 'Business Mobile App (From ₹11,999)',
  CUSTOM_SOFTWARE: 'Custom Software & Web Portal',
  AI_AUTOMATION: 'AI & Workflow Automation',
  FULL_SOLUTION: 'Complete Redesign & Development',
  single_page: 'Single Page Website (From ₹2,999)',
  ecommerce: 'E-Commerce Storefront (From ₹13,999)',
  mobile_app: 'Business Mobile App (From ₹11,999)',
  custom_software: 'Custom Software & Web Portal',
  ai_automation: 'AI & Workflow Automation',
  full_solution: 'Complete Redesign & Development',
};

function buildWaUrl(name: string, email: string, company: string, serviceLabel: string, details: string) {
  const msg = `🚀 *New Project Request - WeberSeek*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n🏢 *Company:* ${company || 'Individual / Startup'}\n🛠️ *Service:* ${serviceLabel}\n📝 *Details:*\n${details}\n━━━━━━━━━━━━━━━━━━━━\nSent via WeberSeek Website`;
  return `https://wa.me/917024768125?text=${encodeURIComponent(msg)}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, serviceType, details } = body;

    if (!name || !email || !details) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const normalizedType = (serviceType || 'SINGLE_PAGE').toUpperCase().replace('-', '_');
    const serviceLabel = SERVICE_LABELS[normalizedType] || SERVICE_LABELS[serviceType] || serviceType;

    // Save to Neon PostgreSQL via Prisma
    await prisma.lead.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        serviceType: normalizedType as any,
        details: details.trim(),
        source: 'nextjs_website_form',
      },
    });

    const waUrl = buildWaUrl(name, email, company, serviceLabel, details);
    return NextResponse.json({ success: true, waUrl }, { status: 200 });

  } catch (error) {
    console.error('[/api/lead] error:', error);
    // Fallback — still return waUrl so the user is never blocked
    const { name = '', email = '', company = '', serviceType = '', details = '' } = await req.json().catch(() => ({}));
    const waUrl = buildWaUrl(name, email, company, SERVICE_LABELS[serviceType] || serviceType, details);
    return NextResponse.json({ success: true, waUrl }, { status: 200 });
  }
}
