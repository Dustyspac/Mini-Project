import React from "react";
import Navbar from "../Components/Common/Navbar";
import Header from "../Components/Common/Header";
import { useQuery } from "react-query";
import { NewsList } from "../Components/News/NewsList";
import { getCategoryPage } from "../APIS/news";
import styled from "styled-components";
import { useSearchParams } from 'react-router-dom';

function Category() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  const { data, isLoading, isError } = useQuery(['category', category], () => getCategoryPage(category));
  console.log(searchParams.get('category'))

if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Error fetching data</div>;
  return (
    <>
    {/* 조건을 줘야할 듯 */}
      <Header />
      <Navbar />
      <Toggle>
         <p2 className="CurrentCategory">{category}</p2>
      </Toggle>
      <NewsListWrapper>
        <NewsList data={data} />
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
