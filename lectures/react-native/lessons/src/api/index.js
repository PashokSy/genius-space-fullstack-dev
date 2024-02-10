import axios from 'axios';

axios.defaults.baseUrl = 'https://russianwarship.rip/api/v2';

export const axiosRequest = async ({
  method = 'GET',
  url,
  params = {},
  responseType = 'json',
  data = undefined,
  headers = {'Content-Type': 'application/json'},
}) => {
  const response = await axios({
    method,
    url,
    baseURL: axios.defaults.baseURL,
    params,
    responseType,
    data,
    headers,
  });

  return response.data;
};
