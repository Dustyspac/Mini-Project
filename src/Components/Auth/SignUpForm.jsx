import React, { Fragment } from 'react'
import styled from 'styled-components'
import { authsignup } from '../../APIS/auth';
import { useMutation } from 'react-query'
import {useNavigate} from 'react-router-dom';



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
  const navigate = useNavigate();
  const [email, setUseremail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [alertMessage, setAlertMessage] = React.useState({
    email:'',
    pw:"",
    pwcheck:""
});
  const [checkpassword, setCheckpassword] = React.useState('');
  
  const {mutate: singupMutaion} = useMutation(authsignup,{
    onSuccess:() =>{
      alert('회원가입 성공');
      navigate('/login');
    },onError:(error) => {
      alert(error.request.responseText);
      console.log(error);
    }
  })

  const HandleSignup = () => {
    if (password !== checkpassword) {
      setAlertMessage(prevState => ({
        ...prevState,
        pwcheck: '비밀번호가 일치하지 않습니다. 다시 확인해주세요.'
      }));
      return; 
    }
  
    singupMutaion({email,password,nickname})
  }

  const validatePassword = (inputPassword) =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_~]).{8,15}$/;
    if(!passwordRegex.test(inputPassword)){
      setAlertMessage(prevState => ({
        ...prevState,
        pw: '비밀번호는 영어 대소문자, 숫자, 특수문자를 포함한 8~15자리여야 합니다.'
      }));
    } else {
      setAlertMessage(prevState => ({
        ...prevState,
        pw: '' 
      }));
    }
  }
  

  const handlePasswordchange = (e) => {
    const newPassword = e.target.value.trim(); 
      setPassword(newPassword);
      validatePassword(newPassword);
      console.log(password);
  }




  
  return ( 
    <Fragment>
      <Container>
        <H1 onClick={()=>{
          navigate('/')
        }}>NEW-<br></br>NATION</H1>
        <InputBox>
        <Input type="text" value={email} onChange={(e)=>{setUseremail(e.target.value)}} placeholder='이메일'/>
        <Input type="password" value={password} onChange={handlePasswordchange} placeholder='비밀번호(영어 대소문자, 숫자, 특수문자를 포함한 8~15자리)'/>
          {alertMessage.pw && <span style={{ color: 'red', fontSize: '14px' }}>{alertMessage.pw}</span>}
        <Input type="password" value={checkpassword} onChange={(e)=>{setCheckpassword(e.target.value)}} placeholder='비밀번호 확인'/>
        {alertMessage.pwcheck && <span style={{ color: 'red', fontSize: '14px' }}>{alertMessage.pwcheck}</span>}
        <Input type="text" value={nickname} onChange={(e)=>{setNickname(e.target.value)}} placeholder='닉네임'/>
        </InputBox>
        <HoverBtn onClick={HandleSignup}>가입하기</HoverBtn>
        <HoverBtn onClick={()=>{navigate('/login')}}>로그인</HoverBtn>
      </Container>
    </Fragment>
  )
}

export default SignUpForm