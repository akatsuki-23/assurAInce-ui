import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Navigate, Route, Routes } from "react-router-dom";

import RoutesPath from "./RoutesPath";
import HomePage from "../containers/home/Home";
import Topbar from "../components/top-bar/Topbar";
import { isExistingLoginAtom } from "../store/atoms";
import AiTools from "../containers/ai-tools/AiTools";
import WelcomePage from "../containers/welcome/Welcome";
import GiveBack from "../containers/give-back/GiveBack";
import NavigationBar from "../components/nav-bar/NavigationBar";
import Notification from "../features/notification/Notification";
import ProductivityPage from "../containers/productivity/Productivity";
import EmployeeListPage from "../containers/employee-list-page/EmployeeListPage";
import ProductivityListPage from '../containers/productivity-list-page/ProductivityListPage';
import AddProjectPage from '../containers/add-project/AddProject';

const PrivateLayout = () => {
  const [, setIsExistingLogin] = useRecoilState(isExistingLoginAtom);
  const isExistingLogin = useRecoilValue(isExistingLoginAtom);

  useEffect(() => {
    const isExisting = localStorage.getItem("isExistingLogin") === "true";

    setIsExistingLogin(isExisting);
  }, []);

  return isExistingLogin ? (
    <div className="flex h-screen">
      <NavigationBar />
      <div className="flex w-screen flex-col">
        <Topbar />
        <div className="flex h-screen flex-row overflow-y-auto bg-[#F9FAFB] justify-center">
          <div className="w-[calc(100vw-272px)]">
            <Routes>
              <Route path={RoutesPath.HOME} element={<HomePage />} />
              <Route path={RoutesPath.EMPLOYEES} element={<EmployeeListPage />} />
              <Route path={RoutesPath.ADD_PROJECT} element={<AddProjectPage />} />
              <Route path={RoutesPath.PRODUCTIVITY} element={<ProductivityListPage />} />
              <Route path={RoutesPath.GIVE_BACK} element={<GiveBack />} />
              <Route path={RoutesPath.AI_TOOLS} element={<AiTools />} />
              <Route
                path={RoutesPath.PRODUCTIVITY_DETAIL}
                element={<ProductivityPage />}
              />
              <Route
                path={RoutesPath.ALL}
                element={<Navigate to={RoutesPath.HOME} replace />}
              />
            </Routes>
          </div>
          <Notification />
        </div>
      </div>
      <Notification />
    </div>
  ) : (
    <Routes>
      <Route path={RoutesPath.ALL} element={<WelcomePage />} />
    </Routes>
  );
};

export default PrivateLayout;
