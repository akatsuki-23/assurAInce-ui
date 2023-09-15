import { NotificationIcon } from "../icons";

const Topbar = () => {
  return (
    <div className="h-[70px] bg-white w-full border-b-[1px] border-[#E4E7EC] px-[53px] items-center">
      <div className="flex items-center justify-end h-full flex-row gap-3">
        <div className="w-10 h-10 bg-[#F0F2F5] flex justify-center items-center rounded-full">
          <NotificationIcon className="w-5 h-5"/>
        </div>
        <img src="images/profile.png" alt="" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Topbar;
