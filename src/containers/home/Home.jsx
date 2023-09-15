import ChartCard from "../../components/chart-card/ChartCard";
import MainCard from "../../components/main-card/MainCard";
import MainCardHeader from "../../components/main-card/MainCardHeader";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      Home
      <ChartCard />
      <MainCard>
        <MainCardHeader title="fsadf"></MainCardHeader>
        <div className="p-5">fasdfsad</div>
      </MainCard>
    </div>
  );
};

export default HomePage;
