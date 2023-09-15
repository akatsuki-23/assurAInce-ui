import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Navigate, Route, Routes } from 'react-router-dom';

import RoutesPath from './RoutesPath';
import HomePage from '../containers/home/Home';
import Topbar from '../components/top-bar/Topbar';
import { isExistingLoginAtom } from '../store/atoms';
import WelcomePage from '../containers/welcome/Welcome';
import NavigationBar from '../components/nav-bar/NavigationBar';
import Notification from '../features/notification/Notification';
import EmployeeListPage from "../containers/employee-list-page/EmployeeListPage";
import ProductivityListPage from '../containers/productivity-list-page/ProductivityListPage';

const PrivateLayout = () => {
  const [, setIsExistingLogin] = useRecoilState(isExistingLoginAtom);
  const isExistingLogin = useRecoilValue(isExistingLoginAtom);

  useEffect(() => {
    const isExisting = localStorage.getItem('isExistingLogin') === 'true';

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
              <Route path={RoutesPath.PRODUCTIVITY} element={<ProductivityListPage />} />
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
