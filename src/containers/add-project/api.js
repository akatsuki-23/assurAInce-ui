import { apiCall } from '../../services/axios';

export const createProject = async (
  name,
  aiTools = [],
  employees = [],
  category,
  description,
  startDate = '2023-09-15T23:54:01.616Z',
  endDate = '2023-09-15T23:54:01.616Z'
) => {
  try {
    const resp = await apiCall({
      method: 'POST',
      url: `/projects`,
      data: {
        name,
        aiTools,
        employees,
        category,
        description,
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(new Date().getMonth()+6)),
        techStacks: 'abc test',
        status: {
          id: 1,
          name: 'Active',
        },
        iconUrl: 'https://picsum.photos/200',
        projectCode: 'PRJ-1234',
        amountSaved: 0,
      },
    });

    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const fetchEstimate = async (
  userIDs,
  expectedTimeForWorkInHr = 1440
) => {
  try {
    const resp = await apiCall({
      method: 'POST',
      url: `/employees/estimate`,
      data: {
        userIDs,
        expectedTimeForWorkInHr
      },
    });

    return resp;
  } catch (e) {
    console.log(e);
  }
};
