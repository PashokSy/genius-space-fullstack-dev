import {axiosRequest} from '.';

export const fetchTerms = async () => {
  try {
    return await axiosRequest({
      url: 'terms/ua',
    });
  } catch (error) {
    console.error(error);
  }
};
