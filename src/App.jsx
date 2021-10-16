import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Line from "./components/Line/Line";
import Header from "./components/Header/Header";
import SearchPost from "./components/SearchPost/SearchPost";
import Posts from "./components/Posts/Posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (search) => {
    const { data } = await axios.get(
      `https://api.newscatcherapi.com/v2/search?q=${search}&page_size=10`,
      {
        headers: {
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      }
    );

    setPosts(data["articles"]);
  };

  useEffect(() => {
    fetchPosts("Tesla");
  }, []);

  const handlePostsClick = (search) => {
    if (search === "") window.alert("Type a keyword!");
    fetchPosts(search);
  };

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
          <SearchPost handlePostsClick={handlePostsClick} />
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
