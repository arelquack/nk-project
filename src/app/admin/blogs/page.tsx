// "use client" directive ensures this is a React Client Component
"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  published_at: string;
  author: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blogs");
      setBlogs(data);
    } catch (err) {
      console.log("Error fetching blogs:", err);
      setError("Failed to fetch blogs.");
    }
  };

  const addBlog = async () => {
    const { title, description, content, author } = newBlog;
    if (!title || !description || !content || !author) {
      setError("All fields are required!");
      return;
    }

    try {
      await axios.post("/api/blogs", newBlog);
      setNewBlog({ title: "", description: "", content: "", author: "" });
      fetchBlogs();
    } catch (err) {
      console.error("Error adding blog:", err);
      setError("Failed to add blog.");
    }
  };

  const deleteBlog = async (id: number) => {
    try {
      setError(""); // Reset error state
      const response = await axios.delete(`/api/blogs`, { data: { id } }); // Kirim ID di body
      console.log("Delete Response:", response);
      fetchBlogs(); // Refresh blogs
    } catch (err) {
      console.error("Error deleting blog:", err);
  
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.error || `Failed to delete blog: ${err.message}`;
        setError(`Error [${err.response?.status}]: ${message}`);
      } else {
        setError("An unexpected error occurred while deleting the blog.");
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black">Blogs</h1>
      <div className="mb-4 grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className="border p-2 w-full text-black"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBlog.author}
          onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
          className="border p-2 w-full text-black"
        />
        <input
          type="text"
          placeholder="Description"
          value={newBlog.description}
          onChange={(e) =>
            setNewBlog({ ...newBlog, description: e.target.value })
          }
          className="border p-2 w-full text-black"
        />
        <textarea
          placeholder="Content"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
          className="border p-2 w-full h-40 text-black"
        ></textarea>
        <button onClick={addBlog} className="bg-blue-500 text-white px-4 py-2 w-full">
          Add Blog
        </button>
      </div>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <table className="w-full border mt-6">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-black">Title</th>
            <th className="border px-4 py-2 text-black">Description</th>
            <th className="border px-4 py-2 text-black">Author</th>
            <th className="border px-4 py-2 text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="border px-4 py-2 text-black">{blog.title}</td>
              <td className="border px-4 py-2 text-black">{blog.description}</td>
              <td className="border px-4 py-2 text-black">{blog.author}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
