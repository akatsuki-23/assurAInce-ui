import { useCallback, useEffect, useState } from "react";

import { getEmployee } from "../home/api";
import Table from "../../components/table/Table";
import { FilterIcon } from "../../components/icons";
import { formatNameWithImage } from "../../utils/common";
import SearchBar from "../../components/search-bar/SearchBar";
import { EMPLOYEE_CATEGORY_LIST } from "../../constants/common";

const headers = [
  { title: "Name", field: "name" },
  { title: "ID", field: "id" },
  { title: "Score", field: "score" },
  { title: "Email", field: "email" },
  { title: "Category", field: "category" },
  { title: "Report To", field: "reportTo" },
];

const getChipData = (tag) => {
  if (tag)
    return `<div style="padding:2px 12px; border-radius: 20px; white-space: noWrap; background-color: ${
      EMPLOYEE_CATEGORY_LIST[tag]?.bgColor === undefined
        ? EMPLOYEE_CATEGORY_LIST["default"]?.bgColor
        : EMPLOYEE_CATEGORY_LIST[tag]?.bgColor
    }; color: ${
      EMPLOYEE_CATEGORY_LIST[tag]?.textColor === undefined
        ? EMPLOYEE_CATEGORY_LIST["default"]?.textColor
        : EMPLOYEE_CATEGORY_LIST[tag]?.textColor
    } ">${
      EMPLOYEE_CATEGORY_LIST[tag]?.title === undefined
        ? EMPLOYEE_CATEGORY_LIST["default"]?.title
        : EMPLOYEE_CATEGORY_LIST[tag]?.title
    }</div>`;
  return `<div style="padding:2px 12px; border-radius: 20px; background-color: #FFECE5; ">-</div>`;
};

const EmployeeListPage = () => {
  const [selected, setSelected] = useState([]);
  const [searchVal, setSearchVal] = useState("");
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
      console.log("Category Data: ", data?.category);

      return {
        name: formatNameWithImage(data?.firstName, data?.lastName ?? "", null),
        id: data?.id,
        score: data?.score ?? "-",
        email: data?.email ?? "-",
        category: getChipData(data?.category ?? "Product Management"),
        reportTo: data?.reportTo ?? "-",
      };
    });
    return resp;
  }, [employeeList]);

  const handleSearchValueChange = (value) => {
    setSearchVal(value);
  };

  return (
    <div className="px-12 pt-6 pb-12 flex flex-col items-start">
      <h1 className="text-2xl font-bold ">Employee</h1>
      <p className="text-gray-600 mb-4">Showing Data over the last 30 days</p>
      <div className="flex justify-start px-4 py-3 rounded-t-lg border border-gary-300 w-full bg-white">
        <SearchBar
          searchValue={searchVal}
          customClass=" border border-gray-200"
          handleChange={handleSearchValueChange}
        />
        <div className="flex w-[100px] ml-4 items-center border border-gray-200 rounded-lg justify-center">
          <FilterIcon />
          <p className="ml-2">Fitler</p>
        </div>
      </div>
      <Table
        headers={headers}
        selected={selected}
        setSelected={setSelected}
        tableData={formatTableData()}
      />
    </div>
  );
};

export default EmployeeListPage;
