import axios from "axios";
import request from "../APIS/Axios/api";

const Axios = axios.create({
  // API 통신을 위해 axios 인스턴스 생성
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/article`,
  // 기본이 되는 api 주소 (JSON 서버)
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
};

export const getNewsDetail = async (articleId) => {
  const { data } = await request.get(`/api/article/${articleId}`);
  return data;
};

// 게시글 delete
export const deleteNews = async (articleId) => {
  await request.delete(`/api/article/${articleId}`);
};
