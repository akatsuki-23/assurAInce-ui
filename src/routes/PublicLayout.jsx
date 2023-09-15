import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import RoutesPath from './RoutesPath';
import LoginPage from '../containers/login/Login';

const PublicLayout = () => {
  return (
    <Routes>
      <Route path={RoutesPath.LOGIN} element={<LoginPage type={'login'} />} />
      <Route path={RoutesPath.SIGNUP} element={<LoginPage type={'signup'} />} />
      <Route
        path={RoutesPath.ALL}
        element={<Navigate to={RoutesPath.LOGIN} replace />}
      />
    </Routes>
  );
};

export default PublicLayout;
