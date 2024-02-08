import axios from 'axios';

const baseUrl = 'https://russianwarship.rip/api/v2';

export const fetchStats = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/statistics`,
  };

  return (await axios(configObj)).data;
};
