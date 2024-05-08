import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Dummy data for the chart
const data = {
  labels: Array.from({ length: 22 }, (_, i) => i),
  datasets: [
    {
      label: "Today",
      data: [
        30, 35, 40, 45, 50, 55, 60, 55, 50, 55, 60, 65, 60, 55, 50, 45, 40, 35,
        30, 25, 20, 15,
      ],
      borderColor: "rgba(59, 130, 246, 1)",
      backgroundColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      label: "Yesterday",
      data: [
        20, 25, 30, 35, 30, 25, 20, 25, 30, 35, 40, 45, 40, 35, 30, 25, 20, 15,
        10, 5, 0, 5,
      ],
      borderColor: "rgba(107, 114, 128, 1)",
      backgroundColor: "rgba(107, 114, 128, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Hour",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};

export default function TrendsChart() {
  return (
    <div className="flex">
      <div className="w-3/4 p-4 bg-white rounded-lg shadow">
        <strong>Today's trends</strong>
        <Line data={data} options={options} />
      </div>
      <div className="w-1/4 p-4 bg-white rounded-lg shadow flex flex-col justify-around divide-y divide-gray-300">
        <div className="py-2 text-center">
          <div style={{ color: "#9fa2b4" }}>Active Sessions:</div>
          <div>
            <strong>449</strong>
          </div>
        </div>
        <div className="py-2 text-center">
          <div style={{ color: "#9fa2b4" }}>Recieved:</div>
          <div>
            <strong>426</strong>
          </div>
        </div>
        <div className="py-2 text-center">
          <div style={{ color: "#9fa2b4" }}>Average Session Time:</div>
          <div>
            <strong>33m</strong>
          </div>
        </div>
        <div className="py-2 text-center">
          <div style={{ color: "#9fa2b4" }}>Bounce Rate:</div>
          <div>
            <strong>47%</strong>
          </div>
        </div>
        <div className="py-2 text-center">
          <div style={{ color: "#9fa2b4" }}>Events per User:</div>
          <div>
            <strong>36.22</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
