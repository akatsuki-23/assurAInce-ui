import { useEffect, useState } from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import { Card } from "@mui/material";
import { getAiTools } from "../ai-tools/api";

const aiToolJsonData = [
  {
    id: 1,
    name: "Adobe firefly",
    domain: "design",
    imageUrl: "",
  },
  {
    id: 2,
    name: "Code jet",
    domain: "design",
    imageUrl: "",
  },
  {
    id: 3,
    name: "Vs Code",
    domain: "development",
    imageUrl: "",
  },
  {
    id: 4,
    name: "Notion",
    domain: "content writing",
    imageUrl: "",
  },
];

const AiTools = () => {
  const [selectedDomainFilter, setSelectedDomainFilter] = useState("ALL");
  const [toolList, setToolList] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await getAiTools();
      console.log(resp);
      if (resp) {
        setToolList(resp?.data);
      }
    })();
  }, []);

  const distinctDomainNames = [...new Set(toolList.map((tool) => tool.domain))];
  console.log("selectedDomainFilter: ", selectedDomainFilter);
  console.log("toolList: ", toolList);

  return (
    <div className="w-full h-full">
      <div className="mx-auto">
        <div>AI Tools</div>
        <div>Showing data over the last 30 days</div>
        <div className="flex flex-row items-stretch m-4">
          Add Image + Div Carousel
        </div>
      </div>
      <div className="mx-auto">
        <div>Top AI Tools</div>
        <div id="filter-label-container" className="mb-6 mt-3">
          {distinctDomainNames.map((tool, index) => (
            <CustomButton
              key={index}
              variant="outlined"
              onClick={() => setSelectedDomainFilter(tool)}
            >
              {tool}
            </CustomButton>
          ))}
        </div>
        <div>
          {aiToolJsonData.map((tool, index) => (
            <CustomButton
              key={index}
              variant="outlined"
              onClick={() => setSelectedDomainFilter(tool.name)}
            >
              {tool.name}
            </CustomButton>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AiTools;
