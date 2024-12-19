"use client";

import React from "react";

const JoinUsSection: React.FC = () => {
    return (
        <section
            id="join"
            className="min-h-screen flex flex-col items-center justify-center bg-mountain-dark text-white px-6 lg:px-16 py-16 text-center"
        >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Bergabung dengan Kami</h3>
            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Jadi bagian dari komunitas Nihongo Kurabu dan eksplor keindahan bahasa
                serta budaya Jepang! Isi form di bawah ini untuk mendaftar.
            </p>
            <a
                href="/join"
                className="px-8 py-3 bg-sakura-pink text-text-black font-medium rounded-full shadow-md hover:shadow-lg hover:bg-white hover:text-mountain-dark transition-transform transform hover:scale-105"
            >
                Daftar Sekarang
            </a>
        </section>
    );
};

export default JoinUsSection;
