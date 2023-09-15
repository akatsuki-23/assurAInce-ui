import { useState } from "react";
import Button from "../../components/button/Button";
import { DonateIcon } from "../../components/icons";
import MainCard from "../../components/main-card/MainCard";
import CustomModal from "../../components/modal/Modal";
import GiveBackItem from "./GiveBackItem";
import Input from "../../components/input/Input";

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

const donateOptions = [
  {
    key: 1,
    amount: 1000,
  },
  {
    key: 2,
    amount: 5000,
  },
  {
    key: 3,
    amount: 10000,
  },
  {
    key: 4,
    amount: 20000,
  },
];

const GiveBack = () => {
  const [dialogState, setDialogState] = useState(false);
  const [donateOption, setDonateOption] = useState(1);

  const hideDialog = () => {
    setDialogState(false);
  };

  const showDialog = (item) => {
    setDialogState(true);
  };
  return (
    <>
      <CustomModal
        className="w-96 text-center"
        open={dialogState}
        onClose={hideDialog}
      >
        <div className="rounded-full w-20 h-20 bg-purple0 flex items-center justify-center mx-auto mb-5">
          <DonateIcon className="h-10 fill-purple5" />
        </div>
        <div className="text-lg">Your gift changes life</div>
        <div className="flex space-x-2 mt-5">
          {donateOptions.map((item) => (
            <div
              key={item.key}
              className={`w-20 p-3 rounded-lg font-bold cursor-pointer ${
                donateOption === item.key
                  ? "bg-purple4 text-white shadow-lg shadow-purple9/40"
                  : "bg-purple0 text-purple2"
              }`}
              onClick={() => setDonateOption(item.key)}
            >
              ${item.amount}
            </div>
          ))}
        </div>
        <div className="flex space-x-5 justify-center mt-10">
          <Button
            hoverBgColor="#FFFFFF"
            style={{
              borderRadius: "6px",
              height: "36px",
              backgroundColor: "#FFFFFF",
              color: "#344054",
              boxShadow: "none",
              border: 1,
              borderColor: "#D0D5DD",
            }}
            onClick={hideDialog}
          >
            Cancel
          </Button>
          <Button
            hoverBgColor="#985EFF"
            style={{
              borderRadius: "6px",
              boxShadow: "none",
              height: "36px",
              backgroundColor: "#985EFF",
              padding: "8px 12px",
            }}
          >
            Donate
          </Button>
        </div>
      </CustomModal>
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
                  <GiveBackItem
                    key={item.id}
                    item={item}
                    onDonate={() => showDialog(item)}
                  />
                ))}
              </div>
              <div className="text-xl font-bold mt-6">All Programs</div>
              <div className="flex flex-wrap">
                {allProgramsData.map((item, i) => (
                  <GiveBackItem
                    key={i}
                    item={item}
                    onDonate={() => showDialog(item)}
                  />
                ))}
              </div>
            </div>
          </MainCard>
        </div>
      </div>
    </>
  );
};

export default GiveBack;
