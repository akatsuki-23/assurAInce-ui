const GoogleButton = () => {
  return (
    <div className="p-[16px] rounded-[6px] border-[1.5px] border-gray1 flex items-center justify-center
      cursor-pointer hover:bg-[#F0F2F5] transition-colors">
      <div className="flex gap-[16px]">
        <img src="images/google.png" alt="" className="w-[20px] h-[20px]" />
        <div className="text-[#344054] text-[16px] font-semibold">Google</div>
      </div>
    </div>
  );
};

export default GoogleButton;
