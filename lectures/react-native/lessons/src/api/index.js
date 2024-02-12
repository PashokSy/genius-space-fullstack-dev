import axios from 'axios';

const baseUrl = 'https://russianwarship.rip/api/v2/';

export const axiosRequest = async ({
  method = 'GET',
  url,
  params = {},
  responseType = 'json',
  data = undefined,
  headers = {'Content-Type': 'application/json'},
}) => {
  let response;

  try {
    response = await axios({
      method,
      url,
      baseURL: baseUrl,
      params,
      responseType,
      data,
      headers,
    });
  } catch (error) {
    throw error;
  }

  return response.data;
};
