import axios from "axios";
import request from '../APIS/Axios/api';


export const authsignup = async ({ email, password, nickname }) => {
  const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user/signup`, { email, password, nickname });
  console.log(data);
  return data;
}


export const authsignin = async({email, password}) => {
  const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/user/login`, { email, password});
  console.log(data);
  return data;
  }

export const useraccess = async() => {
  const { data } = await request.get('/api/user');
  return data;
}