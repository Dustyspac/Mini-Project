import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import styled from "styled-components";
import { getNewsDetail } from "../APIS/news";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

function DetailPage() {

  const navigate = useNavigate();
  const params = useParams();
  console.log('articleId', params.articleId)
  const {isLoading,isError,data} = useQuery("detailKey",()=>getNewsDetail(params.articleId))
  console.log('data7777777777',data);
  
  
  console.log('isLoding', isLoading);
  console.log('isError', isError);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const handleGoback = () => {
    navigate("/");
  };


  return (
    <>
      <Header />
      <Container>
        <TitleBox>
          <button>삭제</button>
          <button>수정</button>
          <p className="Category">{data?.category}</p>
          <div className="InboxContents">
            <h2 className="title">{data?.title}</h2>
            <p>{data.createdAt}</p>
          </div>
        </TitleBox>
      </Container>
      <ImageWrap>
        <img src={`${data.imgUrl}`} alt="썸네일"/>
      </ImageWrap>
      <NewsContents>
      <p>{data.content}</p>
      <button onClick={handleGoback}>돌아가기</button>
      </NewsContents>
    </>
  );
}

export default DetailPage;


const Container = styled.div`
  width: 3500px;
  height: 250px;
  margin-top: 30px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.div`
  width: fit-content;
  margin-top: 45px;
  font-weight: bold;
  text-align: center;
  margin-right: 970px;
`;

const ImageWrap = styled.div`
display: flex;
justify-content: center;

.img {
width: 50%;
height: 50%;
}
`;

const NewsContents = styled.div`
  width: 1000px;
  display: contents;
  justify-content: center;
  margin-top: 20px;
  text-align: center;


  `