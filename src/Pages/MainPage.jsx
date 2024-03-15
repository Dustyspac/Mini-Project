import React from "react";
import Navbar from "../Components/Common/Navbar";
import Header from "../Components/Common/Header";
import { NewsList } from "../Components/News/NewsList";

function MainPage() {
  return (
    <>
      <Header />
      <Navbar />
      <NewsList />
    </>
  );
}

export default MainPage;
