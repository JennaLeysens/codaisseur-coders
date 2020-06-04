import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { fetchNext5Posts } from "../feed/actions";
import { selectFeedPosts } from "../feed/selectFeedPosts";
import { selectFeedLoading } from "../feed/selectFeedLoading";

export default function PostsFeed() {
  const posts = useSelector(selectFeedPosts);
  const loading = useSelector(selectFeedLoading);
  console.log("loading?", loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {posts.map((post, i) => {
        return (
          <p key={i}>
            <strong>{post.title}</strong>{" "}
            {moment(post.createdAt).format("DD-MM-YYYY")}{" "}
            {post.tags.map((tag, i) => (
              <button key={i}>{tag.tag}</button>
            ))}
          </p>
        );
      })}
      {loading ? (
        "Loading..."
      ) : (
        <button onClick={(e) => dispatch(fetchNext5Posts)}>Load more</button>
      )}
    </div>
  );
}
