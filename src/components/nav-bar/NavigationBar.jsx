import { LogoIcon, PlusIcon } from "../icons";
import Button from "../button/Button";

const NavigationBar = () => {
  return (
    <div className="z-20 flex h-full w-[272px] bg-[#101928] py-6">
      <div className="w-full flex flex-col">
        <div className="flex flex-row items-center justify-center gap-[6px] py-2">
          <LogoIcon className="flex items-center" />
          <div className="text-[30px] font-medium items-center text-white">
            AssurAnce
          </div>
        </div>
        <div className="py-[45px] pl-[18px] pr-[40px]">
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
            Upload Bulk Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
