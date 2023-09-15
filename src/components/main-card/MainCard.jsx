
const MainCard = ({ className, children }) => {
  return (
    <div className={`bg-white border border-[#E4E7EC] rounded-xl ${className}`}>
      {children}
    </div>
  );
};


export default MainCard;
