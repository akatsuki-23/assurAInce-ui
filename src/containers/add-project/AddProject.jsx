import { useMemo, useState } from "react";
import Stepper from "./components/Stepper";
import AddEmployee from "./components/AddEmployee";
import Button from "../../components/button/Button";
import { RoundPlusIcon } from "../../components/icons";
import AddTools from "./components/AddTools";
import ProjectDetails from "./components/ProjectDetails";
import { useNavigate } from "react-router-dom";

const AddProjectPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const selectedPage = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return <ProjectDetails />;
      case 1:
        return <AddEmployee />;
      case 2:
        return <AddTools />;
    }
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex < 2) setSelectedIndex(selectedIndex + 1);
    else navigate("/productivity");
  };

  const handleBack = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
    else navigate("/productivity");
  };

  return (
    <div className="w-full h-full">
      <div className="px-[40px] py-[24px] flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-[24px] font-semibold">Add Project</div>
            <div className="text-[#667185] text-[14px]">
              Showing data over the last 30 days
            </div>
          </div>
          <Stepper
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        {selectedPage}
      </div>
      <div className="flex flex-row gap-3 pl-[50px] pb-[50px] pt-[30px]">
        <Button
          hoverBgColor="#FFFFFF"
          style={{
            borderRadius: "6px",
            height: "36px",
            backgroundColor: "#FFFFFF",
            color: "#000000",
            boxShadow: "none",
            border: 1,
            borderColor: "#D0D5DD",
          }}
          onClick={handleBack}
        >
          {selectedIndex === 0 ? "Cancel" : "Back"}
        </Button>
        <Button
          hoverBgColor="#985EFF"
          style={{
            borderRadius: "6px",
            boxShadow: "none",
            height: "36px",
            backgroundColor: "#985EFF",
            padding: "8px 12px",
            display: "flex",
            flexDirection: "row",
            gap: "4px",
          }}
          onClick={handleNext}
        >
          <RoundPlusIcon />
          {selectedIndex === 2 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default AddProjectPage;
