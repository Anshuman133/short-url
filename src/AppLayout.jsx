import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area */}
      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-10 text-center text-white bg-gray-800">
        Made by Anshuman Parida
      </footer>
    </div>
  );
}

export default AppLayout;
