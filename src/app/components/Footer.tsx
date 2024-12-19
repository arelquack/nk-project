"use client";

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-mountain-dark p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Nihongo Kurabu SMANTITEL. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
