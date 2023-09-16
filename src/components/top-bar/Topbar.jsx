import { useState } from "react";
import { CalendarIcon, NotificationIcon } from "../icons";

const Topbar = () => {
  const [showNotifiction, setShowNotification] = useState(false);

  const handleClick = () => {
    setShowNotification((prev) => !prev);
  };

  return (
    <div className="h-[70px] bg-white w-full border-b-[1px] border-[#E4E7EC] px-[53px] items-center">
      <div className="flex items-center justify-end h-full flex-row gap-3">
        <div className="relative">
          <div
            className="relative w-10 h-10 bg-[#F0F2F5] flex justify-center items-center border boder-gray-200 duration-200 rounded-full cursor-pointer group hover:bg-purple0 hover:border-purple5"
            onClick={handleClick}
          >
            <div className="w-5 h-5 bg-red-500 rounded-full absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 flex items-center justify-center text-white text-xs font-bold">1</div>
            <NotificationIcon className="w-5 h-5 " />
          </div>
          <div
            className={`absolute z-10 bg-white border border-gray-200 rounded-lg w-[400px] shadow-lg right-0 top-12 ${
              showNotifiction ? "block" : "hidden"
            }`}
          >
            <div className="text-lg font-bold  p-5 border-b border-gray-200">
              Notifications
            </div>
            <div className="flex items-center space-x-5 p-5 hover:bg-gray-50 cursor-pointer">
              <div className="rounded-full min-w-[48px] min-h-[48px] bg-gray-200 flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 " />
              </div>
              <div>
                <div className="font-bold">Reminder </div>
                <div className="text-gray-600">
                  Please fill out the feedback form for project completion.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="images/profile.png" alt="" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Topbar;
