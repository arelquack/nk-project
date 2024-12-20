"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/app/components/dashboard/Header";

interface Member {
  id: number;
  full_name: string;
  grade: string;
  email: string;
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [newMember, setNewMember] = useState({ full_name: "", grade: "", email: "" });
  const [editMember, setEditMember] = useState<Member | null>(null);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  
  const fetchMembers = async () => {
    try {
      const offset = (page - 1) * limit;
      const { data } = await axios.get(`/api/members?offset=${offset}&limit=${limit}`);
      setMembers(data);
    } catch (err) {
      console.log("Error fetching members:", err);
      setError("Failed to fetch members.");
    }
  };
  
  useEffect(() => {
    fetchMembers();
  }, [page]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  const addMember = async () => {
    try {
      await axios.post("/api/members", newMember);
      setNewMember({ full_name: "", grade: "", email: "" });
      fetchMembers();
    } catch (err) {
      console.log("Error adding member:", err);
      setError("Failed to add member");
    }
  };

  const deleteMember = async (id: number) => {
    try {
      await axios.delete("/api/members", { data: { id } });
      fetchMembers();
    } catch (err) {
      console.error("Error deleting member:", err);
      setError("Failed to delete member");
    }
  };

  const handleEdit = (member: Member) => {
    setEditMember(member);
    setNewMember({ 
      full_name: member.full_name, 
      grade: member.grade, 
      email: member.email 
    });
  };

  const updateMember = async () => {
    try {
      await axios.put("/api/members", { id: editMember?.id, ...newMember });
      setEditMember(null);
      setNewMember({ full_name: "", grade: "", email: "" });
      fetchMembers();
    } catch (err) {
      console.error("Error updating member:", err);
      setError("Failed to update member");
    }
  };

  return (
    <div>
      <Header title="Anggota"/>
      <div className="mb-4 mt-4">
        <input
          type="text"
          placeholder="Name"
          value={newMember.full_name}
          onChange={(e) => setNewMember({ ...newMember, full_name: e.target.value })}
          className="border p-2 mr-2 text-black"
        />
        <input
          type="text"
          placeholder="Grade"
          value={newMember.grade}
          onChange={(e) => setNewMember({ ...newMember, grade: e.target.value })}
          className="border p-2 mr-2 text-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={newMember.email}
          onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
          className="border p-2 mr-2 text-black"
        />
        {editMember ? (
          <button onClick={updateMember} className="bg-green-500 text-white px-4 py-2">
          Update Member
          </button>
        ) : (
          <button onClick={addMember} className="bg-blue-500 text-white px-4 py-2">
            Add Member
          </button>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <table className="w-full border">
        <thead className="sticky top-0 bg-white shadow">
          <tr>
            <th className="border px-4 py-2 text-black">Name</th>
            <th className="border px-4 py-2 text-black">Grade</th>
            <th className="border px-4 py-2 text-black">Email</th>
            <th className="border px-4 py-2 text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border px-4 py-2 text-black">{member.full_name}</td>
              <td className="border px-4 py-2 text-black">{member.grade}</td>
              <td className="border px-4 py-2 text-black">{member.email}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteMember(member.id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
      <button
        onClick={prevPage}
        disabled={page === 1}
        className="bg-gray-500 text-white px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-black">Page {page}</span>
      <button onClick={nextPage} className="bg-gray-500 text-white px-4 py-2">
        Next
      </button>
      </div>
    </div>
  );
}