import axios from "axios";


export const authsignup = async ({ email, password, nickname }) => {
  const { data } = await axios.post('http://3.34.197.152/api/user/signup', { email, password, nickname });
  console.log(data);
  return data;
}


export const authsignin = async({email, password}) => {
  const { data } = await axios.post('http://3.34.197.152/api/user/login', { email, password});
  console.log(data);
  return data;
  }