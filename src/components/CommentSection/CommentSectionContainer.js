// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  // Props are postId and comments(an array)
  console.log("props in comment section:",props);
  const [comments,setComments] = useState(props.comments);
  let mappedComments = comments.map(function(element){
    console.log("commentSection Mapped element:", element)
    return (
      <div>
        {/* map through the comments data and return the Comment component (done ^) */}
        <Comment key={element.Comment} comment={element}/>
        
      </div>
    );
  })
  mappedComments.push(<CommentInput />);
  return mappedComments;

  
};

export default CommentSection;
