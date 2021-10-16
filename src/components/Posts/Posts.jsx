import React from "react";
import Post from "../Post/Post";

const Posts = ({ posts }) => {
  return posts.map((post) => <Post key={post["_id"]} post={post} />);
};

export default Posts;
