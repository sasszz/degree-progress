export const DATA_COUNT = 5;
export const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

export const labels = Utils.months({ count: 7 });
export const data = {
  labels: [
    "Overall Yay",
    "Overall Nay",
    "Group A Yay",
    "Group A Nay",
    "Group B Yay",
    "Group B Nay",
    "Group C Yay",
    "Group C Nay",
  ],
  datasets: [
    {
      backgroundColor: ["#AAA", "#777"],
      data: [21, 79],
    },
    {
      backgroundColor: ["hsl(0, 100%, 60%)", "hsl(0, 100%, 35%)"],
      data: [33, 67],
    },
    {
      backgroundColor: ["hsl(100, 100%, 60%)", "hsl(100, 100%, 35%)"],
      data: [20, 80],
    },

  ],
};
