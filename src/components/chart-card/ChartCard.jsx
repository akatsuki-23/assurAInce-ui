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
      [MONTHS_12_KEY]: [10, 20, 15, 25, 10, 15, 25, 30, 15, 20, 15, 25],
      [MONTHS_6_KEY]: [25, 30, 5, 20, 15, 25],
      [DAYS_7_KEY]: [25, 10, 15, 25, 30, 15, 20],
    }[key],
    {
      [MONTHS_12_KEY]: [20, 30, 10, 15, 30, 20, 35, 10, 5, 10, 25, 15],
      [MONTHS_6_KEY]: [20, 30, 10, 15, 30, 20],
      [DAYS_7_KEY]: [35, 10, 5, 10, 25, 15, 10],
    }[key],
  ];
};

const ChartCard = () => {
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
    <MainCard className="m-5">
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
            <div>AI</div>
          </div>
          <div className="flex items-center space-x-2 font-bold text-gray-500">
            <div className="rounded-full w-3 h-3 bg-purple5"></div>
            <div>Employee</div>
          </div>
        </div>
      </MainCardHeader>
      <LineChart
        className="p-5"
        datasets={chartData("AI", data1, "Normal", data2)}
        labels={durationToLabelsMap[selectedDuration]}
      />
    </MainCard>
  );
};

export default ChartCard;
