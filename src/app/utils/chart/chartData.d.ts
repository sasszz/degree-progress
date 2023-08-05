declare module "@utils/chart/data" {
  import { Utils } from "chart.js"; // Assuming 'Utils' comes from the 'chart.js' library

  const DATA_COUNT: number;
  const NUMBER_CFG: Utils.NumberConfig;

  const labels: string[];
  const data: {
    labels: string[];
    datasets: {
      backgroundColor: string[];
      data: number[];
    }[];
  };

  export { DATA_COUNT, NUMBER_CFG, labels, data };
}
