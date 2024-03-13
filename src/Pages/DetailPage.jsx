import React from "react";
import Header from "../Components/Common/Header";
import NewsBox from "../Components/News/NewsBox";
import styled from "styled-components";

function DetailPage() {
  return (
    <>
      <Header />
      <Container>
        <TitleBox>
          <p className="Category">테크</p>
          <div className="InboxContents">
            <h2 className="title">개발자들의 취업 성지 "원티드랩"</h2>
            <p>업로드 날짜 : 24.03.12</p>
          </div>
        </TitleBox>
      </Container>
      <NewsImg>
        <NewsBox />
      </NewsImg>
      <NewsContents>
        <h3>What is Lorem Ipsum? </h3>
        <p>
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          <br />
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          <br />
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <br />
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          <br />
          and more recently with desktop publishing software like Aldus PageMaker
          <br />
          including versions of Lorem Ipsum.
        </p>
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

const NewsImg = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const NewsContents = styled.div`
  margin-top: 20px;
  text-align: center;
`;
