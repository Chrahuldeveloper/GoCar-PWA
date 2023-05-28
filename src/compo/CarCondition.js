import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default function CarCondition() {
  const CarConditon = {
    labels: [
      "engine",
      "seats",
      "Radiator",
      "Brakes",
      "windows",
      "motar",
      "interior",
      "Seat covers",
    ],
    datasets: [
      {
        label: "MY CAR",
        data: [9, 3, 4, 8, 5, 7, 3, 8],
        backgroundColor: "#EAB308",
      },
    ],
  };
  return (
    <div className="px-1 py-7">
      <Bar data={CarConditon} />
    </div>
  );
}
