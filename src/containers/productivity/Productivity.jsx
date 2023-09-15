import Button from "../../components/button/Button";

const ProductivityPage = () => {
  return (
    <div className="flex flex-col px-14 py-[22px]">
      <div className="text-2xl font-semibold">Productivity</div>
      <div className="text-[#667185] text-sm mt-1">
        Showing data over the last 30 days
      </div>
      <div className="bg-white w-full rounded-[10px] border-[1px] border-[#E4E7EC] shadow-lg my-[30px] overflow-hidden">
        <div className="flex justify-between px-6 py-5 border-b-[1px] border-[#E4E7EC]">
          <div className="text-[18px] font-semibold">Project Details</div>
          <Button
            hoverBgColor="#FFFFFF"
            style={{
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 600,
              width: "151px",
              height: "36px",
              backgroundColor: "#FFFFFF",
              color: "#344054",
              boxShadow:
                "0px 5px 3px -2px rgba(0, 0, 0, 0.02), 0px 3px 2px -2px rgba(0, 0, 0, 0.06)",
              border: 1,
              borderColor: "#D0D5DD",
            }}
          >
            Close Projects
          </Button>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col border-r-[1px] border-[#E4E7EC]">
            <div className="flex flex-row gap-4 bg-[#F8F8F8] p-6">
              <div>
                <img
                  src="images/stc.png"
                  alt=""
                  className="bg-white rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[16px] font-semibold text-[#101928]">
                  Keycode Project
                </div>
                <div className="text-[14px] text-[#475367]">
                  ID: RET/15118/A
                </div>
              </div>
            </div>

            <div className="p-[30px]">
              <div className="rounded-xl border-[1px] border-[#E4E7EC] p-4 flex flex-col">
                <div className="text-[14px] text-[#475367]"> Project Rank</div>
                <div className="text-[48px] text-[#344054] font-bold"> 24</div>
              </div>
            </div>
            <div className="px-[30px] pb-[30px]">
              <div className="rounded-xl border-[1px] border-[#E4E7EC] p-4 flex flex-col">
                <div className="text-[14px] text-[#475367]"> Amount saved</div>
                <div className="text-[20px] text-[#344054] font-semibold">
                  {" "}
                  $2345678
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-row py-5 2xl:px-20 2xl:gap-[80px] xl:px-8 xl:gap-[40px] px-4 gap-5 truncate border-b-[1px] border-[#E4E7EC] w-full">
              <div className="flex flex-col gap-1.5 justify-center">
                <div className="text-[#475367] text-[14px]">Starting Date</div>
                <div className="text-[#101928] text-[16px] font-semibold">
                  15-05-1994
                </div>
              </div>
              <div className="flex flex-col gap-1.5 justify-center">
                <div className="text-[#475367] text-[14px]">Estimated End</div>
                <div className="text-[#101928] text-[16px] font-semibold">
                  15-05-2023
                </div>
              </div>
              <div className="flex flex-col gap-1.5 justify-center">
                <div className="text-[#475367] text-[14px]">No. of Members</div>
                <div className="text-[#101928] text-[16px] font-semibold">
                  245
                </div>
              </div>
              <div className="flex flex-col gap-1.5 justify-center">
                <div className="text-[#475367] text-[14px]">
                  No. of AI Tools
                </div>
                <div className="text-[#101928] text-[16px] font-semibold">
                  24
                </div>
              </div>
              <div className="flex flex-col gap-1.5 justify-center">
                <div className="text-[#475367] text-[14px]">Status</div>
                <div className="rounded-full px-3 py-[2px] bg-[#E7F6EC] text-[#036B26] font-medium">
                  Active
                </div>
              </div>
            </div>

            <div>Employees carousel</div>

            <div>AI tools carousel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityPage;
