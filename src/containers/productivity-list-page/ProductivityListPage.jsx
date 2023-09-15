import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { getProjects } from "../home/api";
import Table from "../../components/table/Table";
import { FilterIcon } from "../../components/icons";
import { formatNameWithImage } from "../../utils/common";
import SearchBar from "../../components/search-bar/SearchBar";
import { PROJECT_CATEGORY_LIST } from "../../constants/common";

const headers = [
  { title: "Name", field: "name" },
  { title: "Starting Date", field: "startDate" },
  { title: "Estimated End", field: "endDate" },
  { title: "No. Workers", field: "workersCount" },
  { title: "Category", field: "category" },
  { title: "No. AI Tools", field: "aiToolsCount" },
  { title: "Amount Saved", field: "amountSaved" },
];

const ProductivityListPage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await getProjects();

      if (resp) {
        setProjectsList(resp?.data);
      }
    })();
  }, []);

  const handleSearchValueChange = (value) => {
    setSearchVal(value);
  };

  const getChipData = (tag) => {
    if (tag)
      return `<div style="padding:2px 12px; border-radius: 20px; white-space: noWrap; background-color: ${PROJECT_CATEGORY_LIST[tag]?.bgColor}; color: ${PROJECT_CATEGORY_LIST[tag].textColor} ">${PROJECT_CATEGORY_LIST[tag].title}</div>`;
    return `<div style="padding:2px 12px; border-radius: 20px; white-space: noWrap; background-color: #FFECE5; ">-</div>`;
  };

  const handleRowClick = (id) => {
    navigate(`/productivity/${id}`);
  };

  const formatTableData = useCallback(() => {
    const resp = projectsList?.map((data) => {
      return {
        id: data?.id,
        endDate: data?.endDate ?? "-",
        startDate: data?.startDate ?? "-",
        category: getChipData(data?.category),
        amountSaved: data?.amountSaved ?? "$0",
        aiToolsCount: data?.aiTools?.length ?? "-",
        workersCount: data?.employees?.length ?? "-",
        name: formatNameWithImage(data?.name, "", null),
      };
    });
    return resp;
  }, [projectsList]);

  return (
    <div className="px-12 pt-6 pb-12 flex flex-col items-start">
      <h1 className="text-2xl font-bold ">Productivity</h1>
      <p className="text-gray-600 mb-4">Showing Data over the last 30 days</p>
      <div className="flex justify-between px-4 py-3 rounded-t-lg border border-gary-300 w-full bg-white">
        <div className="flex justify-start">
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
        <div className="whitespace-nowrap p-2 border border-gray-300 rounded-lg bg-purple3 text-white">
          Add Project
        </div>
      </div>
      <Table
        headers={headers}
        selected={selected}
        setSelected={setSelected}
        tableData={formatTableData()}
        handleRowClick={handleRowClick}
      />
    </div>
  );
};

export default ProductivityListPage;
