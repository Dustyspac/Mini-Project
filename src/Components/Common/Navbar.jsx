import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavBarContainer>
      <LinkContainer>
        <TitleBox>
          <p5>전체</p5>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <p5>사회</p5>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <p5>환경</p5>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <p5>테크</p5>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <p5>기타</p5>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
      </LinkContainer>
    </NavBarContainer>
  );
}

export default Navbar;

const TitleBox = styled.div`
  font-weight: bold;
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
`;

const NavBarContainer = styled.div`
  margin-top: 40px;
  height: 80px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
