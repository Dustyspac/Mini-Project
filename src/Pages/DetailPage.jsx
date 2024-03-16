import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import styled from "styled-components";
import { getNewsDetail } from "../APIS/news";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  console.log("articleId", params.articleId);
  const { isLoading, isError, data } = useQuery("detailKey", () => getNewsDetail(params.articleId));
  console.log("data7777777777", data);

  console.log("isLoding", isLoading);
  console.log("isError", isError);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const handleGoback = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
          <div className="InboxContents">
          <p className="Category">{data?.category}</p>
            <h2 className="title">{data?.title}</h2>
            <p>{data.createdAt}</p>
        <Button>삭제</Button>
        <Button>수정</Button>
          </div>
      </Container>
      <NewsContents>
        <Img src={`${data.imgUrl}`} alt="썸네일" />
        <p>{data.content}</p>
        <Button onClick={handleGoback}>돌아가기</Button>
      </NewsContents>
    </>
  );
}

export default DetailPage;

const Button = styled.button`
  all: unset;
  width: 70px;
  height: 30px;
  border: 1px solid #141414;
  /* display: none; */
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #ccc8aa;
  }
`;

const Img = styled.img`
  width: 800px;
  height: auto;
  margin-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 30px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  
  .InboxContents{
    width: fit-content;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
  }
`;

const TitleBox = styled.div`

`;

const NewsContents = styled.div`
  width: 1100px;
  margin-top: 20px;
  text-align: center;
  margin: auto;
  font-size: 15px;
  line-height: 24px;
`;
