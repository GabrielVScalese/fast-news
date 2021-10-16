import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Line from "./components/Line/Line";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import Button from "./components/Button/Button";
import Posts from "./components/Posts/Posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://api.newscatcherapi.com/v2/search?q=Tesla",
        {
          headers: {
            "x-api-key": "NhbQCLi7fsyn-MvErFRm3QMozDlD1ymVzfhUcG7c95Q",
          },
        }
      );

      setPosts(data["articles"]);
    };

    fetchPosts();
  }, []);

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
          <Button>Search</Button>
        </div>

        <div className="posts-container">
          {" "}
          <Posts posts={posts} />
        </div>
      </div>
    </>
  );
};

export default App;
