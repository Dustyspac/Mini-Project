import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

request.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `${window.sessionStorage.getItem(
      "ACCESS_TOKEN"
    )}`;
    return config;
  },

  function (error) {
    return Promise.request(error);
  }
);

request.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default request;
