"use client";

import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabaseClient";

interface Blog {
    id: number;
    title: string;
    description: string;
}

const ArticlesSection: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]); // State buat nyimpen data blogs

    useEffect(() => {
        const fetchBlogs = async () => {
        const { data, error } = await supabase.from("blogs").select("*");

        if (error) {
            console.error("Error fetching blogs:", error.message);
        } else {
            setBlogs(data || []);
        }
    };

        fetchBlogs();
    }, []); // Dependency array kosong biar cuma dipanggil sekali pas komponen di-load

    return (
        <section
            id="articles"
            className="min-h-screen flex flex-col items-center justify-center bg-white text-text-black px-6 lg:px-16 py-16"
        >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-mountain-dark">
                Artikel Terbaru
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="bg-sakura-pink rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 text-center"
                >
                    <h4 className="text-xl font-bold mb-2">{blog.title}</h4>
                    <p className="text-sm text-gray-700">{blog.description}</p>
                    <a
                    href="#"
                    className="mt-4 inline-block text-mountain-dark underline hover:text-mountain-dark-darker"
                    >
                    Baca Selengkapnya
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
};

export default ArticlesSection;
