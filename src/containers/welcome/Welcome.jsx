import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import { LogoIcon, PlusCircleIcon } from '../../components/icons';
import { useRecoilState } from 'recoil';
import { isExistingLoginAtom, userDetails } from '../../store/atoms';
import routesPath from '../../routes/RoutesPath';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [, setIsExistingLogin] = useRecoilState(isExistingLoginAtom);
  const [user] = useRecoilState(userDetails);


  const onAddEmployeeClick = () => {
    localStorage.setItem('isExistingLogin', 'true');

    setIsExistingLogin(true);
    navigate(routesPath.EMPLOYEES)
  }

  const onAddAiClick = () => {
    localStorage.setItem('isExistingLogin', 'true');

    setIsExistingLogin(true);
    navigate(routesPath.AITOOLS)

  }

  return (
    <div className="w-screen h-screen bg-[#F9FAFB] relative border-t-[6px] border-t-[#985EFF]">
      {/* TODO: font for logo */}
      <div className="flex flex-row items-center gap-[6px] py-2 absolute top-[68px] left-[82px]">
        <LogoIcon className="flex items-center" />
        <div className="text-[37px] font-medium items-center leading-[45px] text-[#1B1818]">
          AssurAInce
        </div>
      </div>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <img src="images/welcome-img.png" alt="" className="mb-[70px]" />
        <div className="font-semibold text-[24px] leading-[28px] mb-[4px]">
          Welcome {user?.firstName} {user?.lastName}
        </div>
        <div className="text-[16px] text-[#475367] mb-[45px]">
          AI-powered dashboard for streamlined insights and Know Employee
          Performance
        </div>
        <div className="flex gap-[14px] items-center justify-center w-full">
          <Button
            onClick={onAddEmployeeClick}
            hoverBgColor="#985EFF"
            style={{
              borderRadius: '6px',
              height: '36px',
              backgroundColor: '#985EFF',
              padding: '8px 12px',
            }}
          >
            <div className="flex gap-[8px] items-center">
              <PlusCircleIcon fill="#FFFFFF" />
              <div className="text-white text-[14px] font-semibold">
                Add Employee
              </div>
            </div>
          </Button>
          <Button
            onClick={onAddAiClick}
            hoverBgColor="#0B111C"
            style={{
              borderRadius: '6px',
              height: '36px',
              backgroundColor: 'black',
              padding: '8px 12px',
            }}
          >
            <div className="flex gap-[8px] items-center">
              <PlusCircleIcon fill="#FFFFFF" />
              <div className="text-white text-[14px] font-semibold">
                Onboard AI
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
