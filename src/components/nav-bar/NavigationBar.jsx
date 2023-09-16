import { ArrowIcon, LogoIcon, PlusIcon, SettingsIcon } from "../icons";
import Button from "../button/Button";
import { navItems } from "./NavigationItems";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navigation } from "../../store/navigation";
import COLORS from "../../constants/colors";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const open = useRecoilValue(navigation);
  const setOpen = useSetRecoilState(navigation);

  const handleNavBarItemClick = (path) => {
    navigate(path);
  };

  const isActive = (path) => path === pathname;

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`z-20 relative flex h-full transition-[width] duration-[500ms] ease-out ${
        open ? "w-[272px]" : "w-[90px]"
      } bg-[#101928] py-6 flex-col justify-between`}
    >
      <div
        className="absolute right-[-8px] top-[85px] rounded-full w-[24px] h-[24px] bg-purple0 flex items-center justify-center border-purple5 border cursor-pointer hover:bg-slate-200"
        onClick={handleMenuClick}
      >
        <ArrowIcon
          fill={COLORS.PURPLE5}
          stroke="#000000"
          className={`duration-500 w-3 h-3 ${open ? "rotate-180" : ""} `}
          onClick={handleMenuClick}
        />
      </div>
      <div className="h-full">
        <div
          className={`overflow-hidden duration-200 text-[#98A2B3] group w-full py-3 rounded-lg whitespace-nowrap hover:text-white cursor-pointer flex items-center ${
            open ? "px-4" : "px-7"
          }`}
        >
          <div className="flex items-center w-[200px] min-w-[200px]">
            <LogoIcon className="flex items-center min-w-[32px] min-h-[32px] " />
            <img
              className={` duration-200 ${!open ? "ml-10" : "ml-3"}`}
              src="/images/logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[6px] py-2 px-4 min-h-[56px]"></div>
        <div className="pb-10 px-5">
          <div className="overflow-hidden w-full bg-[#985EFF] text-white px-5 py-3 rounded-lg whitespace-nowrap flex items-center">
            <div className="">
              <PlusIcon fill="#FFFFFF" />
            </div>
            <div className={` duration-200 ${!open ? "ml-10" : "ml-3"}`}>
              Upload Bulk Data
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1  px-5">
          {navItems.map((item) => {
            const { icon: NavbarIcon } = item;
            return (
              <div
                key={item.id}
                className={`overflow-hidden text-[#98A2B3] group w-full px-3 py-3 rounded-lg whitespace-nowrap hover:text-white cursor-pointer flex items-center ${
                  isActive(item.path) ? "bg-[#1D2739] text-white" : ""
                }`}
                onClick={() => handleNavBarItemClick(item.id)}
              >
                <div className="">
                  <NavbarIcon
                    className={`w-6 h-6  ${
                      isActive(item.path)
                        ? "fill-[#985EFF]"
                        : " group-hover:!fill-white duration-200 fill-[#98A2B3]"
                    }`}
                  />
                </div>
                <div className={` duration-200 ${!open ? "ml-10" : "ml-3"}`}>
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-5">
        <div className="overflow-hidden text-[#98A2B3] group w-full px-3 py-3 rounded-lg whitespace-nowrap hover:text-white cursor-pointer flex items-center">
          <div className="">
            <SettingsIcon className="w-6 h-6 group-hover:!fill-white duration-200 fill-[#98A2B3]" />
          </div>
          <div className={` duration-200 ${!open ? "ml-10" : "ml-3"}`}>
            Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
