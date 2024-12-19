import React from "react";

const Header: React.FC = () => {
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
    <header className="fixed top-0 w-full p-4 bg-white text-text-black shadow-md z-10 transition-transform duration-300 ease-in-out hover:shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-mountain-dark text-2xl md:text-3xl font-bold tracking-wide">Nihongo Kurabu</h1>
            <nav>
                <ul className="flex gap-4 md:gap-6">
                    {navLinks.map((link, index) => (
                    <li key={index}>
                        <a
                        href={link.href}
                        className="hover:text-sakura-pink transition duration-200"
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
