import { useCallback, useEffect, useState } from 'react';
import Table from '../../../components/table/Table';
import { formatNameWithImage } from '../../../utils/common';
import { getEmployee } from '../../home/api';
import { EMPLOYEE_CATEGORY_LIST } from '../../../constants/common';

const headers = [
  { title: 'Name', field: 'name' },
  { title: 'ID', field: 'id' },
  { title: 'Score', field: 'score' },
  { title: 'Email', field: 'email' },
  { title: 'Category', field: 'category' },
  { title: 'Report To', field: 'reportTo' },
];

const getChipData = (tag) => {
  if (tag)
    return `<div style="padding:2px 12px; border-radius: 20px; white-space: noWrap; background-color: ${EMPLOYEE_CATEGORY_LIST[tag]?.bgColor}; color: ${EMPLOYEE_CATEGORY_LIST[tag]?.textColor} ">${EMPLOYEE_CATEGORY_LIST[tag]?.title}</div>`;
  return `<div style="padding:2px 12px; border-radius: 20px; background-color: #FFECE5; ">-</div>`;
};

const AddEmployee = () => {
  const [selected, setSelected] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await getEmployee();

      if (resp) {
        setEmployeeList(resp?.data);
      }
    })();
  }, []);

  const formatTableData = useCallback(() => {
    const resp = employeeList?.map((data) => {
      return {
        name: formatNameWithImage(data?.firstName, data?.lastName ?? '', null),
        id: data?.id,
        score: data?.score ?? '-',
        email: data?.email ?? '-',
        category: getChipData(data?.category),
        reportTo: data?.reportTo ?? '-',
      };
    });
    return resp;
  }, [employeeList]);

  return (
    <div className="bg-white w-full h-full rounded-[10px] border border-[#E4E7EC]">
      <div className="p-6 text-[18px] font-semibold text-[#101928]">
        Add Employees
      </div>
      <div className="border-t-[1px] border-[#E4E7EC] flex flex-wrap">
        <Table
          headers={headers}
          selected={selected}
          setSelected={setSelected}
          tableData={formatTableData()}
        />
      </div>
    </div>
  );
};

export default AddEmployee;
