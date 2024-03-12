import React from "react";
import GithubIcon from "../../Assets/github_icon.svg";
import styled from "styled-components";

const FooterStyled = styled.footer`
  padding: 1.5rem 0;

  .footer_wrapper,
  .copyright {
    max-width: 90rem;
    width: calc(100% - 3rem);
    margin: 0 auto;
    display: flex;
    flex-flow: row;
    gap: 1.5rem;
  }

  .copyright {
    margin: 1.5rem auto 0;
    border-top: 1px solid gray;
    padding: 1rem 0 0;
  }

  .part {
    width: 30%;
    display: flex;
    flex-flow: column;

    .title {
      font-weight: 700;
      margin: 0 0 0.75rem;
    }

    .margin {
      font-weight: 400;
      margin: 0 0 1.5rem;
    }

    > p {
      font-weight: 700;
      margin: 0 0 0.5rem;
    }
  }

  .team {
    display: flex;
    align-items: center;
    flex-flow: row;
    gap: 0.75rem;

    &:nth-of-type(1) {
      margin: 0 0 0.5rem;
    }
  }

  a {
    color: #141414;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ccc8aa;
      text-decoration: underline;
    }
  }

  @media (max-width: 64rem) {
    .footer_wrapper,
    .copyright {
      flex-flow: column;
      gap: 0;
    }

    .part {
      width: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterStyled>
        <div className="footer_wrapper">
          <div className="part">
            <p className="title">Team Name</p>
            <p className="margin">NEWNATION COMPANY</p>
            <p className="title">Project Term</p>
            <p className="margin">2024-03-12 ~ 03-18</p>
          </div>

          <div className="part">
            <p className="title">GitHub</p>
            <div className="team">
              <p>FE</p>
              <img src={GithubIcon} alt="searchIcon" />
              <a href="https://github.com/sintobury">김기현</a>
              <img src={GithubIcon} alt="searchIcon" />
              <a href="https://github.com/eg1377">이예진</a>
              <img src={GithubIcon} alt="searchIcon" />
              <a href="https://github.com/pearl-sea">정예진</a>
            </div>
            <div className="team">
              <p>BE</p>
              <img src={GithubIcon} alt="searchIcon" />
              <a href="https://github.com/C5ng">김대용</a>
              <img src={GithubIcon} alt="searchIcon" />
              <a href="https://github.com/Jeonni">김엄지</a>
              <img src={GithubIcon} alt="searchIcon" />
              <a href="https://github.com/Jung-seo">황승미</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>NEWNATION &copy; Copyright 2024. All rights reserved.</p>
        </div>
      </FooterStyled>
    </>
  );
};
export default Footer;
