import React, { useState } from "react";
import Header from "../Components/Common/Header";
import styled from "styled-components";
import { deleteNews, editNews, getNewsDetail } from "../APIS/news";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  Btn,
  BtnContainer,
  FormContainer,
  Input,
  InputBox,
  Label,
  Textarea,
} from "../Components/News/AddnewsForm";
import SelectCustom from "../Components/News/SelectCustom";

function DetailPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams();

  const options = [
    { value: "SOCIETY", label: "사회" },
    { value: "ENVIRONMENT", label: "환경" },
    { value: "TECH", label: "테크" },
    { value: "ETC", label: "기타" },
  ];

  const { isLoading, isError, data } = useQuery("detailKey", () =>
    getNewsDetail(params.articleId)
  );

  const etcOption = options.find(
    (option) => option.value === (data ? data.category : "ETC")
  );

  const [isEdit, setIsEdit] = useState(false);

  const [newsData, setNewsData] = useState({
    title: "",
    category: { value: "ETC", label: "기타" },
    imgUrl: "",
    content: "",
  });
  console.log("newsData", newsData);
  const deleteMutation = useMutation((articleId) => deleteNews(articleId), {
    onSuccess: () => {
      queryClient.invalidateQueries("detailKey");
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const editMutation = useMutation(
    (updatedPost) => editNews({ articleId: data.articleId, updatedPost }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("detailKey");
        alert("수정 성공");
        initFunc();
        setIsEdit(!isEdit);
      },
    }
  );

  const handleNewsDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const handleGoback = () => {
    navigate("/");
  };

  //AddNewsForm

  const initFunc = () => {
    setNewsData({
      title: "",
      category: { value: "ETC", label: "기타" },
      imgUrl: "",
      content: "",
    });
  };

  const handleNavigateClick = () => {
    setIsEdit(!isEdit);
    initFunc();
  };

  // 전체 내용 post
  const handleEditClick = async () => {
    try {
      const updatedPost = {
        title: newsData.title,
        imgUrl: newsData.imgUrl,
        category: newsData.category.value,
        content: newsData.content,
      };
      editMutation.mutate(updatedPost);
    } catch (error) {
      console.log("수정요청 에러발생", error);
    }
  };

  const handleEditMode = () => {
    setIsEdit(!isEdit);
    // data를 넘겨?
    setNewsData({
      title: data.title,
      category: etcOption,
      imgUrl: data.imgUrl,
      content: data.content,
    });
  };

  const handleSelectChange = (selectedOption) => {
    const selectedCategory = options.find(
      (option) => option.value === selectedOption.value
    );
    setNewsData({ ...newsData, category: selectedCategory });
  };

  return (
    <>
      <Header />
      {isEdit ? (
        <FormContainer>
          <InputBox>
            <Input
              type="text"
              value={newsData.title}
              onChange={(e) =>
                setNewsData({ ...newsData, title: e.target.value })
              }
              placeholder="제목을 입력하세요"
            />
            <SelectCustom
              options={options}
              category={newsData.category}
              onChange={handleSelectChange}
            />
            <Label htmlFor="imgFile">
              {newsData.imgUrl ? "이미지는 변경 불가합니다" : "이미지를 선택해주세요"}
            </Label>
            <Textarea
              type="text"
              value={newsData.content}
              onChange={(e) =>
                setNewsData({ ...newsData, content: e.target.value })
              }
              placeholder="내용을 입력하세요"
            />
          </InputBox>
          <BtnContainer>
            <Btn onClick={handleNavigateClick}>나가기</Btn>
            <Btn onClick={handleEditClick}>수정</Btn>
          </BtnContainer>
        </FormContainer>
      ) : (
        <>
          <Container>
            <div className="InboxContents">
              <p className="Category">{data?.category}</p>
              <h2 className="title">{data?.title}</h2>
              <p>{data.createdAt}</p>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleNewsDelete(data.articleId);
                }}
              >
                삭제
              </Button>
              <Button onClick={handleEditMode}>수정</Button>
            </div>
          </Container>
          <NewsContents>
            <Img src={`${data.imgUrl}`} alt="썸네일" />
            <p>{data.content}</p>
            <Button onClick={handleGoback}>돌아가기</Button>
          </NewsContents>
        </>
      )}
    </>
  );
}

export default DetailPage;

const Button = styled.button`
  all: unset;
  width: 70px;
  height: 30px;
  border: 1px solid #141414;
  /* display: none; */
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #ccc8aa;
  }
`;

const Img = styled.img`
  width: 800px;
  height: auto;
  margin-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 30px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: center;

  .InboxContents {
    width: fit-content;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
  }
`;

const NewsContents = styled.div`
  width: 1100px;
  margin-top: 20px;
  text-align: center;
  margin: auto;
  font-size: 15px;
  line-height: 24px;
`;
