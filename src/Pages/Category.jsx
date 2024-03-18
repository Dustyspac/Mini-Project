import React from "react";
import Navbar from "../Components/Common/Navbar";
import Header from "../Components/Common/Header";
import { useQuery } from "react-query";
import { NewsList } from "../Components/News/NewsList";
import { getCategoryPage } from "../APIS/news";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

function Category() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data, isLoading, isError } = useQuery(["category", category], () => getCategoryPage(category));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  
  return (
    <>
      <Header />
      <Navbar />
        <ToggleBox>
           <p className="CurrentCategory">{category}</p>
        </ToggleBox>
      <NewsListWrapper>
        <NewsList data={data} />
      </NewsListWrapper>
    </>
  );
}

export default Category;

const NewsListWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

const ToggleBox = styled.div`
  width: 130px;
  height: 40px;
  padding: 10px;
  border: 1px solid black;
  background-color: #eae7de;
  display: flex;
  justify-content: center;
  margin-top: 8px;
  margin-left: 220px;

  .CurrentCategory {
    text-align: center;
    font-weight: bolder;
    font-size: 18px;
    margin: auto;
  }
`;
