import COLORS from "../../constants/colors";

export const chartData = (label1, data1, label2, data2) => [
  {
    fill: true,
    label: label1,
    data: data1,
    borderColor: COLORS.PURPLE5,
    backgroundColor: "rgb(242 231 254 / 25%)",
  },
  {
    fill: true,
    label: label2,
    data: data2,
    borderColor: "#5EBBFF",
    backgroundColor: "rgb(92 187 255 / 10%)",
  },
];
