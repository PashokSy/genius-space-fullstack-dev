import axios from 'axios';

const baseUrl = 'https://reqres.in';

export const fetchUser = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/api/user/1`,
  };

  const response = await axios(configObj);
  console.log(response.data);
};
