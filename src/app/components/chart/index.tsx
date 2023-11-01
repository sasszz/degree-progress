import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  className?: string; // Define the className prop with optional string type
}

export const labels = [
  "✅ Completed",
  "🔄 In Progress",
  "📅 Scheduled",
  "⏸️ Not Yet Scheduled",
];

export const data = {
  labels: labels,
  datasets: [
    {
      // Required
      backgroundColor: ["#4B0082", "#9370DB", "#E6E6FA", "#F2F2F2"],
      data: [4, 4, 0, 9],
    },
    {
      // Degree Electives
      backgroundColor: ["#5551FF", "#8A8AFF", "#C9C9FF", "#F2F2F2"],
      data: [16, 3, 0, 7],
    },
  ],
};

export default function Chart({ className }: ChartProps) {
  const donutOptions: Partial<ChartOptions<"doughnut">> = {
    cutout: "50%",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          generateLabels: function () {
            const labels = [];
            labels.push({
              text: "Required",
              fillStyle: "#4B0082",
              strokeStyle: "#4B0082",
              fontColor: "white",
            });
            labels.push({
              text: "Elective",
              fillStyle: "#5551FF",
              strokeStyle: "#5551FF",
              fontColor: "white",
            });
            return labels;
          },
        },
      },
    },
  };

  return (
    <div className={`m-8 ${className}`}>
      <h3 className="text-xl font-semibold text-white text-center">
        A.S. Computer Science
      </h3>
      <h3 className="text-xl font-semibold text-white mb-8 text-center">
        Degree Progress Chart
      </h3>
      <Doughnut data={data} options={donutOptions} />
    </div>
  );
}
