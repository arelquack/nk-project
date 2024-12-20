"use client";

import { Event } from "@/app/admin/events/page";
import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabaseClient";

const EventsSection: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
        const { data, error } = await supabase.from("events").select("*");
        if (error) console.error(error.message);
        else setEvents(data || []);
        };
        fetchEvents();
    }, []);

    return (
        <section
            id="activities"
            className="min-h-screen flex flex-col items-center justify-center bg-white text-text-black px-6 lg:px-16 py-16"
        >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-mountain-dark">
                Aktivitas Mendatang
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                <div
                    key={event.id}
                    className="bg-sakura-pink rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50"
                >
                    <h4 className="text-xl font-bold mb-2">{event.nama_event}</h4>
                    <p className="text-sm text-gray-700 mb-4">
                    {event.tanggal_waktu} | {event.lokasi}
                    </p>
                    <p className="text-sm text-gray-600">{event.deskripsi}</p>
                </div>
                ))}
            </div>
        </section>
    );      
};

export default EventsSection;
