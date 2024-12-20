import React from "react";

const RecentActivities: React.FC = () => {
    const activities = [
        { description: "Anggota baru ditambahkan: Rie Takahashi", time: "2 jam lalu" },
        { description: "Prestasi baru ditambahkan: Juara Umum Bunkasai MGMP Sumatera Barat dan Riau 2023", time: "1 hari lalu" },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Aktivitas Terbaru</h2>
            <ul className="space-y-3">
                {activities.map((activity, index) => (
                <li key={index} className="text-gray-700">
                    {activity.description} <span className="text-sm text-gray-500">({activity.time})</span>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivities;
