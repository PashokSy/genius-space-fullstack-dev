import {axiosRequest} from '.';

export const fetchStats = async () => {
  try {
    return await axiosRequest({
      url: 'statistics/latest',
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchStatsDate = async date => {
  try {
    return await axiosRequest({
      url: `statistics/${date}`,
    });
  } catch (error) {
    console.error(error);
  }
};
