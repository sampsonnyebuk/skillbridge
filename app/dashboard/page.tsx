'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (!user) {
        router.replace('/login');
      } else {
        setLoading(false);
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [router]);

  // Show a loading state while we check the user
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking authentication…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      {/* TODO: Add dashboard widgets, job lists, etc. */}
      <p>Welcome back! Here’s where you’ll manage your jobs and hires.</p>
    </div>
  );
}
