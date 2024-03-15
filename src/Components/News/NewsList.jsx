import React from "react";
import styled from "styled-components";
import { getMainPage } from "../../APIS/news";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function NewsList({data}) {
  return (
    <BoxContainer>
      {data?.map((item) => {
        return (
          <Box key={item.articleId}>
            <div className="Contents">
              <ImageBox />
              <CustomLink to={`/${item.articleId}`} key={item.articleId}>
                <p>상세보기</p>
              </CustomLink>
              <Contents>
                <h2 className="title">{item.title}</h2>
                <div className="InboxContents">
                  <p>{item.createdAt}</p>
                  <p className="Category">{item.category}</p>
                </div>
              </Contents>
            </div>
          </Box>
        );
      })}
    </BoxContainer>
  );
}

export { NewsList };

const BoxContainer = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-size: 15px;
  &:visited {
    color: black;
  }
`;

const Box = styled.div`
  border: 1px solid black;
  position: relative;
  width: 400px;
  height: fit-content;
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