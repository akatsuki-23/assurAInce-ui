import { useState } from "react";
import LineChart from "../../components/charts/LineChart";
import { chartData } from "../../components/charts/funcs";
import CustomButton from "../../components/custom-button/CustomButton";
import CustomCard from "../../components/custom-card/CustomCard";
import CustomCardHeader from "../../components/custom-card/CustomCardHeader";
import ChartCard from "../../components/chart-card/ChartCard";

const HomePage = () => {


  return (
    <div className="w-full h-full">
      Home
      <ChartCard />
    </div>
  );
};

export default HomePage;
