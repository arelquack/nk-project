"use client";

import { usePathname } from "next/navigation";
import { FaUserFriends, FaBlog, FaCalendarAlt, FaHome, FaAward } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-mountain-dark text-white shadow-lg">
        <nav className="flex flex-col p-6 space-y-4">
          <a 
            href="/admin" 
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FaHome /> 
            <span>Dashboard</span>
          </a>
          <a
            href="/admin/members"
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FaUserFriends />
            <span>Anggota</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FaAward /> 
            <span>Prestasi</span>
          </a>
          <a
            href="/admin/blogs"
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FaBlog />
            <span>Artikel</span>
          </a>
          <a
            href="/admin/events"
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FaCalendarAlt />
            <span>Acara</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FiSettings /> 
            <span>Pengaturan</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50 shadow-inner">{children}</main>
    </div>
  );
}
