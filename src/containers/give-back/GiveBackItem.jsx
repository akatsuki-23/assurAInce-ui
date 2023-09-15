import { Button } from "@mui/base";
import { PlusCircleIcon } from "../../components/icons";

const GiveBackItem = ({ item, onDonate }) => {
  return (
    <div className="w-1/3 p-4">
      <div
        className="rounded-lg h-60 mb-2 flex items-center justify-end p-6"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <Button
          hoverBgColor="#985EFF"
          style={{
            borderRadius: "6px", 
            height: "36px",
            backgroundColor: "#985EFF",
            padding: "8px 12px",
          }}
          onClick={onDonate}
        >
          <div className="flex gap-[8px] items-center">
            <PlusCircleIcon fill="#FFFFFF" />
            <div className="text-white text-[14px] font-semibold">
              Donate Now
            </div>
          </div>
        </Button>
      </div>
      <div className="text-lg">{item.desc}</div>
    </div>
  );
};

export default GiveBackItem;
