import { useEffect, useState } from "react";
import LineChart from "../charts/LineChart";
import { chartData } from "../charts/funcs";
import MainCard from "../main-card/MainCard";
import MainCardHeader from "../main-card/MainCardHeader";

const MONTHS_12_KEY = 1;
const MONTHS_6_KEY = 2;
const DAYS_7_KEY = 3;

const MONTHS = [
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const durationToLabelsMap = {
  [MONTHS_12_KEY]: MONTHS,
  [MONTHS_6_KEY]: MONTHS.slice(6),
  [DAYS_7_KEY]: DAYS,
};

const getData = (key) => {
  return [
    {
      [MONTHS_12_KEY]: [
        25425, 35545, 30532, 49098, 45872, 49000, 45084, 59087, 84439, 80944,
        80887, 129384,
      ],
      [MONTHS_6_KEY]: [45084, 59087, 84439, 80944,
        80887, 129384,],
      [DAYS_7_KEY]: [117384, 120384, 121384, 120423, 127384, 127384, 129384],
    }[key],
    {
      [MONTHS_12_KEY]: [
        12425, 12545, 10532, 39098, 23872, 39000, 29084, 39087, 54439, 60944,
        60887, 79384,
      ],
      [MONTHS_6_KEY]: [29084, 39087, 54439, 60944,
        60887, 79384,],
      [DAYS_7_KEY]: [73384,76384,74423,75384,79384,75384,79384,],
    }[key],
  ];
};

const ChartCard = ({ className }) => {
  const [selectedDuration, setSelectedDuration] = useState();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const durations = [
    { label: "12 Months", key: 1 },
    { label: "6 Months", key: 2 },
    { label: "7 Days", key: 3 },
  ];

  const handleChange = (durationKey) => {
    const datasets = getData(durationKey);
    setData1(datasets[0]);
    setData2(datasets[1]);
    setSelectedDuration(durationKey);
  };

  useEffect(() => {
    handleChange(1);
  }, []);

  return (
    <MainCard className={className}>
      <MainCardHeader title="Performance">
        <div className="flex items-center space-x-2">
          {durations.map((duration) => (
            <div
              key={duration.key}
              className={`font-bold px-3 py-2 cursor-pointer border-2 border-gray-300/0 text-gray-500 ${
                selectedDuration === duration.key
                  ? "rounded-lg !border-gray-300 text-black"
                  : ""
              }`}
              onClick={() => handleChange(duration.key)}
            >
              {duration.label}
            </div>
          ))}
        </div>
        <div className="ml-auto flex items-center space-x-6">
          <div className="flex items-center space-x-2 font-bold text-gray-500">
            <div className="rounded-full w-3 h-3 bg-blue"></div>
            <div>Employee</div>
          </div>
          <div className="flex items-center space-x-2 font-bold text-gray-500">
            <div className="rounded-full w-3 h-3 bg-purple5"></div>
            <div>AI</div>
          </div>
        </div>
      </MainCardHeader>
      <LineChart
        className="p-5 h-[250px]"
        datasets={chartData("AI", data1, "Normal", data2)}
        labels={durationToLabelsMap[selectedDuration]}
      />
    </MainCard>
  );
};

export default ChartCard;
