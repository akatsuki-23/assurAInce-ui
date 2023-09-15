import axios from 'axios';
import { API_ENDPOINT } from '../constants/common';
import routesPath from '../routes/RoutesPath';

export const apiCall = async (payload) => {
  const { url, isAuthenticated = true } = payload;

  const API_URL = `${API_ENDPOINT}${url}`;

  let authToken = '';
  if (isAuthenticated && localStorage.getItem('token')) {
    authToken = `Bearer ${localStorage.getItem('token')}`;
  }

  const apiParams = {
    ...payload,
    url: API_URL,
    ...(isAuthenticated && {
      headers: {
        Authorization: authToken,
      },
    }),
  };

  try {
    const apiResponse = await axios(apiParams);

    if (apiResponse?.data) {
      return apiResponse?.data;
    }
  } catch (error) {
    //API FAILURE
    console.log('api failed', error);

    if (error.response.status === 401) {
      window.location.hash = routesPath.LOGIN;
    }

    return null;
  }
};
