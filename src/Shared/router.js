import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import DetailPage from "../Pages/DetailPage";
import Category from "../Pages/Category";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:articleId" element={<DetailPage />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
