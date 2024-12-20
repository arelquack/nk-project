import React from "react";
import { FiBell, FiUser } from "react-icons/fi";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-white shadow flex items-center justify-between p-4">
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
            <div className="flex items-center space-x-4">
                <FiBell className="text-gray-500 cursor-pointer" />
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FiUser className="text-gray-500" />
                    <span className="text-gray-600">Admin</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
