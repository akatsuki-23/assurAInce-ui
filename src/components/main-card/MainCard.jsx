import React from "react";

const MainCard = ({ className, children }) => {
  return (
    <div className={`bg-white border border-gray-300 rounded-xl ${className}`}>
      {children}
    </div>
  );
};


export default MainCard;
