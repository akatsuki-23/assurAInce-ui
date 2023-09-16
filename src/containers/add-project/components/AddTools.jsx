import { useCallback, useEffect, useMemo, useState } from 'react';
import { getAiTools } from '../../ai-tools/api';
import Button from '../../../components/button/Button';
import ToolItem from '../../ai-tools/ToolItem';

const AddTools = ({ selectedList = [], setSelectedList, estimate, selectedGroup, setSelectedGroup }) => {
  const [selectedDomainFilter, setSelectedDomainFilter] = useState(
    'Autonomous Vehicles'
  );
  const [toolList, setToolList] = useState([]);
  const [filteredToolList, setFilteredToolList] = useState([]);


  const { removedList, fullList } = useMemo(() => {
    if (estimate) {
      if (estimate?.[0]?.employeeCount < estimate?.[1]?.employeeCount) {
        return { removedList: estimate[0], fullList: estimate[1] };
      } else {
        return { removedList: estimate[1], fullList: estimate[0] };
      }
    }

    return { removedList: [], fullList: [] };
  }, [estimate]);

  const withoutAI = removedList?.employees;

  function hoursToDays(hours) {
    return (hours / 24)?.toFixed(1);
  }

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

  const EmpCard = ({ isDisabled, data }) => {
    return (
      <div
        className={`px-[24px] py-[16px] w-[203px] h-[72px] bg-white rounded-[3px] ${
          isDisabled && 'border border-[#D42620]'
        }`}
      >
        <div className="flex gap-[12px]">
          <img
            src={data?.profileUrl}
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="font-medium text-[14px]">{`${data?.firstName} ${data?.lastName}`}</div>
        </div>
      </div>
    );
  };

  const ToolCard = ({ isSelected, data, onSelectTool }) => {
    return (
      <div
        className={`px-[24px] py-[16px] w-[203px] h-[72px] bg-white rounded-[3px] ${
          isSelected && 'border border-green-500'
        }`}
      >
        <div className="flex gap-[12px]">
          <img src={data?.iconUrl} className="w-[48px] h-[408x] rounded-[8px]" />
          <div className="flex flex-col">
            <div className="font-medium text-[14px]">Adobe</div>
            {/* <div className="font-normal text-[14px] text-[#475367]">Design</div> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white w-full h-full rounded-[10px] border border-[#E4E7EC] flex flex-col">
      <div className="p-6 text-[18px] font-semibold text-[#101928]">
        Add Tools
      </div>
      <div className="px-[35px] flex flex-col gap-[26px] pb-[50px]">
        <div className={`bg-[#F9FAFB] rounded-[13px]  px-[42px] py-[30px] cursor-pointer ${selectedGroup === 0 && 'border border-green-500'}`} onClick={() => {
          setSelectedGroup(0)
        }}>
          <div className="flex justify-between w-full items-center mb-[26px]">
            <div className="flex flex-col">
              <div className="text-[#101928] font-medium text-[16px]">
                Suggested Team
              </div>
              <div className="text-[#475367] font-normal text-[14px]">
                Match AI tools and employees.
              </div>
            </div>

            <div className="flex gap-[24px] items-center">
              <div className="flex gap-[20px] items-center">
                <div className="text-[#475367] font-normal text-[14px]">
                  Estimated Time
                </div>
                <div className="rounded-[6px] w-[97px] h-[47px] border border-[#D0D5DD] flex items-center justify-center">
                  <div className="text-[#344054] font-semibold text-[14px]">
                    {`${hoursToDays(removedList?.timeForWorkInHrWithAI || 1440)} days`}
                  </div>
                </div>
              </div>

              <div className="flex gap-[20px] items-center">
                <div className="text-[#475367] font-normal text-[14px]">
                  Estimated Cost
                </div>
                <div className="rounded-[6px] w-[97px] h-[47px] border border-[#D0D5DD] flex items-center justify-center">
                  <div className="text-[#344054] font-semibold text-[14px]">
                    {`$ ${removedList?.estimatedCostWithAI?.toFixed(1)}`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[26px] flex-nowrap mb-[27px]">
            {fullList?.employees?.map((item) => {
              return (
                <EmpCard
                  key={item?.id}
                  data={item}
                  isDisabled={
                    !removedList?.employees?.find(
                      (subItem) => subItem.id === item.id
                    )
                  }
                />
              );
            })}
          </div>

          <div className="flex w-full gap-[26px]">
            {filteredToolList.map((item) => {
              return <ToolCard key={item.id} data={item}isSelected={selectedList.find((subItem) => item.id === subItem.id)}/>;
            })}
          </div>
        </div>

        <div className={`bg-[#F9FAFB] rounded-[13px]  px-[42px] py-[30px] cursor-pointer ${selectedGroup === 1 && 'border border-green-500'}`} onClick={() => {
          setSelectedGroup(1)
        }}>
          <div className="flex justify-between w-full items-center mb-[26px]">
            <div className="flex flex-col">
              <div className="text-[#101928] font-medium text-[16px]">
                With AI
              </div>
              <div className="text-[#475367] font-normal text-[14px]">
                Match AI tools and employees.
              </div>
            </div>

            <div className="flex gap-[24px] items-center">
              <div className="flex gap-[20px] items-center">
                <div className="text-[#475367] font-normal text-[14px]">
                  Estimated Time
                </div>
                <div className="rounded-[6px] w-[97px] h-[47px] border border-[#D0D5DD] flex items-center justify-center">
                  <div className="text-[#344054] font-semibold text-[14px]">
                    {hoursToDays(fullList?.timeForWorkInHrWithAI || 1440)}
                    25 Days
                  </div>
                </div>
              </div>

              <div className="flex gap-[20px] items-center">
                <div className="text-[#475367] font-normal text-[14px]">
                  Estimated Cost
                </div>
                <div className="rounded-[6px] w-[97px] h-[47px] border border-[#D0D5DD] flex items-center justify-center">
                  <div className="text-[#344054] font-semibold text-[14px]">
                  {`$ ${fullList?.estimatedCostWithAI?.toFixed(1)}`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[26px] flex-nowrap mb-[27px]">
            {fullList?.employees?.map((item) => {
              return (
                <EmpCard
                  key={item?.id}
                  data={item}
                />
              );
            })}
          </div>

          <div className="flex w-full gap-[26px]">
            {filteredToolList.map((item) => {
              return <ToolCard key={item.id} data={item} isSelected={selectedList.find((subItem) => item.id === subItem.id)}/>;
            })}
          </div>
        </div>

        <div className={`bg-[#F9FAFB] rounded-[13px]  px-[42px] py-[30px] cursor-pointer ${selectedGroup === 2 && 'border border-green-500'}`} onClick={() => {
          setSelectedGroup(2)
        }}>
          <div className="flex justify-between w-full items-center mb-[26px]">
            <div className="flex flex-col">
              <div className="text-[#101928] font-medium text-[16px]">
                Without AI
              </div>
            </div>

            <div className="flex gap-[24px] items-center">
              <div className="flex gap-[20px] items-center">
                <div className="text-[#475367] font-normal text-[14px]">
                  Estimated Time
                </div>
                <div className="rounded-[6px] w-[97px] h-[47px] border border-[#D0D5DD] flex items-center justify-center">
                  <div className="text-[#344054] font-semibold text-[14px]">
                    {hoursToDays(fullList?.timeForWorkInHrWithOutAI || 1440)}
                    30 days
                  </div>
                </div>
              </div>

              <div className="flex gap-[20px] items-center">
                <div className="text-[#475367] font-normal text-[14px]">
                  Estimated Cost
                </div>
                <div className="rounded-[6px] w-[97px] h-[47px] border border-[#D0D5DD] flex items-center justify-center">
                  <div className="text-[#344054] font-semibold text-[14px]">
                  {`$ ${removedList?.estimatedCostWithOutAI?.toFixed(1)}`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[26px] flex-nowrap mb-[27px]">
            {fullList?.employees?.map((item) => {
              return (
                <EmpCard
                  key={item?.id}
                  data={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTools;
