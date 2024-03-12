import React from "react";
import SearchIcon from "../../Assets/search_icon.svg";
import UserIcon from "../../Assets/user_icon.svg";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <WriteButtonContainer>
        {/* 관리자 여부에 따라 visible 여부 달라짐 */}
        <WriteButton>글쓰기</WriteButton>
      </WriteButtonContainer>
      <Logo>NEWNATION</Logo>
      <IconContainer>
        <IconBox>
          {" "}
          {/* 추후 Link로 변경 예정 */}
          <Icon src={SearchIcon} alt="searchIcon" />
        </IconBox>
        <IconBox>
          <Icon src={UserIcon} alt="userIcon" />
        </IconBox>
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 42px 0;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 44px;
  font-weight: 900;
  text-align: center;
`;
const WriteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const WriteButton = styled.button`
  all: unset;
  width: 68px;
  height: 48px;
  border: 1px solid #141414;
  /* display: none; */
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #ccc8aa;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #141414;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #ccc8aa;
  }
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
