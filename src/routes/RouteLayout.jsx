import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { userDetails } from '../store/atoms';
import { getUserDetails } from '../services/api';
import PrivateLayout from './PrivateRoute';
import PublicLayout from './PublicLayout';

const RouteLayout = () => {

  const [user, setUser] = useRecoilState(userDetails);

  const fetchUserDetails = async () => {
    const resp = await getUserDetails();

    if (resp) {
      setUser(resp);
    }
  };

  useEffect(() => {
    (async () => await fetchUserDetails())();
  }, []);

  console.log(user);

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={user?.firstName ? <PrivateLayout /> : <PublicLayout />}
        />
      </Routes>
    </>
  );
};

export default RouteLayout;
