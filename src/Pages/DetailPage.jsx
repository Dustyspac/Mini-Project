import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import styled from "styled-components";
import { deleteNews, getNewsDetail } from "../APIS/news";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  Btn,
  BtnContainer,
  FormContainer,
  Input,
  InputBox,
  InputFile,
  Label,
  Textarea,
} from "../Components/News/AddnewsForm";
import SelectCustom from "../Components/News/SelectCustom";
import request from "../APIS/Axios/api";

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

  const etcOption =
    data && options.find((option) => option.value === data.category);

  const [isEdit, setIsEdit] = useState(false);

  const [imgFile, setImgFile] = useState("");
  const [newsData, setNewsData] = useState({
    title: data ? data.title : "",
    category: etcOption
      ? etcOption
      : options.find((option) => option.value === "ETC"),
    imgUrl: data ? data.imgUrl : "",
    content: data ? data.content : "",
  });

  const deleteMutation = useMutation((articleId) => deleteNews(articleId), {
    onSuccess: () => {
      queryClient.invalidateQueries("detailKey");
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleNewsDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const handleGoback = () => {
    navigate("/");
  };

  //AddNewsForm

  const handleImg = async (e) => {
    // e.preventDefault();
    let file = e.target.files[0];
    console.log("file", file);
    setImgFile(file.name);

    const formData = new FormData();
    formData.append("img", file); //이름 문제였음

    console.log("formData", formData);
    // image post
    try {
      const response = await request.post(`/api/article/img`, formData, {
        headers: {
          // Authorization: "",
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        // alert("성공적");
        setNewsData({ ...newsData, imgUrl: response.data.imgUrl }); //data.imgUrl 추가 안 함
        // console.log("response.data.imgUrl", response.data.imgUrl);
      }
      console.log("response", response);
    } catch (error) {
      console.log("에러발생", error);
    }
  };
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
      const response = await request.put(
        `/api/article/${data.articleId}`,
        updatedPost
      );
      if (response.status === 200) {
        alert("성공적");
        initFunc();
      }
      console.log("response", response);
      // navigate("/");
      setIsEdit(!isEdit);
    } catch (error) {
      console.log("수정요청 에러발생", error);
    }
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
              {imgFile ? imgFile : "이미지를 선택해주세요"}
            </Label>
            <InputFile
              id="imgFile"
              type="file"
              onChange={(e) => handleImg(e)}
            />
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
              <Button onClick={() => setIsEdit(!isEdit)}>수정</Button>
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

const TitleBox = styled.div``;

const NewsContents = styled.div`
  width: 1100px;
  margin-top: 20px;
  text-align: center;
  margin: auto;
  font-size: 15px;
  line-height: 24px;
`;
