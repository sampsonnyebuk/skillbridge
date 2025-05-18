// app/dashboard/page.tsx

'use client';

import dynamic from 'next/dynamic';

const DashboardPageComponent = dynamic(() => import('./DashboardPageComponent'), {
  ssr: false,
});

export default function DashboardPage() {
  return <DashboardPageComponent />;
}
