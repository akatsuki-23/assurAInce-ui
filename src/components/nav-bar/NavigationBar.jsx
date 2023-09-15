import { ArrowIcon, LogoIcon, PlusIcon, SettingsIcon } from "../icons";
import Button from "../button/Button";
import { navItems } from "./NavigationItems";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navigation } from "../../store/navigation";

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
        className="absolute right-[-8px] top-12 rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center border-gray-300 border cursor-pointer hover:bg-slate-200"
        onClick={handleMenuClick}
      >
        <ArrowIcon
          fill="#808080"
          stroke="#000000"
          className={` w-3 h-3 ${open ? "rotate-180" : ""} `}
          onClick={handleMenuClick}
        />
      </div>
      <div className="h-full">
        <div className="flex flex-row items-center justify-center gap-[6px] py-2 px-4 min-h-[56px]">
          <LogoIcon className="flex items-center w-8 h-8 " />
          {open && (
            <div
              className={`text-[30px] transition-[width] duration-[500ms] ${
                open ? "w-full" : "w-0"
              } font-medium items-center text-white max-h-[40px] overflow-hidden truncate text-clip`}
            >
              AssurAInce
            </div>
          )}
        </div>
        <div className="py-10 pl-[18px] pr-[40px]">
          <Button
            hoverBgColor="#985EFF"
            style={{
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 500,
              width: "100%",
              height: "40px",
              backgroundColor: "#985EFF",
            }}
          >
            <PlusIcon fill="#FFFFFF" />
            {open && (
              <div
                className={`${
                  open ? "" : "w-0"
                } overflow-hidden truncate text-clip`}
              >
                Upload Bulk Data
              </div>
            )}
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const { icon: NavbarIcon } = item;
            return (
              <div
                key={item.id}
                className={`mx-2 flex flex-row py-3 px-4 gap-3 rounded-md h-[45px] items-center ${
                  open ? "" : "justify-center"
                } text-[#98A2B3] cursor-pointer ${
                  isActive(item.path) ? "bg-[#1D2739]" : ""
                }`}
                onClick={() => handleNavBarItemClick(item.id)}
              >
                <NavbarIcon
                  className={`w-6 h-6 ${
                    isActive(item.path) ? "fill-[#985EFF]" : ""
                  }`}
                />
                {open && (
                  <div
                    className={`overflow-hidden ${open ? "w-full" : "w-0"} ${
                      isActive(item.path) ? "text-white" : ""
                    } truncate text-clip`}
                  >
                    {item.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`flex items-end py-3 px-4 mx-2 flex-row gap-3 text-[#98A2B3] cursor-pointer ${
          open ? "" : "justify-center"
        }`}
      >
        <SettingsIcon />
        {open && <div>Settings</div>}
      </div>
    </div>
  );
};

export default NavigationBar;
