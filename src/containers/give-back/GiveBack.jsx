import MainCard from "../../components/main-card/MainCard";
import COLORS from "../../constants/colors";
import GiveBackItem from "./GiveBackItem";

const topProgramsData = [
  {
    id: 1,
    desc: "Give back money to the NGO Peoples and employees in India",
    image: "/images/give-back-item-1.png",
  },
  {
    id: 2,
    desc: "Building the community of employees in all the rural area",
    image: "/images/give-back-item-2.png",
  },
  {
    id: 3,
    desc: "Give back money to the NGO Peoples and employees in India",
    image: "/images/give-back-item-1.png",
  },
];

const allProgramsData = [
  {
    id: 1,
    desc: "Give back money to the NGO Peoples and employees in India",
    image: "/images/give-back-item-1.png",
  },
  {
    id: 2,
    desc: "Building the community of employees in all the rural area",
    image: "/images/give-back-item-2.png",
  },
  {
    id: 3,
    desc: "Give back money to the NGO Peoples and employees in India",
    image: "/images/give-back-item-1.png",
  },
  {
    id: 4,
    desc: "Give back money to the NGO Peoples and employees in India",
    image: "/images/give-back-item-1.png",
  },
  {
    id: 5,
    desc: "Building the community of employees in all the rural area",
    image: "/images/give-back-item-2.png",
  },
  {
    id: 6,
    desc: "Give back money to the NGO Peoples and employees in India",
    image: "/images/give-back-item-1.png",
  },
];

const GiveBack = () => {
  return (
    <div className="w-full h-full">
      <div className="px-[40px] py-[24px]">
        <div className="mb-6">
          <div className="text-3xl font-bold">Give back </div>
          <div className="text-gray-500 text-lg">
            give back money to the employees
          </div>
        </div>
        <MainCard>
          <div className="p-12">
            <div className="text-xl font-bold">Top Programs</div>
            <div className="flex flex-wrap">
              {topProgramsData.map((item) => (
                <GiveBackItem key={item.id} item={item} />
              ))}
            </div>
            <div className="text-xl font-bold mt-6">All Programs</div>
            <div className="flex flex-wrap">
              {allProgramsData.map((item, i) => (
                <GiveBackItem key={i} item={item} />
              ))}
            </div>
          </div>
        </MainCard>
      </div>
    </div>
  );
};

export default GiveBack;
