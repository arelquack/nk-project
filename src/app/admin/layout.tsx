import { FaUserFriends, FaBlog, FaCalendarAlt } from "react-icons/fa";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-mountain-dark text-white shadow-lg">
        <nav className="flex flex-col p-6 space-y-4">
          <a
            href="/admin/members"
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FaUserFriends />
            <span>Members</span>
          </a>
          <a
            href="/admin/blogs"
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FaBlog />
            <span>Blogs</span>
          </a>
          <a
            href="/admin/events"
            className="flex items-center gap-3 hover:bg-gray-600 p-3 rounded-md transition duration-200"
          >
            <FaCalendarAlt />
            <span>Events</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50 shadow-inner">{children}</main>
    </div>
  );
}
