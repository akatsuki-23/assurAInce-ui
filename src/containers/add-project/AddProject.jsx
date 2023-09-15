import Input from "../../components/input/Input";
import { useMemo, useState } from "react";
import Stepper from "./components/Stepper";
import AddEmployee from "./components/AddEmployee";
import Button from "../../components/button/Button";
import { RoundPlusIcon } from "../../components/icons";

const AddProjectPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const selectedPage = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return (
          <div>
            <div className="bg-white w-full h-full rounded-[10px] border border-[#E4E7EC]">
              <div className="p-6 text-[18px] font-semibold text-[#101928]">
                Project Details
              </div>
              <div className="flex flex-col">
                <div className="border-t-[1px] border-[#E4E7EC] flex flex-wrap">
                  <div className="p-[45px] flex flex-col gap-4">
                    Project Name
                    <Input value="Cam Scanner" width="500px" />
                  </div>
                  <div className="p-[45px] flex flex-col gap-4">
                    Catogory
                    <Input value="Cam Scanner" width="500px" />
                  </div>
                  <div className="pb-[45px] px-[45px] flex flex-col gap-4">
                    Start Date
                    <Input value="Cam Scanner" width="500px" />
                  </div>
                  <div className="pb-[45px] px-[45px] flex flex-col gap-4">
                    Estimated end
                    <Input
                      value="Cam Scanner"
                      width="500px"
                      style={{
                        outline: "none",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="pb-[45px] px-[45px] flex flex-col gap-4">
                    Description
                    <textarea
                      style={{
                        display: "flex",
                        padding: "14px",
                        border: `1px solid #E4E7EC`,
                        borderRadius: "10px",
                        width: "900px",
                        resize: "none",
                        color: "black",
                        fontWeight: 400,
                        fontSize: "14px",
                        outline: "none",
                        height: "100px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return <AddEmployee />;
      case 2:
        return <div>ok</div>;
    }
  }, [selectedIndex]);

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
          <Stepper selectedIndex={selectedIndex} />
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
          onClick={() => {}}
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
          onClick={() => {}}
        >
          <RoundPlusIcon />
          Next
        </Button>
      </div>
    </div>
  );
};

export default AddProjectPage;
