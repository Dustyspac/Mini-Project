import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`
});

console.log(`sfsfsdfsdfs${process.env.REACT_APP_SERVER_URL}`)

request.interceptors.request.use(
  
  function(config){
    console.log(config)
    config.headers.Authorization =`${window.sessionStorage.getItem('ACCESS_TOKEN')}`;
    return config
  },

  function(error){
    console.log(error);
    return Promise.request(error);
  }

)

request.interceptors.response.use(
  function(response){
    console.log(response)
    return response
  },
  
  function(error){
    console.log(error);
    return Promise.reject(error);
  }

);

export default request;