import React, { Fragment } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InputBox = styled.div`
  margin: 18px 0 30px 0;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 400px;
  height: 40px;
  margin-top: 17px;
`
const LogInBtn = styled.button`
  width: 410px;
  height: 50px;
  color: white; 
  background-color: #141414;
  border: none;
  border-radius: 4px;
  margin-top: 20px;

  &:hover{
    background-color:  #8A8A8A;
  }
`
const Line = styled.hr`
  border: 1px solid #141414;
  width: 400px;
`
const H1 = styled.h1`
  margin: 5px;
  font-size: 47px;
  color: #141414;
`
const DecorationDiv = styled.div`
  text-decoration: underline;
  font-size: 13px;
  margin-top: 23px;
  cursor: pointer;
  color: #141414;
`
function SignInForm() {
  return (
    <Fragment>
      <Container>
        <H1>NEWNATION</H1>
        <Line></Line>
        <InputBox>
        <Input type="text" placeholder='이메일'/>
        <Input type="text" placeholder='비밀번호'/>
        </InputBox>
        <LogInBtn>로그인</LogInBtn>
        <DecorationDiv>회원가입하기</DecorationDiv>
      </Container>
    </Fragment>
  )
}

export default SignInForm