import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });
  console.log("data", data.posts);

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });

    const response = await axios.get(
      `${API_URL}/posts?offset=${data.posts.length}&limit=5`
    );
    // console.log("response", response.data.rows);

    const morePosts = response.data.rows;

    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
  }
  console.log("data", data.posts);

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {data.posts.map((post) => {
        return (
          <p>
            {post.title} {moment(post.createdAt).format("DD-MM-YYYY")}{" "}
            {post.tags.map((tag) => (
              <button>{tag.tag}</button>
            ))}
          </p>
        );
      })}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
      {data.loading ? (
        "Loading..."
      ) : (
        <button onClick={fetchNext5Posts}>Load more</button>
      )}
    </div>
  );
}
