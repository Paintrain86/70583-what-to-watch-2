import axios from 'axios';

const createApi = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const handleSuccess = (response) => response;

  const handleError = (err) => {
    if (err.response.status === 404) {
      return `Page is not found`;
    }

    return err;
  };

  api.interceptors.response.use(handleSuccess, handleError);

  return api;
};

export default createApi;
