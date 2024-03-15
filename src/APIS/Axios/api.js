import axios from "axios";




const request = axios.create({
  baseURL: 'http://3.34.197.152/api/user/login',
});

request.interceptors.request.use(
  
  function(config){
    console.log(config)
    config.headers.Authorization =`Bearer ${window.sessionStorage.getItem('ACCESS_TOKEN')}`;
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
    return Promise.reject(error);
  }

)

export default request;