import React from "react";
import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest
      .get(userId ? "/posts?userId=" + userId : "/posts")
      .then((res) => {
        return res.data;
      })
  );

  console.log(data);
  return (
    <div className="posts">
      {error
        ? "Somthing went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
