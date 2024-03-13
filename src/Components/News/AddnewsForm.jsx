import React from "react";
import styled from "styled-components";
import SelectTheme from "./SelectTheme";

function AddNewsForm() {
  return (
    <Container>
      <InputBox>
        <Input type="text" placeholder="제목을 입력하세요" />
        <SelectTheme />
        <Input type="text" placeholder="이미지 URL을 입력하세요" />
        <Textarea type="text" placeholder="내용을 입력하세요" />
      </InputBox>
      <BtnContainer>
        <Btn>나가기</Btn>
        <Btn>업로드</Btn>
      </BtnContainer>
    </Container>
  );
}

export default AddNewsForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 80px;
`;

const InputBox = styled.div`
  margin: 18px 0 30px 0;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  height: 54px;
  margin-top: 17px;
  padding-left: 12px;
`;

const Textarea = styled.textarea`
  height: 240px;
  font-size: 14px;
  margin-top: 17px;
  padding: 12px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 12px;
`;

const Btn = styled.button`
  width: 320px;
  height: 60px;
  color: white;
  background-color: #141414;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 18px;

  &:hover {
    background-color: #8a8a8a;
  }
`;
