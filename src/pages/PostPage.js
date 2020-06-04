import React from "react";
import { useParams } from "react-router-dom";

export default function PostsFeed() {
  const { id } = useParams();
  return (
    <div>
      <h1>Posts</h1>
      {id}
    </div>
  );
}
