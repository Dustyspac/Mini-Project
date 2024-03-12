import React, { Fragment } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 180px;
`

const InputBox = styled.div`
  margin: 18px 0 30px 0;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 520px;
  height: 54px;
  margin-top: 17px;
`

const HoverBtn = styled.button`
  width: 530px;
  height: 60px;
  color: white; 
  background-color:  #141414;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 18px;

  &:hover{
    background-color:  #8A8A8A;
  }
`

const H1 = styled.h1`
  margin: 5px;
  font-size: 80px;
  font-weight: 700;
  color: #141414;
`


function SignUpForm() {
  return (
    <Fragment>
      <Container>
        <H1>NEW-<br></br>NATION</H1>
        <InputBox>
        <Input type="text" placeholder='이메일'/>
        <Input type="text" placeholder='비밀번호'/>
        <Input type="text" placeholder='비밀번호 확인'/>
        <Input type="text" placeholder='닉네임'/>
        </InputBox>
        <HoverBtn>가입하기</HoverBtn>
        <HoverBtn>로그인</HoverBtn>
      </Container>
    </Fragment>
  )
}

export default SignUpForm