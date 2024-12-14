"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    grade: "",
    email: "",
    motivation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("new_members").insert([
      {
        full_name: formData.fullName,
        grade: formData.grade,
        email: formData.email,
        motivation: formData.motivation,
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      alert("Error submitting form: " + error.message);
    } else {
      setSuccessMessage("Pendaftaran berhasil! Kami akan segera menghubungi Anda.");
      setFormData({ fullName: "", grade: "", email: "", motivation: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <h1 className="text-4xl font-extrabold text-mountain-dark mb-8 drop-shadow-md">
        Daftar Nihongo Kurabu
      </h1>
      {successMessage && (
        <div className="bg-mountain-dark text-white px-6 py-4 mb-6 rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg transition-transform transform hover:shadow-2xl hover:scale-105"
      >
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-medium text-mountain-dark">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sakura-pink text-black"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="grade" className="block text-sm font-medium text-mountain-dark">
            Kelas
          </label>
          <input
            type="text"
            name="grade"
            id="grade"
            value={formData.grade}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sakura-pink text-black"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-mountain-dark">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sakura-pink text-black"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="motivation" className="block text-sm font-medium text-mountain-dark">
            Motivasi
          </label>
          <textarea
            name="motivation"
            id="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sakura-pink text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-mountain-dark text-white font-semibold rounded-md shadow-lg hover:bg-sakura-pink hover:text-text-black focus:outline-none focus:ring-2 focus:ring-mountain-dark disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Mendaftarkan..." : "Daftar"}
        </button>
      </form>
    </div>
  );
};

export default JoinUs;
