import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import DetailPage from "../Pages/DetailPage";
import Category from "../Pages/Category";
import SignUpForm from '../Components/Auth/SignUpForm'
import SignInForm from '../Components/Auth/SignInForm'
import { useSelector } from 'react-redux';
import AddNews from "../Pages/AddNews";

const Router = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
      <Routes>
         {isAuthenticated ? (
        <>
          <Route path="/article/:articleId" element={<DetailPage />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<SignInForm />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
        <Route path="/" element={<MainPage />} />
        <Route path="/:category" element={<Category />} />
        {!isAuthenticated && <Route path="/login" element={<SignInForm />} />}
        {!isAuthenticated && <Route path="/register" element={<SignUpForm />} />}
        <Route path="/article" element={<AddNews />} />
      </Routes>
  );
};

export default Router;
 