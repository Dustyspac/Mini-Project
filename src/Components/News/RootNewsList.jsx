import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getMainPage } from "../../APIS/news";

function RootNewsList() {
  const { isLoading, isError, data } = useQuery("rootNewsList", getMainPage);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <BoxContainer>
      {data?.map((item) => {
        return (
          <Box key={item.articleId}>
            <div className="Contents">
              <ImageBox imgeUrl={item.imgUrl} />
              <CustomLink
                to={`/article/${item.articleId}`}
                key={item.articleId}
              >
                <Text>상세보기</Text>
              </CustomLink>
              <Contents>
                <h2 className="title">{item.title}</h2>
              </Contents>
              <InboxContents>
                <p>{item.createdAt}</p>
                <p className="Category">{item.category}</p>
              </InboxContents>
            </div>
          </Box>
        );
      })}
    </BoxContainer>
  );
}

export default RootNewsList;

const BoxContainer = styled.div`
  padding: 30px 0 0 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  max-width: calc((400px + 5px) * 5 - 5px); 
  margin: 0 auto; 
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

const Text = styled.p`
  margin-left: 20px;
`;

const Box = styled.div`
  border: 1px solid black;
  position: relative;
  width: 400px;
  height: 500px;
  overflow: hidden;
  height: fit-content;
`;

const ImageBox = styled.div`
  width: max-content;
  width: 400px;
  height: 280px;
  background-image: url(${props => props.imgeUrl});
  filter: grayscale(100%);
  background-size: 400px 300px;
  &:hover{
    filter: none;
  }
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;

  .title {
    text-overflow: ellipsis;
    height: 66px;
    width: 100%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    word-break: break-word;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
`;

const InboxContents = styled.div`
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .Category {
    color: #ff6b00;
    font-weight: bold;
    bottom: 10px;
  }
`;
