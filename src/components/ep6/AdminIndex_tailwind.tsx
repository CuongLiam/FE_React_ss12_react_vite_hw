// AdminIndex.tsx
import React, { useState } from "react";

interface HeaderProps {
  onMenu: () => void; // <- explicitly typed, noImplicitAny problem solved
}

const Header: React.FC<HeaderProps> = ({ onMenu }) => {
  return (
    <header className="h-16 bg-[#d5dbe3] border-b border-gray-200 flex items-center justify-center px-4 relative">
      <button
        onClick={onMenu}
        className="absolute left-4 md:hidden bg-transparent p-2"
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <strong className="text-gray-700">Header</strong>
    </header>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex w-56 bg-[#1f3b82] text-white items-center justify-center">
      <span className="text-sm">Menu</span>
    </aside>
  );
};

const AdminIndex: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header onMenu={() => setMobileOpen(true)} />

      <div className="flex flex-1 p-6">
        <Sidebar />

        {/* Mobile offcanvas */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-[#1f3b82] text-white p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="mb-6 px-2 py-1 bg-white/10 rounded text-white"
              >
                Close
              </button>
              <nav>
                <div className="py-2">Menu item 1</div>
                <div className="py-2">Menu item 2</div>
                <div className="py-2">Menu item 3</div>
              </nav>
            </div>
          </div>
        )}

        {/* Main area */}
        <main className="flex-1 mx-4">
          <div
            className="bg-white border border-gray-200 flex flex-col rounded shadow-sm overflow-hidden"
            style={{ minHeight: "calc(100vh - 4rem - 3rem)" }}
          >
            <div className="flex-1 flex items-center justify-center">
              <h4 className="text-gray-800">Main</h4>
            </div>

            <footer className="h-16 bg-[#d8e0ea] flex items-center justify-center">
              <span className="text-gray-800">Footer</span>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminIndex;
