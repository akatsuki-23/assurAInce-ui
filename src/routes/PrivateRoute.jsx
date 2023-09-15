import { Navigate, Route, Routes } from "react-router-dom";

import RoutesPath from "./RoutesPath";
import HomePage from "../containers/home/Home";
import NavigationBar from "../components/nav-bar/NavigationBar";
import Notification from "../features/notification/Notification";
import Topbar from "../components/top-bar/Topbar";
import WelcomePage from "../containers/welcome/Welcome";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isExistingLoginAtom } from "../store/atoms";
import ProductivityPage from "../containers/productivity/Productivity";

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
              <Route
                path={RoutesPath.PRODUCTIVITY}
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
