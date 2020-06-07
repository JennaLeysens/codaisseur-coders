const initialState = {
  me: null,
  accessToken: null,
};

export default function loginPageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "SAVE_PROFILE": {
      return {
        ...state,
        me: { ...payload.profile },
        accessToken: payload.token,
      };
    }
    case "auth/logout": {
      return {
        ...state,
        me: null,
        accessToken: null,
      };
    }
    default: {
      return state;
    }
  }
}
