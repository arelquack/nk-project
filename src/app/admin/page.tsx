"use client";
import React from "react";

import Header from "@/app/components/dashboard/Header";
import OverviewCards from "@/app/components/dashboard/OverviewCards";
import ChartSection from "@/app/components/dashboard/ChartSection";
import RecentActivities from "@/app/components/dashboard/RecentActivities";

const AdminPage: React.FC = () => {
    return (
        <div className="flex bg-gray-100 min-h-screen">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                
                {/* Header */}
                <Header title="Dashboard Admin"/>

                {/* Dashboard Content */}
                <main className="p-6 space-y-6">
                
                    {/* Overview Cards */}
                    <OverviewCards />

                    {/* Charts and Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ChartSection title="Distribusi Anggota" chartType="pie" />
                        <ChartSection title="Prestasi Tahunan" chartType="line" />
                    </div>

                    {/* Recent Activities */}
                    <RecentActivities />

                </main>
            </div>
        </div>
    );
};

export default AdminPage;
