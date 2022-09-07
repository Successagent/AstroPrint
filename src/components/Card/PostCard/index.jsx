import React, { useState } from "react";
import PostCardStyles from "./PostCard.module.css";

function PostCard() {
  return (
    <div className={PostCardStyles.container}>
      <div className={PostCardStyles.image}></div>
      <div className={PostCardStyles.details}></div>
      <div className={PostCardStyles.text}>
        <h3 className={PostCardStyles.title}>Printing & Press </h3>
        <p className={PostCardStyles.meta}>banner design</p>
        {/* TODO: Make a link */}
        Read More
      </div>
    </div>
  );
}

export default PostCard;
