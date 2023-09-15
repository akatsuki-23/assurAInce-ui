import { apiCall } from "../../services/axios";

export const getEmployee = async () => {
  try {

    const resp =  await apiCall({
      method: 'GET',
      url: `/employees`,
      data: {}
    })

    return resp;
  } catch (e) {
    console.log(e)
  }
};

export const getProjects = async () => {
  try {

    const resp =  await apiCall({
      method: 'GET',
      url: `/projects`,
      data: {}
    })

    return resp;
  } catch (e) {
    console.log(e)
  }
};



