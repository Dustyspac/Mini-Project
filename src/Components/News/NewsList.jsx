import React from "react";
import styled from "styled-components";
import { getMainPage } from "../../APIS/news";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function NewsList({data}) {
//   const limitTitle = (title, limit = 20) => {
//     if (title.length > limit) {
//         return title.substring(0, limit) + '...';
//     } else {
//         return title;
//     }
// };

  return (
    <BoxContainer>
      {data?.map((item) => {
        return (
          <Box key={item.articleId}>
            <div className="Contents">
              <ImageBox imgeUrl={item.imgUrl}/>
              <CustomLink to={`/article/${item.articleId}`} key={item.articleId}>
                <Text>상세보기</Text>
              </CustomLink>
              <Contents>
              <h2 className="title">{(item.title)}</h2>
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

export { NewsList };

const BoxContainer = styled.div`
  padding: 30px 0 0 0;
  width: 100%;
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
const Text = styled.p`
  margin-left: 20px;
`;
const Box = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 500px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  width: max-content;
  width: 400px;
  height: 280px;
  background-image: url(${props => props.imgeUrl});
  background-size: 400px 300px;
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
`