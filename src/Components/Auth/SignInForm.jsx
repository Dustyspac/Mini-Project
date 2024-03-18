import React, { Fragment, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import { authsignin } from '../../APIS/auth';
import {useDispatch} from 'react-redux';
import {userActions} from '../../Redux/modules/user';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email:'',
    password:'',
  });

  const {email, password} = form;

  const onChangeForm = (e) => {
    setForm((prev)=> ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  const {mutate:loginMutation} = useMutation(authsignin,{
    onSuccess: response => {
      window.sessionStorage.setItem('ACCESS_TOKEN', response.token);
      alert('로그인 성공 ><');
      navigate('/')
    },onError:(error) => {
      alert(`이메일은 ${error.response.data.data.email}. 비밀번호는 ${error.response.data.data.password}.`);
    }
  })

  const onHandleClickLogin = () => {
    loginMutation(form);
}

  return (
    <Fragment>
      <Container>
        <H1 onClick={()=>{
          navigate('/')
        }}>NEWNATION</H1>
        <Line></Line>
        <InputBox>
        <Input  type="text" onChange={onChangeForm} id='email' value={email} placeholder='이메일'/>
        <Input type="password" onChange={onChangeForm} id='password' value={password} placeholder='비밀번호'/>
        </InputBox>
        <LogInBtn onClick={onHandleClickLogin}>로그인</LogInBtn>
        <DecorationDiv onClick={()=>{navigate('/register')}}>회원가입하기</DecorationDiv>
      </Container>
    </Fragment>
  )
}

export default SignInForm