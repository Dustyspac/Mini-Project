import React from "react";
import Navbar from "../Components/Common/Navbar";
import Header from "../Components/Common/Header";
import RootNewsList from '../Components/News/RootNewsList'
import { NewsList } from "../Components/News/NewsList";

function MainPage() {
  return (
    <>
      <Header />
      <Navbar />
      <RootNewsList />
      <NewsList />
    </>
  );
}

export default MainPage;
