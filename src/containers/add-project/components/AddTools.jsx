import { useEffect, useState } from 'react';
import { getAiTools } from '../../ai-tools/api';
import Button from '../../../components/button/Button';
import ToolItem from '../../ai-tools/ToolItem';

const AddTools = ({ selectedList, setSelectedList = []}) => {
  const [selectedDomainFilter, setSelectedDomainFilter] = useState(
    'Autonomous Vehicles'
  );
  const [toolList, setToolList] = useState([]);
  const [filteredToolList, setFilteredToolList] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await getAiTools();

      if (resp) {
        const modifiedResponseList = resp?.data.filter((item) =>
          item.id <= 15 && item.domain.length <= 20 ? item.domain : ''
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

  useEffect(() => {
    console.log('balls', selectedList);
  }, [selectedList]);

  return (
    <div className="bg-white w-full h-full rounded-[10px] border border-[#E4E7EC] flex flex-col">
      <div className="p-6 text-[18px] font-semibold text-[#101928]">
        Add Tools
      </div>
      <div className="border-t-[1px] border-[#E4E7EC] flex flex-wrap py-[22px] px-[35px]">
        <div className="flex gap-[24px] mb-[30px]">
          <div className="w-[320px] h-[170px] bg-[#F2E7FE] rounded-[12px]"></div>
        </div>
      </div>
      <div className="px-[35px]">
        <div className="text-base font-medium break-words">My AI Tools</div>
        <div id="filter-label-container" className="mb-6 mt-3 flex flex-row">
          {distinctDomainNames.map(
            (domainName, index) =>
              domainName !== null && (
                <Button
                  key={index}
                  bgColor={
                    domainName === selectedDomainFilter ? '#F4E7FF' : '#F0F2F5'
                  }
                  style={{
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 500,
                    height: '40px',
                    marginRight: '12px',
                    borderColor:
                      domainName === selectedDomainFilter
                        ? '#C483FF'
                        : '#D0D5DD',
                    color: '#101928',
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
          {filteredToolList.map((tool, index) => {
            const isSelected = selectedList.find((item) => item.id === tool.id);

            return (
              <div key={tool.id} className={`mr-6 ${isSelected && ''}`}>
                <ToolItem
                  item={tool}
                  rank={index}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedList(
                        selectedList.filter((item) => item.id !== tool.id)
                      );
                    } else {
                      setSelectedList([...selectedList, tool]);
                    }
                  }}
                  isSelected={isSelected}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddTools;
