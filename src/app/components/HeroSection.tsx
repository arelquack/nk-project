import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center text-center bg-tosca-green text-white px-6 py-16 overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
                <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg animate-fade-in-up">
                Selamat Datang di Nihongo Kurabu
            </h2>

            {/* Description */}
            <p className="text-lg md:text-2xl mb-10 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
                Jelajahi keindahan bahasa dan budaya Jepang bersama kami!
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up delay-500">
                <a
                    href="#about-us"
                    className="px-8 py-3 bg-white text-mountain-dark font-semibold rounded-full shadow-lg transition-transform transform hover:scale-110 hover:rotate-1 hover:bg-sakura-pink hover:text-text-black duration-300"
                >
                    Kenalan
                </a>
                <a
                    href="#join"
                    className="px-8 py-3 bg-white text-mountain-dark font-semibold rounded-full shadow-lg transition-transform transform hover:scale-110 hover:-rotate-1 hover:bg-sakura-pink hover:text-text-black duration-300"
                >
                    Bergabung
                </a>
            </div>

            {/* Decorative Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-tosca-green to-transparent"></div>
        </section>
    );
};

export default HeroSection;
