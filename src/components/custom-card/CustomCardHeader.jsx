import React from "react";

const CustomCardHeader = ({ title, children }) => {
  return (
    <div className="text-lg font-bold border-b border-gray-300 p-5 flex items-center space-x-5">
      <div>{title}</div>
      <div className="grow">{children}</div>
    </div>
  );
};

export default CustomCardHeader;
