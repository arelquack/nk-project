export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex">
        <aside className="w-64 bg-gray-800 text-white">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="/admin/members" className="hover:bg-gray-700 p-2 rounded-md">
              Members
            </a>
            <a href="/admin/blogs" className="hover:bg-gray-700 p-2 rounded-md">
              Blogs
            </a>
            <a href="/admin/events" className="hover:bg-gray-700 p-2 rounded-md">
              Events
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-8 bg-gray-100">{children}</main>
      </div>
    );
  }
  