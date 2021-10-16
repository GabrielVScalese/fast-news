import React from "react";

import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <img src={post["media"]} />
      <div className="content-container">
        {" "}
        <h1>
          <a href={post["link"]} about={post["summary"]}>
            {post["title"]}
          </a>
        </h1>
        <h2>{post["summary"]}</h2>
        <h3>
          {" "}
          Written by {post["author"]} - {post["published_date"]}
        </h3>
      </div>
    </div>
  );
};

export default Post;
