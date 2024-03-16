import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  // const handleAllClick =()=>{}
  return (
    <NavBarContainer>
      <LinkContainer>
        <TitleBox>
          <CustomLink to="/category?category=ALL">전체</CustomLink>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <CustomLink to="/category?category=SOCIETY">사회</CustomLink>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <CustomLink to="/category?category=ENVIRONMENT">환경</CustomLink>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <CustomLink to="/category?category=TECH">테크</CustomLink>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <CustomLink to="/category?category=ETC">기타</CustomLink>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
      </LinkContainer>
    </NavBarContainer>
  );
}
export default Navbar;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-size: 18px;
  &:visited {
    color: black;
  }
`;

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
