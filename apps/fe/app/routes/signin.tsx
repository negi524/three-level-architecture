import { Outlet } from '@remix-run/react';

export default function SigninRoute() {
  return (
    <main>
      <h1 className="text-center font-bold text-lg">Sign in</h1>
      <Outlet />
    </main>
  );
}
