import ChartCard from "../../components/chart-card/ChartCard";
import MainCard from "../../components/main-card/MainCard";
import MainCardHeader from "../../components/main-card/MainCardHeader";
import CustomCard from "../../components/custom-card/CustomCard";
import { SunIcon, ThreeDIcon } from "../../components/icons";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <div className="mx-auto">
        <div className="flex flex-row   items-stretch m-4">
          <CustomCard
            isUsingAi
            title="No of Employees"
            metric="325"
            percentage="59"
            icon={<ThreeDIcon />}
          />
          <CustomCard
            isUsingAi
            title="Current Projects"
            metric="24"
            percentage="50"
            icon={<ThreeDIcon />}
          />
          <CustomCard
            title="Growth"
            metric="$688888"
            percentage="5"
            icon={<SunIcon />}
          />
          <CustomCard
            title="Hours saved"
            metric="365 hr"
            percentage="5"
            icon={<SunIcon />}
          />
        </div>
        <ChartCard />
        <MainCard>
          <MainCardHeader title="fsadf"></MainCardHeader>
          <div className="p-5">fasdfsad</div>
        </MainCard>
      </div>
    </div>
  );
};

export default HomePage;
