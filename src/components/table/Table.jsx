import { useMemo, useState } from "react";

import { ThreeDots } from "../icons";
import { Checkbox } from "@mui/material";

const Table = (props) => {
  const {
    headers,
    selected,
    tableData,
    setSelected,
    handleRowClick,
    showMenu = false,
    showCheckBox = true,
  } = props;

  const [numSelected, setNumSelected] = useState(0);

  const handleSelectAllClick = (event) => {
    if (event.target.checked && selected.length !== tableData?.length) {
      const newSelected = tableData.map((n) => n.id);
      console.log(newSelected);
      setNumSelected(newSelected.length);
      setSelected(newSelected);
      return;
    }
    setNumSelected(0);
    setSelected([]);
  };

  const rowCount = useMemo(() => tableData?.length, [tableData]);

  const handleRowCheckboxClick = (event, id) => {
    if (event.target.checked) {
      setSelected([...selected, id]);
      setNumSelected((prev) => prev + 1);
    } else {
      setSelected((prev) => prev.filter((item) => item !== id));
      setNumSelected((prev) => prev - 1);
    }
  };

  const isSelected = (id) => selected.includes(id);

  return (
    <div className="w-full flex flex-col border border-gray-200 rounded-b-lg">
      <div className="overflow-x-auto max-w-[90vw]">
        <table className="min-w-full border text-center border-gray-100 border-collapse align-middle">
          <thead className="w-full">
            <tr className="bg-gray-200 w-[50px]">
              <th className="px-6 bg-gray-200 flex justify-start">
                {showCheckBox && (
                  <Checkbox
                    color="primary"
                    onChange={handleSelectAllClick}
                    checked={rowCount > 0 && numSelected === rowCount}
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                  />
                )}
              </th>
              {headers?.map((item, index) => (
                <th
                  key={`${item}+${index}`}
                  className="px-6 w-max bg-gray-200 text-left text-md leading-6 font-medium"
                >
                  {item?.title}
                </th>
              ))}
              {showMenu && <th></th>}
            </tr>
          </thead>
          <tbody className="w-full overflow-y-auto  max-h-[70vh]">
            {tableData?.map((rowItem) => {
              const isItemSelected = isSelected(rowItem.id);
              return (
                // eslint-disable-next-line react/jsx-key
                <tr className="border border-gray-100">
                  {showCheckBox && (
                    <td className="px-6 py-3 w-[50px]">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onChange={(event) =>
                          handleRowCheckboxClick(event, rowItem.id)
                        }
                      />
                    </td>
                  )}
                  {headers?.map((colItem, colIndex) => (
                    <td
                      key={`${rowItem?.id} + ${colIndex}`}
                      onClick={() =>
                        handleRowClick &&
                        handleRowClick(rowItem?.id)
                      }
                      className={`${
                        handleRowClick ? "cursor-pointer" : ""
                      } px-6 w-max whitespace-no-wrap py-3 text-left text-md leading-6 font-medium`}
                    >
                      <div
                        className="flex flex-nowrap"
                        dangerouslySetInnerHTML={{
                          __html: rowItem[colItem?.field],
                        }}
                      />
                    </td>
                  ))}
                  <td>
                    {showMenu && (
                      <div className="border border-[#E4E7EC] p-[10px] w-fit rounded-lg">
                        <ThreeDots />
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
