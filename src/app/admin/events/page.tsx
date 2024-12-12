// "use client" directive ensures this is a React Client Component
"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Event {
    id: number;
    nama_event: string;
    deskripsi: string;
    lokasi: string;
    tanggal_waktu: string; // Format ISO string untuk datetime
    created_at: string; // Timestamp dari Supabase
  }
  
export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [newEvent, setNewEvent] = useState({
    nama_event: "",
    deskripsi: "",
    lokasi: "",
    tanggal_waktu: "",
    });
    const [error, setError] = useState("");

    const fetchEvents = async () => {
        try {
        setError("");
        const { data } = await axios.get("/api/events");
        setEvents(data);
        } catch (err) {
        setError("Error fetching events: " + err.message);
        }
    };

    // Run fetchEvents when the component mounts
    useEffect(() => {
        fetchEvents();
    }, []); // Empty dependency array ensures it runs once when the page loads


    const addEvent = async () => {
        const { nama_event, deskripsi, lokasi, tanggal_waktu } = newEvent;
      
        if (!nama_event || !deskripsi || !lokasi || !tanggal_waktu) {
          setError("All fields are required!");
          return;
        }
      
        try {
          await axios.post("/api/events", newEvent);
          setNewEvent({ nama_event: "", deskripsi: "", lokasi: "", tanggal_waktu: "" });
          fetchEvents();
        } catch (err) {
          console.error("Error adding event:", err);
          setError("Failed to add event.");
        }
    };
      

    const deleteEvent = async (id: number) => {
        try {
        setError("");
        await axios.delete("/api/events", { data: { id } });
        fetchEvents();
        } catch (err) {
        setError("Error deleting event: " + err.message);
        }
    };

    return (
        <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold mb-4">Manage Events</h1>
    
        {/* Error Handling */}
        {error && <div className="text-red-500">{error}</div>}
    
        {/* Input Form */}
        <div className="mb-4">
            <input
            type="text"
            placeholder="Nama Event"
            value={newEvent.nama_event}
            onChange={(e) => setNewEvent({ ...newEvent, nama_event: e.target.value })}
            className="border p-2 m-2"
            />
            <input
            type="text"
            placeholder="Deskripsi"
            value={newEvent.deskripsi}
            onChange={(e) => setNewEvent({ ...newEvent, deskripsi: e.target.value })}
            className="border p-2 m-2"
            />
            <input
            type="text"
            placeholder="Lokasi"
            value={newEvent.lokasi}
            onChange={(e) => setNewEvent({ ...newEvent, lokasi: e.target.value })}
            className="border p-2 m-2"
            />
            <input
            type="datetime-local"
            value={newEvent.tanggal_waktu}
            onChange={(e) => setNewEvent({ ...newEvent, tanggal_waktu: e.target.value })}
            className="border p-2 m-2"
            />
            <button onClick={addEvent} className="bg-blue-500 text-white p-2 rounded">
            Add Event
            </button>
        </div>
    
        {/* List Events */}
        <ul>
            {events.map((event: any) => (
            <li key={event.id} className="border p-2 m-2">
                <h2 className="text-xl font-bold">{event.nama_event}</h2>
                <p>{event.deskripsi}</p>
                <p>Lokasi: {event.lokasi}</p>
                <p>
                Tanggal/Waktu:{" "}
                {new Date(event.tanggal_waktu).toLocaleString()}
                </p>
                <button
                onClick={() => deleteEvent(event.id)}
                className="bg-red-500 text-white p-1 rounded mt-2"
                >
                Delete
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
}