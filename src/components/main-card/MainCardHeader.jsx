const MainCardHeader = ({ title, children }) => {
  return (
    <div className="border-b border-gray-300 p-5 flex items-center space-x-5">
      <div className="font-bold text-2xl">{title}</div>
      <div className="grow flex items-center">{children}</div>
    </div>
  );
};

export default MainCardHeader;
