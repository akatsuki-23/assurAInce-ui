import { useState } from "react";
import Input from "../../../components/input/Input";

const ProjectDetails = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <div className="bg-white w-full h-full rounded-[10px] border border-[#E4E7EC] overflow-hidden">
        <div className="p-6 text-[18px] font-semibold text-[#101928]">
          Project Details
        </div>
        <div className="flex flex-col">
          <div className="border-t-[1px] border-[#E4E7EC] flex flex-wrap">
            <div className="p-[45px] flex flex-col gap-4">
              Project Name
              <Input
                width="500px"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="p-[45px] flex flex-col gap-4">
              Catogory
              <Input
                value={category}
                width="500px"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
            <div className="pb-[45px] px-[45px] flex flex-col gap-4">
              Start Date
              <Input
                value={date}
                width="500px"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="pb-[45px] px-[45px] flex flex-col gap-4">
              Estimated end
              <Input
                onChange={(e) => {
                  setEnd(e.target.value);
                }}
                value={end}
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
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="focus:border-[#3375df] border-[1px] focus:border-[2px] border-[#D0D5DD] hover:border-black"
                style={{
                  display: "flex",
                  padding: "14px",
                  borderRadius: "4px",
                  width: "900px",
                  resize: "none",
                  color: "black",
                  fontWeight: 400,
                  fontSize: "14px",
                  outline: "none",
                  height: "100px",
                }}
                value={description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
