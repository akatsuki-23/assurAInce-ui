import { apiCall } from '../../services/axios';

export const login = async (email, password) => {
  try {
    const resp = await apiCall({
      method: 'POST',
      url: '/auth/email/login',
      isAuthenticated: false,
      data: {
        email,
        password,
      },
    });

    return resp;
  } catch (e) {
    console.log(e); 
  }
};
