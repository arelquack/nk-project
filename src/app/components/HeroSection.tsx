import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center text-center bg-tosca-green text-white px-6 py-16"
        >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Selamat Datang di Nihongo Kurabu
        </h2>
        <p className="text-base md:text-lg mb-8 max-w-2xl">
            Jelajahi keindahan bahasa dan budaya Jepang bersama kami!
        </p>
        <a
            href="#activities"
            className="px-6 py-3 bg-white text-mountain-dark font-medium rounded-full shadow-md hover:shadow-lg hover:bg-sakura-pink hover:text-text-black transition-transform transform hover:scale-105"
        >
            Lihat Aktivitas Kami
        </a>
        </section>
    );
};

export default HeroSection;
