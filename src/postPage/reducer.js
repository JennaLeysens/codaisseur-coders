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
    default: {
      return state;
    }
  }
}
