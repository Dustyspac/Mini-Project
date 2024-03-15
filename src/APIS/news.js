import axios from "axios";

const Axios = axios.create({
  // API 통신을 위해 axios 인스턴스 생성
  baseURL: "https://baekwon.site/api/article", // 기본이 되는 api 주소 (JSON 서버)
});

// MainPage 조회
const getMainPage = async () => {
  const { data } = await Axios.get("").catch((err) => console.log(err));
  console.log(data);
  return data;
};

export const getNewsDetail = async (articleId) => {
  try {
    const res = await Axios.get(`/${articleId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { getMainPage };
