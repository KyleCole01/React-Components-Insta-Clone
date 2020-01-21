//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log("PostPage Props:",props.data)
  let returnProps = props.data.map(element => {
    console.log("mappedElements:", element);
    return (
      <div className="posts-container-wrapper">
        {/* map through data here (Mapped through) */}
        <Post post={element} />
      </div>
    );
    
  });
  return returnProps;
};

export default PostsPage;

