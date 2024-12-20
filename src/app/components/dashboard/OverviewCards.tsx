import React from "react";

const OverviewCards: React.FC = () => {
    const cards = [
        { title: "Total Anggota", count: 120, color: "bg-sakura-pink" },
        { title: "Total Alumni", count: 45, color: "bg-mountain-dark" },
        { title: "Total Prestasi", count: 30, color: "bg-tosca-green" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
            <div key={index} className={`p-6 rounded-lg ${card.color} text-white`}>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-2xl font-bold">{card.count}</p>
            </div>
        ))}
        </div>
    );
};

export default OverviewCards;
