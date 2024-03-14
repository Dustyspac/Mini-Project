import React from "react";
import styled from "styled-components";
import { getMainPage } from "../../APIS/news";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function NewsBox() {
  const { isLoading, isError, data } = useQuery("mainPage", getMainPage);

  return (
    <Box key={data.articleId}>
      <div className="Contents">
        <CustomLink to={`/${data.articleId}`} key={data.articleId}>
          <p>상세보기</p>
        </CustomLink>
      <ImageBox />
      <Contents>
        <h2 className="title">{data.title}</h2>
        <div className="InboxContents">
          <p>{data.createdAt}</p>
          <p className="Category">{data.category}</p>
        </div>
      </Contents>
      </div>
    </Box>
  );
}

export default NewsBox;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-size: 21px;
  &:visited {
    color: black;
  }
`;

const Box = styled.div`
  border: 1px solid black;
  position: relative;
  width: 400px;
  height: 400px;
`;

const ImageBox = styled.div`
  position: relative;
  width: max-content;
  width: 400px;
  height: 280px;
  background-image: url("https://static.wanted.co.kr/images/company/20662/ckazubyqigyqb515__1080_790.jpg");
  background-size: 400px 300px;
`;

const Contents = styled.div`
  margin-top: 22px;
  margin-left: 20px;
  margin-right: 40px;

  .title {
    margin-top: 0%;
    margin-bottom: 5px;
  }

  .InboxContents {
    display: flex;
    justify-content: space-between;
  }

  .Category {
    color: #ff6b00;
    font-weight: bold;
  }
`;
