import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import DetailPage from "../Pages/DetailPage";
import Category from "../Pages/Category";
import SignUpForm from '../Components/Auth/SignUpForm'
import SignInForm from '../Components/Auth/SignInForm'
import { useSelector } from 'react-redux';

const Router = () => {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:articleId" element={<DetailPage />} />
        {/* <Route path='/register' element={<SignUpForm/>}/>
        <Route path='/login' element={<SignInForm/>}/> */}
        {!isAuthenticated && <Route path="/login" element={<SignInForm />} />}
      {!isAuthenticated && <Route path="/register" element={<SignUpForm />} />}
      </Routes>
  );
};

export default Router;
