const initialState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "ADD_POSTS": {
      return { ...state, posts: [...state.posts, ...payload], loading: false };
    }
    case "loading":
      return { ...state, loading: payload };

    default: {
      return state;
    }
  }
}
