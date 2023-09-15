import { apiCall } from './axios';

export const getUserDetails = async () => {
  try {
    const resp = await apiCall({
      method: 'GET',
      url: '/auth/me',
    });

    return resp;
  } catch (e) {
    console.log(e);
  }
};
