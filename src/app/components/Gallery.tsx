"use client";

import Image from "next/image";
import React from "react";

const Gallery = () => {
    const images = [
        "/images/blud.jpg",
        "/images/blud.jpg",
        "/images/blud.jpg",
        "/images/blud.jpg",
        "/images/blud.jpg",
        "/images/blud.jpg"
    ];

    return (
        <section
            id="gallery"
            className="min-h-screen bg-gray-100 px-6 py-16 text-center"
        >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-mountain-dark">
                Galeri Kami
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                <div
                    key={index}
                    className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group"
                >
                    {/* Image */}
                    <Image
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                </div>            
                ))}
            </div>
        </section>
    );
};

export default Gallery;
