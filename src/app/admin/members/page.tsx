"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Member {
  id: number;
  name: string;
  grade: string;
  email: string;
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [newMember, setNewMember] = useState({ name: "", grade: "", email: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const { data } = await axios.get("/api/members");
    setMembers(data);
  };

  const addMember = async () => {
    try {
      await axios.post("/api/members", newMember);
      setNewMember({ name: "", grade: "", email: "" });
      fetchMembers();
    } catch (err) {
      setError("Failed to add member");
    }
  };

  const deleteMember = async (id: number) => {
    try {
      await axios.delete("/api/members", { data: { id } });
      fetchMembers();
    } catch (err) {
      setError("Failed to delete member");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Members</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Grade"
          value={newMember.grade}
          onChange={(e) => setNewMember({ ...newMember, grade: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newMember.email}
          onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={addMember} className="bg-blue-500 text-white px-4 py-2">
          Add Member
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Grade</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.grade}</td>
              <td className="border px-4 py-2">{member.email}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteMember(member.id)}
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
