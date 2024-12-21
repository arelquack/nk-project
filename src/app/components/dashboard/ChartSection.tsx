import React from "react";
import { Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    PieController,
    PointElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale
} from "chart.js";

ChartJS.register(ArcElement, LineElement, PieController, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

interface ChartSectionProps {
    title: string;
    chartType: "pie" | "line";
}

const ChartSection: React.FC<ChartSectionProps> = ({ title, chartType }) => {
    const data = {
        labels: ["Departemen A", "Departemen B", "Departemen C"],
        datasets: [
        {
            data: [40, 30, 30],
            backgroundColor: ["#2A4A4A", "#F8BBD0", "#4FB3B3"],
        },
        ],
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <Chart type={chartType} data={data} />
        </div>
    );
};

export default ChartSection;
