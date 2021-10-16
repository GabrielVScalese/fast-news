import React, { useState } from "react";
import Button from "../Button/Button";

import "./SearchPost.css";

const SearchPost = ({ handlePostsClick }) => {
  const [inputData, setInputData] = useState();

  const handleKeyDown = (e) => {
    if (e.key == "Enter") handleSearchPost();
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSearchPost = () => {
    handlePostsClick(inputData);
  };

  return (
    <>
      <input
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        className="search-input"
        placeholder="Type a keyword for search"
        s
      />
      <Button onClick={handleSearchPost}>Search</Button>
    </>
  );
};

export default SearchPost;
