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
          <Link to="/category?category=ALL">전체</Link>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <Link to="/category?category=SOCIETY">사회</Link>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <Link to="/category?category=ENVIRONMENT">환경</Link>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <Link to="/category?category=TECH">테크</Link>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
        <TitleBox>
          <Link to="/category?category=ETC">기타</Link>
          {/* 기능구현 이후 CustomLink로 변경 예정 */}
        </TitleBox>
      </LinkContainer>
    </NavBarContainer>
  );
}
// https://baekwon.site/api/article/category?category=TECH
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
