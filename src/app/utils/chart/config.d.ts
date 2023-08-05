// config.d.ts
declare module "@utils/chart/config" {
  import { Plugin } from "chart.js";

  type ChartConfig = {
    type: string;
    data: any; // Replace 'any' with the type of your data
    options: {
      responsive: boolean;
      plugins: {
        legend: {
          labels: {
            generateLabels: (
              chart: any // Replace 'any' with the type of your chart
            ) => Plugin<"pie">["legend"]["labels"]["generateLabels"];
          };
          onClick: (
            mouseEvent: MouseEvent,
            legendItem: any, // Replace 'any' with the type of legend item
            legend: any // Replace 'any' with the type of legend
          ) => void;
        };
        tooltip: {
          callbacks: {
            label: (
              context: any // Replace 'any' with the type of tooltip context
            ) => string;
          };
        };
      };
    };
  };

  const config: ChartConfig;
  export default config;
}
