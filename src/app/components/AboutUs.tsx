"use client";

import React from "react";

const AboutUs = () => {
    return (
        <section
            id="about-us"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-text-black px-6 lg:px-16 py-16"
        >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-mountain-dark">
                Tentang Kami
            </h3>
            <p className="max-w-3xl text-gray-700 leading-relaxed text-center">
                日本語クラブ (Nihongo Kurabu) merupakan satu dari sebelas sekbid SMA Negeri 3
                Bukittinggi yang aktif bergerak di bidang akademis khususnya mempelajari Bahasa
                dan Kebudayaan Jepang. Nihongo Kurabu diresmikan pada tanggal 5 November 2018.
            </p>
        </section>
    );
};

export default AboutUs;