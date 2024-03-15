import React from "react";
import SearchIcon from "../../Assets/search_icon.svg";
import UserIcon from "../../Assets/user_icon.svg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useraccess } from "../../APIS/auth";

function Header() {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery(
    "checkAuthType",
    useraccess
    // {
    //   onSuccess: (res) => {
    //     console.log(res);
    //   },
    //   onError: (err) => {
    //     console.log("aaaaaaaaaaaaa", err);
    //   },
    // }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const authType = data?.authType;

  const logout = () => {
    // window.sessionStorage.removeItem("ACCESS_TOKEN");
    // navigate("/login");
  };

  return (
    <HeaderContainer>
      <WriteButtonContainer>
        {/* TODO : 관리자 여부에 따라 visible 여부 달라짐 */}
        {authType === "ADMIN" && (
          <StyledLink to="/article">
            <WriteButton>글쓰기</WriteButton>
          </StyledLink>
        )}
      </WriteButtonContainer>
      <StyledLink to="/">
        <Logo>NEWNATION</Logo>
      </StyledLink>
      <IconContainer>
        <IconBox>
          {/* 추후 Link로 변경 예정 */}
          <Icon src={SearchIcon} alt="searchIcon" />
        </IconBox>
        {/* TODO : 로그인 하면 로그아웃 버튼으로 바껴야됨 */}
        {authType ? (
          <button onClick={logout}>로그아웃</button>
        ) : (
          <StyledLink to="/login">
            <IconBox>
              <Icon src={UserIcon} alt="userIcon" />
            </IconBox>
          </StyledLink>
        )}
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

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
