import { useState } from "react";
// import { Menu, X, Home, User, Settings } from "lucide-react";
import { BiHome, BiMenu, BiUser, BiX } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

export default function NavbarWithSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform md:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Logo</h1>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <BiX className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-4 hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
              <BiHome className="w-5 h-5" /> Dashboard
            </li>
            <li className="p-4 hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
              <BiUser className="w-5 h-5" /> Profile
            </li>
            <li className="p-4 hover:bg-gray-800 flex items-center gap-2 cursor-pointer">
              <FiSettings className="w-5 h-5" /> Settings
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-gray-800 text-white p-4 flex items-center justify-between md:justify-end">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <BiMenu className="w-6 h-6" />
          </button>
          <h1 className="hidden md:block text-lg font-semibold">Welcome</h1>
        </header>
        
        {/* Page Content */}
        {/* <main className="p-6">Your content here...</main> */}
      </div>
    </div>
  );
}
