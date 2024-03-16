import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import DetailPage from "../Pages/DetailPage";
import Category from "../Pages/Category";
import SignUpForm from "../Components/Auth/SignUpForm";
import SignInForm from "../Components/Auth/SignInForm";
import AddNews from "../Pages/AddNews";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:category" element={<Category />} />
      <Route path="/:articleId" element={<DetailPage />} />
      <Route path="/register" element={<SignUpForm />} />
      <Route path="/login" element={<SignInForm />} />
      <Route path="/article" element={<AddNews />} />
    </Routes>
  );
};

export default Router;
