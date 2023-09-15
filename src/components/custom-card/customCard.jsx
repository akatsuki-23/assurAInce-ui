import Card from "@mui/material/Card";
import { ChartIcon } from "../icons";

const CustomCard = ({
  isUsingAi = false,
  title = "Random Title",
  metric = "randomValue",
  percentage = "59%",
  icon,
}) => {
  return (
    <div className="mr-4">
      <Card
        sx={{ width: 263.75, height: 109, borderRadius: 1 }}
        variant="outlined"
      >
        <div className="flex p-4">
          <div className="mr-14">
            <div className="text-[#475367] text-sm font-normal leading-5 break-words mb-2">
              {title}
            </div>
            <div className="text-[#344054] font-semibold text-xl leading-6">
              {metric}
            </div>
            <div className="flex mr-6 ">
              <span className="flex text-[#036B26] bg-[#E7F6EC] px-1 text-xs rounded-full">
                <ChartIcon className="my-auto mr-1" />
                {percentage}%
              </span>
              {isUsingAi && (
                <div className="text-[#04802E] text-xs ml-[6px]">Using AI</div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 m-auto p-1 rounded-full border border-[#E4E7EC]">
            {icon}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CustomCard;
