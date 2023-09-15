import { Navigate, Route, Routes } from "react-router-dom";

import RoutesPath from "./RoutesPath";
import HomePage from "../containers/home/Home";
import NavigationBar from "../components/nav-bar/NavigationBar";
import Notification from "../features/notification/Notification";
import AiTools from "../containers/ai-tools/AiTools";

const PrivateLayout = () => {
  return (
    <div className="flex h-screen">
      <NavigationBar />
      <div className="flex h-screen w-screen flex-row overflow-y-auto justify-center">
        <div className="w-[calc(100vw-272px)]">
          <Routes>
            <Route path={RoutesPath.HOME} element={<HomePage />} />
            <Route path={RoutesPath.AI_TOOLS} element={<AiTools />} />
            <Route
              path={RoutesPath.ALL}
              element={<Navigate to={RoutesPath.HOME} replace />}
            />
          </Routes>
        </div>
      </div>
      <Notification />
    </div>
  );
};

export default PrivateLayout;
