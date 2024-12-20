// import React from "react";

// const Header: React.FC = () => {
//     const navLinks = [
//         { href: "#hero", label: "Home" },
//         { href: "#about-us", label: "Tentang" },
//         { href: "#activities", label: "Aktivitas" },
//         { href: "#divisions", label: "Divisi" },
//         { href: "#gallery", label: "Galeri" },
//         { href: "#articles", label: "Artikel" },
//         { href: "#join", label: "Bergabung" },
//     ];

// return (
//     <header className="fixed top-0 w-full p-4 bg-white text-text-black shadow-md z-10 transition-transform duration-300 ease-in-out hover:shadow-lg">
//         <div className="flex justify-between items-center max-w-7xl mx-auto">
//             <h1 className="text-mountain-dark text-2xl md:text-3xl font-bold tracking-wide">Nihongo Kurabu</h1>
//             <nav>
//                 <ul className="flex gap-4 md:gap-6">
//                     {navLinks.map((link, index) => (
//                     <li key={index}>
//                         <a
//                         href={link.href}
//                         className="hover:text-sakura-pink transition duration-200"
//                         >
//                         {link.label}
//                         </a>
//                     </li>
//                     ))}
//                 </ul>
//             </nav>
//         </div>
//     </header>
// );
// };

// export default Header;

import React, { useState } from "react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#hero", label: "Home" },
        { href: "#about-us", label: "Tentang" },
        { href: "#activities", label: "Aktivitas" },
        { href: "#divisions", label: "Divisi" },
        { href: "#gallery", label: "Galeri" },
        { href: "#articles", label: "Artikel" },
        { href: "#join", label: "Bergabung" },
    ];

    return (
        <header className="fixed top-0 w-full bg-white text-text-black shadow-md z-10">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
                {/* Logo */}
                <h1 className="text-mountain-dark text-2xl md:text-3xl font-bold tracking-wide">
                    Nihongo Kurabu
                </h1>

                {/* Hamburger Button */}
                <button
                    className="md:hidden flex items-center justify-center w-8 h-8"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {/* Hamburger Icon */}
                    <svg
                        className="w-6 h-6 text-mountain-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <ul className="flex flex-col md:flex-row md:gap-0 items-center p-4 md:p-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="block py-2 px-4 text-text-black hover:text-sakura-pink transition duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
