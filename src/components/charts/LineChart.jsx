import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import COLORS from "../../constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.3,
  plugins: {
    legend: { display: false },
    tooltip: {
      displayColors: false,
      padding: 15,
      backgroundColor: COLORS.WHITE,
      borderColor: COLORS.GRAY2,
      borderWidth: 2,
      titleAlign: "center",
      titleColor: COLORS.BLACK,
      titleFont: { size: 18 },
      bodyAlign: "center",
      bodyColor: COLORS.GRAY,
      bodyFont: { size: 18 },
      callbacks: {
        title: ([ctx]) => ctx.dataset.label,
        label: function (context) {
          let label = "";
          if (context.parsed.y !== null) {
            label = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      border: { display: false },
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        lineWidth: 0,
      },
    },
    x: {
      border: { display: false },
      ticks: { font: { size: 18, weight: "bold" }, padding: 0 },
      grid: {
        display: false,
        lineWidth: 0,
      },
    },
  },
};

const LineChart = ({ className, labels, datasets }) => {
  const data = {
    labels,
    datasets,
  };

  return (
    <div className={className}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
