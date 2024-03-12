import React from "react";
import Navbar from "../Components/Common/Navbar";
import Header from "../Components/Common/Header";
import NewsList from "../Components/News/NewsList";
import styled from "styled-components";

function Category() {
  return (
    <>
      <Header />
      <Navbar />
      <Toggle>
         <p2 className="CurrentCategory">현재 카테고리</p2>
      </Toggle>
      <NewsListWrapper>
        <NewsList />
      </NewsListWrapper>
    </>
  );
}

export default Category;

const NewsListWrapper = styled.div`
  margin-top: 10px;
`;

const Toggle = styled.div`
  margin-bottom: 30px;
  margin-left: 660px;
  margin-top: 60px;
  width: 120px;
  height: 30px;
  padding: 10px;
  border: 1px solid black;
  background-color: #eae7de;
  text-align: center;

  .CurrentCategory {
    font-weight: bolder;
    font-size: 18px;
  }
`;
