import React from "react";
import SearchIcon from "../../Assets/search_icon.svg";
import UserIcon from "../../Assets/user_icon.svg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthInfo} from '../../Redux/modules/user';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authType = useSelector(state=> state.user.authType)

  const logout = () => {
    window.sessionStorage.clear();
    dispatch(clearAuthInfo());
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <WriteButtonContainer>
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
          <Icon src={SearchIcon} alt="searchIcon" />
        </IconBox>
        {authType ? (
          <Button onClick={logout}>로그아웃</Button>
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
const Button = styled(WriteButton)`
  width: 75px;
`
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
