import axios from "axios";
import { AUTH_URL } from "./config";

export function userLoggedIn(token, profile) {
  return { type: "SAVE_PROFILE", payload: { token, profile } };
}

// export function userLoggedOut(token, profile) {
//   return { type: "auth/logout", payload: { token, profile } };
// }

export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    const response = await axios.post(`${AUTH_URL}/login`, {
      email: email,
      password: password,
    });
    console.log("response", response.data.jwt);
    const profileResponse = await axios.get(`${AUTH_URL}/me`, {
      headers: {
        Authorization: `Bearer ${response.data.jwt}`,
      },
    });
    console.log("profile", profileResponse);
    console.log(email, password);
    dispatch(userLoggedIn(response.data.jwt, profileResponse.data));

    localStorage.setItem("token", response.data.jwt);
    console.log("storage", response.data.jwt);
    console.log("local", localStorage);
  };
}

export async function bootstrapLoginState(dispatch, getState) {
  const token = getState().auth.accessToken;
  const profile = getState().auth.me;
  if (localStorage.token) {
    console.log("here", profile);
    const profileResponseStay = await axios.get(`${AUTH_URL}/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    console.log(profileResponseStay);
    dispatch(userLoggedIn(token, profileResponseStay.data));
  }
}

export function logout(dispatch, getState) {
  dispatch({ type: "auth/logout" });
  localStorage.removeItem("token");
}
