const MainCardHeader = ({ title, children }) => {
  return (
    <div className="border-b border-[#E4E7EC] p-5 flex items-center space-x-6">
      <div className="font-bold text-2xl">{title}</div>
      <div className="grow flex items-center">{children}</div>
    </div>
  );
};

export default MainCardHeader;
