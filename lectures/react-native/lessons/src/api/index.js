import axios from 'axios';

const baseUrl = 'https://russianwarship.rip/api/v2';

export const fetchStats = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/statistics/latest`,
  };

  return (await axios(configObj)).data;
};

export const fetchStatsDate = async date => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/statistics/${date}`,
  };

  return (await axios(configObj)).data;
};

export const fetchTerms = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/terms/ua`,
  };

  return (await axios(configObj)).data;
};
