"use client";

import React from "react";

const AboutUs = () => {
    return (
        <section
            id="about-us"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-text-black px-6 lg:px-16 py-16 relative overflow-hidden"
        >
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-mountain-dark animate__animated animate__fadeIn">
            Tentang Kami
        </h3>
        <p 
            className="max-w-3xl text-gray-700 leading-relaxed text-center animate__animated animate__fadeIn animate__delay-1s"
        >
            日本語クラブ (Nihongo Kurabu) merupakan satu dari sebelas sekbid SMA Negeri 3
            Bukittinggi yang aktif bergerak di bidang akademis khususnya mempelajari Bahasa
            dan Kebudayaan Jepang. Nihongo Kurabu diresmikan pada tanggal 5 November 2018.
        </p>

        {/* Additional Decorative Element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-30">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
            >
            <path
                fill="#e4f7f3"
                fillOpacity="1"
                d="M0,64L48,101.3C96,139,192,213,288,213.3C384,213,480,139,576,128C672,117,768,171,864,202.7C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V64Z"
            ></path>
            </svg>
        </div>
        </section>
    );
};

export default AboutUs;
