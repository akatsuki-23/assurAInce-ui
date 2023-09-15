import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "../../../../components/icons";
import { getEmployee } from "../../api";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const resp = await getEmployee();

      if (resp) {
        setEmployeeList(resp?.data);
      }
    })();
  }, []);

  const getProfilePicture = (firstName, lastName) => {
    return (firstName[0] + lastName[0]).toUpperCase();
  };

  const handleSeeAll = () => {
    navigate("employee-details");
  };

  const handleEmployee = (id) => {
    navigate(`employee-details/${id}`);
  };

  return (
    <div className="bg-white rounded-xl my-[29px] border-[1px] border-[#E4E7EC] overflow-hidden">
      <div className="border-b-[1px] border-[#E4E7EC]">
        <div className="flex justify-between p-6">
          <div className="text-[#101928] text-lg font-semibold">
            New Employees added
          </div>
          <div
            className="text-[#985EFF] text-sm font-semibold flex flex-row items-center cursor-pointer"
            onClick={handleSeeAll}
          >
            See all Employees
            <ChevronRightIcon fill="#985EFF" className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="py-10 px-[34px] flex flex-row gap-5">
        {employeeList?.map((employee) => (
          <div
            key={employee?.id}
            className="flex flex-col items-center justify-center"
            onClick={()=>handleEmployee(employee.id)}
          >
            <div className="w-12 h-12 rounded-full bg-[#F2E7FE] flex items-center justify-center text-[#344054] text-xl font-bold">
              {getProfilePicture(employee?.firstName, employee?.lastName)}
            </div>
            <div className="w-[68px] truncate text-xs font-semibold flex justify-center">
              {employee?.firstName} {employee?.lastName}
            </div>
            <div className="w-[75px] truncate text-xs font-normal text-[#98A2B3]">
              {employee?.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
