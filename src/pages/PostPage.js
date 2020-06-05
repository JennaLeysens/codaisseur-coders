import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, startLoadingPost } from "../postPage/actions";
import selectPostAndComments from "../postPage/selector";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function PostsFeed() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(selectPostAndComments);
  const loading = useSelector(startLoadingPost);
  console.log("data", posts);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  if (!posts.post) {
    return "Loading...";
  }

  return (
    <div>
      <h1>Posts</h1>

      <>
        <h1>{posts.post.title}</h1>
        <p className="meta">
          By <strong>{posts.post.developer.name}</strong> •
          {moment(posts.post.createdAt).format("DD-MM-YYYY")} •{" "}
          {posts.post.tags.map((tag, i) => (
            <button key={i}>{tag.tag}</button>
          ))}
        </p>

        <ReactMarkdown source={posts.post.content} />

        <h2>Comments</h2>
        <p>
          {posts.comments.map((comment) => {
            return (
              <div>
                {comment.text}
                <p>
                  By <strong>{comment.developer.name}</strong>{" "}
                  {moment(comment.createdAt).format("DD-MM-YYYY")}
                </p>
              </div>
            );
          })}
        </p>
      </>
    </div>
  );
}
