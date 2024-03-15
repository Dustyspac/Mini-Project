import axios from "axios";

const Axios = axios.create({
  // API 통신을 위해 axios 인스턴스 생성
  baseURL: "https://baekwon.site/api/article", // 기본이 되는 api 주소 (JSON 서버)
});

// MainPage 조회
export const getMainPage = async () => {
  const { data } = await Axios.get("").catch((err) => console.log(err));
  return data;
};

// CategoryPage 조회
export const getCategoryPage = async (category) => {
  try {
    const { data } = await Axios.get(`/category`, {
      params: {
        category: category,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


export const getNewsDetail = async (articleId) => {
  const { data } = await Axios.get(`/${articleId}`)
  console.log("111111111",data)
  return data;
};

