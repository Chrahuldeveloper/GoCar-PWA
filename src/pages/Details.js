import React from "react";
import { useLocation } from "react-router-dom";
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
export default function Details() {
  const data = useLocation();
  const dataset = {
    labels: [
      "Resale value",
      "Tyres",
      "Body condition",
      "Engine condition",
      "Electrical systems condition",
      "Seats condition",
      "Body condition",
    ],
    datasets: [
      {
        label: "About Car",
        data: [6, 5, 10, 8, 7, 10, 7],
        backgroundColor: "#EAB308",
      },
    ],
  };

  const Reviews = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Reviews",
        data: [2, 3, 4, 8, 10],
        backgroundColor: "#EAB308",
      },
    ],
  };

  return (
    <div className="bg-[#15191c] text-white w-screen">
      <main className="py-3 space-y-5 ">
        <Bar data={dataset} />
      </main>
      <figure className="flex flex-col justify-center items-center gap-6 px-4 py-3.5 ">
        {data.state.images.map((img) => {
          return (
            <>
              <img src={img} alt="pic" />
            </>
          );
        })}
      </figure>
      <div className="flex flex-col justify-center p-4 space-y-5">
        <h1 className="text-2xl font-bold text-yellow-600">About the Car</h1>
        {<p className="text-sm text-slate-300">{data.state.About}</p>}
        <Bar data={Reviews} />
        <button className="bg-yellow-500 p-2.5 font-semibold">
          <a href={`tel:${data.state.Phone}`}>Contact Dealer</a>
        </button>
      </div>
    </div>
  );
}
