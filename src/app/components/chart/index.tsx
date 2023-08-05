import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const labels = [
  "Completed",
  "In Progress",
  "Scheduled",
  "Not Scheduled",
];

export const data = {
  labels: labels,
  datasets: [
    {
      // Required
      backgroundColor: ["#4B0082", "#9370DB", "#E6E6FA", "#F2F2F2"],
      data: [0, 4, 4, 9],
    },
    {
      // Degree Electives
      backgroundColor: ["#5551FF", "#8A8AFF", "#C9C9FF", "#F2F2F2"],
      data: [6, 10, 7, 3],
    },
  ],
};

export default function Chart() {
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
            });
            labels.push({
              text: "Elective",
              fillStyle: "#5551FF",
              strokeStyle: "#5551FF",
            });
            return labels;
          },
        },
      },
    },
  };

  return (
    <div className="p-8 m-8" style={{ width: "1500px", height: "600px" }}>
      <Doughnut data={data} options={donutOptions} />
    </div>
  );
}
