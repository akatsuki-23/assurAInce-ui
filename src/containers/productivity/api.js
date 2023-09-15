import { apiCall } from "../../services/axios";

export const getProject = async (id) => {
  try {

    const resp =  await apiCall({
      method: 'get',
      url: `/projects/${id}`,
      data: {}
    })

    return resp;
  } catch (e) {
    console.log(e)
  }
};
