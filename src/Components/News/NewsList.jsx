import React from "react";
import styled from "styled-components";
import NewsBox from "./NewsBox";


function NewsList() {

  return (
    <BoxContainer>
      <NewsBox />
      <NewsBox />
      <NewsBox />
    </BoxContainer>
  );
}

export default NewsList;

const BoxContainer = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;
