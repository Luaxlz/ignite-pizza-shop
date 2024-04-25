import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />

      <div className="flex flex-col flex-1 gap-4 p-8 pt-6 ">
        <Outlet />
      </div>
    </div>
  );
}
