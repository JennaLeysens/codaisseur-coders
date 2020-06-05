const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "loading":
      return { ...state, loading: true };
    case "SHOW_POSTS": {
      console.log("payload", payload);
      return {
        ...state,
        post: { ...payload.post },
        comments: [...payload.comments.rows],
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
