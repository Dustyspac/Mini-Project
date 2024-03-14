import axios from "axios";

// MainPage 조회
const getMainPage = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL} /mainpage`);
    console.log(res);
    return res;
}

// DetailPage 조회
const getDetailPage = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL} /mainpage`);
    console.log(res);
    return res;
}

// Category 조회
const getCategory = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL} /mainpage`);
    console.log(res);
    return res;
}

export { getMainPage, getDetailPage, getCategory }