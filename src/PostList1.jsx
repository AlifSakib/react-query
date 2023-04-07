import { useQuery } from "@tanstack/react-query";

import React from "react";
import { getPosts } from "./posts";

const PostList1 = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: (obj) => {
      console.log(obj);
      return getPosts();
    },
  });

  if (postQuery.status === "loading") return <div>Loading...</div>;
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }
  return (
    <div>
      <h1>Post List 1</h1>
      <ol>
        {postQuery.data.map((post) => {
          <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default PostList1;
