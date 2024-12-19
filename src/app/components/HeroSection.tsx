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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                    href="#about-us"
                    className="px-6 py-3 bg-white text-mountain-dark font-medium rounded-full shadow-md hover:shadow-lg hover:bg-sakura-pink hover:text-text-black transition-transform transform hover:scale-105"
                >
                    Kenalan
                </a>
                <a
                    href="#join"
                    className="px-6 py-3 bg-white text-mountain-dark font-medium rounded-full shadow-md hover:shadow-lg hover:bg-sakura-pink hover:text-text-black transition-transform transform hover:scale-105"
                >
                    Bergabung
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
