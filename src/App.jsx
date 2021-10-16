import React from "react";

import "./App.css";
import Line from "./components/Line/Line";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";

const App = () => {
  return (
    <>
      <div className="title-box">
        <Header />
        <div className="line-container">
          <Line />
        </div>
      </div>
      <div className="news-posts-box">
        <div className="search-post-container">
          <SearchInput />
        </div>
      </div>
    </>
  );
};

export default App;
