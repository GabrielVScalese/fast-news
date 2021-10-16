import React from "react";

import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <img
        src={
          post["media"]
            ? post["media"]
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7k8MTHeSHJWclB9GAS7f2eA5WhwZMLxVoDQ8xPQ6YM6w4_5d6GrnSh3g0509Ptl2cHo&usqp=CAU"
        }
      />
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
          Written by {post["author"] ? post["author"] : "nameless"} -{" "}
          {post["published_date"]}
        </h3>
      </div>
    </div>
  );
};

export default Post;
