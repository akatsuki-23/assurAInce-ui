import ChartCard from "../../components/chart-card/ChartCard";
import CustomCard from "../../components/custom-card/CustomCard";
import { PlusCircleIcon, SunIcon, ThreeDIcon } from "../../components/icons";
import QuickActions from "./screen-components/quick-actions/QuickActions";
import Button from "../../components/button/Button";
import AiToolUsage from "./screen-components/ai-tool-usage/AiToolUsage";
import EmployeeList from "./screen-components/employee-list/EmployeeList";

const HomePage = () => {
  const fullName = "Sahal Mohamed";

  return (
    <div className="w-full h-full">
      <div className="px-[40px] py-[24px] flex flex-col space-y-6">
        <div className="flex justify-between items-center ">
          <div>
            <div className="text-3xl font-bold">Welcome {fullName}</div>
            <div className="text-gray-500 text-lg">
              AI-powered dashboard for streamlined insights and Know Employee
              Performance
            </div>
          </div>
          <div className="ml-auto">
            <Button
              hoverBgColor="#985EFF"
              style={{
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                fontSize: "13px",
                fontWeight: 500,
                width: "100%",
                height: "40px",
                backgroundColor: "#985EFF",
              }}
            >
              <PlusCircleIcon />
              <div>Add Employee</div>
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-stretch space-x-4">
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
        <div className="flex space-x-6">
          <div className="w-2/3">
            <ChartCard />
            <EmployeeList />
          </div>
          <div className="w-1/3 space-y-6">
            <QuickActions />
            <AiToolUsage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
