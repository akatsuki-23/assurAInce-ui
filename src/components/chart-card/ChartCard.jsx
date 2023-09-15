import React, { useEffect, useState } from "react";
import LineChart from "../charts/LineChart";
import { chartData } from "../charts/funcs";
import MainCard from "../main-card/MainCard";
import MainCardHeader from "../main-card/MainCardHeader";

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

const DAYS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

const durationToLabelsMap = {
  1: MONTHS,
  2: MONTHS.slice(6),
  4: DAYS,
};

const getData = (key) => {
  return [
    {
      1: [10, 20, 15, 25, 10, 15, 25, 30, 15, 20, 15, 25],
      2: [25, 30, 5, 20, 15, 25],
    }[key],
    {
      1: [20, 30, 10, 15, 30, 20, 35, 10, 5, 10, 25, 15],
      2: [20, 30, 10, 15, 30, 20],
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
    { label: "30 Days", key: 3 },
    { label: "7 Days", key: 4 },
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
              className={`text-sm px-3 py-2 cursor-pointer border-2 border-gray-300/0 text-gray-500 ${
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
