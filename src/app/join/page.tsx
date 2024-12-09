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

    const { data, error } = await supabase.from("new_members").insert([
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-sakura-pink px-6 py-12">
      <h1 className="text-4xl font-bold text-mountain-dark mb-8">
        Daftar Nihongo Kurabu
      </h1>
      {successMessage && (
        <div className="bg-mountain-dark text-white px-6 py-4 mb-6 rounded-md">
          {successMessage}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grade" className="block text-sm font-medium">
            Kelas
          </label>
          <input
            type="text"
            name="grade"
            id="grade"
            value={formData.grade}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="motivation" className="block text-sm font-medium">
            Motivasi
          </label>
          <textarea
            name="motivation"
            id="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-mountain-dark text-white rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Mendaftarkan..." : "Daftar"}
        </button>
      </form>
    </div>
  );
};

export default JoinUs;
