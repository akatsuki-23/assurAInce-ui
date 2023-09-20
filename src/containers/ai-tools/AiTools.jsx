import { useEffect, useState } from "react";
import { getAiTools } from "../ai-tools/api";
import AiToolsCarousel from "../../components/carousel/AiToolsCarousel";
import ToolItem from "./ToolItem";
import Button from "../../components/button/Button";

const AiTools = () => {
  const [selectedDomainFilter, setSelectedDomainFilter] = useState(
    "Autonomous Vehicles"
  );
  const [toolList, setToolList] = useState([]);
  const [filteredToolList, setFilteredToolList] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await getAiTools();

      if (resp) {
        const modifiedResponseList = resp?.data.filter((item) =>
          item.id <= 15 && item.domain.length <= 20 ? item.domain : ""
        );
        setToolList(modifiedResponseList);
      }
    })();
  }, []);

  const distinctDomainNames = [...new Set(toolList.map((tool) => tool.domain))];

  useEffect(() => {
    setSelectedDomainFilter(
      [...new Set(toolList.map((tool) => tool.domain))][0]
    );
  }, [toolList]);

  useEffect(() => {
    const tempList = toolList.filter(
      (tool) => selectedDomainFilter === tool.domain
    );
    setFilteredToolList(tempList);
  }, [selectedDomainFilter, toolList]);

  return (
    <div className="flex flex-col px-14 py-[22px]">
      <div className="mb-8">
        <div className="text-4xl font-semibold">AI Tools</div>
        <div className="text-[#667185] text-lg mt-1">
          Showing data over the last 30 days
        </div>
        <div className="py-[24px] flex flex-col space-y-6">
          <AiToolsCarousel data={toolList} />
        </div>
      </div>
      <div>
        <div className="text-base font-medium break-words">My AI Tools</div>
        <div id="filter-label-container" className="mb-6 mt-3 flex flex-row">
          {distinctDomainNames.map(
            (domainName, index) =>
              domainName !== null && (
                <Button
                  key={index}
                  bgColor={
                    domainName === selectedDomainFilter ? "#F4E7FF" : "#F0F2F5"
                  }
                  style={{
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    fontSize: "13px",
                    fontWeight: 500,
                    height: "40px",
                    marginRight: "12px",
                    borderColor:
                      domainName === selectedDomainFilter
                        ? "#C483FF"
                        : "#D0D5DD",
                    color: "#101928",
                  }}
                  variant="outlined"
                  onClick={() => {
                    setSelectedDomainFilter(domainName);
                  }}
                >
                  {domainName}
                </Button>
              )
          )}
        </div>
        <div className="flex w-full flex-wrap">
          {filteredToolList.map((tool, index) => (
            <div key={tool.id} className="mr-6">
              <ToolItem item={tool} rank={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AiTools;
