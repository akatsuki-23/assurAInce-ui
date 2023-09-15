import Input from '../../components/input/Input';
import { useMemo, useState } from 'react';
import Stepper from './components/Stepper';
import AddEmployee from './components/AddEmployee';

const AddProjectPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const selectedPage = useMemo(() => {
    switch (selectedIndex) {
      case 0:
        return (
          <div>
            hi cizil pls return the thing here
          </div>
        )
      case 1:
        return (
          <AddEmployee />
        )
      case 2:
        return (
          <div>ok</div>
        )
    }
  }, [selectedIndex])

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
        {/* {selectedPage} */}
        <div className="bg-white w-full h-full rounded-[10px] border border-[#E4E7EC]">
          <div className="p-6 text-[18px] font-semibold text-[#101928]">
            Project Details
          </div>
          <div className="border-t-[1px] border-[#E4E7EC] flex flex-wrap">
            <div className="p-[45px] flex flex-col gap-1">
                Project Name
                <Input value="Cam Scanner"/>
            </div>
            <div className="p-[45px] flex flex-col gap-1">
                Project Name
                <Input value="Cam Scanner"/>
            </div>
            <div className="p-[45px] flex flex-col gap-1">
                Project Name
                <Input value="Cam Scanner"/>
            </div>
            <div className="p-[45px] flex flex-col gap-1">
                Project Name
                <Input value="Cam Scanner"/>
            </div>
            <div className="p-[45px] flex flex-col gap-1">
                Project Name
                <Input value="Cam Scanner"/>
            </div>
            <div className="p-[45px] flex flex-col gap-1">
                Project Name
                <Input value="Cam Scanner"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectPage;
