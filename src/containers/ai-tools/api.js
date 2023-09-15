import { apiCall } from "../../services/axios";

export const getAiTools = async () => {
  try {
    const resp = await apiCall({
      method: "get",
      url: "/ai-tools?page=1&limit=100",
      data: {},
    });

    return resp;
  } catch (e) {
    console.log(e);
  }
};