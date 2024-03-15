import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import styled from "styled-components";
import { getNewsDetail } from "../APIS/news";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

function DetailPage() {

const [ news, setNews] = useState(null);
const params = useParams();

// const { isLoading, isError, data} = useQuery("detailKey",()=>getNewsDetail(params.articleId))
// console.log('222222222222',data)
const { isLoading, isError, data} = useQuery("detailKey",getNewsDetail)

// useEffect(()=>{
//   const check = data?.find(item => item.id === params.articleId);
//   setNews(check);
//   console.log('ddd',check);
// },[data,params.articleId,isLoading,isError])




// const navigate = useNavigate();
// const [ detail, setDetail ] = useState()

// useEffect(() => {
//   (async () => {
//   const res = await getNewsDetail(articleId)
// setDetail(res)})()
// }, [articleId])
// console.log(detail);

//   const HandleGoback = () => {
//     navigate("/");
//   };


  return (
    <>
    
      {/* <Header key={articleId}/>
      <Container>
        <TitleBox>
          <p className="Category">{category}</p>
          <div className="InboxContents">
            <h2 className="title">{title}</h2>
            <p>{createdAt}</p>
          </div>
        </TitleBox>
      </Container>
      <NewsContents>
      <p>{content}</p>
      <button onClick={HandleGoback}>돌아가기</button>
      </NewsContents> */}
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
