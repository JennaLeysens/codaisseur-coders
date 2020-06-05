import axios from "axios";
import { API_URL } from "../config";

export function startLoading(data) {
  return { type: "loading", payload: data };
}

export function postsFetched(data) {
  return { type: "ADD_POSTS", payload: data };
}

export async function fetchNext5Posts(dispatch, getState) {
  const count = getState().feed.posts.length;
  const response = await axios.get(`${API_URL}/posts?offset=${count}&limit=5`);
  dispatch(startLoading(true));
  dispatch(postsFetched(response.data.rows));
}
