const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function loginPageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    default: {
      return state;
    }
  }
}
