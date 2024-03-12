import React from "react";
import styled from "styled-components";

function NewsBox() {
  return (
    <Box>
      <ImageBox />
      <Contents>
        <h2 className="title">개발자들의 취업 성지 "원티드랩"</h2>
        <div className="InboxContents">
          <p>업로드 날짜 (24.03.12)</p>
          <p className="Category">테크</p>
        </div>
      </Contents>
    </Box>
  );
}

export default NewsBox;

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
