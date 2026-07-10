'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children, requiredRole = null }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }

    if (requiredRole && user?.role !== requiredRole) {
      router.push('/');
    }
  }, [isAuthenticated, user, requiredRole, router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <div>Access Denied</div>;
  }

  return children;
}
