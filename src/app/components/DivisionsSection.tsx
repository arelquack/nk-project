import React from "react";
import divisionsData from "@/app/data/divisions.json";

const DivisionsSection: React.FC = () => {
    return (
        <section id="divisions" className="min-h-screen flex flex-col items-center justify-center bg-mountain-dark text-white px-6 lg:px-16 py-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Divisi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {divisionsData.map((division) => (
                <div 
                    key={division.id} 
                    className="bg-white text-text-black rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 text-center"
                >
                    <h4 className="text-xl font-bold mb-2">{division.name}</h4>
                    <p className="text-sm text-gray-700">{division.description}</p>
                </div>
                ))}
            </div>
        </section>
    );
};

export default DivisionsSection;
